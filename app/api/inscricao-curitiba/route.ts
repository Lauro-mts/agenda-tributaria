import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL_CURITIBA
    if (!googleScriptUrl) {
      return NextResponse.json({ error: 'GOOGLE_SCRIPT_URL_CURITIBA não configurado' }, { status: 500 })
    }

    await fetch(googleScriptUrl, {
      method: 'POST',
      mode: 'no-cors' as RequestMode,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Erro ao salvar no Google Sheets (Curitiba):', err)
    return NextResponse.json({ error: 'Falha ao registrar inscrição' }, { status: 500 })
  }
}
