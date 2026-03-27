export function Background() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #050e14 0%, #07161f 40%, #091c28 70%, #040c12 100%)',
        }}
      />
      {/* Radial glows */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 80% 10%, rgba(13,122,122,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 30% 30% at 60% 55%, rgba(26,179,179,0.06) 0%, transparent 50%)
          `,
        }}
      />
      {/* Grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(90deg,transparent,transparent 38px,rgba(255,255,255,0.018) 38px,rgba(255,255,255,0.018) 39px)',
        }}
      />
    </div>
  )
}
