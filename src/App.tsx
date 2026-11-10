import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import Band from './components/Band'
import Work from './components/Work'
import Stats from './components/Stats'
import Services from './components/Services'
import Process from './components/Process'
import Toolkit from './components/Toolkit'
import About from './components/About'
import Approach from './components/Approach'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Contact from './components/Contact'
import ShowreelModal from './components/ShowreelModal'
import { lockScroll } from './lib/motion'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [showreel, setShowreel] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, anchors: true })
    ;(window as unknown as { lenis?: Lenis }).lenis = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!loaded) {
      lockScroll(true)
      return
    }
    lockScroll(false)
  }, [loaded])

  const handleLoaded = useCallback(() => setLoaded(true), [])
  const openShowreel = useCallback(() => setShowreel(true), [])
  const closeShowreel = useCallback(() => setShowreel(false), [])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#work">
        Skip to work
      </a>

      <AnimatePresence>{!loaded && <Preloader onDone={handleLoaded} />}</AnimatePresence>

      <Cursor />
      <div className="grain" aria-hidden="true" />

      <Header onShowreel={openShowreel} />

      <main id="main">
        <Hero ready={loaded} onShowreel={openShowreel} />
        <Band />
        <Work onShowreel={openShowreel} />
        <Stats />
        <Services />
        <Process />
        <Toolkit />
        <About />
        <Approach />
        <Pricing />
        <Faq />
        <Contact />
      </main>

      <AnimatePresence>
        {showreel && <ShowreelModal onClose={closeShowreel} />}
      </AnimatePresence>
    </MotionConfig>
  )
}
