import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Global font (currently default from create next app)
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anniesland Christmas Trees',
  description: 'Scotland based Christmas Tree business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
