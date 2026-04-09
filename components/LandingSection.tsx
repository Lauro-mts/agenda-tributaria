import React from 'react';

interface EventInfo {
  badge?: string
  title?: React.ReactNode
  subtitle?: string
  data?: string
  local?: React.ReactNode
  horario?: string
  heroSrc?: string
  heroAlt?: string
}

interface LandingSectionProps {
  children: React.ReactNode
  event?: EventInfo
}

const defaults: Required<EventInfo> = {
  badge: 'AGENDA TRIBUTÁRIA 2026',
  title: <>Principais Mudanças e Impactos<br />Jurídicos, Fiscais e Financeiros</>,
  subtitle: 'Para empresas e acionistas | Evento presencial com especialistas referência no tema.',
  data: '09 de Abril',
  local: <>Ágora Tech Park<br/>Joinville/SC</>,
  horario: '8h às 11h',
  heroSrc: '/hero.png',
  heroAlt: 'Especialistas - Agenda Tributária 2026',
}

export function LandingSection({ children, event = {} }: LandingSectionProps) {
  const e = { ...defaults, ...event }
  return (
    <>
      {/* Header */}
      <div className="header animate-fade-down" style={{ marginTop: '20px' }}>
        <div className="badge" style={{ marginBottom: '20px' }}>
          {e.badge}
        </div>
        <h1 style={{ fontSize: '32px', marginBottom: '16px', lineHeight: 1.3 }}>
          {e.title}
        </h1>
        <p style={{ color: '#e8eff5', opacity: 0.8, fontSize: 'clamp(9px, 2.3vw, 13px)', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {e.subtitle}
        </p>
      </div>

      {/* Box wrapper with shadow */}
      <div style={{ borderRadius: '20px', boxShadow: '0 24px 64px rgba(0,0,0,0.7)' }}>

        {/* Hero photo */}
        <div className="hero-photo animate-fade-down-1" style={{ position: 'relative', borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
          <img
            src={e.heroSrc}
            alt={e.heroAlt}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            onError={(ev) => {
              const target = ev.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.style.background =
                'linear-gradient(135deg, rgba(13,122,122,0.3), rgba(201,168,76,0.15))'
              target.parentElement!.style.height = '200px'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(15,37,53,1) 0%, rgba(15,37,53,0.8) 15%, transparent 100%)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Info strip */}
        <div className="info-strip animate-fade-down-2" style={{ display: 'flex', justifyContent: 'center', gap: '0', padding: '0' }}>
          <div className="info-item" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '16px 12px', flex: '1', maxWidth: '180px' }}>
            <span className="info-icon" style={{ fontSize: '20px', marginBottom: '6px' }}>📅</span>
            <div className="info-label">Data</div>
            <div className="info-value" style={{ fontSize: '12px' }}>{e.data}</div>
          </div>
          <div className="info-item" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '16px 12px', flex: '1', maxWidth: '180px' }}>
            <span className="info-icon" style={{ fontSize: '20px', marginBottom: '6px' }}>📍</span>
            <div className="info-label">Local</div>
            <div className="info-value" style={{ fontSize: '11px', lineHeight: 1.3, whiteSpace: 'nowrap' }}>{e.local}</div>
          </div>
          <div className="info-item" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '16px 12px', flex: '1', maxWidth: '180px' }}>
            <span className="info-icon" style={{ fontSize: '20px', marginBottom: '6px' }}>🕒</span>
            <div className="info-label">Evento</div>
            <div className="info-value" style={{ fontSize: '12px' }}>{e.horario}</div>
          </div>
        </div>

        {/* Bottom slot — CTA ou formulário */}
        {children}

      </div>{/* end box wrapper */}
    </>
  )
}
