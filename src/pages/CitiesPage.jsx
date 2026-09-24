import { Link } from 'react-router-dom'
import { siteControl } from '../config/siteControl.js'

export default function CitiesPage() {
  const { cities } = siteControl

  return (
    <main className="mx-auto max-w-5xl px-5 pt-12 md:px-8 md:pt-16">
      <h1 className="text-center font-display text-4xl font-semibold text-site-fg md:text-5xl">
        Cities you love
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center font-body text-lg text-site-fg-muted">
        Lahore first, Abbottabad second — her favourite cities in order. Tap a card for photos (including
        Lahore’s Androon & history, plus Islamabad monuments on the Lahore page). Everything is editable in{' '}
        <code className="rounded  px-1">siteControl.js</code>.
      </p>

      <ul className="mt-12 grid gap-10 lg:grid-cols-2">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link
              to={`/cities/${city.slug}`}
              className="group block overflow-hidden rounded-3xl border border-[color:var(--site-card-border)] bg-[color:var(--site-card-surface-strong)] shadow-xl shadow-[color:var(--site-card-shadow)] transition hover:shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[color:var(--site-image-placeholder)]">
                <img
                  src={city.image}
                  alt={city.imageAlt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-site-fg">{city.name}</h2>
                <p className="mt-2 font-display text-lg italic text-[color:var(--site-city-tagline)]">
                  {city.tagline}
                </p>
                <p className="mt-3 line-clamp-3 font-body text-sm text-site-fg-muted">{city.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-site-link underline-offset-4 group-hover:underline">
                  Open {city.name} →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
