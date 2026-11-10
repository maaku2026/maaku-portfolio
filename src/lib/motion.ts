export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export const stagger = (amount = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: amount, delayChildren: delay } },
})

export function lockScroll(locked: boolean) {
  const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis
  if (locked) {
    lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
  } else {
    lenis?.start()
    document.documentElement.style.overflow = ''
  }
}
