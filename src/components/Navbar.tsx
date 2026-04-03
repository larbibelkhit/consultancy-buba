'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#case-study' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-8 md:px-16 py-7 transition-[background] duration-400"
      style={{
        background: scrolled
          ? 'rgba(245,245,243,0.97)'
          : 'linear-gradient(to bottom, rgba(245,245,243,0.95) 0%, rgba(245,245,243,0) 100%)',
      }}
    >
      <div className="flex justify-between items-center">
        <a
          href="#hero"
          className="font-heading text-sm font-normal tracking-[0.15em] uppercase text-green hover:text-green-light transition-colors duration-200"
        >
          Buba Consultancy
        </a>

        <div className="hidden md:flex gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.65rem] tracking-[0.2em] uppercase text-muted hover:text-green transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
