import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleAnalytics from '../components/GoogleAnalytics'
import StructuredData from '../components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Doon Coding Academy | Best Data Science, Full Stack, Java, Python Classes in Dehradun",
  description:
    "Join Doon Coding Academy in Dehradun & Herbertpur for Data Science bootcamp, Full Stack Web Development, Java, Python courses. Expert instructors, job placement assistance. Online & Offline Classes.",
  keywords: [
    "Dehradun coding academy",
    "Data Science bootcamp Dehradun",
    "Python course Herbertpur",
    "coding bootcamp Herbertpur",
    "Full Stack Development course Dehradun",
    "Java coaching Dehradun",
    "Python coaching Dehradun",
    "coding academy in Vikasnagar",
    "Herbertpur programming classes",
    "best coding institute in Dehradun",
    "Data Science courses in Dehradun",
    "Machine Learning training Dehradun"
  ],
  authors: [{ name: "Doon Coding Academy" }],
  openGraph: {
    title: "Doon Coding Academy | Learn Data Science, Full Stack Development in Dehradun",
    description:
      "Professional Data Science bootcamp, Full Stack Development, Java & Python coaching in Dehradun, Herbertpur. Job placement assistance. Online & Offline batches available.",
    url: "https://dooncodingacademy.in",
    siteName: "Doon Coding Academy",
    images: [
      {
        url: "/logo.png",
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
        <StructuredData type="faq" />
        <StructuredData type="review" data={{
          author: "Priya Sharma",
          review: "The Full Stack course at DCA completely changed my career. The instructors are amazing and the practical approach helped me land my dream job."
        }} />
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
