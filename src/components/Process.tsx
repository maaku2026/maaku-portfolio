import { process } from '../lib/data'
import { LineReveal, Reveal } from './Reveal'

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <i className="dot" />
              Process / 03
            </span>
            <h2 className="section-title display">
              <LineReveal>From brief</LineReveal>
              <LineReveal delay={0.08}>
                to <span className="outline">delivery</span>
              </LineReveal>
            </h2>
          </div>
          <Reveal className="section-head__note" delay={0.15}>
            <p>
              A fixed rhythm from first message to final export. You always know which cut you are
              watching, what is next and when it lands.
            </p>
            <span className="mono section-head__count">04 PHASES / SHORT + LONG FORM</span>
          </Reveal>
        </div>

        <div className="process-grid">
          {process.map((step, index) => (
            <Reveal key={step.index} delay={index * 0.08}>
              <div className="process-card">
                <div className="process-card__top">
                  <span className="process-card__index mono">{step.index}</span>
                  <span className="process-card__meta mono">{step.meta}</span>
                </div>
                <span className="process-card__line" aria-hidden="true" />
                <h3 className="process-card__title display">{step.title}</h3>
                <span className="process-card__caption mono">{step.caption}</span>
                <p>{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="process-note" delay={0.1}>
          <span className="mono">Working with an agency or in-house team?</span>
          <p>I can plug into your Frame.io, Drive or Slack flow and match your naming conventions.</p>
        </Reveal>
      </div>
    </section>
  )
}
