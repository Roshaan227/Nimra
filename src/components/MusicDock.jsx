import { useMusic } from '../hooks/useMusic.js'

export function MusicDock() {
  const { src, playing, muted, togglePlay, toggleMute, trackTitle, trackArtist } = useMusic()

  if (!src) {
    return (
      <div
        className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-[color:var(--site-music-hint-border)] bg-[color:var(--site-music-hint-bg)] px-4 py-3 text-center text-sm text-[color:var(--site-music-hint-fg)] shadow-lg backdrop-blur-md md:left-auto md:right-6 md:mx-0"
        role="status"
      >
        <p className="font-medium">Background music</p>
        <p className="mt-1 text-xs text-[color:var(--site-music-hint-muted)]">
          Add an MP3 to{' '}
          <code className="rounded bg-[color:var(--site-music-hint-code)] px-1">public/music/</code> and set{' '}
          <code className="rounded bg-[color:var(--site-music-hint-code)] px-1">music.src</code> in{' '}
          <code className="rounded bg-[color:var(--site-music-hint-code)] px-1">src/config/siteControl.js</code>{' '}
          (e.g. <code className="rounded bg-[color:var(--site-music-hint-code)] px-1">/music/song.mp3</code>). Colours
          come from <code className="rounded bg-[color:var(--site-music-hint-code)] px-1">index.css</code> themes +
          <code className="rounded bg-[color:var(--site-music-hint-code)] px-1"> ui.theme</code>. Then tap Play — it
          continues across pages.
        </p>
      </div>
    )
  }

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-[color:var(--site-music-dock-border)] bg-[color:var(--site-card-surface-strong)] px-4 py-3 shadow-xl shadow-[color:var(--site-music-dock-shadow)] backdrop-blur-md md:left-auto md:right-6 md:mx-0"
      role="region"
      aria-label="Background music controls"
    >
      <button
        type="button"
        onClick={togglePlay}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--site-music-play-from)] to-[color:var(--site-music-play-to)] text-lg text-white shadow-md transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--site-music-play-ring)]"
        aria-pressed={playing}
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? '❚❚' : '▶'}
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-sm font-semibold text-[color:var(--site-fg)]">{trackTitle}</p>
        {trackArtist ? (
          <p className="truncate text-xs text-[color:var(--site-fg-muted)]">{trackArtist}</p>
        ) : (
          <p className="truncate text-xs text-[color:var(--site-fg-soft)]">Plays across all pages</p>
        )}
      </div>
      <button
        type="button"
        onClick={toggleMute}
        className="rounded-full px-2 py-1 text-xs font-medium text-[color:var(--site-fg-muted)] underline-offset-2 hover:underline"
        aria-pressed={muted}
      >
        {muted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  )
}
