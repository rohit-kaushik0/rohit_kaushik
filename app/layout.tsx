import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Rohit Kaushik - Full Stack Developer',
  description: 'Full Stack Developer crafting digital experiences at the intersection of design, technology, and user experience.',
  keywords: 'Full Stack Developer, React, Next.js, Flutter, TypeScript, Web Development, UI/UX',
  authors: [{ name: 'Rohit Kaushik' }],
  openGraph: {
    type: 'website',
    title: 'Rohit Kaushik — Full Stack Developer',
    description: 'Full Stack Developer crafting digital experiences.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased`}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid #333',
            },
          }}
        />
      </body>
    </html>
  )
}
