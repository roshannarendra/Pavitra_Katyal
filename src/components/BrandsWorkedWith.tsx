const BRANDS = [
  'NOVA & CO',
  'VESTA GROUP',
  'ARBOR',
  'KESTREL',
  'PRISM STUDIOS',
  'ORBIT & CO',
  'HALCYON',
  'MERIDIAN',
]

export default function BrandsWorkedWith() {
  const doubled = [...BRANDS, ...BRANDS]

  return (
    <section className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-center text-[12px] sm:text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-8 sm:mb-10">
          Brands we have worked with
        </p>

        <div className="edge-fade-x">
          <div className="flex items-center gap-12 sm:gap-16 w-max marquee-row">
            {doubled.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-[18px] sm:text-[22px] font-bold tracking-wide text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-default whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
