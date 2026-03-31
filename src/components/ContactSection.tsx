'use client'

import { useState } from 'react'
import SectionLabel from './SectionLabel'

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const fieldClass = 'w-full bg-panel border border-border text-ivory font-light placeholder:text-sm-muted focus:outline-none focus:border-gold py-2.5 px-3 text-[0.9rem]'
  const labelClass = 'block text-[0.6rem] tracking-[0.25em] uppercase text-sm-muted mb-2'

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-8 md:px-16 py-20 md:py-32"
    >
      <SectionLabel>Contact</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 mt-4">
        {/* Left */}
        <div>
          <h2 className="font-heading font-light text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.15] text-ivory">
            Let&apos;s discuss
            <br />
            your <em className="italic text-gold">project.</em>
          </h2>

          <div className="w-10 h-px bg-gold opacity-40 my-10" />

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

        {/* Form */}
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

          <div>
            <label className={labelClass}>Area of Interest</label>
            <select className={`${fieldClass} cursor-pointer`}>
              <option value="">Select a service</option>
              <option value="new-opening">New Restaurant Opening</option>
              <option value="menu">Menu Design &amp; Development</option>
              <option value="staffing">Back-Office &amp; Staffing</option>
              <option value="full">Full Consultancy Engagement</option>
              <option value="other">Other</option>
            </select>
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
            className={`self-start px-10 py-3 text-[0.7rem] tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
              sent
                ? 'bg-[#4a7c59] text-ivory cursor-default'
                : 'bg-gold text-black hover:bg-gold-light'
            }`}
          >
            {sent ? 'Message Sent ✓' : 'Send Enquiry →'}
          </button>
        </form>
      </div>
    </section>
  )
}
