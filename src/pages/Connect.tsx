import { useState, type FormEvent } from 'react'
import { Check, Mail, MapPin, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import RollButton from '../components/RollButton'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'

const BUDGETS = ['Under $10k', '$10k – $30k', '$30k – $75k', '$75k+']

export default function Connect() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Connect"
        title="Let's build something that dominates its category"
        description="Tell us about your brand and where you want it to go — we'll come back with next steps within one business day."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
            <div className="bg-[#F5F5F5] rounded-2xl p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-16">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F26522] mb-6">
                    <Check size={22} className="text-white" />
                  </span>
                  <h2 className="text-[22px] sm:text-[26px] font-medium text-gray-900 mb-3">
                    Thanks — message received
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-sm">
                    We&rsquo;ll be in touch within one business day to talk
                    through your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-2">
                      <span className="text-[13px] font-medium text-gray-900">Name</span>
                      <input
                        required
                        type="text"
                        placeholder="Jane Cooper"
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[13px] font-medium text-gray-900">Email</span>
                      <input
                        required
                        type="email"
                        placeholder="jane@company.com"
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-[13px] font-medium text-gray-900">Company</span>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                    />
                  </label>

                  <div className="flex flex-col gap-2">
                    <span className="text-[13px] font-medium text-gray-900">Project budget</span>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((budget) => (
                        <label
                          key={budget}
                          className="has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900 flex items-center text-[13px] text-gray-700 border border-gray-200 bg-white rounded-full px-4 py-2 cursor-pointer transition-colors duration-300"
                        >
                          <input type="radio" name="budget" value={budget} className="sr-only" />
                          {budget}
                        </label>
                      ))}
                    </div>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-[13px] font-medium text-gray-900">
                      Tell us about your project
                    </span>
                    <textarea
                      required
                      rows={4}
                      placeholder="What are you looking to build?"
                      className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300 resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-between gap-3 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2 mt-2 transition-colors duration-300 w-fit"
                  >
                    Send message
                    <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                      <Check size={14} className="text-[#F26522]" />
                    </span>
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-gray-900 rounded-2xl p-6 sm:p-8">
                <p className="text-[13px] font-medium text-white/60 uppercase tracking-wide mb-5">
                  Contact details
                </p>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="mailto:hello@thekroshet.com"
                      className="flex items-center gap-3 text-[14px] text-gray-200 hover:text-white transition-colors duration-300"
                    >
                      <Mail size={16} className="shrink-0" />
                      hello@thekroshet.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+442079460192"
                      className="flex items-center gap-3 text-[14px] text-gray-200 hover:text-white transition-colors duration-300"
                    >
                      <Phone size={16} className="shrink-0" />
                      +44 20 7946 0192
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-[14px] text-gray-200">
                    <MapPin size={16} className="shrink-0" />
                    Shoreditch, London
                  </li>
                </ul>
              </div>

              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6 sm:p-8">
                <p className="text-[13px] font-medium text-gray-900 uppercase tracking-wide mb-2">
                  Prefer to chat?
                </p>
                <p className="text-[14px] text-gray-600 mb-5">
                  Message us directly on WhatsApp for a faster reply.
                </p>
                <RollButton
                  to="https://wa.me/15551234567"
                  label="Chat on WhatsApp"
                  variant="light"
                  external
                />
              </div>

              <div className="flex items-center gap-3 text-[13px] text-gray-500">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Usually replies within a few hours, Mon–Fri</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
