import { Link, useParams } from 'react-router-dom'
import { siteControl } from '../config/siteControl.js'

export default function CityDetailPage() {
  const { slug } = useParams()
  const city = siteControl.cities.find((c) => c.slug === slug)

  if (!city) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="font-body text-site-fg-muted">City not found.</p>
        <Link to="/cities" className="mt-4 inline-block text-site-link underline">
          Back to cities
        </Link>
      </main>
    )
  }

  const gallery = city.gallery ?? []
  const islamabadLove = city.islamabadLove

  return (
    <main>
      <div className="relative h-[42vh] min-h-[240px] w-full overflow-hidden bg-[color:var(--site-image-placeholder)] md:h-[80vh]">
        <img
          src={city.image}
          alt={city.imageAlt}
          className="h-full w-full object-cover"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, var(--site-hero-scrim), transparent 65%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <Link
            to="/cities"
            className="inline-block text-sm font-medium text-white/90 hover:text-white"
          >
            ← All cities
          </Link>
          <h1 className="mt-2 font-display text-4xl font-semibold text-white md:text-5xl">{city.name}</h1>
          <p className="mt-2 max-w-2xl font-display text-xl italic text-white/95">{city.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-body text-lg leading-relaxed text-site-fg-muted">{city.description}</p>

        <h2 className="mt-10 font-display text-2xl font-semibold text-site-fg">Highlights</h2>
        <ul className="mt-4 space-y-2">
          {city.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 font-body text-site-fg-muted">
              <span className="mt-1 text-[color:var(--site-bullet)]" aria-hidden>
                ✦
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {gallery.length > 0 ? (
          <section className="mt-14" aria-labelledby="city-gallery">
            <h2 id="city-gallery" className="font-display text-2xl font-semibold text-site-fg">
              More of {city.name}
            </h2>
            <p className="mt-2 font-body text-sm text-site-fg-soft">
              Historical and street views — URLs live in <code className="rounded bg-[color:var(--site-code-bg)] px-1">siteControl.cities[].gallery</code>.
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {gallery.map((item) => (
                <li
                  key={item.src}
                  className="overflow-hidden rounded-2xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface)] shadow-md shadow-[color:var(--site-card-shadow)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[color:var(--site-image-placeholder)]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="p-4 font-body text-sm leading-relaxed text-site-fg-muted">{item.caption}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {islamabadLove ? (
          <section className="mt-16 border-t border-[color:var(--site-card-border)] pt-14" aria-labelledby="isb-section">
            <h2 id="isb-section" className="font-display text-2xl font-semibold text-site-fg">
              {islamabadLove.title}
            </h2>
            <p className="mt-3 font-body leading-relaxed text-site-fg-muted">{islamabadLove.intro}</p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {islamabadLove.images.map((item) => (
                <li
                  key={item.src}
                  className="overflow-hidden rounded-2xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface)] shadow-md shadow-[color:var(--site-card-shadow)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[color:var(--site-image-placeholder)]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="p-4 font-body text-sm leading-relaxed text-site-fg-muted">{item.caption}</p>
                </li>
              ))}
            </ul>
            {/* <p className="mt-6 text-center text-sm text-site-fg-soft">
              Islamabad photos: edit <code className="rounded bg-[color:var(--site-code-bg)] px-1">islamabadLove.images</code> under the Lahore entry in{' '}
              <code className="rounded bg-[color:var(--site-code-bg)] px-1">siteControl.js</code>.
            </p> */}
          </section>
        ) : null}

        {/* <p className="mt-12 text-center text-sm text-site-fg-soft">
          Hero image: <code className="rounded bg-[color:var(--site-code-bg)] px-1">cities[].image</code> in{' '}
          <code className="rounded bg-[color:var(--site-code-bg)] px-1">siteControl.js</code>. Use Wikimedia Commons or files in{' '}
          <code className="rounded bg-[color:var(--site-code-bg)] px-1">public/</code>.
        </p> */}
      </div>
    </main>
  )
}
