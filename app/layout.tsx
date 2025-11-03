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
  metadataBase: new URL('https://rohit-kaushik.vercel.app'),
  title: {
    default: 'Rohit Kaushik - Full Stack Developer',
    template: '%s | Rohit Kaushik',
  },
  description: 'Full Stack Developer crafting digital experiences at the intersection of design, technology, and user experience.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Flutter', 'TypeScript', 'Web Development', 'UI/UX', 'Tech Lead', 'Zylentrix'],
  authors: [{ name: 'Rohit Kaushik', url: 'https://rohit-kaushik.vercel.app' }],
  creator: 'Rohit Kaushik',
  publisher: 'Rohit Kaushik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohit-kaushik.vercel.app',
    title: 'Rohit Kaushik — Full Stack Developer',
    description: 'Full Stack Developer crafting digital experiences at the intersection of design, technology, and user experience.',
    siteName: 'Rohit Kaushik Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Kaushik - Full Stack Developer',
    description: 'Full Stack Developer crafting digital experiences.',
    creator: '@_rohit_hrk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
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
