export function HeartBackdrop() {
  return (
    <>
      <span
        className="pointer-events-none absolute left-[6%] top-[10%] animate-pulse text-3xl text-[color:var(--site-heart)] md:text-4xl"
        aria-hidden
      >
        ♥
      </span>
      <span
        className="pointer-events-none absolute right-[8%] top-[20%] text-2xl text-[color:var(--site-heart)] md:text-3xl"
        style={{ animation: 'pulse 3s ease-in-out infinite 0.5s' }}
        aria-hidden
      >
        ♥
      </span>
      <span
        className="pointer-events-none absolute bottom-[15%] left-[12%] text-xl text-[color:var(--site-heart)] md:text-2xl"
        style={{ animation: 'pulse 2.5s ease-in-out infinite 1s' }}
        aria-hidden
      >
        ♥
      </span>
      <span
        className="pointer-events-none absolute bottom-[22%] right-[10%] animate-pulse text-3xl text-[color:var(--site-heart)]"
        aria-hidden
      >
        ♥
      </span>
    </>
  )
}
