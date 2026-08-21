import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Clock, Menu, X } from 'lucide-react'
import RollButton from './RollButton'

const EASE = 'ease-[cubic-bezier(0.25,0.1,0.25,1)]'

const NAV_LINKS = [
  { label: 'Projects', to: '/projects' },
  { label: 'Studio', to: '/studio' },
  { label: 'Journal', to: '/journal' },
  { label: 'Connect', to: '/connect' },
]

function getLondonTime() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

export default function Navbar() {
  const [time, setTime] = useState(getLondonTime)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setTime(getLondonTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative z-20 max-w-[1440px] w-full mx-auto p-2 sm:p-3">
      <nav className="flex items-center justify-between bg-white rounded-full p-[5px]">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <img src="/kroshet-logo.png" alt="The Kroshet" className="h-7 sm:h-8 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-[14px] transition-colors duration-300 ${
                    isActive
                      ? 'text-[#F26522] font-medium'
                      : 'text-gray-900 hover:text-gray-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <span className="hidden lg:block text-[13px] text-gray-600">
            Taking on projects for Q1 2026
          </span>
          <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
            <Clock size={14} />
            <span>{time} in London</span>
          </div>
          <RollButton to="/connect" label="Book a strategy call" variant="dark" size="sm" />
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-2.5 text-[13px] font-medium"
        >
          <Menu size={16} />
          Menu
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ${EASE} ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute inset-x-0 bottom-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ${EASE} ${
            menuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1.5 text-[13px] text-gray-600 bg-gray-100 rounded-full px-3 py-1.5">
              <Clock size={14} />
              <span>{time} in London</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 bg-gray-900 text-white rounded-full"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-1 mb-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[28px] sm:text-[32px] font-medium py-1 ${
                    isActive ? 'text-[#F26522]' : 'text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div onClick={() => setMenuOpen(false)}>
            <RollButton to="/connect" label="Start a project" variant="dark" className="w-full justify-between" />
          </div>
        </div>
      </div>
    </div>
  )
}
