import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE } from '../lib/motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

/** Fades and lifts content into view once. */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.95, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

type LineRevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

/** Masks a line of text and slides it up from below. */
export function LineReveal({ children, delay = 0, className }: LineRevealProps) {
  return (
    <span className={className ? `line-mask ${className}` : 'line-mask'}>
      <motion.span
        className="line-mask__inner"
        initial={{ y: '115%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, margin: '-6% 0px' }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

type MarqueeProps = {
  children: ReactNode
  speed?: number
  reverse?: boolean
  className?: string
}

/** Infinite horizontal ticker; content is duplicated for a seamless loop. */
export function Marquee({ children, speed = 30, reverse = false, className }: MarqueeProps) {
  return (
    <div className={className ? `marquee ${className}` : 'marquee'}>
      <div
        className="marquee__track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
