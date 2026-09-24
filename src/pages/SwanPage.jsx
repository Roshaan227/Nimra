import { siteControl } from '../config/siteControl.js'

export default function SwanPage() {
  const { swan, people } = siteControl

  return (
    <main>
      <div className="relative w-full overflow-hidden  md:h-[90vh]">
        <img
          src={swan.heroImage}
          alt={swan.heroImageAlt}
          className="h-full w-full object-cover"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, var(--site-hero-scrim), transparent 55%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="font-body text-xs font-medium uppercase tracking-[0.35em] text-white/90">
            For {people.her.shortName}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-white md:text-5xl">{swan.title}</h1>
          <p className="mt-2 max-w-2xl font-display text-xl italic text-white/95 md:text-2xl">{swan.subtitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-body text-lg leading-relaxed text-site-fg-muted md:text-xl">{swan.lead}</p>

        <div className="mt-12 space-y-12">
          {swan.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface)] p-8 shadow-lg shadow-[color:var(--site-card-shadow)] backdrop-blur-md md:p-10"
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

        <blockquote className="mt-14 rounded-3xl border border-[color:var(--site-poetry-border)] bg-gradient-to-br from-[color:var(--site-poetry-from)] to-[color:var(--site-poetry-to)] p-8 text-center shadow-lg shadow-[color:var(--site-poetry-shadow)] md:p-10">
          <p className="font-display text-xl italic leading-relaxed text-site-fg md:text-2xl">“{swan.quote}”</p>
          <footer className="mt-6 font-body text-sm text-site-fg-soft">— {swan.signOff}</footer>
        </blockquote>

        <p className="mt-10 text-center text-sm text-site-fg-subtle">
          Edit this story in <code className="rounded bg-[color:var(--site-code-bg)] px-1.5 py-0.5">siteControl.swan</code>{' '}
          — same file as theme & colours.
        </p>
      </div>
    </main>
  )
}
