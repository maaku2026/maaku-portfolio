import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { EASE, lockScroll } from '../lib/motion'
import { projects, thumbUrl, watchUrl, embedUrl } from '../lib/data'

const FEATURED_ID = '_vFz0V2AH4g'

export default function ShowreelModal({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState(
    projects.find((project) => project.videoId === FEATURED_ID) ?? projects[0],
  )

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
      className="modal reel-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="modal__scrim" onClick={onClose} aria-hidden="true" />
      <motion.div
        className="reel"
        role="dialog"
        aria-modal="true"
        aria-label="Selected work playlist"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="reel__bar">
          <span className="mono">Screening room — {projects.length} selected cuts</span>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            <span>Close</span>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="reel__body">
          <div className="reel__main">
            <div className="reel__stage">
              <iframe
                key={current.videoId}
                src={embedUrl(current.videoId)}
                title={current.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="reel__now">
              <div>
                <span className="mono">Now playing / {current.group}</span>
                <h3 className="display">{current.title}</h3>
                <span className="mono">
                  {current.channel} · YouTube / {projects.length} videos
                </span>
              </div>
              <a
                className="link-arrow"
                href={watchUrl(current.videoId)}
                target="_blank"
                rel="noreferrer"
              >
                YouTube <span>↗</span>
              </a>
            </div>
          </div>

          <aside className="reel__aside" aria-label="Playlist">
            <div className="reel__aside-head">
              <span className="mono">Playlist</span>
              <span className="mono">{projects.length} videos</span>
            </div>
            <div className="reel__playlist">
              {projects.map((project) => (
                <button
                  type="button"
                  key={project.videoId}
                  className={`reel__item${project.videoId === current.videoId ? ' is-active' : ''}`}
                  onClick={() => setCurrent(project)}
                  aria-pressed={project.videoId === current.videoId}
                >
                  <img src={thumbUrl(project.videoId)} alt="" loading="lazy" />
                  <span className="reel__item-copy">
                    <strong>{project.title}</strong>
                    <span className="mono">{project.group}</span>
                  </span>
                  <span className="reel__item-icon" aria-hidden="true">
                    {project.videoId === current.videoId ? '❚❚' : '▶'}
                  </span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}
