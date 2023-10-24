import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unofficial Chelsea Material Collection Calendar',
  description: 'An unofficial web app for the material collection schedule of Chelsea, Quebec.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#004751] text-white'>{children}</body>
    </html>
  )
}
