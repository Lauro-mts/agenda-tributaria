import type { Metadata } from 'next'
import '../globals.css'
import './curitiba.css'

export const metadata: Metadata = {
  title: 'Inscrição — Agenda Tributária 2026 | Curitiba',
  description: 'Inscreva-se no evento Agenda Tributária 2026 em Curitiba',
}

export default function CuritibaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
