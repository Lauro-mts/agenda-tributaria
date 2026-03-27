'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FieldGroup } from './FieldGroup'

interface FormSectionProps {
  onBack: () => void
  onSuccess: () => void
  onToast: (msg: string, isError?: boolean) => void
}

function maskPhone(value: string): string {
  let v = value.replace(/\D/g, '').substring(0, 11)
  if (v.length <= 10) {
    v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  } else {
    v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }
  return v.replace(/-$/, '')
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function FormSection({ onBack, onSuccess, onToast }: FormSectionProps) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({ nome: false, telefone: false, email: false })
  const [loading, setLoading] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  function handlePhoneInput(e: React.FormEvent<HTMLInputElement>) {
    setTelefone(maskPhone((e.target as HTMLInputElement).value))
  }

  async function handleSubmit() {
    const tel_digits = telefone.replace(/\D/g, '')
    const newErrors = {
      nome: !nome,
      telefone: tel_digits.length < 10,
      email: !validateEmail(email),
    }
    setErrors(newErrors)
    if (Object.values(newErrors).some(Boolean)) return

    setLoading(true)

    const now = new Date()
    const dataHora = now.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    const payload = { nome, telefone, email, dataHora }

    try {
      // 1) Salvar no Google Sheets via API Route
      await fetch('/api/inscricao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      onSuccess()

      // 2) Notificação para o organizador via EmailJS (opcional)
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: process.env.NEXT_PUBLIC_EMAIL_ORGANIZADOR,
          nome_inscrito: nome,
          email_inscrito: email,
          telefone_inscrito: telefone,
          data_hora: dataHora,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ).catch((err) => console.warn('EmailJS falhou (não crítico):', err))

    } catch (err) {
      console.error(err)
      onToast('Erro ao enviar inscrição. Tente novamente.', true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        background: 'linear-gradient(160deg, rgba(15,37,53,0.97), rgba(10,24,36,0.99))',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '32px 28px',
        animation: 'fadeDown 0.4s ease both',
      }}
    >
      {/* Header do form */}
      <div style={{ marginBottom: '28px' }}>
        <button className="btn-back" onClick={onBack} style={{ marginBottom: '20px' }}>
          ← Voltar
        </button>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '22px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '6px',
          }}
        >
          Preencha seus dados
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Entraremos em contato com os detalhes do evento.
        </p>
      </div>

      {/* Campos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        <FieldGroup
          id="nome"
          label="Nome completo"
          placeholder="Seu nome completo"
          value={nome}
          onChange={setNome}
          error={errors.nome}
        />

        <FieldGroup
          id="telefone"
          label="WhatsApp"
          type="tel"
          placeholder="(00) 00000-0000"
          value={telefone}
          onChange={setTelefone}
          onInput={handlePhoneInput}
          error={errors.telefone}
          errorMessage="Informe um telefone válido"
        />

        <FieldGroup
          id="email"
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={setEmail}
          error={errors.email}
          errorMessage="Informe um e-mail válido"
        />
      </div>

      <button
        ref={btnRef}
        className={`btn-submit ${loading ? 'loading' : ''}`}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Enviando…' : 'Confirmar inscrição'}
      </button>

      <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '14px' }}>
        🔒 Seus dados são tratados com sigilo absoluto
      </p>
    </div>
  )
}
