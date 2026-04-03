import SectionLabel from './SectionLabel'

const services = [
  {
    number: '01',
    title: 'Restaurant Setup & New Openings',
    desc: 'End-to-end consultancy for new restaurant projects, from initial concept definition through to opening night and beyond.',
    items: [
      'Concept development & positioning',
      'Kitchen design & equipment specification',
      'Pre-opening operational planning',
      'Launch strategy & soft opening management',
      'Supplier sourcing & procurement',
    ],
  },
  {
    number: '02',
    title: 'Menu Design & Development',
    desc: 'Menus that reflect a clear culinary identity, balance commercial performance with creativity, and evolve with your business.',
    items: [
      'Signature menu creation',
      'Seasonal menu planning',
      'Food cost analysis & GP optimisation',
      'Kitchen workflow design',
      'Tasting & sign-off process management',
    ],
  },
  {
    number: '03',
    title: 'Back-Office & Staffing',
    desc: 'The team and the systems behind a successful restaurant are as important as what happens on the plate. Bubker builds both.',
    items: [
      'Senior kitchen hire & team structuring',
      'Front-of-house staffing strategy',
      'Training programmes & SOPs',
      'Operational systems & reporting',
      'Ongoing operational review',
    ],
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-20 px-8 md:px-16 py-20 md:py-32"
    >
      <SectionLabel>Services</SectionLabel>

      <h2 className="font-heading font-light text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.15] text-ivory">
        What <em className="italic text-green">Buba Consultancy</em>
        <br />brings to your project.
      </h2>

      <p className="mt-6 mb-16 max-w-[600px] text-[0.95rem] text-muted leading-[1.9] font-light">
        Every engagement is bespoke. Whether you are opening your first restaurant
        or scaling a group, the consultancy is structured around your specific
        needs — from pre-launch strategy through to operational handover.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {services.map((s) => (
          <div
            key={s.number}
            className="bg-deep px-8 md:px-10 py-10 md:py-14 relative overflow-hidden group hover:bg-panel transition-colors duration-300"
          >
            {/* Green left bar */}
            <div className="absolute top-0 left-0 w-0.5 h-0 bg-green group-hover:h-full transition-[height] duration-400" />

            <span className="block font-heading text-[4rem] font-light text-border leading-none mb-8 group-hover:text-sm-muted transition-colors duration-300">
              {s.number}
            </span>

            <h3 className="font-heading text-[1.5rem] font-normal text-ivory leading-[1.2] mb-5">
              {s.title}
            </h3>

            <p className="text-[0.85rem] text-muted leading-[1.8] font-light">
              {s.desc}
            </p>

            <ul className="mt-6">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[0.8rem] text-sm-muted py-[10px] border-b border-border tracking-[0.03em]"
                >
                  <span className="block w-1 h-1 rounded-full bg-green opacity-60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
