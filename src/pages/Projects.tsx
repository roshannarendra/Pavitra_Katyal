import { ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import RollButton from '../components/RollButton'

const NARRATIV_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4'
const LUMINAR_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4'

const FEATURED = [
  {
    name: 'Narrativ',
    tag: 'Web Design · Interactive 3D',
    result: 'Winner of Site of the Month 2025 — an interactive 3D showcase driving record engagement',
    video: NARRATIV_VIDEO,
    aspect: 'aspect-[329/246]',
    bg: 'bg-[#1a1d2e]',
  },
  {
    name: 'Luminar',
    tag: 'Brand & Web · Conversion',
    result: 'Transforming a dated platform into a conversion-focused brand experience',
    video: LUMINAR_VIDEO,
    aspect: 'aspect-square',
    bg: 'bg-[#6b6b6b]',
  },
]

const MORE_PROJECTS = [
  {
    name: 'Solace',
    tag: 'Rebrand · Fintech',
    result: '2.4x increase in demo requests after brand relaunch',
    gradient: 'from-gray-900 via-gray-800 to-black',
  },
  {
    name: 'Ember & Co',
    tag: 'Web Design · Hospitality',
    result: 'Bookings up 44% within the first two months',
    gradient: 'from-[#F26522] via-[#d9541a] to-gray-900',
  },
  {
    name: 'Northline',
    tag: 'Brand Strategy · Logistics',
    result: 'Repositioned for enterprise, doubling average deal size',
    gradient: 'from-gray-700 via-gray-800 to-gray-900',
  },
  {
    name: 'Cobalt',
    tag: 'E-commerce · Retail',
    result: 'Checkout redesign lifted conversion rate by 19%',
    gradient: 'from-gray-900 via-[#7a3113] to-[#F26522]',
  },
]

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work that moves the needle"
        description="A closer look at the strategy, design and engineering behind our favourite client partnerships."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-6 sm:mb-8">
            Featured work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {FEATURED.map((project) => (
              <div key={project.name}>
                <div
                  className={`relative ${project.aspect} rounded-2xl overflow-hidden ${project.bg} group cursor-pointer`}
                >
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                  {project.result}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900">
                    {project.name}
                  </p>
                  <span className="text-[12px] text-gray-500">{project.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-6 sm:mb-8">
            More projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {MORE_PROJECTS.map((project) => (
              <div
                key={project.name}
                className={`group relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[12px] font-medium text-white/70 uppercase tracking-wide">
                    {project.tag}
                  </span>
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <ArrowUpRight size={16} className="text-white" />
                  </span>
                </div>
                <div>
                  <p className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em] text-white mb-2">
                    {project.name}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-white/70 leading-[1.5] max-w-xs">
                    {project.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center">
            <RollButton to="/connect" label="Start your project" variant="orange" />
          </div>
        </div>
      </section>
    </>
  )
}
