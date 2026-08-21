import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Quote, Star } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  initials: string
}

const ROW_1: Testimonial[] = [
  {
    quote:
      'The Kroshet didn’t just redesign our website — they rebuilt how we talk about ourselves. Enquiries went up within the first month.',
    name: 'Elena Marsh',
    role: 'Marketing Director',
    company: 'Vesta Group',
    initials: 'EM',
  },
  {
    quote:
      'The strategy work alone was worth the investment. Everything downstream — design, copy, web — just clicked into place.',
    name: 'Jordan Pike',
    role: 'Founder',
    company: 'Arbor',
    initials: 'JP',
  },
  {
    quote:
      'We’ve worked with a lot of agencies. The Kroshet is the first one that treated our brand like a business problem, not just a design brief.',
    name: 'Priya Nandan',
    role: 'CEO',
    company: 'Kestrel',
    initials: 'PN',
  },
]

const ROW_2: Testimonial[] = [
  {
    quote:
      'Fast, sharp, and refreshingly honest about what would and wouldn’t work for us.',
    name: 'Tom Alessi',
    role: 'Head of Growth',
    company: 'Prism Studios',
    initials: 'TA',
  },
  {
    quote:
      'Our new site alone generated more qualified leads in a quarter than the previous one did in a year.',
    name: 'Sana Okafor',
    role: 'COO',
    company: 'Nova & Co',
    initials: 'SO',
  },
  {
    quote:
      'They speak the language of both brand and business. That combination is rare.',
    name: 'Marcus Webb',
    role: 'Managing Director',
    company: 'Halcyon',
    initials: 'MW',
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * 10
    const rotateX = -(py - 0.5) * 10
    card.style.setProperty('--spot-x', `${px * 100}%`)
    card.style.setProperty('--spot-y', `${py * 100}%`)
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.015)`
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative w-[300px] sm:w-[380px] shrink-0 bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] hover:border-[#F26522]/30 will-change-transform"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(240px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(242,101,34,0.12), transparent 65%)',
        }}
      />

      <div className="relative flex items-center justify-between mb-5">
        <Quote
          size={22}
          className="text-[#F26522] fill-[#F26522]/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
        />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="text-[#F26522] fill-[#F26522] transition-transform duration-300 group-hover:scale-125"
            />
          ))}
        </div>
      </div>
      <p className="relative text-[14px] sm:text-[15px] leading-[1.6] text-gray-900 mb-6 min-h-[96px]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="relative flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white text-[12px] font-semibold shrink-0 transition-transform duration-300 group-hover:scale-110">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-[13px] sm:text-[14px] font-semibold text-gray-900">
            {testimonial.name}
          </p>
          <p className="text-[12px] sm:text-[13px] text-gray-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: Testimonial[]
  reverse?: boolean
}) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden edge-fade-x">
      <div
        className={`flex gap-5 w-max ${
          reverse ? 'marquee-row-reverse' : 'marquee-row'
        }`}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div
          className={`flex items-center gap-3 px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold">
            6
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Client Voices
          </div>
        </div>

        <h2
          className={`px-5 sm:px-8 lg:px-12 font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 text-[clamp(1.5rem,4vw,3.2rem)] mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 ease-out delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          What our clients say
        </h2>

        <div
          className={`flex flex-col gap-5 sm:gap-6 transition-all duration-700 ease-out delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <MarqueeRow items={ROW_1} />
          <MarqueeRow items={ROW_2} reverse />
        </div>
      </div>
    </section>
  )
}
