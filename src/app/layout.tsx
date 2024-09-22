import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers'

import Header from '@/Layouts/Header'
import Footer from '@/Layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tris Ielts',
  description: 'Tris Ielts'
}

import './globals.css'
import LeftNav from '@/components/LeftNav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className='relative grid grid-cols-1 md:grid-cols-6'>
            <LeftNav />
            <div className='col-span-5'>{children}</div>
          </div>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
