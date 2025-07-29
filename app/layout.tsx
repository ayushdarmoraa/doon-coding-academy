import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleAnalytics from '../components/GoogleAnalytics'
import StructuredData from '../components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Doon Coding Academy | Learn Full Stack, C, Java, Python in Dehradun",
  description:
    "Join Doon Coding Academy in Vikasnagar & Herbertpur to master Full Stack Web Development, C, Java, Python. Learn from expert instructors. Online & Offline Classes.",
  keywords: [
    "coding classes in Dehradun",
    "Full Stack Development course",
    "C programming coaching",
    "Java coaching",
    "Python coaching",
    "coding academy in Vikasnagar",
    "Herbertpur programming classes",
    "best coding institute in Dehradun"
  ],
  authors: [{ name: "Doon Coding Academy" }],
  openGraph: {
    title: "Doon Coding Academy | Learn. Build. Launch.",
    description:
      "Professional coaching for Full Stack Development, C, Java & Python in Vikasnagar, Herbertpur & Dehradun. Offline & Online batches available.",
    url: "https://dooncodingacademy.in",
    siteName: "Doon Coding Academy",
    images: [
      {
        url: "/logo.png", // update this if your logo is somewhere else
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics />
        <StructuredData type="organization" />
      </head>
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
