import SectionLabel from './SectionLabel'

const locations = [
  { city: 'London, United Kingdom',  detail: 'Est. 2002' },
  { city: 'Moscow, Russia',          detail: 'Est. 1996' },
  { city: 'Courchevel, France',      detail: 'Six Senses Residences' },
  { city: 'Montenegro',              detail: 'Dukley Hotel & Resort' },
  { city: 'Berlin, Germany',         detail: 'KaDeWe Berlin' },
  { city: 'Riyadh, Saudi Arabia',    detail: 'Est. 2022' },
  { city: 'Bahrain',                 detail: 'Est. 2024' },
  { city: 'Athens, Greece',          detail: 'Est. 2025' },
  { city: 'Crete, Greece',           detail: 'Elounda Crete' },
  { city: 'Nicosia, Cyprus',         detail: 'Est. 2026' },
]

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="scroll-mt-20 px-8 md:px-16 py-20 md:py-32 bg-deep border-t border-b border-border"
    >
      <SectionLabel>Case Study</SectionLabel>

      {/* Header row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-16">
        <h2 className="font-heading font-light text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.15] text-ivory">
          A partnership
          <br />
          built on <em className="italic text-green">trust.</em>
        </h2>

        <div>
          <p className="text-[0.85rem] font-normal tracking-[0.2em] uppercase text-green mb-3">
            Sumosan &nbsp;·&nbsp; 25+ Years
          </p>
          <p className="text-[0.85rem] text-muted leading-[1.7] max-w-[400px] font-light">
            From a single London address to a globally recognised Japanese restaurant
            group — Bubker has been the culinary architect behind every opening.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Narrative */}
        <div>
          <p className="font-heading text-[1.1rem] md:text-[1.25rem] font-normal text-ivory leading-[1.6] mb-6">
            In 2002, Bubker joined the Sumosan group at their celebrated Albemarle
            Street address in London — the restaurant that would become the foundation
            for one of the world&apos;s most recognised contemporary Japanese brands.
          </p>
          <p className="text-[0.95rem] text-muted leading-[1.9] font-light mb-6">
            Over more than two decades, he has served as Executive Head Chef and Global
            Executive Head Chef, leading the development of the culinary programme
            across each new territory the group entered. His role extended far beyond
            the kitchen: overseeing the operational setup of new venues, building and
            training local teams, developing location-specific menus, and ensuring
            consistency across a portfolio spanning multiple continents.
          </p>
          <p className="text-[0.95rem] text-muted leading-[1.9] font-light">
            The relationship is a testament to what sustained, deep consultancy looks
            like — not a brief engagement, but a genuine long-term partnership that has
            shaped the identity of an entire hospitality brand.
          </p>
        </div>

        {/* Location table */}
        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-sm-muted mb-4">
            Locations opened or operated
          </p>
          <div className="flex flex-col gap-px bg-border border border-border">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="flex justify-between items-center gap-5 bg-panel px-7 py-5 transition-all duration-200 hover:bg-green/6 hover:shadow-[inset_2px_0_0] hover:shadow-green/70 cursor-default"
              >
                <span className="font-heading text-[1.05rem] font-normal text-ivory">
                  {loc.city}
                </span>
                {loc.detail && (
                  <span className="text-[0.65rem] tracking-[0.2em] text-sm-muted whitespace-nowrap">
                    {loc.detail}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
