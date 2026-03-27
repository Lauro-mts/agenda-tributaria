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
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>

          {section === 'landing' && (
            <LandingSection onStart={() => setSection('form')} />
          )}

          {section === 'form' && (
            <FormSection
              onBack={() => setSection('landing')}
              onSuccess={handleSuccess}
              onToast={showToast}
            />
          )}

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
            <img src="/tpz.png" alt="Logo" style={{ height: '48px', opacity: 0.5 }} />
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
