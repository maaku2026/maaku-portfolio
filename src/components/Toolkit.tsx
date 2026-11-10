import { tools } from '../lib/data'
import { Marquee } from './Reveal'

export default function Toolkit() {
  return (
    <section className="toolkit" aria-label="Toolkit">
      <div className="container toolkit__inner">
        <span className="toolkit__label mono">Toolkit</span>
        <Marquee speed={30} reverse>
          {tools.map((tool) => (
            <span className="toolkit__item" key={tool}>
              {tool}
              <i aria-hidden="true">·</i>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
