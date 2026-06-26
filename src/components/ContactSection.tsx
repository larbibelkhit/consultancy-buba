import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionLabel from './SectionLabel'

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'new-opening', label: 'New Restaurant Opening' },
  { value: 'menu', label: 'Menu Design & Development' },
  { value: 'staffing', label: 'Back-Office & Staffing' },
  { value: 'full', label: 'Full Consultancy Engagement' },
  { value: 'other', label: 'Other' },
]

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const fieldClass = 'w-full bg-panel border border-border text-ivory font-light placeholder:text-sm-muted focus:outline-none focus:border-green py-2.5 px-3 text-[0.9rem] rounded-xs'
  const labelClass = 'block text-[0.6rem] tracking-[0.25em] uppercase text-sm-muted mb-2'

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-8 md:px-16 py-20 md:py-32"
    >
      <SectionLabel>Contact</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 mt-4">
        <div>
          <h2 className="font-heading font-light text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.15] text-ivory">
            Let&apos;s discuss
            <br />
            your <em className="italic text-green">project.</em>
          </h2>

          <div className="w-10 h-px bg-green opacity-40 my-10" />

          <p className="text-[0.95rem] text-muted leading-[1.9] font-light max-w-[420px]">
            Buba Consultancy works with a select number of clients at any one time to
            ensure every engagement receives the attention it deserves. If you are
            planning a new restaurant or looking to strengthen an existing operation,
            Bubker would be glad to hear from you.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            {[
              { label: 'Based in',  value: 'London, United Kingdom' },
              { label: 'Operating', value: 'Globally' },
              { label: 'Enquiries', value: 'info@bubaconsultancy.com' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-sm-muted mb-1">
                  {item.label}
                </p>
                <p className="font-heading text-[1.1rem] font-normal text-ivory">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name *</label>
              <input required placeholder="Your name" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Email Address *</label>
              <input required type="email" placeholder="your@email.com" className={fieldClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Company / Project Name</label>
            <input placeholder="Restaurant or group name" className={fieldClass} />
          </div>

          <div ref={dropdownRef} className="relative">
            <label className={labelClass}>Area of Interest</label>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`${fieldClass} flex items-center justify-between text-left ${
                selectedService ? '' : 'text-sm-muted'
              }`}
            >
              <span>{serviceOptions.find(o => o.value === selectedService)?.label ?? 'Select a service'}</span>
              <ChevronDown
                size={16}
                className={`text-sm-muted transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-panel border border-border rounded-xs shadow-lg overflow-hidden">
                {serviceOptions.filter(o => o.value !== '').map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => { setSelectedService(o.value); setDropdownOpen(false) }}
                    className={`w-full text-left px-3 py-2.5 text-[0.85rem] font-light transition-colors duration-150 ${
                      selectedService === o.value
                        ? 'text-green bg-green/8'
                        : 'text-muted hover:text-ivory hover:bg-border/50'
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className={labelClass}>Tell us about your project</label>
            <textarea
              rows={5}
              placeholder="A brief overview of your project, timeline, and what you're looking to achieve…"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            className={`self-start px-10 py-3 text-[0.85rem] rounded-xs tracking-[0.2em] font-medium transition-colors duration-200 ${
              sent
                ? 'bg-green/80 text-black cursor-default'
                : 'bg-green text-black hover:bg-green-light'
            }`}
          >
            {sent ? 'Message Sent ✓' : 'Send Enquiry →'}
          </button>
        </form>
      </div>
    </section>
  )
}
