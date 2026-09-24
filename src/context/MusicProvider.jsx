import { useCallback, useEffect, useRef, useState } from 'react'
import { siteControl } from '../config/siteControl.js'
import { MusicContext } from './musicContext.js'

export function MusicProvider({ children }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const src = siteControl.music?.src?.trim()
  const baseVolume = Math.min(1, Math.max(0, siteControl.music?.volume ?? 0.45))

  useEffect(() => {
    const el = audioRef.current
    if (!el || !src) return
    el.loop = siteControl.music?.loop !== false
    el.volume = muted ? 0 : baseVolume
    const onEnded = () => setPlaying(false)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    el.addEventListener('ended', onEnded)
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    return () => {
      el.removeEventListener('ended', onEnded)
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
    }
  }, [src, muted, baseVolume])

  const togglePlay = useCallback(async () => {
    const el = audioRef.current
    if (!el || !src) return
    try {
      if (playing) el.pause()
      else await el.play()
    } catch {
      setPlaying(false)
    }
  }, [playing, src])

  const toggleMute = useCallback(() => {
    setMuted((m) => !m)
  }, [])

  const value = {
    src,
    playing,
    muted,
    togglePlay,
    toggleMute,
    trackTitle: siteControl.music?.title ?? 'Music',
    trackArtist: siteControl.music?.artist ?? '',
  }

  return (
    <MusicContext.Provider value={value}>
      {src ? <audio ref={audioRef} src={src} preload="auto" className="hidden" playsInline /> : null}
      {children}
    </MusicContext.Provider>
  )
}
