import Hero from '../components/Hero'
import About from '../components/About'
import RippleEffect from '../components/RippleEffect'
import BrandStrategySession from '../components/BrandStrategySession'
import CaseStudies from '../components/CaseStudies'
import WhyChooseUs from '../components/WhyChooseUs'
import BrandsWorkedWith from '../components/BrandsWorkedWith'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BrandStrategySession />
      <RippleEffect />
      <CaseStudies />
      <WhyChooseUs />
      <BrandsWorkedWith />
      <Testimonials />
    </>
  )
}
