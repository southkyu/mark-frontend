import React from 'react'

export interface ButtonProps {
  label: string
  onClick?: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#0070f3',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )
}
