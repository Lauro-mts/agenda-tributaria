export function SuccessSection() {
  return (
    <div
      style={{
        background: 'linear-gradient(160deg, rgba(15,37,53,0.97), rgba(10,24,36,0.99))',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '52px 32px',
        textAlign: 'center',
        animation: 'fadeUp 0.5s ease both',
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(45,202,114,0.12)',
          border: '1px solid rgba(45,202,114,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '32px',
        }}
      >
        ✓
      </div>

      <h2
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '26px',
          fontWeight: 600,
          color: '#fff',
          marginBottom: '12px',
        }}
      >
        Recebemos o seu pedido de inscrição.
      </h2>

      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '380px', margin: '0 auto' }}>
        Em breve nossa equipe entrará em contato para confirmar a sua solicitação.
      </p>
    </div>
  )
}
