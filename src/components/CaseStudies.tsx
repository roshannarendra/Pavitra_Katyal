import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import RollButton from './RollButton'

const NARRATIV_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4'
const LUMINAR_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4'

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

export default function CaseStudies() {
  return (
    <section className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold">
            4
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Featured client work
          </div>
        </div>

        <h2 className="px-5 sm:px-8 lg:px-12 font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 text-[clamp(1.5rem,4vw,3.2rem)] mb-10 sm:mb-14 lg:mb-16">
          Our projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          {/* Card 1: Narrativ */}
          <Link to="/projects">
            <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] group cursor-pointer">
              <video
                src={NARRATIV_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full flex items-center gap-2 px-2.5 overflow-hidden transition-all duration-300 ease-in-out">
                <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Learn more
                </span>
                <LinkIcon className="shrink-0 text-gray-900 -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out ml-auto" />
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
              Winner of Site of the Month 2025 - an interactive 3D showcase
              driving record engagement
            </p>
            <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Narrativ
            </p>
          </Link>

          {/* Card 2: Luminar */}
          <Link to="/projects">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] group cursor-pointer">
              <video
                src={LUMINAR_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[168px] bg-gray-900 rounded-full flex items-center gap-2 px-2.5 overflow-hidden transition-all duration-300 ease-in-out">
                <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  View case study
                </span>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out ml-auto"
                />
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
              Transforming a dated platform into a conversion-focused brand
              experience
            </p>
            <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Luminar
            </p>
          </Link>
        </div>

        <div className="px-5 sm:px-8 lg:px-12 mt-10 sm:mt-14">
          <RollButton to="/projects" label="See all projects" variant="dark" />
        </div>
      </div>
    </section>
  )
}
