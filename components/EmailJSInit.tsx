'use client'

import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

export function EmailJSInit() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (key) emailjs.init(key)
  }, [])
  return null
}
