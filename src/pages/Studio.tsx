import { Compass, Handshake, Sparkles, Target } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import RollButton from '../components/RollButton'

const VALUES = [
  {
    icon: Compass,
    title: 'Curiosity',
    description: 'We ask why before we ask what it should look like.',
  },
  {
    icon: Sparkles,
    title: 'Craft',
    description: 'Every pixel, word and interaction is considered on purpose.',
  },
  {
    icon: Handshake,
    title: 'Candor',
    description: "We'll tell you what you need to hear, not just what's easy to say.",
  },
  {
    icon: Target,
    title: 'Commercial Instinct',
    description: 'Great design that ignores the business behind it is just decoration.',
  },
]

const PROCESS = [
  { step: '01', title: 'Discover', description: 'We dig into your market, customers and competitors to find the real opportunity.' },
  { step: '02', title: 'Define', description: 'We shape a positioning and narrative your whole team can rally behind.' },
  { step: '03', title: 'Design', description: 'We translate strategy into a brand and website that actually converts.' },
  { step: '04', title: 'Deliver', description: 'We launch, measure and keep refining against the numbers that matter.' },
]

const TEAM = [
  { initials: 'MC', name: 'Maya Chen', role: 'Founder & Strategy Director' },
  { initials: 'LF', name: 'Leo Fischer', role: 'Creative Director' },
  { initials: 'PS', name: 'Priya Shah', role: 'Lead Designer' },
  { initials: 'OB', name: 'Owen Blake', role: 'Senior Developer' },
  { initials: 'NT', name: 'Nadia Torres', role: 'Brand Strategist' },
  { initials: 'SW', name: 'Sam Whitfield', role: 'Client Partner' },
]

export default function Studio() {
  return (
    <>
      <PageHeader
        eyebrow="Studio"
        title="The strategists and designers behind The Kroshet"
        description="We're a small, senior team that treats brand and business as the same conversation."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[20px] sm:text-[26px] lg:text-[32px] leading-[1.4] font-medium tracking-[-0.01em] text-gray-900 max-w-4xl">
            We started The Kroshet because most agencies treat brand and web as two
            separate projects.{' '}
            <span className="text-gray-400">
              We don&rsquo;t. Every engagement starts with strategy, so the
              design that follows actually earns its keep.
            </span>
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-6 sm:mb-8">
            What we believe
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-6 sm:p-7">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 mb-5">
                  <Icon size={17} className="text-white" />
                </div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.6]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-6 sm:mb-8">
            How we work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {PROCESS.map((item) => (
              <div key={item.step} className="relative">
                <div className="hidden sm:block h-px bg-gray-200 mb-6" />
                <span className="text-[13px] font-medium text-[#F26522] tracking-wide">
                  {item.step}
                </span>
                <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.6]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-6 sm:mb-8">
            The team
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-900 text-white text-[16px] sm:text-[18px] font-semibold mb-4">
                  {member.initials}
                </div>
                <p className="text-[14px] font-semibold text-gray-900">{member.name}</p>
                <p className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center">
          <h2 className="font-medium leading-[1.12] tracking-[-0.02em] text-white text-[clamp(1.5rem,4vw,3rem)] max-w-2xl mb-8">
            Like the way we think? Let&rsquo;s put it to work on your brand.
          </h2>
          <RollButton to="/connect" label="Work with us" variant="orange" />
        </div>
      </section>
    </>
  )
}
