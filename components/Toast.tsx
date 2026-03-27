'use client'

import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  isError?: boolean
  onDismiss: () => void
}

export function Toast({ message, isError = false, onDismiss }: ToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Trigger show animation
    const showTimer = setTimeout(() => setVisible(true), 10)
    // Auto-dismiss
    const hideTimer = setTimeout(() => {
      setVisible(false)
      setTimeout(onDismiss, 300)
    }, 4000)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [onDismiss])

  return (
    <div className={`toast ${visible ? 'show' : ''} ${isError ? 'error-toast' : ''}`}>
      {isError ? '⚠️' : '✅'} {message}
    </div>
  )
}
