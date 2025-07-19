import React from 'react'
import Link from 'next/link'
import { CheckCircle, Clock, Users, Award, MessageCircle, Phone, Mail } from 'lucide-react'

const Enroll = () => {
  const courses = [
    {
      id: 'fullstack',
      name: 'Full Stack Web Development',
      duration: '6 Months',
      price: '₹10,000 (4-month total) or ₹3,000/month',
      features: [
        'HTML, CSS, JavaScript',
        'React & Node.js',
        'Database Management',
        'Live Projects',
        'Industry Certification'
      ]
    },
    {
      id: 'python',
      name: 'Python Programming',
      duration: '3 Months',
      price: '₹2,000/month',
      features: [
        'Python Fundamentals',
        'Data Structures & Algorithms',
        'Web Development with Flask',
        'Database Integration',
        'Project Portfolio'
      ]
    },
    {
      id: 'java',
      name: 'Java Programming',
      duration: '4 Months',
      price: '₹2,000/month',
      features: [
        'Core Java Concepts',
        'Object-Oriented Programming',
        'Spring Framework',
        'Database Integration',
        'Industry Projects'
      ]
    },
    {
      id: 'c',
      name: 'C Programming',
      duration: '2 Months',
      price: '₹2,000/month',
      features: [
        'C Language Basics',
        'Pointers & Memory Management',
        'Data Structures in C',
        'System Programming',
        'Practical Assignments'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Enroll Now
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Take the first step towards your programming career. Choose your course and start learning today!
          </p>
        </div>
      </section>

      {/* Quick Enrollment Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Quick Enrollment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started immediately with our instant enrollment options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Enrollment */}
            <div className="bg-green/5 border-2 border-green rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">WhatsApp Enrollment</h3>
              <p className="text-gray-600 mb-6">
                Get instant response and enroll directly through WhatsApp. Our team will guide you through the process.
              </p>
              <a
                href="https://wa.me/917037905464?text=Hi, I want to enroll in a course at Doon Coding Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Enroll via WhatsApp
              </a>
            </div>

            {/* Phone Enrollment */}
            <div className="bg-navy/5 border-2 border-navy rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Call for Enrollment</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our counselors to choose the right course and get personalized guidance.
              </p>
              <a
                href="tel:+917037905464"
                className="btn-secondary w-full"
              >
                Call Now: +91 7037905464
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Choose Your Course
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the course that matches your career goals and learning objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-4">{course.name}</h3>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-green mr-2" />
                      <span className="text-gray-600">{course.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-navy">{course.price}</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/917037905464?text=Hi, I want to enroll in ${course.name} course`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center"
                    >
                      Enroll in {course.name}
                    </a>
                    <Link
                      href="/courses"
                      className="btn-outline w-full text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Simple Enrollment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in just 3 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Choose Course</h3>
              <p className="text-gray-600">Select the course that fits your goals and schedule</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Contact Us</h3>
              <p className="text-gray-600">Reach out via WhatsApp, phone, or visit our center</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Start Learning</h3>
              <p className="text-gray-600">Begin your coding journey with expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Need Help with Enrollment?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is here to help you choose the right course and answer any questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="w-8 h-8 text-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our counselors</p>
              <a href="tel:+917037905464" className="text-green font-medium">+91 7037905464</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MessageCircle className="w-8 h-8 text-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick response guaranteed</p>
              <a 
                href="https://wa.me/917037905464" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green font-medium"
              >
                Chat Now
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="w-8 h-8 text-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us your queries</p>
              <a href="mailto:dooncodingacademy@gmail.com" className="text-green font-medium">
                dooncodingacademy@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait - Start Today!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their careers with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917037905464?text=Hi, I want to enroll in a course at Doon Coding Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Enroll via WhatsApp
            </a>
            <a
              href="tel:+917037905464"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Enroll
