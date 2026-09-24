import { siteControl } from '../config/siteControl.js'

const HEART_SPOTS = [
  { top: '8%', left: '6%', size: 'text-lg', delay: '0s' },
  { top: '14%', right: '10%', size: 'text-xl', delay: '0.8s' },
  { top: '42%', left: '4%', size: 'text-sm', delay: '1.4s' },
  { top: '48%', right: '6%', size: 'text-base', delay: '0.3s' },
  { top: '72%', left: '14%', size: 'text-xl', delay: '2s' },
  { top: '78%', right: '12%', size: 'text-lg', delay: '1.1s' },
  { top: '88%', left: '22%', size: 'text-sm', delay: '0.6s' },
  { top: '92%', right: '20%', size: 'text-base', delay: '1.7s' },
]

function heartSpotStyle(spot) {
  return {
    top: spot.top,
    ...(spot.left != null ? { left: spot.left } : {}),
    ...(spot.right != null ? { right: spot.right } : {}),
    animationDelay: spot.delay,
  }
}

export default function ProposalPage() {
  const proposal = siteControl.proposal
  if (!proposal) return null

  const { eyebrow, title, subtitle, lead, sections, images, quote, closingLine, whispers } = proposal

  return (
    <main className="proposal-page relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {HEART_SPOTS.map((spot, i) => (
          <span
            key={i}
            className={`proposal-floating-heart absolute ${spot.size}`}
            style={heartSpotStyle(spot)}
          >
            ♥
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl px-5 pt-12 md:px-8 md:pt-16">
        <p className="text-center font-body text-xs font-medium uppercase tracking-[0.35em] text-site-eyebrow">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-center font-display text-4xl font-semibold leading-tight text-site-fg md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center font-body text-lg text-site-fg-muted">{subtitle}</p>

        <div className="proposal-hero-card proposal-heart-cluster relative mt-12 rounded-[2rem] border border-[color:var(--site-proposal-card-border)] bg-[color:var(--site-proposal-card-bg)] p-8 shadow-xl shadow-[color:var(--site-card-shadow)] backdrop-blur-md md:p-11">
          <span className="proposal-heart-cluster__a pointer-events-none select-none" aria-hidden>
            ♥
          </span>
          <span className="proposal-heart-cluster__b pointer-events-none select-none" aria-hidden>
            ♥
          </span>
          <span className="proposal-heart-cluster__c pointer-events-none select-none" aria-hidden>
            ♥
          </span>
          <p className="relative z-[1] text-center font-display text-xl italic leading-relaxed text-site-fg md:text-2xl">
            “{lead}”
          </p>
        </div>

        {whispers?.length ? (
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {whispers.map((w) => (
              <li
                key={w}
                className="proposal-whisper rounded-full border border-[color:var(--site-proposal-whisper-border)] bg-[color:var(--site-proposal-whisper-bg)] px-3 py-1.5 font-body text-xs text-site-fg-muted"
              >
                {w}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface-strong)] p-8 shadow-lg shadow-[color:var(--site-card-shadow)] backdrop-blur-sm md:p-10"
            >
              <h2 className="font-display text-2xl font-semibold text-site-fg md:text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-4 font-body leading-relaxed text-site-fg-muted">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {images?.length ? (
          <section className="mt-16" aria-labelledby="proposal-gallery">
            <h2 id="proposal-gallery" className="text-center font-display text-2xl font-semibold text-site-fg">
              For your eyes
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-site-fg-soft">
              Images are set in <code className="rounded bg-[color:var(--site-code-bg)] px-1">siteControl.proposal.images</code>{' '}
              — change them whenever you like.
            </p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((item, i) => (
                <li
                  key={item.src + i}
                  className="proposal-image-card group overflow-hidden rounded-3xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface-strong)] shadow-xl shadow-[color:var(--site-card-shadow)]"
                >
                  <div className="proposal-image-frame relative aspect-[4/5] overflow-hidden bg-[color:var(--site-image-placeholder)]">
                    <span className="proposal-image-corner pointer-events-none" aria-hidden>
                      ♥
                    </span>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="p-4 font-body text-sm leading-relaxed text-site-fg-muted">{item.caption}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <blockquote className="proposal-quote mt-16 rounded-[2rem] border border-[color:var(--site-poetry-border)] bg-gradient-to-br from-[color:var(--site-poetry-from)] to-[color:var(--site-poetry-to)] p-8 text-center shadow-lg shadow-[color:var(--site-poetry-shadow)] md:p-10">
          <p className="font-display text-lg italic leading-relaxed text-site-fg md:text-xl">“{quote}”</p>
        </blockquote>

        <div className="proposal-closing mt-14 rounded-3xl border border-[color:var(--site-closing-border)] bg-gradient-to-br from-[color:var(--site-closing-from)] to-[color:var(--site-closing-to)] p-8 text-center backdrop-blur-sm md:p-10">
          <p className="font-display text-xl italic text-site-fg md:text-2xl">{closingLine}</p>
          <p className="proposal-closing-hearts mt-5 text-lg text-[color:var(--site-proposal-heart-strong)]" aria-hidden>
            ♥ ♥ ♥
          </p>
        </div>
      </div>
    </main>
  )
}
