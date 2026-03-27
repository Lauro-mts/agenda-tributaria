'use client'

interface SuccessModalProps {
  onClose: () => void
}

export function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(5, 14, 20, 0.85)',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.25s ease both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(160deg, rgba(15,37,53,0.98), rgba(10,24,36,0.99))',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '48px 32px',
          textAlign: 'center',
          maxWidth: '420px',
          width: '100%',
          animation: 'fadeDown 0.3s ease both',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(45,202,114,0.12)',
            border: '1px solid rgba(45,202,114,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '28px',
            color: '#2dca72',
          }}
        >
          ✓
        </div>

        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '24px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '14px',
            lineHeight: 1.3,
          }}
        >
          Recebemos o seu pedido<br />de inscrição.
        </h2>

        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          Em breve nossa equipe entrará em contato para confirmar a sua solicitação.
        </p>

        <button
          onClick={onClose}
          className="btn-submit"
          style={{ marginTop: '32px', maxWidth: '200px' }}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}
