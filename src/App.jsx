import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import 'lenis/dist/lenis.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Clients from './components/Clients'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      autoRaf: false,
    })

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    }
  }, [])

  useGSAP(
    () => {
      // Write your GSAP animations here
    },
    { scope: containerRef }
  )

  return (
    <main ref={containerRef} className="app">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Clients />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App
