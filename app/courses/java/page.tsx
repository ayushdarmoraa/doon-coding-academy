import { Metadata } from 'next'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Java Programming Course | Master Object-Oriented Programming in Dehradun | Doon Coding Academy",
  description: "Learn Java programming from basics to advanced concepts. Master object-oriented programming, Spring Framework, and database integration. 4-month course with job placement assistance in Dehradun.",
  keywords: ["Java course Dehradun", "Java programming Herbertpur", "object-oriented programming", "Spring Framework course", "Java coaching Dehradun"],
}

export default function JavaCoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Courses', href: '/courses' },
              { label: 'Java Programming', href: '/courses/java' }
            ]} 
          />
          
          <div className="text-center mt-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ Enterprise-Ready Course
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master Java Programming
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Learn Java from basics to advanced concepts with object-oriented programming, Spring Framework, and enterprise development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#enroll" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Enroll Now - ₹8,000
              </a>
              <a href="#curriculum" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
            <p className="text-gray-600">4 Months</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Batch Size</h3>
            <p className="text-gray-600">Max 15 Students</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificate</h3>
            <p className="text-gray-600">Industry Recognized</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Assistance</h3>
            <p className="text-gray-600">100% Placement Support</p>
          </div>
        </div>

        {/* Curriculum */}
        <div id="curriculum" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Java Curriculum
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our carefully designed curriculum covers everything from Java basics to enterprise-level development
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Month 1: Java Fundamentals</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Java syntax and basic concepts</li>
                <li>• Variables, data types, and operators</li>
                <li>• Control structures and loops</li>
                <li>• Methods and functions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Month 2: OOP Concepts</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Classes and objects</li>
                <li>• Inheritance and polymorphism</li>
                <li>• Encapsulation and abstraction</li>
                <li>• Interfaces and abstract classes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Month 3: Advanced Java</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Collections Framework</li>
                <li>• Exception handling</li>
                <li>• File I/O and serialization</li>
                <li>• Multithreading and concurrency</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Month 4: Spring Framework</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Spring Core and IoC</li>
                <li>• Spring Boot basics</li>
                <li>• RESTful web services</li>
                <li>• Database integration with JPA</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Projects & Portfolio</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Console-based applications</li>
                <li>• Web application with Spring Boot</li>
                <li>• Database-driven projects</li>
                <li>• Portfolio development</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Career Preparation</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Interview preparation</li>
                <li>• Resume building</li>
                <li>• Technical assessments</li>
                <li>• Job placement assistance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Outcomes */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Launch Your Java Development Career
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹4-8 LPA</div>
              <h3 className="font-semibold text-gray-900 mb-2">Java Developer</h3>
              <p className="text-gray-600 text-sm">Build enterprise applications and web services</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">₹6-12 LPA</div>
              <h3 className="font-semibold text-gray-900 mb-2">Spring Boot Developer</h3>
              <p className="text-gray-600 text-sm">Develop microservices and REST APIs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">₹5-10 LPA</div>
              <h3 className="font-semibold text-gray-900 mb-2">Backend Developer</h3>
              <p className="text-gray-600 text-sm">Create robust server-side applications</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">₹8-15 LPA</div>
              <h3 className="font-semibold text-gray-900 mb-2">Full Stack Developer</h3>
              <p className="text-gray-600 text-sm">End-to-end application development</p>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Basic computer literacy</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">High school mathematics</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Logical thinking ability</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommended</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Basic programming knowledge (any language)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Understanding of basic algorithms</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="enroll" className="bg-gradient-to-r from-blue-900 to-green-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Java Journey?</h2>
          <p className="text-xl mb-6">Join the next batch and master enterprise-level Java development</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/917037905464?text=I%20want%20to%20enroll%20in%20Java%20Programming%20course" 
               className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Enroll Now - ₹8,000
            </a>
            <a href="tel:+917037905464" 
               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

