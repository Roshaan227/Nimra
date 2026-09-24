import { Link } from 'react-router-dom'
import { siteControl } from '../config/siteControl.js'

export default function HerPage() {
  const { her, him } = siteControl.people

  return (
    <main className="mx-auto max-w-3xl px-5 pt-12 md:px-8 md:pt-16">
      <p className="text-center font-body text-xs font-medium uppercase tracking-[0.35em] text-site-eyebrow">
        For {her.shortName}
      </p>
      <h1 className="mt-4 text-center font-display text-4xl font-semibold text-site-fg md:text-5xl">
        {her.fullName}
      </h1>
      <p className="mx-auto mt-3 max-w-lg text-center font-body text-site-fg-muted">
        The name behind every page here — written with care by {him.fullName}.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface-strong)] p-8 shadow-lg shadow-[color:var(--site-card-shadow)] backdrop-blur-sm">
          <h2 className="font-display text-xl font-semibold text-site-fg">Birthday</h2>
          <p className="mt-3 font-body text-lg text-site-fg-muted">{her.birthDate}</p>
          <p className="mt-2 font-body text-sm text-site-fg-soft">
            A winter–spring heart — carry this date into surprises, duas, and cake.
          </p>
        </div>
        <div className="rounded-3xl border border-[color:var(--site-her-violet-border)] bg-[color:var(--site-card-surface-strong)] p-8 shadow-lg shadow-[color:var(--site-card-shadow)] backdrop-blur-sm">
          <h2 className="font-display text-xl font-semibold text-site-fg">From</h2>
          <p className="mt-3 font-body text-lg text-site-fg-muted">{him.fullName}</p>
          <p className="mt-2 font-body text-sm text-site-fg-soft">
            Every route on this site leads back to the same truth — you matter.
          </p>
        </div>
      </div>

      <section className="mt-10 rounded-3xl border border-[color:var(--site-card-border)] bg-gradient-to-br from-[color:var(--site-card-surface-strong)] to-[color:var(--site-letter-gradient-to)] p-8 md:p-10">
        <h2 className="font-display text-2xl font-semibold text-site-fg">Why this page exists</h2>
        <p className="mt-4 font-body leading-relaxed text-site-fg-muted">
          This is your corner of the internet — flowers, cities, verses, swans, and small gifts you can open
          again and again. Change photos, links, theme, and words from{' '}
          <code className="rounded bg-[color:var(--site-code-bg)] px-1.5 py-0.5 text-sm">src/config/siteControl.js</code>{' '}
          and <code className="rounded bg-[color:var(--site-code-bg)] px-1.5 py-0.5 text-sm">index.css</code>; the whole
          site updates together.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/cities"
            className="site-btn-primary rounded-full px-4 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Lahore & Abbottabad
          </Link>
          <Link
            to="/flowers"
            className="rounded-full border border-[color:var(--site-btn-secondary-border)] bg-[color:var(--site-card-surface-strong)] px-4 py-2 text-sm font-medium text-[color:var(--site-btn-secondary-fg)] hover:bg-[color:var(--site-card-surface)]"
          >
            Flowers gallery
          </Link>
          <Link
            to="/swan"
            className="rounded-full border border-[color:var(--site-btn-tertiary-border)] bg-[color:var(--site-btn-tertiary-bg)] px-4 py-2 text-sm font-medium text-site-btn-tertiary-fg hover:bg-[color:var(--site-btn-tertiary-hover)]"
          >
            The swan
          </Link>
        </div>
      </section>
    </main>
  )
}
