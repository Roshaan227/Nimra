import { siteControl } from '../config/siteControl.js'

export default function GiftsPage() {
  const { gifts, people } = siteControl

  return (
    <main className="mx-auto max-w-5xl px-5 pt-12 md:px-8 md:pt-16">
      <h1 className="text-center font-display text-4xl font-semibold text-site-fg md:text-5xl">
        Gifts for {people.her.shortName}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center font-body text-lg text-site-fg-muted">
        Small promises on a screen — edit titles, notes, and links in{' '}
        <code className="rounded bg-[color:var(--site-code-bg)] px-1">siteControl.gifts</code>.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gifts.map((g) => {
          const inner = (
            <>
              <span className="text-4xl" aria-hidden>
                {g.icon}
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold text-site-fg">{g.title}</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-site-fg-muted">{g.description}</p>
              {g.href ? (
                <span className="mt-4 inline-block text-sm font-medium text-site-link">Open link →</span>
              ) : null}
            </>
          )

          return (
            <li key={g.title}>
              {g.href ? (
                <a
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-3xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface-strong)] p-6 shadow-lg shadow-[color:var(--site-card-shadow)] transition hover:border-[color:var(--site-gift-hover-border)] hover:shadow-xl"
                >
                  {inner}
                </a>
              ) : (
                <div className="flex h-full flex-col rounded-3xl border border-dashed border-[color:var(--site-gift-dash)] bg-[color:var(--site-gift-dash-bg)] p-6">
                  {inner}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
