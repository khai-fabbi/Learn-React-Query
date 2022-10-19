import * as React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  bg?: string
}

export default function Button({
  children,
  className,
  onClick,
  bg,
}: ButtonProps) {
  let bgColor = 'bg-[#2196F3]'
  switch (bg) {
    case 'warning':
      bgColor = 'bg-[#ff9800]'
      break
    case 'danger':
      bgColor = 'bg-[#f44336]'
      break
    case 'success':
      bgColor = 'bg-[#04AA6D]'
      break
    default:
      bgColor = 'bg-[#2196F3]'
  }
  return (
    <button
      className={`${className} px-3 py-2 text-white font-bold rounded ${bgColor} min-w-[100px] min-h-[40px] hover:brightness-110 transition-all active:scale-110`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
