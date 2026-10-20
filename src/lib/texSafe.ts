import type { Element, ElementContent, Root, Text } from 'hast'

const ACCENTED =
  /[\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0-\u1EF9]/g

/**
 * KaTeX không có metric cho chữ Việt: nó tự tách "ế" thành "e" + dấu, làm dấu
 * lệch chỗ và chữ bị giãn. `\char"HEX{}` vẽ nguyên con chữ nên dấu nằm đúng.
 * `{}` cuối để chữ hex tiếp theo không bị nuốt vào mã.
 */
export function safeTex(src: string): string {
  return src.replace(ACCENTED, ch => `\\char"${ch.codePointAt(0)!.toString(16).toUpperCase()}{}`)
}

function isMathElement(node: Element): boolean {
  const cls = node.properties?.className
  return Array.isArray(cls) && (cls.includes('math-inline') || cls.includes('math-display'))
}

/** Chuẩn hoá LaTeX trước khi rehype-katex render. */
export function rehypeSafeTex() {
  return (tree: Root) => {
    const visit = (node: Root | Element) => {
      if (node.type === 'element' && isMathElement(node)) {
        node.children = node.children.map(child =>
          child.type === 'text' ? ({ ...child, value: safeTex(child.value) } as Text) : child,
        )
        return
      }
      for (const child of node.children) {
        if (child.type === 'element') visit(child)
      }
    }
    visit(tree)
  }
}

/**
 * `<br>` trong dữ liệu nguồn là HTML thô; react-markdown không parse HTML nên
 * nó hiện ra thành chữ "<br>". Đổi text/raw node chứa `<br>` thành thẻ thật.
 */
export function rehypeBreaks() {
  return (tree: Root) => {
    const visit = (node: Root | Element) => {
      if (node.type === 'element' && isMathElement(node)) return

      const children: ElementContent[] = []
      const pushBreaks = (count: number) => {
        for (let k = 0; k < count; k++) {
          children.push({ type: 'element', tagName: 'br', properties: {}, children: [] })
        }
      }

      for (const child of node.children) {
        if (child.type === 'element') {
          visit(child)
          children.push(child)
          continue
        }

        const raw = child as unknown as { type: string; value?: string }
        if (raw.type === 'raw' && typeof raw.value === 'string') {
          if (/^\s*(?:<br\s*\/?>\s*)+$/i.test(raw.value)) {
            pushBreaks((raw.value.match(/<br\s*\/?>/gi) || []).length)
            continue
          }
          children.push(child as ElementContent)
          continue
        }

        if (child.type === 'text' && /<br\s*\/?>/i.test(child.value)) {
          const parts = child.value.split(/<br\s*\/?>/i)
          parts.forEach((part, idx) => {
            if (idx > 0) pushBreaks(1)
            if (part) children.push({ type: 'text', value: part })
          })
          continue
        }

        children.push(child as ElementContent)
      }
      node.children = children
    }
    visit(tree)
  }
}

/**
 * Bọc mỗi công thức khối trong khung cuộn ngang riêng, để công thức dài hơn
 * màn hình điện thoại trượt ngang thay vì bị cắt hoặc xuống dòng giữa chừng.
 */
export function rehypeEquationShell() {
  return (tree: Root) => {
    const visit = (node: Root | Element) => {
      const children = node.children as ElementContent[] | undefined
      if (!children) return

      const next: ElementContent[] = []
      for (const child of children) {
        const isDisplayMath =
          child.type === 'element' &&
          Array.isArray(child.properties?.className) &&
          (child.properties.className as string[]).includes('katex-display')

        if (isDisplayMath) {
          next.push({
            type: 'element',
            tagName: 'div',
            properties: { className: ['eq-box'] },
            children: [
              {
                type: 'element',
                tagName: 'div',
                properties: { className: ['eq-scroll'] },
                children: [child as Element],
              },
            ],
          })
          continue
        }

        if (child.type === 'element') visit(child)
        next.push(child)
      }

      node.children = next as typeof node.children
    }

    visit(tree)
  }
}
