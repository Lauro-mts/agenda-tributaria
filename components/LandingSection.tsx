import React from 'react';

interface LandingSectionProps {
  onStart: () => void
}

export function LandingSection({ onStart }: LandingSectionProps) {
  return (
    <>
      {/* Header */}
      <div className="header animate-fade-down" style={{ marginTop: '20px' }}>
        <div className="badge" style={{ marginBottom: '20px' }}>
          AGENDA TRIBUTÁRIA 2026
        </div>
        <h1 style={{ fontSize: '32px', marginBottom: '16px', lineHeight: 1.3 }}>
          Principais Mudanças e Impactos<br />
          Jurídicos, Fiscais e Financeiros
        </h1>
        <p style={{ color: '#e8eff5', opacity: 0.8, fontSize: '15px' }}>
          Para empresas e acionistas — evento presencial com especialistas referência no tema.
        </p>
      </div>

      {/* Box wrapper with shadow */}
      <div style={{ borderRadius: '20px', boxShadow: '0 24px 64px rgba(0,0,0,0.7)' }}>

      {/* Hero photo */}
      <div className="hero-photo animate-fade-down-1" style={{ position: 'relative', borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
        <img
          src="/hero.png"
          alt="Especialistas - Agenda Tributária 2026"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement
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
      <div className="info-strip animate-fade-down-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '0' }}>
        <div className="info-item" style={{ flexDirection: 'row', padding: '16px 12px' }}>
          <span className="info-icon" style={{ fontSize: '18px' }}>📅</span>
          <div>
            <div className="info-label">Data</div>
            <div className="info-value" style={{ fontSize: '12px' }}>09 de Abril</div>
          </div>
        </div>
        <div className="info-item" style={{ flexDirection: 'row', padding: '16px 12px' }}>
          <span className="info-icon" style={{ fontSize: '18px' }}>📍</span>
          <div>
            <div className="info-label">Local</div>
            <div className="info-value" style={{ fontSize: '11px', lineHeight: 1.2 }}>Ágora Tech Park<br />Joinville/SC</div>
          </div>
        </div>
        <div className="info-item" style={{ flexDirection: 'row', padding: '16px 12px' }}>
          <span className="info-icon" style={{ fontSize: '18px' }}>🕒</span>
          <div>
            <div className="info-label">Evento</div>
            <div className="info-value" style={{ fontSize: '12px' }}>9h às 11h</div>
          </div>
        </div>
      </div>

      {/* Card with CTA */}
      <div
        className="animate-fade-down-3"
        style={{
          background: 'rgba(15, 37, 53, 0.95)',
          border: '1px solid var(--border)',
          borderTop: 'none',
          borderRadius: '0 0 20px 20px',
          padding: '40px 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '32px', fontWeight: 600, color: 'var(--text)', marginBottom: '16px', lineHeight: 1.2 }}>
          Garanta sua<br />
          <span style={{ color: 'var(--teal-light)' }}>inscrição gratuita</span>
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            lineHeight: '1.7',
            marginBottom: '28px',
            maxWidth: '400px',
          }}
        >
          Participe de um encontro sobre as principais mudanças tributárias que impactam sua empresa em 2026.
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 16px', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '16px' }}>⏳</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--gold-light)' }}>Vagas limitadas</span>
        </div>

        <button className="btn-submit" onClick={onStart} style={{ maxWidth: '300px' }}>
          Solicitar inscrição →
        </button>
      </div>

      </div>{/* end box wrapper */}
    </>
  )
}
