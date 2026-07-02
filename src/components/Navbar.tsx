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
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4">
        <div
          className={`flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between w-full max-w-5xl px-5 py-3 rounded-xs border transition-all duration-500 ${
            scrolled
              ? 'bg-black/80 backdrop-blur-xl border-green/40 shadow-lg'
              : 'bg-black/40 backdrop-blur-md border-transparent'
          }`}
        >
          {/* Left: logo */}
          <a href="#hero" className="flex items-center shrink-0">
            <img
              src="/buba-consultancy-light-logo.svg"
              alt="Buba Consultancy"
              width={180}
              height={32}
              className="dark:hidden"
            />
            <img
              src="/buba-consultancy-dark-logo.svg"
              alt="Buba Consultancy"
              width={180}
              height={32}
              className="hidden dark:block"
            />
          </a>

          {/* Center: nav links */}
          <div className="hidden md:flex items-center gap-1 justify-self-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1.5 text-[0.82rem] tracking-wide text-muted hover:text-ivory rounded-xs hover:bg-panel/60 transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right: theme toggle + mobile hamburger */}
          <div className="flex items-center justify-end gap-3">
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-muted transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-muted transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-muted transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[99] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-400 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl tracking-wide text-muted hover:text-green transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
