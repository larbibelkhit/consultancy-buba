export default function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-heading text-[0.85rem] tracking-[0.15em] uppercase text-muted">
          Buba Consultancy &nbsp;·&nbsp; Bubker Belkhit
        </p>
        <p className="text-[0.65rem] tracking-[0.1em] text-sm-muted">
          &copy; {new Date().getFullYear()} Buba Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
