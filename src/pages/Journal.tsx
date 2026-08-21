import { Sparkles, Target, TrendingUp } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const CATEGORIES = {
  Strategy: { icon: Target, gradient: 'from-gray-900 via-gray-800 to-black' },
  Design: { icon: Sparkles, gradient: 'from-[#F26522] via-[#d9541a] to-gray-900' },
  Growth: { icon: TrendingUp, gradient: 'from-gray-700 via-gray-800 to-gray-900' },
} as const

const ARTICLES: {
  title: string
  excerpt: string
  category: keyof typeof CATEGORIES
  date: string
  readTime: string
}[] = [
  {
    title: 'Why Most Rebrands Fail Before They Launch',
    excerpt:
      'The visual identity is rarely the problem. Most rebrands stall because nobody agreed on the strategy underneath it.',
    category: 'Strategy',
    date: 'Aug 4, 2026',
    readTime: '6 min read',
  },
  {
    title: 'The Anatomy of a Conversion-Focused Homepage',
    excerpt:
      'A breakdown of the structural decisions that separate homepages that convert from ones that just look nice.',
    category: 'Design',
    date: 'Jul 22, 2026',
    readTime: '8 min read',
  },
  {
    title: 'Brand Clarity Is a Growth Lever, Not a Nice-to-Have',
    excerpt:
      'How a sharper narrative shows up directly in your funnel — from cold traffic to closed deals.',
    category: 'Strategy',
    date: 'Jul 9, 2026',
    readTime: '5 min read',
  },
  {
    title: 'What We Learned Launching 12 Sites in 12 Months',
    excerpt:
      'Patterns, mistakes and repeatable systems from a year of shipping brand-led websites at pace.',
    category: 'Design',
    date: 'Jun 18, 2026',
    readTime: '7 min read',
  },
  {
    title: 'Positioning: The Most Skipped Step in Web Design',
    excerpt:
      'Most briefs jump straight to wireframes. Here is what gets lost when positioning gets skipped.',
    category: 'Strategy',
    date: 'Jun 2, 2026',
    readTime: '6 min read',
  },
  {
    title: 'How to Brief a Design Agency (So You Get What You Actually Want)',
    excerpt:
      'A practical guide to writing a brief that gets you sharper proposals and fewer rounds of revisions.',
    category: 'Growth',
    date: 'May 20, 2026',
    readTime: '5 min read',
  },
]

export default function Journal() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Insights on brand, strategy and design"
        description="Field notes from inside the studio — what we're learning, testing and building for clients."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {ARTICLES.map((article) => {
              const { icon: Icon, gradient } = CATEGORIES[article.category]
              return (
                <article key={article.title} className="group cursor-pointer">
                  <div
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1.5`}
                  >
                    <Icon size={32} className="text-white/25" />
                    <span className="absolute top-4 left-4 text-[11px] font-medium text-white bg-white/15 rounded-full px-3 py-1">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-gray-500 mt-4">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-gray-900 mt-2 mb-2 leading-[1.3] group-hover:text-[#F26522] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.6]">
                    {article.excerpt}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
