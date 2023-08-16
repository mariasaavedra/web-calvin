import './globals.css'
import type { Metadata } from 'next'
import { Sen } from 'next/font/google'

const sen = Sen({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ideas/Activities',
  description: 'Ideas of things to do in Kansas City and surrounding area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  )
}
