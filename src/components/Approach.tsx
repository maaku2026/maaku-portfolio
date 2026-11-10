import { approach } from '../lib/data'
import { LineReveal, Reveal } from './Reveal'

export default function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <i className="dot" />
              Approach / 05
            </span>
            <h2 className="section-title display">
              <LineReveal>How the cut</LineReveal>
              <LineReveal delay={0.08}>
                <span className="outline">converts</span>
              </LineReveal>
            </h2>
          </div>
          <Reveal className="section-head__note" delay={0.15}>
            <p>
              Three rules behind every ad and long-form edit — whether it runs 15 seconds or 15
              minutes.
            </p>
            <span className="mono section-head__count">SAME SYSTEM / EVERY FORMAT</span>
          </Reveal>
        </div>

        <div className="approach-grid">
          {approach.map((item, index) => (
            <Reveal key={item.index} delay={index * 0.08}>
              <article className="approach-card">
                <div className="approach-card__top">
                  <span className="approach-card__index mono">({item.index})</span>
                  <span className="approach-card__tag mono">{item.tag}</span>
                </div>
                <h3 className="approach-card__title display">{item.title}</h3>
                <p>{item.body}</p>
                <span className="approach-card__line" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
