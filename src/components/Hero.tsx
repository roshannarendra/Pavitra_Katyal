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
      <p className="text-[28px] sm:text-[34px] font-extrabold text-white tracking-[-0.02em] leading-none">
        {count}
        {suffix}
      </p>
      <p className="text-[11px] sm:text-[12px] font-medium text-white/60 uppercase tracking-wide mt-1">
        {label}
      </p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#c81163] via-[#e01470] to-[#ff2070] flex flex-col overflow-hidden">
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute top-1/3 right-[8%] w-[420px] h-[420px] rounded-full bg-white/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <Navbar />

      <div className="relative z-20 flex-1 flex items-center max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-8 items-center w-full">
          {/* Left: copy */}
          <div>
            <div className="animate-fade-slide-up flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-white/80 uppercase tracking-[0.15em] mb-5 sm:mb-6">
              <Crown size={14} className="text-white" />
              World-Class Digital Collective
            </div>

            <h1
              className="animate-fade-slide-up font-extrabold uppercase text-white leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,8vw,5rem)]"
              style={{ animationDelay: '100ms' }}
            >
              Craft.
              <br />
              Disrupt.
              <br />
              Dominate.
            </h1>

            <p
              className="animate-fade-slide-up text-[14px] sm:text-[16px] leading-[1.6] text-white/75 max-w-md mt-5 sm:mt-6"
              style={{ animationDelay: '180ms' }}
            >
              We build fierce digital experiences that don&rsquo;t just turn
              heads — <span className="text-white font-medium">they dominate.</span>
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
                <PartnerIcon className="w-6 h-6 fill-current text-white shrink-0" />
                <div className="text-[10px] sm:text-[11px] font-semibold text-white/70 uppercase tracking-wide leading-[1.4]">
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

          {/* Right: cursor-tracked character (video-scrub gaze) */}
          <div className="relative flex items-end justify-center lg:justify-end min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]">
            <div
              aria-hidden
              className="absolute bottom-8 w-[70%] max-w-[320px] aspect-square rounded-full bg-white/15 blur-[70px]"
            />
            <div
              aria-hidden
              className="absolute bottom-0 w-[55%] max-w-[260px] h-10 sm:h-14 rounded-[50%] bg-black/30 blur-md"
            />
            <div className="relative w-[260px] sm:w-[340px] lg:w-[400px] aspect-square rounded-full overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.35)] border-4 border-white/20">
              <CharacterGaze className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
