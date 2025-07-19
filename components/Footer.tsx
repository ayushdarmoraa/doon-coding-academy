import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-green">&lt;DCA/&gt;</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Empowering the next generation of programmers with comprehensive coding education 
              in Vikasnagar and Herbertpur, Dehradun. Learn. Build. Launch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-green transition-colors">Home</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-green transition-colors">Courses</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-green transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-green transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-green transition-colors">Blog</Link></li>
              <li><Link href="/enroll" className="text-gray-300 hover:text-green transition-colors">Enroll Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-green mt-1" />
                <div>
                  <p className="text-gray-300">+91 7037905464</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-green mt-1" />
                <p className="text-gray-300">dooncodingacademy@gmail.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-green mt-1" />
                <div>
                  <p className="text-gray-300">Vikasnagar, Dehradun</p>
                  <p className="text-gray-300">Herbertpur, Dehradun</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            © 2024 Doon Coding Academy. All rights reserved. | 
            <Link href="/privacy" className="text-green hover:underline ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="text-green hover:underline ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
