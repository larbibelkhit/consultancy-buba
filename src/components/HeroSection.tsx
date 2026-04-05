export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-8 md:px-16 pt-12 md:pt-20 pb-12 md:pb-28 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 40%, color-mix(in srgb, var(--color-green) 7%, transparent) 0%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, color-mix(in srgb, var(--color-green) 4%, transparent) 0%, transparent 50%)' }}
      />

      <p className="text-[0.65rem] tracking-[0.35em] uppercase text-green mb-3 md:mb-5">
        Restaurant Consultancy &nbsp;·&nbsp; London
      </p>

      <h1 className="font-heading font-light text-[2.2rem] md:text-[5rem] lg:text-[7rem] leading-[1.05] tracking-[-0.01em] text-ivory max-w-[800px]">
        Building restaurants
        <br />
        that <em className="italic text-green">endure.</em>
      </h1>

      <p className="mt-4 md:mt-10 max-w-[480px] text-[0.8rem] md:text-[0.9rem] text-muted leading-[1.6] md:leading-[1.8] font-light">
        Bubker Belkhit brings over two decades of global expertise to independent
        investors and restaurant groups looking to launch, refine, or expand their
        hospitality ventures.
      </p>

      <a
        href="#contact"
        className="mt-5 md:mt-12 inline-flex items-center gap-4 text-[0.8rem] tracking-[0.25em] text-green group hover:gap-6 transition-[gap] duration-300"
      >
        Begin a Conversation
        <span className="block w-10 h-px bg-green group-hover:w-14 transition-[width] duration-300" />
      </a>

      <p
        className="absolute bottom-10 right-16 hidden md:block text-[0.6rem] tracking-[0.3em] uppercase text-sm-muted"
        style={{ writingMode: 'vertical-rl' }}
      >
        Scroll
      </p>
    </section>
  )
}
