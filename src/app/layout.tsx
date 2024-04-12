import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'YEBOAA IMPEX LIMITED',
  description:
    'General merchants import export goods clearing and fowarding chandling general farming building and road construction civil works plumbing and electrical works',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
