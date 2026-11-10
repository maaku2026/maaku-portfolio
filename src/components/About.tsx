import { FilmStill } from './Media'
import { LineReveal, Reveal } from './Reveal'

const facts = [
  { label: 'Based', value: 'Metro Manila, PH' },
  { label: 'Freelancing', value: '3+ years' },
  { label: 'Focus', value: 'DTC ads + long-form' },
  { label: 'Availability', value: '2 slots / month' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media">
          <Reveal>
            <div className="about__portrait">
              <FilmStill
                seeds={['portrait-maaku-02', 'portrait-maaku-11', 'portrait-maaku-23']}
                className="about__still"
                width={1000}
                height={1250}
                interval={4200}
              />
              <div className="about__portrait-label mono">
                <span>MAAKU</span>
                <span>ON SET · 2025</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="about__secondary">
            <FilmStill
              seeds={['desk-cut-04', 'desk-cut-19', 'desk-cut-31']}
              className="about__secondary-still"
              width={800}
              height={600}
              interval={3600}
            />
            <span className="mono">Timeline / 00:42:16</span>
          </Reveal>
        </div>

        <div className="about__copy">
          <span className="eyebrow">
            <i className="dot" />
            Profile / 04
          </span>
          <h2 className="section-title display">
            <LineReveal>Three years</LineReveal>
            <LineReveal delay={0.08}>
              in the <span className="outline">timeline</span>
            </LineReveal>
          </h2>

          <Reveal delay={0.1}>
            <p className="about__lead">
              I&apos;m Maaku — a freelance video editor based in Metro Manila, three years in and
              still obsessed with the first three seconds.
            </p>
            <p className="about__body">
              I cut short-form ads and long-form videos for DTC brands, founders and agencies.
              CapCut for fast, native-feeling vertical work; Premiere Pro and After Effects for
              multi-cam, sound and custom motion.
            </p>
            <p className="about__body">
              Most of my work starts with a hook and ends with a folder full of correctly named
              exports. In between, I care about pacing, captions and whether the thing is actually
              worth watching.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="about__facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="mono">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.24} className="about__now">
            <span className="mono">Currently</span>
            <p>
              Cutting a UGC ad batch for a DTC launch · editing a founder interview · testing far
              too many hooks at 2am.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
