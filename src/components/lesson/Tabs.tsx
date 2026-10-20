export interface TabDef {
  id: string
  label: string
  count?: number
}

export function Tabs({ tabs, active, onChange }: { tabs: TabDef[]; active: string; onChange: (id: string) => void }) {
  return (
    <div
      role="tablist"
      aria-label="Nội dung bài học"
      className="scrollbar-none -mx-4 flex gap-1 overflow-x-auto border-b border-[var(--rule)] px-4 sm:mx-0 sm:px-0"
      onKeyDown={e => {
        const i = tabs.findIndex(t => t.id === active)
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          onChange(tabs[(i + 1) % tabs.length].id)
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          onChange(tabs[(i - 1 + tabs.length) % tabs.length].id)
        }
      }}
    >
      {tabs.map(tab => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={`relative shrink-0 whitespace-nowrap px-2.5 py-3 text-[0.8rem] font-medium transition-colors sm:px-3.5 sm:text-[0.84rem] ${
              isActive ? 'text-[var(--blue-deep)]' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            {tab.label}
            {typeof tab.count === 'number' && (
              <span className={`num ml-1.5 hidden text-[0.7rem] sm:inline ${isActive ? 'text-[var(--blue)]' : 'text-[var(--ink-faint)]'}`}>
                {tab.count}
              </span>
            )}
            {isActive && (
              <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-[var(--blue)]" aria-hidden="true" />
            )}
          </button>
        )
      })}
    </div>
  )
}
