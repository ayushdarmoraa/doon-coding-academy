import React from 'react'
import Link from 'next/link'
import { CheckCircle, Clock, Users, Award, Code, Database, Globe, Smartphone } from 'lucide-react'

export const metadata = {
  title: "Courses | Full Stack, Java, Python, C | Doon Coding Academy",
  description:
    "Explore our coding courses: Full Stack Development, Python, Java, C. Beginner to advanced programs in Vikasnagar & Herbertpur, Dehradun.",
  keywords: [
    "coding courses in Dehradun",
    "learn full stack development",
    "python course Dehradun",
    "java course near me",
    "C programming classes",
    "Herbertpur coding institute",
    "online coding programs India"
  ],
  openGraph: {
    title: "Our Courses | Doon Coding Academy",
    description:
      "Find the right coding course for you. Choose from Java, C, Python, or Full Stack Development in our offline/online formats.",
    url: "https://dooncodingacademy.in/courses",
    siteName: "Doon Coding Academy",
    locale: "en_IN",
    type: "website",
  },
};


const Courses = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive coding education designed to take you from beginner to professional
          </p>
        </div>
      </section>

      {/* Full Stack Development Course */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-green mr-3" />
                  <h2 className="text-3xl font-bold text-navy">Full Stack Web Development</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Complete web development course covering both frontend and backend technologies. 
                  Build real-world applications from scratch.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-green mr-2" />
                    <span>6 Months</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-green mr-2" />
                    <span>Max 15 Students</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-green mr-2" />
                    <span>Certificate</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="w-5 h-5 text-green mr-2" />
                    <span>Live Projects</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-navy mb-4">₹25,000</div>
                <Link href="/enroll" className="btn-primary">
                  Enroll Now
                </Link>
              </div>
              <div className="md:w-1/2 p-8 bg-gray-50">
                <h3 className="text-xl font-bold text-navy mb-4">What You'll Learn:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green mr-2 mt-0.5" />
                    <span>HTML5, CSS3, JavaScript ES6+</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green mr-2 mt-0.5" />
                    <span>React.js with Hooks and Context API</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green mr-2 mt-0.5" />
                    <span>Node.js and Express.js</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green mr-2 mt-0.5" />
                    <span>MongoDB and Database Design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green mr-2 mt-0.5" />
                    <span>REST API Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green mr-2 mt-0.5" />
                    <span>Authentication and Security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green mr-2 mt-0.5" />
                    <span>Deployment and DevOps Basics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Programming Languages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master the fundamentals of programming with our comprehensive language courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Python */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-green mr-3" />
                  <h3 className="text-2xl font-bold text-navy">Python</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn Python from basics to advanced concepts with practical projects and real-world applications.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">3 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-navy">₹15,000</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Python Fundamentals
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Web Development with Flask
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Database Integration
                  </li>
                </ul>
                <Link href="/enroll" className="btn-primary w-full text-center">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Java */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-green mr-3" />
                  <h3 className="text-2xl font-bold text-navy">Java</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Master Java programming with object-oriented concepts and enterprise-level frameworks.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">4 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-navy">₹18,000</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Core Java Concepts
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Object-Oriented Programming
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Spring Framework
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Database Integration
                  </li>
                </ul>
                <Link href="/enroll" className="btn-primary w-full text-center">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* C Programming */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-green mr-3" />
                  <h3 className="text-2xl font-bold text-navy">C Programming</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Build a strong foundation in programming with C language fundamentals and system programming.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">2 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-navy">₹12,000</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    C Language Basics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Pointers and Memory Management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Data Structures in C
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    System Programming
                  </li>
                </ul>
                <Link href="/enroll" className="btn-primary w-full text-center">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Makes Our Courses Special?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Small Batch Size</h3>
              <p className="text-gray-600">Maximum 15 students per batch for personalized attention</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">Build real-world applications and create your portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Industry Certification</h3>
              <p className="text-gray-600">Get certified and boost your career prospects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Choose your course and begin your journey to becoming a professional developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Enroll Now
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
