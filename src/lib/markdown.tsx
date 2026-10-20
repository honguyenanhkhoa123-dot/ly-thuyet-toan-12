import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import type { PluggableList } from 'unified'
import { rehypeBreaks, rehypeEquationShell, rehypeSafeTex } from './texSafe'

/**
 * remark-math coi `$$...$$` nằm lẫn trong đoạn văn là math INLINE. Khi nhiều
 * khối `$$` đứng liền nhau, nó ghép sai cặp delimiter và KaTeX in ra LaTeX thô.
 * Chuẩn hoá: gộp math nhiều dòng về một dòng và tách mỗi khối thành đoạn riêng.
 */
function normalizeDisplayMath(md: string): string {
  const segs: Array<{ math: boolean; value: string }> = []
  let i = 0

  while (i < md.length) {
    const open = md.indexOf('$$', i)
    if (open < 0) {
      segs.push({ math: false, value: md.slice(i) })
      break
    }
    const close = md.indexOf('$$', open + 2)
    if (close < 0) {
      segs.push({ math: false, value: md.slice(i) })
      break
    }
    segs.push({ math: false, value: md.slice(i, open) })
    segs.push({ math: true, value: md.slice(open + 2, close).replace(/\s*\n\s*/g, ' ').trim() })
    i = close + 2
  }

  return segs
    .map(s => (s.math ? `\n\n$$\n${s.value}\n$$\n\n` : s.value.replace(/\n+$/, '')))
    .join('')
}

function withoutNode<T extends object>(p: T): Omit<T, 'node'> {
  const { node: _node, ...rest } = p as T & { node?: unknown }
  return rest
}

const mdComponents = {
  h2: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-9 mb-3 text-[length:var(--text-xl)] first:mt-0" {...withoutNode(p)} />
  ),
  h3: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-7 mb-2.5 text-[length:var(--text-lg)] first:mt-0" {...withoutNode(p)} />
  ),
  h4: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="mt-6 mb-2 text-[1.06rem] font-semibold first:mt-0" {...withoutNode(p)} />
  ),
  p: (p: React.HTMLAttributes<HTMLParagraphElement>) => <p {...withoutNode(p)} />,
  ul: (p: React.HTMLAttributes<HTMLUListElement>) => <ul {...withoutNode(p)} />,
  ol: (p: React.HTMLAttributes<HTMLOListElement>) => <ol {...withoutNode(p)} />,
  li: (p: React.LiHTMLAttributes<HTMLLIElement>) => <li {...withoutNode(p)} />,
  blockquote: (p: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote {...withoutNode(p)} />,
  table: (p: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="table-wrap">
      <table {...withoutNode(p)} />
    </div>
  ),
  thead: (p: React.HTMLAttributes<HTMLTableSectionElement>) => <thead {...withoutNode(p)} />,
  tbody: (p: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody {...withoutNode(p)} />,
  tr: (p: React.HTMLAttributes<HTMLTableRowElement>) => <tr {...withoutNode(p)} />,
  th: (p: React.ThHTMLAttributes<HTMLTableCellElement>) => <th {...withoutNode(p)} />,
  td: (p: React.TdHTMLAttributes<HTMLTableCellElement>) => <td {...withoutNode(p)} />,
  hr: () => <hr />,
  a: (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noreferrer" {...withoutNode(p)} />
  ),
  code: ({ children, ...rest }: React.HTMLAttributes<HTMLElement>) => (
    <code {...withoutNode(rest)}>{children}</code>
  ),
}

const remarkPlugins = [remarkMath, remarkGfm]
const rehypePlugins: PluggableList = [
  rehypeBreaks,
  rehypeSafeTex,
  [rehypeKatex, { strict: 'ignore', throwOnError: false }],
  rehypeEquationShell,
]

export function RichText({ text, className = '' }: { text: string; className?: string }) {
  const normalized = useMemo(() => normalizeDisplayMath(text), [text])

  return (
    <div className={`theory-prose ${className}`}>
      <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={mdComponents}>
        {normalized}
      </ReactMarkdown>
    </div>
  )
}

const inlineComponents = {
  ...mdComponents,
  p: ({ children }: { children?: React.ReactNode }) => <span>{children}</span>,
}

const INLINE_DISALLOWED = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'table', 'blockquote', 'hr', 'pre']

export function RichInline({ text }: { text: string }) {
  const normalized = useMemo(() => normalizeDisplayMath(text), [text])
  return (
    <ReactMarkdown
      remarkPlugins={remarkPlugins}
      rehypePlugins={rehypePlugins}
      components={inlineComponents}
      disallowedElements={INLINE_DISALLOWED}
      unwrapDisallowed
    >
      {normalized}
    </ReactMarkdown>
  )
}
