export const still = (seed: string, w = 1600, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`

export const thumbUrl = (videoId: string) => `${import.meta.env.BASE_URL}thumbs/${videoId}.jpg`
export const watchUrl = (videoId: string) => `https://youtu.be/${videoId}`
export const embedUrl = (videoId: string) =>
  `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`

export const workGroups = [
  'Long-form',
  'Shorts',
  'Meta Ads',
  'Docu & Events',
  'Teasers',
  'Info',
] as const

export type WorkGroup = (typeof workGroups)[number]

const CHELVIN = {
  channel: 'Chelvin',
  channelUrl: 'https://www.youtube.com/@Chelvin-2024',
}

const MAAKU = {
  channel: 'Maaku',
  channelUrl: 'https://www.youtube.com/@maaku7137',
}

export type Project = {
  videoId: string
  title: string
  group: WorkGroup
  channel: string
  channelUrl: string
  summary: string
  body: string[]
}

export const projects: Project[] = [
  {
    videoId: 'OWJ9MrYq-MU',
    title: 'Cloud Tech Recap',
    group: 'Long-form',
    ...CHELVIN,
    summary:
      'A recap cut from a cloud tech session — the useful part of a long recording, tightened for YouTube.',
    body: [
      'The source was a long, technical session. I kept the strongest explanations, cut around the repeats and used captions and simple callouts so the language stays easy to follow.',
      'The recap opens cold, moves in clear sections and ends on the next step. Delivered as a 16:9 YouTube master.',
    ],
  },
  {
    videoId: 'ouNx45jbGkw',
    title: 'Crypto Is Spiritual Money',
    group: 'Long-form',
    ...CHELVIN,
    summary:
      'A long-form talking-head edit on crypto as spiritual money — paced to keep the argument moving without flattening it.',
    body: [
      'The edit follows the speaker’s cadence, gives the big ideas room to land and uses restrained b-roll so the thought stays in front.',
      'Captions and simple motion marks carry the structure from section to section without turning the piece into a highlight reel.',
    ],
  },
  {
    videoId: '5mG8DPJK5NQ',
    title: 'Capriole Webinar Snippet',
    group: 'Long-form',
    ...CHELVIN,
    summary:
      'A standalone snippet from a longer Capriole webinar, rebuilt so it works without the rest of the session.',
    body: [
      'Snippets need their own opening. This one gets a short context frame, the strongest minutes of the session and a clean close that points back to the full webinar.',
      'Captioned and exported for YouTube, with framing and levels matched to the source.',
    ],
  },
  {
    videoId: 'nEKGW3z5oNI',
    title: 'Why Investors Lose Money?',
    group: 'Shorts',
    ...CHELVIN,
    summary:
      'A vertical short that puts one investor objection on screen and answers it before the viewer scrolls.',
    body: [
      'The hook lands in the first two seconds: the question in the title, on screen, with captions burned in for sound-off viewing.',
      'One source clip, reframed to 9:16 and paced for Shorts, Reels and TikTok.',
    ],
  },
  {
    videoId: 'PuyXl-wtS-c',
    title: 'Where Are Their Client Results?',
    group: 'Shorts',
    ...CHELVIN,
    summary:
      'A direct-response short built around the question every sceptical investor is already asking.',
    body: [
      'The edit leads with the objection instead of the offer. Tight cuts, on-screen text and a clear end card keep it moving.',
      'Captioned for mute viewing and exported vertical-first.',
    ],
  },
  {
    videoId: 'xUuEIjCsh18',
    title: 'You’re In The Right Place',
    group: 'Shorts',
    ...CHELVIN,
    summary:
      'The welcome video at the top of an investor funnel — the first thing a new lead sees.',
    body: [
      'The tone is conversational, not salesy. Cuts stay invisible, captions carry the message and the offer arrives once, clearly.',
      'Used as the landing page’s main video and cut down for a vertical placement.',
    ],
  },
  {
    videoId: 'NqCdgNqVLTo',
    title: 'Storyline Meta',
    group: 'Meta Ads',
    ...CHELVIN,
    summary:
      'A paid social cut for Meta, built around a storyline instead of a straight product pitch.',
    body: [
      'The ad opens on tension, holds the story through the middle and lands the offer in the final beat. On-screen text keeps it readable while scrolling.',
      'Delivered as a Meta-ready cut, built to be tested against other angles.',
    ],
  },
  {
    videoId: 'j5oP5IN0heM',
    title: 'Crypto Event',
    group: 'Meta Ads',
    ...CHELVIN,
    summary:
      'A Meta ad promoting a crypto event — short, direct and built to stop the scroll.',
    body: [
      'Event ads have one job: make the date feel urgent. The edit leads with the room, the people and the reason to show up, then lands the details.',
      'Text overlays are timed to the beat and kept readable with the sound off.',
    ],
  },
  {
    videoId: '_vFz0V2AH4g',
    title: 'Sarao — Biyahe ng Bayan',
    group: 'Docu & Events',
    ...MAAKU,
    summary:
      'A documentary-style piece with Sarao — travel, people and the Philippines, cut with room to breathe.',
    body: [
      'This one is built on observation: faces, streets, movement and the quiet in between. The edit resists over-cutting and lets scenes arrive.',
      'Sound and pacing do the storytelling, with a simple title system that stays out of the way.',
    ],
  },
  {
    videoId: 'oFD7LKmqTgA',
    title: 'Jesreel & Ervin',
    group: 'Docu & Events',
    ...CHELVIN,
    summary:
      'An event film for Jesreel and Ervin, cut around the day’s small moments as much as the big ones.',
    body: [
      'The brief was a film, not a highlight reel. The edit follows the day’s rhythm: preparation, the main moments and the people in between.',
      'Natural sound sits under the music, and the cut leaves space for reactions instead of rushing to the next shot.',
    ],
  },
  {
    videoId: 'J-HcsozGWlk',
    title: 'Koh Samui Event Highlights',
    group: 'Docu & Events',
    ...CHELVIN,
    summary:
      'A highlight film from the Koh Samui event — energy first, details second, cut to feel like being there.',
    body: [
      'The edit moves between wide establishing shots and close details, keeping the pace up without turning the film into a montage blur.',
      'Music drives the transitions, with short breathing points for interviews and reactions.',
    ],
  },
  {
    videoId: 'KRXUrX8Zkbc',
    title: 'Koh Samui Teaser',
    group: 'Teasers',
    ...CHELVIN,
    summary:
      'A short teaser for Koh Samui 2025 — enough to set the tone, not enough to give the film away.',
    body: [
      'Teasers live or die on the first frame. This one opens on the strongest visual, builds through quick fragments and ends on the date.',
      'Cut as a standalone piece that works in feed and on a landing page.',
    ],
  },
  {
    videoId: '0apWv-_sbA4',
    title: 'Capriole Webinar Teaser',
    group: 'Teasers',
    ...CHELVIN,
    summary:
      'A teaser cut to fill a room for the Capriole webinar — clear promise, short runtime.',
    body: [
      'The edit sets up the problem, shows who is speaking and gives one reason to register. No filler.',
      'Text-led and captioned, with the key date held on screen long enough to read.',
    ],
  },
  {
    videoId: 'UJTBjXS82E8',
    title: 'Koh Samui Retreat 2025',
    group: 'Info',
    ...CHELVIN,
    summary:
      'An information video for the Koh Samui Retreat 2025 — what it is, who it is for and what to expect.',
    body: [
      'This is a clarity edit. The structure follows the questions a viewer actually has: what, where, who and how to join.',
      'Clean lower thirds and chaptered pacing make it easy to skim without losing the thread.',
    ],
  },
]

export const services = [
  {
    index: '01',
    title: 'Short-Form Ads',
    blurb:
      'Hook-first edits for Meta, TikTok and YouTube Shorts. UGC, founder-led and product demos, cut to be tested — not just watched.',
    points: ['Hook & angle variants', 'UGC / product footage', 'Burned-in captions', '9:16, 4:5, 1:1 exports'],
  },
  {
    index: '02',
    title: 'Long-Form Edits',
    blurb:
      'YouTube videos, VSLs, interviews and documentary-style pieces. Structure first, then pacing, b-roll and sound until it holds.',
    points: ['Story structure', 'Multi-cam sync', 'B-roll & sound design', 'YouTube chapters'],
  },
  {
    index: '03',
    title: 'Motion & Captions',
    blurb:
      'Kinetic type, simple callouts and subtitle systems that feel native to the platform — built in After Effects, delivered editable.',
    points: ['Kinetic typography', 'Brand stings & end cards', 'Subtitle styling', 'Editable templates'],
  },
  {
    index: '04',
    title: 'Monthly Editing',
    blurb:
      'A steady output of ads and long-form without hiring in-house. Monthly batches, priority turnaround and one organised asset library.',
    points: ['Ad batches', 'Long-form + shorts', 'Shared review board', 'Priority queue'],
  },
]

export const process = [
  {
    index: '01',
    title: 'Brief',
    caption: 'Goals before cuts',
    body: 'We agree on the offer, the audience, the platform and the length of every deliverable. No footage gets touched until the target is clear.',
    meta: 'Day 0 — 1',
  },
  {
    index: '02',
    title: 'Hook',
    caption: 'Win the first 3 seconds',
    body: 'For ads, I map hooks and angles before the first cut. For long-form, I find the strongest opening in the footage and build backwards.',
    meta: 'Day 1 — 2',
  },
  {
    index: '03',
    title: 'Cut',
    caption: 'Rhythm, captions, sound',
    body: 'You see a rough cut early, while changing the story is still cheap. We refine pacing, captions, motion and mix together — in one feedback pass.',
    meta: 'Day 2 — 5',
  },
  {
    index: '04',
    title: 'Deliver',
    caption: 'Every format, named right',
    body: 'Vertical, feed, square and widescreen exports. Captions burned in and as SRT. Files named the way your media buyer or editor expects.',
    meta: 'Day 5+',
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Years freelancing' },
  { value: 14, suffix: '', label: 'Selected videos' },
  { value: 6, suffix: '', label: 'Work categories' },
  { value: 24, suffix: 'h', label: 'Reply time' },
]

export const tools = [
  'CapCut',
  'Premiere Pro',
  'After Effects',
  'Audition',
  'Media Encoder',
  'Frame.io',
  'Google Drive',
  'Notion',
]

export const approach = [
  {
    index: '01',
    title: 'Hook first',
    tag: '0 — 3s',
    body: 'The first three seconds decide the rest. I front-load the strongest frame, claim or visual and build the edit around it — not around the footage order.',
  },
  {
    index: '02',
    title: 'Cut for retention',
    tag: 'Pacing',
    body: 'Pattern interrupts, clean jump cuts and captions that read with the sound off. Every beat earns the next one, whether the video runs 15 seconds or 15 minutes.',
  },
  {
    index: '03',
    title: 'Built to ship',
    tag: 'Delivery',
    body: 'Every ratio, length and file name your platform or media buyer needs. No last-minute re-exports, no missing caption files, no guessing which version is final.',
  },
]

export const packages = [
  {
    name: 'Single edit',
    price: 'Custom',
    unit: '/ project',
    note: 'One video',
    features: ['1 ad or long-form edit', 'Hook + burned-in captions', 'All standard ratios', '2 revision rounds', '72h first cut'],
    highlight: false,
  },
  {
    name: 'Ad pack',
    price: 'Custom',
    unit: '/ campaign',
    note: 'Most booked',
    features: ['6–10 ad variations', 'Hook / angle testing', 'UGC or product footage', 'Motion callouts', 'Priority turnaround'],
    highlight: true,
  },
  {
    name: 'Monthly',
    price: 'Custom',
    unit: '/ retainer',
    note: 'Limited slots',
    features: ['Monthly ad batches', 'Long-form + shorts', 'Shared review board', 'Priority queue', 'Direct chat access'],
    highlight: false,
  },
]

export const faqs = [
  {
    q: 'What do you need to start an edit?',
    a: 'The raw footage, any brand assets, a reference or two, and a short brief: who it is for, where it will run and what you want the viewer to do. For long-form I also need the script or interview notes if they exist.',
  },
  {
    q: 'How fast can you turn a project around?',
    a: 'Short-form ads usually take 48 to 72 hours from receiving footage. Long-form edits run three to five days depending on length and feedback speed. Rush work is possible when the schedule allows — ask before booking.',
  },
  {
    q: 'Is CapCut enough, or do you use Premiere?',
    a: 'Both. CapCut for fast, native-feeling short-form and quick turnaround. Premiere Pro and After Effects for long-form, multi-cam, sound work and custom motion. The tool follows the job, not the other way around.',
  },
  {
    q: 'How many revisions are included?',
    a: 'Two rounds on every project, collected in one pass with timecodes so nothing gets lost. Extra rounds are billed hourly. I would rather get notes early on a rough cut than polish something that is going the wrong way.',
  },
  {
    q: 'Can you work with UGC and phone footage?',
    a: 'Yes — most DTC work starts as vertical phone footage. I can clean up audio, stabilise, add captions and cut around imperfect takes. Send what you have and I will tell you honestly what is usable.',
  },
  {
    q: 'Do you work with agencies and in-house teams?',
    a: 'Regularly. I can join your Frame.io, Drive or Slack, follow your naming conventions and deliver in whatever folder structure your team already uses. White-label work is welcome.',
  },
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]
