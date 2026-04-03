'use client'

import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

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
      className={`fixed top-0 left-0 right-0 z-[100] px-8 md:px-16 py-7 transition-[background] duration-400 ${
        scrolled ? 'bg-black/97' : ''
      }`}
      style={
        scrolled
          ? undefined
          : { background: 'linear-gradient(to bottom, var(--color-black) 0%, transparent 100%)' }
      }
    >
      <div className="flex justify-between items-center">
        <a
          href="#hero"
          className="font-heading text-sm font-normal tracking-[0.15em] uppercase text-green hover:text-green-light transition-colors duration-200"
        >
          Buba Consultancy
        </a>

        <div className="flex items-center gap-10">
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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
