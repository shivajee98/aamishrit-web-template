import Footer from '@/components/global/footer'
import NavigationBar from '@/components/global/navigation'
import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
    <NavigationBar />
    <main className="flex-grow">{children}</main>
  </div>
  )
}

export default RootLayout
