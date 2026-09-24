import { siteControl } from '../config/siteControl.js'

export default function PoetryPage() {
  const { poetry } = siteControl

  return (
    <main className="mx-auto max-w-3xl px-5 pt-12 md:px-8 md:pt-16">
      <h1 className="text-center font-display text-4xl font-semibold text-site-fg md:text-5xl">
        Urdu poetry
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center font-body text-lg text-site-fg-muted">
        {poetry.intro}
      </p>

      <ul className="mt-12 space-y-10">
        {poetry.verses.map((v, i) => (
          <li
            key={i}
            className="rounded-3xl border border-[color:var(--site-poetry-border)] bg-gradient-to-br from-[color:var(--site-poetry-from)] to-[color:var(--site-poetry-to)] p-8 shadow-lg shadow-[color:var(--site-poetry-shadow)] md:p-10"
          >
            <p className="font-urdu text-center text-2xl leading-relaxed text-site-fg md:text-3xl" dir="rtl" lang="ur">
              {v.urdu}
            </p>
            <p className="mt-4 text-center font-body text-sm italic text-site-fg-soft">{v.roman}</p>
            <p className="mt-4 text-center font-display text-sm font-semibold text-site-poetry-poet">{v.poet}</p>
            <p className="mt-2 text-center font-body text-sm text-site-fg-muted">{v.note}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
