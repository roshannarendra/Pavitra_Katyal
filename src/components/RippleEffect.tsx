import { forwardRef, useEffect, useRef, useState } from 'react'
import { Compass, FileText, MessageSquare, Target } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'

const BARS = [
  { label: 'Campaign performance', value: 91 },
  { label: 'Client satisfaction', value: 84 },
  { label: 'Retention rate', value: 76 },
]

const STACK_TOP_BASE = 96
const STACK_TOP_STEP = 24

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

function Sparkles({ tint = '#F26522' }: { tint?: string }) {
  const dots = [
    { top: '20%', left: '15%', size: 3, delay: 0, duration: 3 },
    { top: '65%', left: '75%', size: 2, delay: 0.8, duration: 2.6 },
    { top: '40%', left: '55%', size: 2.5, delay: 1.5, duration: 3.4 },
  ]
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            background: tint,
            boxShadow: `0 0 6px 2px ${tint}66`,
            animation: `sparkle-float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

type ProjectCardProps = {
  visible: boolean
  delay: number
  stackIndex: number
  index: string
  tag: string
  value: number
  suffix: string
  label: string
  main: React.ReactNode
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(function ProjectCard(
  { visible, delay, stackIndex, index, tag, value, suffix, label, main },
  ref,
) {
  const count = useCountUp(value, visible)
  const formatted =
    value >= 1000 ? count.toLocaleString('en-US') : count.toString()

  return (
    <div
      className="sticky pb-5 sm:pb-6"
      style={{ top: `${STACK_TOP_BASE + stackIndex * STACK_TOP_STEP}px`, zIndex: 10 + stackIndex }}
    >
      {/* depth layer: scroll-driven scale/brightness, set imperatively via ref */}
      <div ref={ref} style={{ willChange: 'transform' }}>
        {/* entrance layer: Tailwind-driven reveal transform, independent of the depth layer */}
        <div
          className={`group relative bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-[opacity,transform] duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.97]'
          }`}
          style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
        >
        <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="text-[40px] sm:text-[56px] font-extrabold text-gray-100 leading-none select-none">
              {index}
            </span>
            <div>
              <p className="text-[11px] sm:text-[12px] font-medium text-gray-400 uppercase tracking-wide mb-1">
                {tag}
              </p>
              <p className="text-[22px] sm:text-[28px] font-semibold text-gray-900 tracking-[-0.01em]">
                {formatted}
                {suffix}
              </p>
            </div>
          </div>
          <span className="shrink-0 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-gray-500 border border-gray-200 rounded-full px-2.5 sm:px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] animate-pulse-ring" />
            Live Metric
          </span>
        </div>

        <div className="grid grid-cols-[38%_1fr] gap-3 sm:gap-4 h-[180px] sm:h-[220px]">
          <div className="grid grid-rows-2 gap-3 sm:gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#F26522]/10 via-[#F26522]/5 to-transparent">
              <Sparkles />
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-900/[0.04] via-gray-900/[0.02] to-transparent">
              <Sparkles tint="#111827" />
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-[#FAFAFA] flex items-center justify-center">
            <Sparkles />
            {main}
          </div>
        </div>

        <p className="text-[13px] sm:text-[15px] text-gray-600 leading-[1.5] mt-5 sm:mt-6">
          {label}
        </p>
        </div>
      </div>
    </div>
  )
})

const CARDS: Omit<ProjectCardProps, 'visible' | 'stackIndex' | 'ref'>[] = [
  {
    delay: 0,
    index: '01',
    tag: 'Conversion',
    value: 31,
    suffix: '%',
    label: 'Increase in enquiries and conversions across every strategy-led engagement.',
    main: (
      <div className="relative flex items-center justify-between w-[70%]">
        <div aria-hidden className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-px bg-gray-200" />
        <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-900">
          <Compass size={16} className="text-white" />
        </span>
        <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300" />
        <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300" />
        <span className="animate-pulse-ring relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#F26522] group-hover:scale-110 transition-transform duration-300">
          <Target size={16} className="text-white" />
        </span>
      </div>
    ),
  },
  {
    delay: 120,
    index: '02',
    tag: 'Growth',
    value: 121,
    suffix: '%',
    label: 'Growth in engaged database subscribers within the first two quarters.',
    main: (
      <div className="animate-gentle-float flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-4 py-3 -rotate-2 group-hover:rotate-0 transition-transform duration-300">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 shrink-0">
          <FileText size={15} className="text-white" />
        </span>
        <div className="flex flex-col gap-1.5">
          <span className="animate-shimmer h-2 w-24 rounded-full" />
          <span className="animate-shimmer h-2 w-16 rounded-full" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
    ),
  },
  {
    delay: 240,
    index: '03',
    tag: 'Engagement',
    value: 27,
    suffix: '%',
    label: 'Uplift in customer engagement across owned channels and campaigns.',
    main: (
      <div className="flex items-start gap-3 w-[75%]">
        <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white text-[11px] font-semibold shrink-0">
          EM
          <span className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-[#F26522] border-2 border-white animate-pulse-ring">
            <MessageSquare size={8} className="text-white" />
          </span>
        </span>
        <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl rounded-tl-sm px-3.5 py-2.5 flex flex-col gap-1.5">
          <span className="animate-shimmer h-2 w-full rounded-full" />
          <span className="animate-shimmer h-2 w-3/5 rounded-full" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    ),
  },
  {
    delay: 360,
    index: '04',
    tag: 'Reach',
    value: 380000,
    suffix: '+',
    label: 'New page views generated from strategic website launches this year.',
    main: (
      <StackBars />
    ),
  },
]

function StackBars() {
  const { ref, visible } = useInView<HTMLDivElement>(0.5)
  return (
    <div ref={ref} className="w-[80%] flex flex-col justify-center gap-3">
      {BARS.map((bar, i) => (
        <div key={bar.label} className="flex items-center gap-3">
          <span className="text-[11px] text-gray-500 w-28 shrink-0 truncate">{bar.label}</span>
          <span className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
            <span
              className="block h-full rounded-full bg-[#F26522] transition-all ease-out"
              style={{
                width: visible ? `${bar.value}%` : '0%',
                transitionDuration: '1200ms',
                transitionDelay: `${i * 150}ms`,
              }}
            />
          </span>
        </div>
      ))}
    </div>
  )
}

export default function RippleEffect() {
  const { ref, visible } = useInView<HTMLDivElement>()
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let frame: number

    function updateStack() {
      const cards = cardRefs.current
      for (let i = 0; i < cards.length; i++) {
        const el = cards[i]
        const next = cards[i + 1]
        if (!el) continue
        if (!next) {
          el.style.transform = ''
          el.style.filter = ''
          continue
        }
        const selfStickyTop = STACK_TOP_BASE + i * STACK_TOP_STEP
        const nextTop = next.getBoundingClientRect().top
        const raw = nextTop - selfStickyTop
        const progress = 1 - Math.min(Math.max(raw / 160, 0), 1)
        const scale = 1 - progress * 0.05
        const dim = 1 - progress * 0.3
        el.style.transform = `scale(${scale})`
        el.style.filter = `brightness(${dim})`
      }
      frame = requestAnimationFrame(updateStack)
    }

    frame = requestAnimationFrame(updateStack)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[900px] h-[900px] rounded-full border border-gray-900/[0.03]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[650px] h-[650px] rounded-full border border-gray-900/[0.04]" />
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold">
            3
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Our Impact
          </div>
        </div>

        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 text-[clamp(1.5rem,4vw,3.2rem)] max-w-4xl mb-6 sm:mb-8">
            Our ripple effect changes everything
          </h2>

          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-gray-600 max-w-2xl mb-10 sm:mb-14">
            When your brand is built on strategy rather than guesswork, it
            sharpens your messaging, aligns your team, builds trust with your
            audience, improves conversion and supports long-term growth.
          </p>

          <p className="text-[13px] sm:text-[14px] font-medium text-gray-900 tracking-wide uppercase mb-6 sm:mb-8">
            Our clients see results:
          </p>

          <div ref={ref} className="mb-10 sm:mb-14">
            {CARDS.map((card, i) => (
              <ProjectCard
                key={card.index}
                {...card}
                visible={visible}
                stackIndex={i}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
              />
            ))}
          </div>

          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 max-w-2xl border-l-2 border-[#F26522] pl-4 sm:pl-6">
            These aren&rsquo;t vanity metrics — they&rsquo;re the commercial
            outcomes that come from investing in brand clarity and strategic
            web design.
          </p>
        </div>
      </div>
    </section>
  )
}
