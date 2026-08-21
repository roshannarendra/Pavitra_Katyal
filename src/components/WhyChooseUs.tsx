import { Award, ShieldCheck, Target, TrendingUp, Users, Zap } from 'lucide-react'

const REASONS = [
  {
    icon: Target,
    title: 'Strategy-First Approach',
    description:
      'Every design decision is backed by research and commercial intent, not guesswork.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description:
      'Our clients see measurable growth in conversions, engagement and revenue.',
  },
  {
    icon: Users,
    title: 'Senior Team, Always',
    description:
      'You work directly with senior strategists and designers — no handoffs, no juniors learning on your budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description:
      'Brand systems and websites engineered for scale, not a one-off refresh.',
  },
  {
    icon: Zap,
    title: 'Fast, Focused Delivery',
    description:
      'A streamlined process that moves at the pace your business needs.',
  },
  {
    icon: Award,
    title: 'Award-Winning Craft',
    description: 'Recognised work that stands out in a crowded category.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold">
            5
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Why The Kroshet
          </div>
        </div>

        <h2 className="px-5 sm:px-8 lg:px-12 font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 text-[clamp(1.5rem,4vw,3.2rem)] mb-10 sm:mb-14 lg:mb-16">
          Why our clients choose{' '}
          <span className="text-[#F26522]">The Kroshet</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-5 sm:px-8 lg:px-12">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative border border-gray-200 hover:border-transparent rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]"
            >
              <div
                aria-hidden
                className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-[#F26522]/[0.06] scale-0 group-hover:scale-100 transition-transform duration-500"
              />
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-900 group-hover:bg-[#F26522] transition-colors duration-300 mb-5 sm:mb-6">
                <Icon size={18} className="text-white" />
              </div>
              <h3 className="relative text-[15px] sm:text-[16px] font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="relative text-[13px] sm:text-[14px] text-gray-600 leading-[1.6]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
