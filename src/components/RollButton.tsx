import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const EASE = 'ease-[cubic-bezier(0.25,0.1,0.25,1)]'

const VARIANTS = {
  dark: {
    base: 'bg-gray-900 hover:bg-gray-800 text-white',
    circle: 'bg-white',
    arrow: 'text-gray-900',
  },
  orange: {
    base: 'bg-[#F26522] hover:bg-[#e05a1a] text-white',
    circle: 'bg-white',
    arrow: 'text-[#F26522]',
  },
  light: {
    base: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200',
    circle: 'bg-gray-900',
    arrow: 'text-white',
  },
} as const

type RollButtonProps = {
  to: string
  label: string
  variant?: keyof typeof VARIANTS
  size?: 'sm' | 'md'
  external?: boolean
  className?: string
}

export default function RollButton({
  to,
  label,
  variant = 'dark',
  size = 'md',
  external = false,
  className = '',
}: RollButtonProps) {
  const v = VARIANTS[variant]
  const textSize = size === 'sm' ? 'text-[13px]' : 'text-[13px] sm:text-[14px]'
  const circleSize = size === 'sm' ? 'w-6 h-6' : 'w-7 h-7 sm:w-8 sm:h-8'
  const arrowSize = size === 'sm' ? 13 : 14
  const classes = `group inline-flex items-center gap-3 ${v.base} ${textSize} font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 ${className}`

  const inner = (
    <>
      <span className="block h-[20px] overflow-hidden">
        <span
          className={`flex flex-col transition-transform duration-500 ${EASE} group-hover:-translate-y-1/2`}
        >
          <span className="h-[20px] leading-[20px]">{label}</span>
          <span className="h-[20px] leading-[20px]">{label}</span>
        </span>
      </span>
      <span
        className={`flex items-center justify-center ${circleSize} ${v.circle} rounded-full transition-transform duration-500 ${EASE} group-hover:-rotate-45 shrink-0`}
      >
        <ArrowRight size={arrowSize} className={v.arrow} />
      </span>
    </>
  )

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {inner}
    </Link>
  )
}
