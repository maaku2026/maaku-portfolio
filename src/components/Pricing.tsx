import { packages } from '../lib/data'
import { LineReveal, Reveal } from './Reveal'

export default function Pricing() {
  return (
    <section className="section pricing" id="packages">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <i className="dot" />
              Packages / 06
            </span>
            <h2 className="section-title display">
              <LineReveal>Ways to</LineReveal>
              <LineReveal delay={0.08}>
                work <span className="outline">together</span>
              </LineReveal>
            </h2>
          </div>
          <Reveal className="section-head__note" delay={0.15}>
            <p>
              Three ways to book. Every quote includes the first cut, two revision rounds and
              platform-ready exports. Scope and price are confirmed before anything starts.
            </p>
            <span className="mono section-head__count">USD / QUOTED PER BRIEF</span>
          </Reveal>
        </div>

        <div className="pricing-grid">
          {packages.map((pack, index) => (
            <Reveal key={pack.name} delay={index * 0.08}>
              <div className={`price-card${pack.highlight ? ' is-highlight' : ''}`}>
                {pack.highlight && <span className="price-card__badge">Most booked</span>}
                <div className="price-card__head">
                  <span className="price-card__name">{pack.name}</span>
                  <span className="price-card__note">{pack.note}</span>
                </div>
                <div className="price-card__price">
                  {pack.price}
                  <span className="price-card__unit">{pack.unit}</span>
                </div>
                <ul>
                  {pack.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a
                  className={`btn${pack.highlight ? ' btn--solid' : ''}`}
                  href={`mailto:chelvin.marc@gmail.com?subject=${encodeURIComponent(pack.name)}`}
                >
                  <span>Get a quote</span>
                  <span className="btn__arrow">↗</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="pricing-foot" delay={0.12}>
          <span className="mono">Rush edits available</span>
          <p>
            Need it sooner? Tell me the deadline before booking — if the schedule allows, I will
            confirm a priority slot and the fee up front.
          </p>
          <a className="link-arrow" href="mailto:chelvin.marc@gmail.com?subject=Rush%20edit">
            Check availability <span>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
