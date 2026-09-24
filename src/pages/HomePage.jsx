import { Link } from 'react-router-dom'
import { siteControl } from '../config/siteControl.js'

export default function HomePage() {
  const { home, letter, moments, closingLine, people } = siteControl
  const invite = home.proposalInvite

  return (
    <main className="mx-auto max-w-3xl px-5 pt-12 md:px-8 md:pt-16">
      <p className="text-center font-body text-xs font-medium uppercase tracking-[0.35em] text-site-eyebrow">
        {home.eyebrow}
      </p>

      <h1 className="mt-5 text-center font-display text-5xl font-semibold leading-[1.05] tracking-tight text-site-fg md:text-6xl">
        {home.headline}
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-center font-body text-lg font-light text-site-fg-muted md:text-xl">
        {home.subline}
      </p>

      <p className="mx-auto mt-10 max-w-2xl text-center font-display text-2xl italic leading-relaxed text-site-fg md:text-3xl">
        “{home.quote}”
      </p>

      {invite ? (
        <section
          className="site-home-proposal-invite mt-12 rounded-[1.75rem] border border-[color:var(--site-home-invite-border)] bg-[color:var(--site-home-invite-bg)] p-8 shadow-xl shadow-[color:var(--site-card-shadow)] backdrop-blur-md md:p-10"
          aria-labelledby="home-proposal-heading"
        >
          <p className="text-center font-body text-xs font-medium uppercase tracking-[0.35em] text-site-eyebrow">
            {invite.eyebrow}
          </p>
          <h2
            id="home-proposal-heading"
            className="mt-4 text-center font-display text-2xl font-semibold text-site-fg md:text-3xl"
          >
            {invite.title}
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center font-body text-base leading-relaxed text-site-fg-muted md:text-lg">
            {invite.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-2">
            <Link
              to="/proposal"
              className="site-btn-primary inline-flex rounded-full px-8 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {invite.ctaLabel}
            </Link>
            {invite.ctaHint ? (
              <p className="max-w-md text-center font-body text-xs text-site-fg-soft md:text-sm">{invite.ctaHint}</p>
            ) : null}
          </div>
        </section>
      ) : null}

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link
          to="/proposal"
          className="rounded-full border border-[color:var(--site-proposal-nav-idle-border)] bg-[color:var(--site-proposal-nav-idle-bg)] px-5 py-2.5 text-sm font-medium text-[color:var(--site-proposal-nav-idle-fg)] shadow-sm transition hover:brightness-110"
        >
          Proposal
        </Link>
        <Link
          to="/flowers"
          className="site-btn-primary rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
        >
          See your flowers
        </Link>
        <Link
          to="/poetry"
          className="rounded-full border border-[color:var(--site-btn-secondary-border)] bg-[color:var(--site-card-surface-strong)] px-5 py-2.5 text-sm font-medium text-[color:var(--site-btn-secondary-fg)] shadow-sm transition hover:bg-[color:var(--site-card-surface)]"
        >
          Urdu poetry
        </Link>
        <Link
          to="/swan"
          className="rounded-full border border-[color:var(--site-btn-tertiary-border)] bg-[color:var(--site-btn-tertiary-bg)] px-5 py-2.5 text-sm font-medium text-site-btn-tertiary-fg shadow-sm transition hover:bg-[color:var(--site-btn-tertiary-hover)]"
        >
          The swan
        </Link>
        <Link
          to="/gifts"
          className="rounded-full border border-[color:var(--site-btn-tertiary-border)] bg-[color:var(--site-btn-tertiary-bg)] px-5 py-2.5 text-sm font-medium text-site-btn-tertiary-fg shadow-sm transition hover:bg-[color:var(--site-btn-tertiary-hover)]"
        >
          Little gifts
        </Link>
      </div>

      <section
        className="site-home-letter mt-16"
        aria-labelledby="letter-heading"
      >
        <div className="site-home-letter__sheet rounded-sm border border-[color:var(--site-home-letter-border)] bg-[color:var(--site-home-letter-paper)] p-8 shadow-lg shadow-[color:var(--site-card-shadow)] md:p-12">
          <h2 id="letter-heading" className="font-display text-xl font-semibold text-site-fg md:text-2xl">
            {letter.title}
          </h2>
          {letter.dateLine ? (
            <p className="site-home-letter__date mt-6 font-body text-sm text-site-fg-soft">{letter.dateLine}</p>
          ) : null}
          <p className="site-home-letter__salutation mt-8 font-display text-lg italic text-site-fg md:text-xl">
            {letter.salutation}
          </p>
          <div className="site-home-letter__body mt-6 space-y-5 font-body text-base leading-[1.85] text-site-fg-muted md:text-lg">
            {letter.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div className="site-home-letter__signoff mt-12 text-site-fg-muted">
            <p className="font-body">{letter.closingPhrase}</p>
            <p className="site-home-letter__signature mt-6 font-display text-2xl text-site-fg md:text-3xl">
              {letter.signature}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="moments-heading">
        <h2
          id="moments-heading"
          className="text-center font-display text-2xl font-semibold text-site-fg md:text-3xl"
        >
          Little anchors
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {moments.map((m) => (
            <li key={m.title} className="site-card-moment rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="font-display text-lg font-semibold text-site-fg">{m.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-site-fg-muted">{m.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="site-closing-card mt-14 rounded-3xl p-8 text-center backdrop-blur-sm md:p-10">
        <p className="font-display text-xl italic text-site-fg md:text-2xl">{closingLine}</p>
        <p className="mt-4 font-body text-sm text-site-fg-soft">
          — {people.him.fullName} for {people.her.fullName}
        </p>
      </section>
    </main>
  )
}
