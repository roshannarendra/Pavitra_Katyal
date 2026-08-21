type IconProps = { className?: string }

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.2" cy="8" r="1.2" />
      <rect x="6.2" y="10.5" width="2" height="7.3" />
      <path d="M11 10.5h2v1.1c.55-.8 1.5-1.3 2.6-1.3 2 0 3.2 1.3 3.2 3.9v4.6h-2v-4.2c0-1.3-.5-2.1-1.6-2.1-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v4.3h-2z" />
    </svg>
  )
}

export function XIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8-9.2L1 2h7l4.9 6.1zm-1.2 18h1.9L6.4 4H4.4z" />
    </svg>
  )
}
