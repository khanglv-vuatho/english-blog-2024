'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { NextUIProvider } from '@nextui-org/react'
import ScrollToTop from '@/components/ScrollToTop'
import { Analytics } from '@vercel/analytics/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <ToastContainer />
        <Analytics />
        <ProgressBar height='4px' color='#3748A0' options={{ showSpinner: true }} shallowRouting />
        {children}
        <ScrollToTop />
      </NextThemesProvider>
    </NextUIProvider>
  )
}
