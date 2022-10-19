import * as React from 'react'
import Header from './Header'

export interface LayoutMainProps {
  children: React.ReactNode
}

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <div>
      <Header></Header>
      <div className="max-w-6xl mx-auto py-5">{children}</div>
    </div>
  )
}
