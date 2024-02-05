import type { Metadata } from 'next'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import ClientOnly from './components/ClientOnly'
import { Nunito } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { 
  title: 'Airbnb',
  description: 'Airbnb clone by H',
}

const font = Nunito ({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <Modal />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
