import type { Metadata } from 'next' // ✅ Required for type safety
import React from 'react'
import Link from 'next/link'
import { Code, Users, Trophy, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Doon Coding Academy | Best Full Stack, Java, Python Classes in Dehradun',
  description:
    'Join Doon Coding Academy for expert-led Full Stack Development, C, Java, Python coaching in Dehradun, Vikasnagar, Herbertpur. Online + Offline batches available.',
  keywords: [
    'Full Stack Development Dehradun',
    'C programming coaching',
    'Java classes in Dehradun',
    'Python coaching near me',
    'coding institute in Vikasnagar',
    'coding academy Herbertpur',
    'best coding classes Dehradun',
    'coding for beginners',
    'programming classes for students',
    'learn web development India'
  ],
  openGraph: {
    title: 'Doon Coding Academy | Learn. Build. Launch.',
    description: 'Master Full Stack, C, Java & Python with top coding instructors in Vikasnagar, Herbertpur & Dehradun. Offline and Online available.',
    url: 'https://dooncodingacademy.in',
    siteName: 'Doon Coding Academy',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.png', // ✅ Replace if stored elsewhere
        width: 1200,
        height: 630
      }
    ]
  }
};


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Learn. Build. Launch.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto fade-in">
              Master coding skills with expert instructors in Vikasnagar and Herbertpur, Dehradun. 
              From fundamentals to full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
              <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </Link>
              <Link href="/courses" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose Doon Coding Academy?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive coding education with a focus on practical skills and industry readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Small Classes</h3>
              <p className="text-gray-600">Personalized attention in small group settings</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Industry Projects</h3>
              <p className="text-gray-600">Work on real-world projects to build your portfolio</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Weekend and evening classes available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of programming courses designed for all skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full Stack Development */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Full Stack Web Development</h3>
                <p className="text-gray-600 mb-4">Complete web development course covering frontend and backend technologies</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green font-semibold">6 Months</span>
                  <span className="text-navy font-bold">₹25,000</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    HTML, CSS, JavaScript
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    React & Node.js
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Database Management
                  </li>
                </ul>
                <Link href="/courses" className="btn-primary w-full text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Python Programming */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Python Programming</h3>
                <p className="text-gray-600 mb-4">Learn Python from basics to advanced concepts with practical projects</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green font-semibold">3 Months</span>
                  <span className="text-navy font-bold">₹15,000</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Python Fundamentals
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Web Development with Flask
                  </li>
                </ul>
                <Link href="/courses" className="btn-primary w-full text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Java Programming */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Java Programming</h3>
                <p className="text-gray-600 mb-4">Master Java programming with object-oriented concepts and frameworks</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green font-semibold">4 Months</span>
                  <span className="text-navy font-bold">₹18,000</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Core Java Concepts
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Spring Framework
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green mr-2" />
                    Database Integration
                  </li>
                </ul>
                <Link href="/courses" className="btn-primary w-full text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our successful students who have transformed their careers with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The Full Stack course at DCA completely changed my career. The instructors are amazing 
                and the practical approach helped me land my dream job."
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="font-semibold text-navy">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Full Stack Developer at Tech Corp</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Great learning environment and excellent support. The Python course was comprehensive 
                and helped me transition into data science."
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="font-semibold text-navy">Rahul Verma</h4>
                  <p className="text-sm text-gray-500">Data Scientist at Analytics Plus</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The Java course was well-structured and practical. I'm now working as a Java developer 
                thanks to the solid foundation I got here."
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="font-semibold text-navy">Amit Kumar</h4>
                  <p className="text-sm text-gray-500">Java Developer at Software Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive coding courses.
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

export default Home
