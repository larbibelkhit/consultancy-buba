export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <div className="w-[30px] h-px bg-gold opacity-60 shrink-0" />
      <span className="text-[0.6rem] tracking-[0.35em] uppercase text-gold">
        {children}
      </span>
    </div>
  )
}
