import { siteControl } from '../config/siteControl.js'

export default function FlowersPage() {
  const { flowers } = siteControl

  return (
    <main className="mx-auto max-w-5xl px-5 pt-12 md:px-8 md:pt-16">
      <h1 className="text-center font-display text-4xl font-semibold text-site-fg md:text-5xl">
        Flowers for you
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center font-body text-lg text-site-fg-muted">
        {flowers.intro}
      </p>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm text-site-fg-soft">
        Image URLs live in <code className="rounded bg-[color:var(--site-code-bg)] px-1">siteControl.flowers.items</code>{' '}
        — swap them anytime.
      </p>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {flowers.items.map((item, i) => (
          <li
            key={item.src + i}
            className="group overflow-hidden rounded-3xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface-strong)] shadow-xl shadow-[color:var(--site-card-shadow)]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[color:var(--site-image-placeholder)]">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <p className="font-body text-sm leading-relaxed text-site-fg-muted">{item.caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
