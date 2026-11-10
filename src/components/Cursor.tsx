import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/** Lagging ring + dot cursor for fine pointers. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.45 })
  const ringY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.45 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const move = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      const target = event.target as HTMLElement | null
      setActive(Boolean(target?.closest('a, button, [data-cursor]')))
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: active ? 1.8 : 1, opacity: active ? 1 : 0.5 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x, y }}
        animate={{ scale: active ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
