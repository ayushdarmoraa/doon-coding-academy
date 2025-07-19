import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata = {
  title: "Contact Us | Doon Coding Academy",
  description:
    "Get in touch with Doon Coding Academy for admissions, inquiries, and course details. Visit us in Vikasnagar or Herbertpur, or message us online.",
  keywords: [
    "contact coding academy",
    "doon coding contact",
    "coding classes admission",
    "inquire about programming course",
    "Dehradun coding institute phone"
  ],
  openGraph: {
    title: "Contact Doon Coding Academy",
    description:
      "Reach out to us to join our coding classes in Full Stack, Java, Python, and C. Offline and online support available.",
    url: "https://dooncodingacademy.in/contact",
    siteName: "Doon Coding Academy",
    locale: "en_IN",
    type: "website",
  },
};


const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with us for course inquiries, enrollment, or any questions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Phone Numbers</h3>
                    <p className="text-gray-600">+91 7037905464</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Email</h3>
                    <p className="text-gray-600">dooncodingacademy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">WhatsApp</h3>
                    <p className="text-gray-600">Quick response on WhatsApp</p>
                    <a 
                      href="https://wa.me/917037905464" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-block mt-2"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                  >
                    <option value="">Select a course</option>
                    <option value="fullstack">Full Stack Web Development</option>
                    <option value="python">Python Programming</option>
                    <option value="java">Java Programming</option>
                    <option value="c">C Programming</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Maps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at our centers in Vikasnagar and Herbertpur, Dehradun
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vikasnagar Center */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green mr-2" />
                  <h3 className="text-xl font-bold text-navy">Vikasnagar Center</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  123 Main Street, Vikasnagar<br />
                  Dehradun, Uttarakhand 248198
                </p>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500">Google Maps Integration</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Vikasnagar,Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Herbertpur Center */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green mr-2" />
                  <h3 className="text-xl font-bold text-navy">Herbertpur Center</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  456 College Road, Herbertpur<br />
                  Dehradun, Uttarakhand 248142
                </p>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500">Google Maps Integration</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Herbertpur,Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Don't wait! Contact us today and take the first step towards your coding career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Enroll Now
            </Link>
            <a
              href="https://wa.me/917037905464"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
