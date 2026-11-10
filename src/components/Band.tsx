import { Marquee } from './Reveal'

const words = [
  'Short-form ads',
  'UGC edits',
  'Long-form YouTube',
  'VSLs & interviews',
  'Motion graphics',
  'Captions',
]

export default function Band() {
  return (
    <div className="band" aria-hidden="true">
      <Marquee speed={34}>
        {words.map((word) => (
          <span className="band__item" key={word}>
            <span>{word}</span>
            <i>✳</i>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
