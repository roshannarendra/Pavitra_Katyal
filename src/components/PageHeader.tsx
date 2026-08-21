import { Link } from 'react-router-dom'
import Navbar from './Navbar'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative bg-[#EFEFEF] overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#F26522]/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 w-[360px] h-[360px] rounded-full bg-gray-900/10 blur-[100px]"
      />

      <Navbar />

      <div className="relative max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 lg:pb-24">
        <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-5 sm:mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">{eyebrow}</span>
        </div>

        <h1 className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] max-w-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 sm:mt-8 text-[15px] sm:text-[17px] leading-[1.6] text-gray-600 max-w-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
