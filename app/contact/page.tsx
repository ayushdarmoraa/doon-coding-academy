'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, Clock, MessageCircle, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('✅ Thank you! Your message has been sent.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        })
        // Optional: Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 2000)
      } else {
        setSubmitMessage('❌ Sorry, there was an error sending your message. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('❌ Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
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
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitMessage}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                    placeholder="+91 7037905464"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                  >
                    <option value="">Select a course</option>
                    <option value="Full Stack Web Development">Full Stack Web Development</option>
                    <option value="Python Programming">Python Programming</option>
                    <option value="Java Programming">Java Programming</option>
                    <option value="C Programming">C Programming</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at our center in Herbertpur, Dehradun
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Herbertpur Center */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green mr-2" />
                  <h3 className="text-xl font-bold text-navy">Doon Coding Academy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  22 Near D.R School, Herbertpur<br />
                  Dehradun, Uttarakhand 248142
                </p>
                <div className="mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.123456789!2d77.7123456!3d30.4123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI0JzQ0LjQiTiA3N8KwNDInNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="256"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Doon Coding Academy Location"
                  ></iframe>
                </div>
                <a
                  href="https://maps.google.com/?q=22+Near+D.R+School,+Herbertpur,+Dehradun,+248142"
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
