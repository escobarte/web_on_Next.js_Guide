import { ReactNode } from 'react'

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <div className="w-8 h-[3px] bg-accent" />
      <span className="text-accent text-sm font-semibold uppercase tracking-widest font-body">{children}</span>
    </div>
  )
}
