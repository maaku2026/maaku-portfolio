import { useEffect, useState } from 'react'
import { navLinks } from '../lib/data'
import { LineReveal, Reveal } from './Reveal'

const fit = [
  { label: 'DTC brands', value: 'Ads & UGC' },
  { label: 'Founders', value: 'YouTube / VSL' },
  { label: 'Agencies', value: 'White-label' },
]

function useManilaTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(formatter.format(new Date()))
    }
    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [])

  return time
}

export default function Contact() {
  const time = useManilaTime()

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__top" y={16}>
          <span className="eyebrow">
            <i className="dot dot--pulse" />
            Contact / 08
          </span>
          <span className="availability">
            <i className="dot" />
            Booking new projects — 2 slots this month
          </span>
        </Reveal>

        <h2 className="contact__title display">
          <LineReveal>Have a video</LineReveal>
          <LineReveal delay={0.08}>
            in <span className="outline">mind?</span>
          </LineReveal>
        </h2>

        <Reveal delay={0.1}>
          <a className="contact__email" href="mailto:chelvin.marc@gmail.com">
            chelvin.marc@gmail.com
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__col">
            <span className="mono contact__label">Start a project</span>
            <p className="contact__pitch">
              Send the idea, the footage or just the deadline. I reply within a day with a scope, a
              quote and the next available slot.
            </p>
            <a
              className="btn btn--solid"
              href="mailto:chelvin.marc@gmail.com?subject=New%20project"
            >
              <span>Send the brief</span>
              <span className="btn__arrow">↗</span>
            </a>
          </Reveal>

          <Reveal className="contact__col" delay={0.08}>
            <span className="mono contact__label">Availability</span>
            <ul className="contact__list">
              <li>
                <span>Next opening</span>
                <span>This month</span>
              </li>
              <li>
                <span>Response time</span>
                <span>&lt; 24 hours</span>
              </li>
              <li>
                <span>Working</span>
                <span>Remote / worldwide</span>
              </li>
              <li>
                <span>Manila time</span>
                <span className="contact__clock">{time || '--:--:--'}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="contact__col" delay={0.16}>
            <span className="mono contact__label">Good fit</span>
            <ul className="contact__list contact__fit">
              {fit.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            <a
              className="link-arrow contact__channel"
              href="https://www.youtube.com/@Chelvin-2024"
              target="_blank"
              rel="noreferrer"
            >
              Watch the full playlist <span>↗</span>
            </a>
            <p className="contact__note">
              Short-form ads, long-form videos, UGC edits and captions. Based in Metro Manila,
              working with clients worldwide.
            </p>
          </Reveal>
        </div>

        <footer className="footer">
          <div className="footer__top">
            <a className="brand brand--footer" href="#top" aria-label="Maaku — home">
              <span className="brand__mark">M</span>
              <span className="brand__text">
                <strong>Maaku</strong>
                <span>Video editor</span>
              </span>
            </a>
            <nav className="footer__nav" aria-label="Footer">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a className="back-top" href="#top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
          <div className="footer__bottom">
            <span>© 2026 Maaku — All rights reserved</span>
            <span>Short form + long form</span>
            <span>Metro Manila, PH</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
