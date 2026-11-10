import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { EASE_IN_OUT } from '../lib/motion'

type Props = { onDone: () => void }

/** Boot-style loading screen with a count-up and curtain exit. */
export default function Preloader({ onDone }: Props) {
  const [count, setCount] = useState(0)
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  useEffect(() => {
    let frame = 0
    let timeout = 0
    const duration = 1700
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      setCount(Math.round(100 * (1 - Math.pow(1 - progress, 2.2))))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        timeout = window.setTimeout(() => doneRef.current(), 320)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
    }
  }, [])

  return (
    <motion.div
      className="preloader"
      exit={{ y: '-100%' }}
      transition={{ duration: 1.05, ease: EASE_IN_OUT }}
    >
      <div className="preloader__grid" aria-hidden="true" />
      <div className="preloader__inner">
        <div className="preloader__top">
          <span className="mono preloader__brand">MAAKU / EDIT</span>
          <span className="mono preloader__meta">14 CUTS / SELECTED WORK</span>
        </div>

        <div className="preloader__center">
          <span className="eyebrow">
            <i className="dot" />
            Loading sequence
          </span>
          <span className="mono preloader__status">
            BUILDING TIMELINE<span className="preloader__dots" />
          </span>
        </div>

        <div className="preloader__bottom">
          <div className="preloader__bar">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ ease: 'linear', duration: 0.2 }}
            />
          </div>
          <span className="preloader__count display">
            {String(count).padStart(3, '0')}
          </span>
        </div>
      </div>
      <div className="preloader__perfs" aria-hidden="true" />
    </motion.div>
  )
}
