import WhatsAppIcon from './icons/WhatsAppIcon'

// TODO: replace with the real business WhatsApp number (E.164, no leading "+")
const PHONE_NUMBER = '15551234567'
const PREFILLED_MESSAGE = "Hi The Kroshet, I'd like to talk about a project."

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
    >
      <span className="whatsapp-ping-ring absolute inset-0 rounded-full bg-[#25D366]" />
      <WhatsAppIcon className="relative w-7 h-7 text-white" />
    </a>
  )
}
