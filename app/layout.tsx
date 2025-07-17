import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doon Coding Academy - Learn. Build. Launch.',
  description: 'Professional coding education in Vikasnagar and Herbertpur, Dehradun. Learn Full Stack Development, C, Java, Python with expert instructors.',
  keywords: 'coding academy, programming courses, full stack development, C programming, Java, Python, Dehradun, Vikasnagar, Herbertpur',
  authors: [{ name: 'Doon Coding Academy' }],
  openGraph: {
    title: 'Doon Coding Academy - Learn. Build. Launch.',
    description: 'Professional coding education in Vikasnagar and Herbertpur, Dehradun.',
    type: 'website',
    locale: 'en_US',
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
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
