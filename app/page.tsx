'use client'

import { useState } from 'react'
import { Background } from '@/components/Background'
import { LandingSection } from '@/components/LandingSection'
import { FormSection } from '@/components/FormSection'
import { SuccessModal } from '@/components/SuccessModal'
import { Toast } from '@/components/Toast'
import { EmailJSInit } from '@/components/EmailJSInit'

type Section = 'landing' | 'form'

interface ToastState {
  message: string
  isError: boolean
}

export default function Home() {
  const [section, setSection] = useState<Section>('landing')
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState<ToastState | null>(null)

  function showToast(message: string, isError = false) {
    setToast({ message, isError })
  }

  function handleSuccess() {
    setSection('landing')
    setShowModal(true)
  }

  return (
    <>
      <EmailJSInit />
      <Background />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          overflowX: 'hidden',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>

          <LandingSection>
            {section === 'landing' ? (
              /* CTA card */
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
                  <span style={{ color: 'var(--teal-light)' }}>inscrição</span>
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '28px', maxWidth: '400px' }}>
                  Participe de um encontro sobre as principais mudanças tributárias que impactam sua empresa em 2026.
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 16px', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '16px' }}>⏳</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--gold-light)' }}>Vagas limitadas</span>
                </div>
                <button className="btn-submit" onClick={() => setSection('form')} style={{ maxWidth: '300px' }}>
                  Solicitar inscrição →
                </button>
              </div>
            ) : (
              /* Formulário inline */
              <FormSection
                onBack={() => setSection('landing')}
                onSuccess={handleSuccess}
                onToast={showToast}
              />
            )}
          </LandingSection>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
            <img src="/tpz.png" alt="Logo" style={{ height: '64px', opacity: 1, filter: 'brightness(1.3)' }} />
          </div>

        </div>
      </div>

      {showModal && (
        <SuccessModal onClose={() => setShowModal(false)} />
      )}

      {toast && (
        <Toast
          message={toast.message}
          isError={toast.isError}
          onDismiss={() => setToast(null)}
        />
      )}
    </>
  )
}
