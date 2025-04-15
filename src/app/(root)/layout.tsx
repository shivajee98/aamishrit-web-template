import NavigationBar from '@/components/global/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='select-none relative scrollbar-hide'>
      <ClerkProvider>
        <NavigationBar />
        <main className='mt-16'>
          {children}
          {/* <Toaster /> */}
        </main>
    </ClerkProvider >
    </div>
  )
}

export default RootLayout
