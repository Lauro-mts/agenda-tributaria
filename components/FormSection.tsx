'use client'

import { useState } from 'react'
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
      await fetch('/api/inscricao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      onSuccess()

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
      className="animate-fade-down-3"
      style={{
        background: 'rgba(15, 37, 53, 0.95)',
        border: '1px solid var(--border)',
        borderTop: 'none',
        borderRadius: '0 0 20px 20px',
        padding: '32px 28px',
      }}
    >
      {/* Título */}
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '26px',
          fontWeight: 600,
          color: 'var(--text)',
          marginBottom: '6px',
          lineHeight: 1.2,
        }}>
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
        className={`btn-submit ${loading ? 'loading' : ''}`}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Enviando…' : 'Confirmar inscrição →'}
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            fontSize: '13px',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: '4px',
          }}
        >
          ← Voltar
        </button>
      </div>

      <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>
        🔒 Seus dados são tratados com sigilo absoluto
      </p>
    </div>
  )
}
