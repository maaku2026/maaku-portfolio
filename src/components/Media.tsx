import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { EASE } from '../lib/motion'
import { still } from '../lib/data'

type StillProps = {
  seeds?: string[]
  sources?: string[]
  className?: string
  playing?: boolean
  interval?: number
  width?: number
  height?: number
}

/** A still-image "clip" that cycles frames; can use generated or real thumbnails. */
export function FilmStill({
  seeds = [],
  sources,
  className = '',
  playing = true,
  interval = 2400,
  width = 1600,
  height = 900,
}: StillProps) {
  const [index, setIndex] = useState(0)
  const images =
    sources && sources.length > 0 ? sources : seeds.map((seed) => still(seed, width, height))

  useEffect(() => {
    if (!playing || images.length < 2) return
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % images.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [playing, interval, images.length])

  if (images.length === 0) return <div className={`still ${className}`} />

  const src = images[index % images.length]

  return (
    <div className={`still ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={src}
          className="still__layer"
          style={{ backgroundImage: `url(${src})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        />
      </AnimatePresence>
    </div>
  )
}

type CounterProps = {
  to: number
  suffix?: string
  duration?: number
}

export function Counter({ to, suffix = '', duration = 1800 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(to * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
