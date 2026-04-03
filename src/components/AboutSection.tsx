import SectionLabel from './SectionLabel'

const stats = [
  { number: '25+', label: 'Years in the industry' },
  { number: '10+', label: 'Countries worked in' },
  { number: '20+', label: 'Restaurant openings' },
  { number: '3',   label: 'Continents' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-8 md:px-16 py-20 md:py-32 bg-deep border-t border-b border-border"
    >
      <SectionLabel>About</SectionLabel>

      <h2 className="font-heading font-light text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.15] text-ivory">
        A career built across
        <br />
        <em className="italic text-green">continents and kitchens.</em>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-14 items-start">
        {/* Copy */}
        <div>
          <p className="font-heading text-[1.1rem] md:text-[1.35rem] font-normal text-ivory leading-[1.6] mb-6">
            Bubker Belkhit is one of the most experienced restaurant operators working
            in hospitality consultancy today — a chef who has spent more than two
            decades not just cooking, but building.
          </p>
          <p className="text-[0.95rem] text-muted leading-[1.9] font-light mb-6">
            Born in Morocco and shaped by the demanding standards of London&apos;s fine
            dining circuit, Bubker rose to become Global Executive Head Chef for the
            acclaimed Sumosan group, overseeing the opening and operation of
            restaurants across Europe, the Middle East, and beyond.
          </p>
          <p className="text-[0.95rem] text-muted leading-[1.9] font-light mb-6">
            His expertise spans every dimension of the restaurant: from the creative
            architecture of a menu to the invisible infrastructure that keeps a
            kitchen — and a business — running at the highest level. He now brings
            that knowledge to bear through Buba Consultancy.
          </p>
          <div className="w-10 h-px bg-green opacity-40 my-10" />
          <p className="text-[0.95rem] text-muted leading-[1.9] font-light">
            Bubker&apos;s approach is hands-on and uncompromising. He believes that a
            restaurant&apos;s lasting success is built in the details — in the quality of
            the team assembled, the coherence of the menu, and the operational rigour
            behind every service.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-panel px-8 py-9">
              <p className="font-heading text-[3.2rem] font-light text-green leading-none">
                {s.number}
              </p>
              <p className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
