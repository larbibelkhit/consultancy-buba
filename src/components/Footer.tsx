import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex items-center">
          <Image
            src="/buba-consultancy-light-logo.svg"
            alt="Buba Consultancy"
            width={196}
            height={32}
            className="dark:hidden"
          />
          <Image
            src="/buba-consultancy-dark-logo.svg"
            alt="Buba Consultancy"
            width={196}
            height={32}
            className="hidden dark:block"
          />
        </div>
        <p className="text-[0.65rem] tracking-[0.1em] text-sm-muted">
          &copy; {new Date().getFullYear()} Buba Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
