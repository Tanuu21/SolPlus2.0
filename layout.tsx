import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Providers } from '@/components/providers'
import { Toaster } from 'sonner'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: { default: 'SolPlus — Solana Meme Coin Intelligence', template: '%s | SolPlus' },
  description: 'Real-time Pump.fun graduation alerts, AI rug detection, whale tracking, and portfolio analytics for Solana traders.',
  keywords: ['Solana', 'meme coins', 'pump.fun', 'DeFi', 'trading signals', 'graduation alerts', 'rug detection', 'whale tracker'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solplus.fun',
    title: 'SolPlus — Solana Meme Coin Intelligence',
    description: 'Catch Solana meme coins before they moon.',
    siteName: 'SolPlus',
  },
  twitter: { card: 'summary_large_image', title: 'SolPlus', description: 'Solana Meme Coin Intelligence Platform' },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://solplus.fun'),
}

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#000000' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <Toaster
            theme="dark"
            toastOptions={{
              classNames: {
                toast: 'bg-zinc-900 border border-zinc-800 text-white rounded-xl',
                description: 'text-zinc-400',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
