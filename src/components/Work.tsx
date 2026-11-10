import { useCallback, useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import {
  projects,
  thumbUrl,
  watchUrl,
  embedUrl,
  workGroups,
  type Project,
  type WorkGroup,
} from '../lib/data'
import { EASE, lockScroll } from '../lib/motion'
import { LineReveal, Reveal } from './Reveal'

type Filter = 'All' | WorkGroup

type Props = { onShowreel: () => void }

export default function Work({ onShowreel }: Props) {
  const [filter, setFilter] = useState<Filter>('All')
  const [active, setActive] = useState<Project | null>(null)
  const [hovered, setHovered] = useState<Project | null>(null)
  const closeProject = useCallback(() => setActive(null), [])
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const previewX = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 })
  const previewY = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 })

  const visible = filter === 'All' ? projects : projects.filter((p) => p.group === filter)
  const filters: Filter[] = ['All', ...workGroups]

  useEffect(() => {
    setHovered(null)
  }, [filter])

  const countFor = (group: Filter) =>
    group === 'All' ? projects.length : projects.filter((p) => p.group === group).length

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const width = 380
    const height = 250
    const offset = 34
    const px =
      event.clientX + offset + width > window.innerWidth
        ? event.clientX - width - offset
        : event.clientX + offset
    const py = Math.min(
      Math.max(event.clientY - height / 2, 20),
      window.innerHeight - height - 20,
    )
    x.set(px)
    y.set(py)
  }

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <i className="dot" />
              Selected work / 01
            </span>
            <h2 className="section-title display">
              <LineReveal>Recent</LineReveal>
              <LineReveal delay={0.08}>
                <span className="outline">Cuts</span>
              </LineReveal>
            </h2>
          </div>
          <Reveal className="section-head__note" delay={0.15}>
            <p>
              Fourteen real cuts — long-form, vertical shorts, Meta ads, docs and teasers. Every
              video here is edited by me and plays straight from YouTube.
            </p>
            <span className="mono section-head__count">14 VIDEOS / YOUTUBE</span>
          </Reveal>
        </div>

        <Reveal className="work-filters" delay={0.08}>
          {filters.map((group) => (
            <button
              type="button"
              key={group}
              className={`work-filter${filter === group ? ' is-active' : ''}`}
              onClick={() => setFilter(group)}
              aria-pressed={filter === group}
            >
              {group}
              <span>{String(countFor(group)).padStart(2, '0')}</span>
            </button>
          ))}
        </Reveal>

        <div
          className="work-list"
          onMouseMove={handleMove}
          onMouseLeave={() => setHovered(null)}
        >
          {visible.map((project, index) => (
            <motion.button
              type="button"
              key={project.videoId}
              layout
              className="work-row"
              onMouseEnter={() => setHovered(project)}
              onFocus={() => setHovered(project)}
              onBlur={() => setHovered(null)}
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.75, ease: EASE, delay: index * 0.035 }}
            >
              <span className="work-row__index mono">{String(index + 1).padStart(2, '0')}</span>
              <span className="work-row__main">
                <span className="work-row__thumb" aria-hidden="true">
                  <img src={thumbUrl(project.videoId)} alt="" loading="lazy" />
                </span>
                <span className="work-row__title display">{project.title}</span>
              </span>
              <span className="work-row__group mono">{project.group}</span>
              <span className="work-row__platform mono">
                <i className="play-icon" aria-hidden="true" />
                YouTube
              </span>
              <span className="work-row__arrow" aria-hidden="true">
                ↗
              </span>
            </motion.button>
          ))}

          <AnimatePresence>
            {hovered && (
              <motion.div
                className="work-preview"
                style={{ x: previewX, y: previewY }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: EASE }}
                aria-hidden="true"
              >
                <img
                  className="work-preview__img"
                  src={thumbUrl(hovered.videoId)}
                  alt=""
                  loading="lazy"
                />
                <span className="work-preview__meta mono">
                  <span>{hovered.group}</span>
                  <span>{hovered.channel}</span>
                </span>
                <span className="work-preview__play" aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Reveal className="work-foot" delay={0.1}>
          <span className="mono">Full videos on YouTube</span>
          <div className="work-foot__links">
            <button type="button" className="link-arrow" onClick={onShowreel}>
              Play all 14 <span>↗</span>
            </button>
            <a
              className="link-arrow"
              href="https://www.youtube.com/@Chelvin-2024"
              target="_blank"
              rel="noreferrer"
            >
              Open the channel <span>↗</span>
            </a>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={closeProject} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    lockScroll(true)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      lockScroll(false)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="modal__scrim" onClick={onClose} aria-hidden="true" />
      <motion.div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — video`}
        initial={{ y: 46, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <div className="modal__bar">
          <span className="mono">
            Now playing / {project.group}
          </span>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            <span>Close</span>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="modal__player">
          <iframe
            src={embedUrl(project.videoId)}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="modal__head">
          <div>
            <span className="eyebrow">
              <i className="dot" />
              {project.group}
            </span>
            <h2 className="display">{project.title}</h2>
          </div>
          <a
            className="link-arrow"
            href={watchUrl(project.videoId)}
            target="_blank"
            rel="noreferrer"
          >
            Open on YouTube <span>↗</span>
          </a>
        </div>

        <div className="modal__body">
          <p className="modal__summary">{project.summary}</p>

          <div className="modal__facts">
            <div>
              <span className="mono">Category</span>
              <strong>{project.group}</strong>
            </div>
            <div>
              <span className="mono">Editor</span>
              <strong>Maaku</strong>
            </div>
            <div>
              <span className="mono">Channel</span>
              <a href={project.channelUrl} target="_blank" rel="noreferrer">
                {project.channel} ↗
              </a>
            </div>
            <div>
              <span className="mono">Source</span>
              <strong>YouTube</strong>
            </div>
          </div>

          <div className="modal__copy">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="modal__lower">
            <div className="modal__watch">
              <span className="eyebrow">
                <i className="dot" />
                Full video
              </span>
              <p>
                This is a real cut from the archive. If the player is restricted, open it directly
                on YouTube.
              </p>
              <a
                className="btn"
                href={watchUrl(project.videoId)}
                target="_blank"
                rel="noreferrer"
              >
                <span>Watch on YouTube</span>
                <span className="btn__arrow">↗</span>
              </a>
            </div>
            <div className="modal__cta">
              <h3 className="display">Want a cut like this?</h3>
              <p>Send the footage, the platform and the deadline. I will reply with a scope and a quote.</p>
              <a
                className="btn btn--solid"
                href={`mailto:chelvin.marc@gmail.com?subject=${encodeURIComponent(project.title)}`}
              >
                <span>Start a project</span>
                <span className="btn__arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="modal__end mono">
            <span>© 2026 — Shared from YouTube</span>
            <span>Cut &amp; finished by Maaku</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
