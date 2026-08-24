import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { InstagramIcon, LinkedInIcon, XIcon } from './icons/SocialIcons'

const NAV_LINKS = [
  { label: 'Projects', to: '/projects' },
  { label: 'Studio', to: '/studio' },
  { label: 'Journal', to: '/journal' },
  { label: 'Connect', to: '/connect' },
]

const COMPANY_LINKS = [
  { label: 'About Us', to: '/studio' },
  { label: 'Terms & Conditions', to: '#' },
  { label: 'Privacy Policy', to: '#' },
]

const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service']

const SOCIALS = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { icon: XIcon, label: 'X', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-white pt-5 sm:pt-6">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.5fr] gap-4 sm:gap-5">
          {/* Left: dark brand panel */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[340px] lg:min-h-[440px] overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-24 -left-16 w-[280px] h-[280px] rounded-full bg-[#F26522]/20 blur-[110px]"
            />
            <div
              aria-hidden
              className="absolute -bottom-28 right-0 w-[240px] h-[240px] rounded-full bg-white/10 blur-[100px]"
            />

            <Link to="/" className="relative flex items-center bg-white rounded-xl px-3 py-2 w-fit">
              <img src={`${import.meta.env.BASE_URL}kroshet-logo.png`} alt="The Kroshet" className="h-7 w-auto" />
            </Link>

            <div className="relative">
              <p className="text-[22px] sm:text-[26px] font-medium text-white leading-[1.3] max-w-xs mb-8 sm:mb-10">
                Strategy-led creative,
                <br />
                powered by clarity.
              </p>
              <p className="text-[12px] font-medium text-gray-400 uppercase tracking-wide mb-3">
                Stay in touch!
              </p>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-[#F26522] hover:bg-[#F26522]/10 transition-colors duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: light panel */}
          <div className="relative bg-[#F5F5F5] rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-3 right-6 sm:right-10 lg:right-12 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#FF2070] to-[#c2135a] rotate-6 shadow-[0_12px_28px_rgba(255,32,112,0.35)] flex items-center justify-center"
            >
              <span className="text-[26px] sm:text-[30px] -rotate-6">🧶</span>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-8 mb-10 sm:mb-14 max-w-md">
              <div>
                <p className="text-[12px] font-medium text-gray-500 uppercase tracking-wide mb-4">
                  Navigation
                </p>
                <ul className="flex flex-col gap-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[12px] font-medium text-gray-500 uppercase tracking-wide mb-4">
                  Company
                </p>
                <ul className="flex flex-col gap-3">
                  {COMPANY_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-[13px] sm:text-[14px] text-gray-500">
                Brands move fast.
              </p>
              <p className="text-[18px] sm:text-[22px] font-medium text-gray-900 tracking-[-0.01em] mb-5">
                Stay ahead with The Kroshet.
              </p>

              {subscribed ? (
                <p className="text-[14px] font-medium text-[#F26522]">
                  You&rsquo;re on the list — thanks for subscribing.
                </p>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex w-full max-w-md items-center gap-2 bg-white border border-gray-200 rounded-full p-1.5 pl-5 focus-within:border-gray-400 transition-colors duration-300"
                >
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 min-w-0 bg-transparent text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group shrink-0 flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-[13px] font-medium rounded-full px-5 py-2.5 transition-colors duration-300"
                  >
                    Subscribe
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 sm:pt-8">
          <p className="text-[13px] text-gray-500">
            © 2026 The Kroshet. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
