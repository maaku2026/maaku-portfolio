import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { navLinks } from '../lib/data'
import { EASE, lockScroll } from '../lib/motion'

type Props = { onShowreel: () => void }

export default function Header({ onShowreel }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    lockScroll(open)
    return () => lockScroll(false)
  }, [open])

  return (
    <>
      <header className={`site-head${scrolled ? ' is-scrolled' : ''}`}>
        <div className="site-head__inner">
          <a className="brand" href="#top" aria-label="Maaku — home">
            <span className="brand__mark">M</span>
            <span className="brand__text">
              <strong>Maaku</strong>
              <span>DTC video editor</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((link, index) => (
              <a key={link.href} className="site-nav__link" href={link.href}>
                <span className="site-nav__index">{String(index + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-head__actions">
            <span className="availability">
              <i className="dot dot--pulse" />
              Open for projects
            </span>
            <button type="button" className="btn btn--small" onClick={onShowreel}>
              <span>Playlist</span>
              <span className="btn__arrow">↗</span>
            </button>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className={open ? 'is-open' : ''} />
              <span className={open ? 'is-open' : ''} />
            </button>
          </div>
        </div>
        <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mobile-menu__inner">
              <span className="eyebrow">Navigation</span>
              <nav aria-label="Mobile">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="mobile-menu__link display"
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.06, duration: 0.7, ease: EASE }}
                  >
                    <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mobile-menu__foot">
                <button
                  type="button"
                  className="mobile-menu__reel"
                  onClick={() => {
                    setOpen(false)
                    onShowreel()
                  }}
                >
                  <span className="play-icon" aria-hidden="true" />
                  Watch playlist
                  <span className="mono">14 videos</span>
                </button>
                <a href="mailto:chelvin.marc@gmail.com">chelvin.marc@gmail.com</a>
                <span className="mono">METRO MANILA · 14.5995° N</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
