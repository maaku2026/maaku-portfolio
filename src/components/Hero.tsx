import { motion, useScroll, useTransform } from 'framer-motion'
import { FilmStill } from './Media'
import { EASE } from '../lib/motion'
import { projects, thumbUrl } from '../lib/data'

const HERO_SOURCES = [projects[8], projects[10], projects[3], projects[6]].map((project) =>
  thumbUrl(project.videoId),
)

const LINE = {
  hidden: { y: '112%' },
  show: { y: '0%', transition: { duration: 1.25, ease: EASE } },
}

type Props = { ready: boolean; onShowreel: () => void }

export default function Hero({ ready, onShowreel }: Props) {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 900], [0, 150])
  const fade = useTransform(scrollY, [0, 600], [1, 0.25])

  return (
    <section className="hero" id="top">
      <motion.div className="hero__bg" style={{ y: bgY, opacity: fade }}>
        <FilmStill
          sources={HERO_SOURCES}
          className="hero__still"
          interval={4200}
          width={2000}
          height={1200}
        />
        <div className="hero__veil" />
        <div className="hero__scan" aria-hidden="true" />
        <div className="hero__grid-lines" aria-hidden="true" />
      </motion.div>

      <div className="hero__hud container" aria-hidden="true">
        <span className="hud mono">REC ● SLATE 001</span>
        <span className="hud mono">9:16 / 16:9 / 4K</span>
      </div>

      <div className="hero__content container">
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <span className="eyebrow">
            <i className="dot" />
            DTC freelance video editor
          </span>
          <span className="mono hero__loc">Metro Manila · Working worldwide</span>
        </motion.div>

        <h1 className="hero__title display">
          <span className="hero__line">
            <motion.span
              className="hero__line-inner"
              variants={LINE}
              initial="hidden"
              animate={ready ? 'show' : 'hidden'}
              transition={{ delay: 0.65 }}
            >
              I edit videos
            </motion.span>
          </span>
          <span className="hero__line hero__line--indent">
            <motion.span
              className="hero__line-inner"
              variants={LINE}
              initial="hidden"
              animate={ready ? 'show' : 'hidden'}
              transition={{ delay: 0.78 }}
            >
              people finish
            </motion.span>
          </span>
          <span className="hero__line">
            <motion.span
              className="hero__line-inner"
              variants={LINE}
              initial="hidden"
              animate={ready ? 'show' : 'hidden'}
              transition={{ delay: 0.91 }}
            >
              watching<span className="accent">.</span>
            </motion.span>
          </span>
        </h1>

        <div className="hero__foot">
          <motion.p
            className="hero__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: EASE, delay: 1.05 }}
          >
            Three years editing short-form ads and long-form videos for DTC brands. Hook-first
            cuts for the feed, patient cuts for YouTube — every ratio your media buyer needs.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: EASE, delay: 1.15 }}
          >
            <button type="button" className="btn btn--solid" onClick={onShowreel}>
              <span className="play-icon" aria-hidden="true" />
              <span>Watch the work</span>
              <span className="btn__meta mono">14 videos</span>
            </button>
            <a className="btn btn--ghost" href="#work">
              <span>See the work</span>
              <span className="btn__arrow">↓</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__rail"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <span className="hero__rail-item">
            <i className="dot dot--pulse" />
            Booking new projects
          </span>
          <a className="hero__scroll" href="#work">
            <span className="mono">Scroll to explore</span>
            <span className="hero__scroll-line" aria-hidden="true" />
          </a>
          <span className="hero__rail-item mono">3+ yrs · 14 cuts · 6 formats</span>
        </motion.div>
      </div>

      <span className="hero__edge hero__edge--l mono" aria-hidden="true">
        SHORT + LONG
      </span>
      <span className="hero__edge hero__edge--r mono" aria-hidden="true">
        14.5995° N — 120.9842° E
      </span>
    </section>
  )
}
