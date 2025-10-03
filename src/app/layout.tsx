import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tourist - เว็ปแนะนำสถานที่ท่องเที่ยว',
  description: 'Discover amazing tourism destinations in Thailand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}