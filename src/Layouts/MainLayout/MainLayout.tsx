import React from 'react'
import Footer from 'src/Component/Footer'
import Header from 'src/Component/Header'

interface Prop {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Prop) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
