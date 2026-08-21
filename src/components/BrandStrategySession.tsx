import RollButton from './RollButton'

const WORKSHOP_IMAGE =
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
const HANDSHAKE_IMAGE =
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80'
const DESK_IMAGE =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'
const TEAM_IMAGE =
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80'

export default function BrandStrategySession() {
  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold">
            2
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Free 45-Minute Session
          </div>
        </div>

        <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 text-[clamp(1.5rem,4vw,3.2rem)] max-w-2xl mb-5 sm:mb-6">
            Brand Strategy Session
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-gray-600 max-w-xl">
            Before we design a single pixel, we get clear on the strategy
            behind it. Book a free session with our team to uncover where
            your brand is leaking opportunity — and the moves that will fix
            it.
          </p>
        </div>

        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-[auto_auto] gap-4 sm:gap-5">
          {/* Tall left card: workshop image + copy + CTA below */}
          <div className="sm:col-start-1 sm:row-start-1 sm:row-span-2 flex flex-col gap-5 sm:gap-6">
            <div className="bg-[#F0F0F0] rounded-2xl overflow-hidden aspect-[4/5] sm:flex-1">
              <img
                src={WORKSHOP_IMAGE}
                alt="Strategy workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-5">
                Guided by senior strategists to uncover real opportunity and
                deliver measurable growth.
              </p>
              <RollButton to="/connect" label="Book a Session" variant="dark" />
            </div>
          </div>

          {/* Handshake card */}
          <div className="sm:col-start-2 sm:row-start-1 bg-[#F0F0F0] rounded-2xl overflow-hidden flex flex-col">
            <div className="aspect-[4/3]">
              <img
                src={HANDSHAKE_IMAGE}
                alt="Trusted partnership handshake"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[14px] sm:text-[15px] leading-[1.5] text-gray-600 p-5 sm:p-6">
              <span className="text-gray-900 font-medium">
                Trusted by ambitious brands
              </span>{' '}
              that expect senior thinking from day one.
            </p>
          </div>

          {/* Stat card */}
          <div className="sm:col-start-3 sm:row-start-1 bg-[#F0F0F0] rounded-2xl overflow-hidden flex flex-col">
            <div className="aspect-[4/3]">
              <img
                src={DESK_IMAGE}
                alt="Strategy planning desk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-[30px] sm:text-[36px] font-medium tracking-[-0.02em] text-gray-900">
                12+
              </p>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1">
                Years of combined strategic experience
              </p>
            </div>
          </div>

          {/* Wide bottom card: copy + team image */}
          <div className="sm:col-start-2 sm:col-span-2 sm:row-start-2 bg-[#F0F0F0] rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch">
            <div className="flex-1 p-6 sm:p-8 flex items-center">
              <p className="text-[16px] sm:text-[18px] leading-[1.6] text-gray-600">
                <span className="text-gray-900 font-medium">
                  Elevates your positioning
                </span>{' '}
                and transforms your brand into the category leader your
                customers already believe you can be.
              </p>
            </div>
            <div className="sm:w-[45%] aspect-[4/3] sm:aspect-auto">
              <img
                src={TEAM_IMAGE}
                alt="Team collaborating on brand strategy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
