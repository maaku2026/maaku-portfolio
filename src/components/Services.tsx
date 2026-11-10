import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../lib/data'
import { EASE } from '../lib/motion'
import { LineReveal, Reveal } from './Reveal'

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <i className="dot" />
              Services / 02
            </span>
            <h2 className="section-title display">
              <LineReveal>Short &amp;</LineReveal>
              <LineReveal delay={0.08}>
                <span className="outline">long form</span>
              </LineReveal>
            </h2>
          </div>
          <Reveal className="section-head__note" delay={0.15}>
            <p>
              Ads built to be tested, long-form built to be finished. Every deliverable is cut,
              captioned and exported for the platform it actually lives on.
            </p>
            <span className="mono section-head__count">ADS / LONG-FORM / MOTION</span>
          </Reveal>
        </div>

        <div className="services-list">
          {services.map((service, index) => {
            const isOpen = open === index
            return (
              <Reveal key={service.index} delay={index * 0.06}>
                <div className={`service${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="service__head"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="service__index mono">({service.index})</span>
                    <span className="service__title display">{service.title}</span>
                    <span className="service__meta mono">
                      {String(service.points.length).padStart(2, '0')} included
                    </span>
                    <span className="service__toggle" aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="service__panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: EASE }}
                      >
                        <div className="service__panel-inner">
                          <p>{service.blurb}</p>
                          <ul>
                            {service.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
