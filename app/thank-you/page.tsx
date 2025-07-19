import Link from 'next/link'
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: "Thank You | Doon Coding Academy",
  description: "Thank you for contacting Doon Coding Academy. We'll get back to you soon!",
}

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-navy mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-navy mb-4">What's Next?</h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-green-600 text-sm font-bold">1</span>
              </div>
              <p className="text-gray-600">We'll review your inquiry and course interest</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-green-600 text-sm font-bold">2</span>
              </div>
              <p className="text-gray-600">Our team will contact you with course details</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-green-600 text-sm font-bold">3</span>
              </div>
              <p className="text-gray-600">Schedule a free consultation if needed</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-navy mb-4">Need Immediate Help?</h3>
          <div className="space-y-3">
            <a 
              href="tel:+917037905464" 
              className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-700"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7037905464</span>
            </a>
            <a 
              href="mailto:dooncodingacademy@gmail.com" 
              className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-700"
            >
              <Mail className="w-4 h-4" />
              <span>dooncodingacademy@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/917037905464" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full mt-4"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="flex items-center justify-center space-x-2 text-navy hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link 
            href="/courses" 
            className="btn-outline"
          >
            View Our Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

