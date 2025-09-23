import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snehal - Product Manager | Career RPG Portfolio',
  description: 'Explore the career journey of Snehal, a Product Manager passionate about building engaging user experiences. Complete quests, unlock achievements, and discover the story behind the products.',
  keywords: 'Product Manager, Portfolio, PM, Product Management, Career, Interactive Portfolio',
  authors: [{ name: 'Snehal' }],
  openGraph: {
    title: 'Snehal - Product Manager | Career RPG Portfolio',
    description: 'An interactive, game-like portfolio showcasing Product Management expertise',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="game-container">
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1A1A2E',
                color: '#fff',
                border: '1px solid #8B5CF6',
              },
            }}
          />
        </div>
      </body>
    </html>
  )
}
