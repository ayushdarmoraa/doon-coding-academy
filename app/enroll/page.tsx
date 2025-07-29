import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  Phone, 
  MessageCircle, 
  Mail,
  Star,
  ArrowRight,
  Download,
  Calendar
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enroll Now | Start Your Coding Journey | Doon Coding Academy',
  description: 'Enroll in our comprehensive coding courses. Choose from Data Science, Full-Stack Development, Python, and Java. Flexible payment options and job placement assistance.',
  keywords: [
    'enroll coding course',
    'admission Doon Coding Academy',
    'coding course enrollment',
    'programming classes admission',
    'data science course enrollment',
    'full stack development admission'
  ]
}

const EnrollPage = () => {
  const courses = [
    {
      id: 'data-science',
      name: 'Data Science & AI',
      duration: '6 Months',
      price: '₹15,000',
      installment: '₹3,000/month',
      featured: true,
      highlights: ['Python & ML', 'Real Projects', 'Job Assistance', 'Industry Certificate'],
      description: 'Master Python, Machine Learning, and AI with hands-on projects'
    },
    {
      id: 'full-stack',
      name: 'Full-Stack Development',
      duration: '6 Months', 
      price: '₹10,000',
      installment: '₹3,000/month',
      featured: false,
      highlights: ['React & Node.js', 'Complete Web Apps', 'Portfolio Projects', 'Industry Ready'],
      description: 'Build complete web applications from frontend to backend'
    },
    {
      id: 'python',
      name: 'Python Programming',
      duration: '3 Months',
      price: '₹6,000',
      installment: '₹2,000/month',
      featured: false,
      highlights: ['Python Basics', 'OOP Concepts', 'Web Development', 'Data Analysis'],
      description: 'Learn Python programming from basics to advanced concepts'
    },
    {
      id: 'java',
      name: 'Java Programming',
      duration: '4 Months',
      price: '₹8,000',
      installment: '₹2,000/month',
      featured: false,
      highlights: ['Core Java', 'Spring Framework', 'Database Integration', 'Enterprise Apps'],
      description: 'Master Java programming and enterprise development'
    }
  ]

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Choose Your Course',
      description: 'Select the course that matches your career goals'
    },
    {
      step: 2,
      title: 'Contact Us',
      description: 'Reach out via WhatsApp, phone, or email for enrollment'
    },
    {
      step: 3,
      title: 'Complete Registration',
      description: 'Fill out the enrollment form and make payment'
    },
    {
      step: 4,
      title: 'Start Learning',
      description: 'Join your batch and begin your coding journey'
    }
  ]

  const benefits = [
    'Small batch sizes (max 15 students)',
    'Industry-experienced instructors',
    'Hands-on project-based learning',
    'Job placement assistance',
    'Flexible payment options',
    'Weekend and evening batches',
    'Online and offline classes',
    'Industry-recognized certificates'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your Coding Journey Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive coding courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#courses" className="btn-primary text-lg px-8 py-4">
                Choose Your Course
              </a>
              <a href="#lead-magnet" className="btn-secondary text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Free Career Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="lead-magnet" className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-green/20 text-green px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Download className="w-4 h-4 mr-2" />
                Free Download
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Complete Programming Career Guide 2025
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get our comprehensive 25-page guide covering career paths, salary expectations, learning roadmaps, and interview tips for aspiring programmers.
              </p>
            </div>

            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent">
                    <option value="">Interested Course</option>
                    <option value="data-science">Data Science & AI</option>
                    <option value="full-stack">Full-Stack Development</option>
                    <option value="python">Python Programming</option>
                    <option value="java">Java Programming</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg"
                >
                  Download Free Guide & Get Course Info
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                By downloading, you agree to receive course updates and career tips via email. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section id="courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Choose Your Course
            </h2>
            <p className="text-xl text-gray-600">
              Select the course that aligns with your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className={`bg-white rounded-lg shadow-lg overflow-hidden ${course.featured ? 'ring-2 ring-green' : ''}`}>
                {course.featured && (
                  <div className="bg-green text-white text-center py-2 text-sm font-medium">
                    ⭐ Most Popular Course
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green">{course.price}</div>
                      <div className="text-sm text-gray-600">or {course.installment}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/919876543210?text=Hi! I'm interested in enrolling for the ${course.name} course. Can you provide more details?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enroll via WhatsApp
                    </a>
                    
                    <Link
                      href={`/courses/${course.id}`}
                      className="w-full btn-outline flex items-center justify-center"
                    >
                      View Course Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Simple Enrollment Process
            </h2>
            <p className="text-xl text-gray-600">
              Get started in just 4 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {enrollmentSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Enroll? Contact Us
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred way to get in touch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MessageCircle className="w-12 h-12 text-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick enrollment and instant responses</p>
              <a
                href="https://wa.me/919876543210?text=Hi! I want to enroll in a coding course. Please provide details."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">Phone Call</h3>
              <p className="text-gray-600 mb-4">Speak directly with our counselors</p>
              <a
                href="tel:+919876543210"
                className="btn-outline w-full"
              >
                Call +91 98765 43210
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Detailed course information via email</p>
              <a
                href="mailto:info@dooncodingacademy.com?subject=Course Enrollment Inquiry"
                className="btn-outline w-full"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose Doon Coding Academy?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-red-500/20 text-red-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Limited Seats Available
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Next Batch Starts February 1st, 2025
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Only 15 seats available per batch. Secure your spot now and start your coding journey with personalized attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hi! I want to secure my seat for the next batch starting February 1st. Please help me enroll."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Secure Your Seat Now
            </a>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnrollPage

