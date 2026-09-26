import { Link } from 'react-router-dom'
import { ArrowUpRight, Crown } from 'lucide-react'
import Navbar from './Navbar'
import PartnerIcon from './PartnerIcon'
import CharacterGaze from './CharacterGaze'
import { useCountUp } from '../hooks/useCountUp'

const STATS = [
  { value: 250, suffix: '+', label: 'Brands Transformed' },
  { value: 95, suffix: '%', label: 'Client Retention' },
  { value: 10, suffix: '+', label: 'Years in the Game' },
]

function StatBlock({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const count = useCountUp(value, true, 1600)
  return (
    <div>
      <p className="text-[28px] sm:text-[34px] font-extrabold text-gray-900 tracking-[-0.02em] leading-none">
        {count}
        {suffix}
      </p>
      <p className="text-[11px] sm:text-[12px] font-medium text-gray-500 uppercase tracking-wide mt-1">
        {label}
      </p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#dfe4f2]">
      <CharacterGaze className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#dfe4f2] via-[#dfe4f2]/75 to-transparent sm:via-[45%] sm:to-[62%]"
      />

      <Navbar />

      <div className="relative z-20 flex-1 flex items-center max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="max-w-sm sm:max-w-md">
          <div className="animate-fade-slide-up flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-gray-900 uppercase tracking-[0.15em] mb-5 sm:mb-6">
            <Crown size={14} className="text-[#ff2070]" />
            World-Class Digital Collective
          </div>

          <h1
            className="animate-fade-slide-up font-extrabold uppercase text-gray-900 leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,8vw,5rem)]"
            style={{ animationDelay: '100ms' }}
          >
            Craft.
            <br />
            Disrupt.
            <br />
            Dominate.
          </h1>

          <p
            className="animate-fade-slide-up text-[14px] sm:text-[16px] leading-[1.6] text-gray-600 max-w-md mt-5 sm:mt-6"
            style={{ animationDelay: '180ms' }}
          >
            We build fierce digital experiences that don&rsquo;t just turn
            heads — <span className="text-gray-900 font-medium">they dominate.</span>
          </p>

          <div
            className="animate-fade-slide-up flex flex-wrap items-center gap-4 sm:gap-5 mt-8 sm:mt-10"
            style={{ animationDelay: '260ms' }}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-[12px] sm:text-[13px] font-semibold uppercase tracking-wide rounded-lg px-5 py-3.5 transition-colors duration-300"
            >
              See Our Work
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="flex items-center gap-2.5">
              <PartnerIcon className="w-6 h-6 fill-current text-[#ff2070] shrink-0" />
              <div className="text-[10px] sm:text-[11px] font-semibold text-gray-700 uppercase tracking-wide leading-[1.4]">
                Certified
                <br />
                Brand Studio
              </div>
            </div>
          </div>

          <div
            className="animate-fade-slide-up flex flex-wrap items-center gap-8 sm:gap-12 mt-10 sm:mt-14"
            style={{ animationDelay: '340ms' }}
          >
            {STATS.map((stat) => (
              <StatBlock key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
