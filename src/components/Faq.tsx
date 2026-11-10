import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqs } from '../lib/data'
import { EASE } from '../lib/motion'
import { LineReveal, Reveal } from './Reveal'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro">
          <span className="eyebrow">
            <i className="dot" />
            Questions / 07
          </span>
          <h2 className="section-title display">
            <LineReveal>Before</LineReveal>
            <LineReveal delay={0.08}>
              we <span className="outline">cut</span>
            </LineReveal>
          </h2>
          <Reveal delay={0.12}>
            <p>
              The things clients usually ask before sending footage. If yours is not here, email me
              — you will get a straight answer, not a sales call.
            </p>
            <a className="link-arrow" href="mailto:chelvin.marc@gmail.com?subject=Question">
              Ask something else <span>↗</span>
            </a>
          </Reveal>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq__index mono">{String(index + 1).padStart(2, '0')}</span>
                  <span>{faq.q}</span>
                  <span className="faq__toggle" aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
