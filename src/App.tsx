import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Studio from './pages/Studio'
import Journal from './pages/Journal'
import Connect from './pages/Connect'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
