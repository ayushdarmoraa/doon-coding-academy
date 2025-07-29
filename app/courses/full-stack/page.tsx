import { Metadata } from 'next'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Full Stack Web Development Course | Master Frontend & Backend in Dehradun | Doon Coding Academy",
  description: "Complete full stack web development course covering HTML, CSS, JavaScript, React, Node.js, and database management. 6-month comprehensive program with job placement assistance in Dehradun.",
  keywords: ["Full Stack course Dehradun", "web development Herbertpur", "React course Dehradun", "Node.js training Dehradun", "full stack developer course"],
}

export default function FullStackCoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Courses', href: '/courses' },
              { label: 'Full Stack Web Development', href: '/courses/full-stack' }
            ]} 
          />
          
          <div className="text-center mt-8">
            <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚀 Complete Web Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master Full Stack Web Development
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Complete web development course covering frontend and backend technologies. Build modern, responsive web applications from scratch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#enroll" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Enroll Now - ₹10,000
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
            <p className="text-gray-600">6 Months</p>
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
            Comprehensive Full Stack Curriculum
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our carefully designed curriculum covers both frontend and backend technologies to make you a complete web developer
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Month 1-2: Frontend Fundamentals</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• HTML5 and semantic markup</li>
                <li>• CSS3 and responsive design</li>
                <li>• JavaScript fundamentals</li>
                <li>• DOM manipulation</li>
                <li>• Bootstrap framework</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Month 3-4: React Development</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• React fundamentals and JSX</li>
                <li>• Components and props</li>
                <li>• State management and hooks</li>
                <li>• React Router for navigation</li>
                <li>• API integration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Month 5: Backend with Node.js</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Node.js fundamentals</li>
                <li>• Express.js framework</li>
                <li>• RESTful API development</li>
                <li>• Middleware and authentication</li>
                <li>• File uploads and validation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Month 6: Database Management</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• MongoDB fundamentals</li>
                <li>• Mongoose ODM</li>
                <li>• Database design and modeling</li>
                <li>• CRUD operations</li>
                <li>• Data relationships</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Projects & Deployment</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Portfolio website</li>
                <li>• E-commerce application</li>
                <li>• Social media platform</li>
                <li>• Deployment on cloud platforms</li>
                <li>• Version control with Git</li>
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
                <li>• Industry best practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Master Industry-Standard Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-orange-600 font-bold text-lg">HTML5</span>
              </div>
              <p className="text-sm text-gray-600">Structure</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold text-lg">CSS3</span>
              </div>
              <p className="text-sm text-gray-600">Styling</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-yellow-600 font-bold text-lg">JS</span>
              </div>
              <p className="text-sm text-gray-600">JavaScript</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-cyan-600 font-bold text-lg">React</span>
              </div>
              <p className="text-sm text-gray-600">Frontend</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold text-lg">Node</span>
              </div>
              <p className="text-sm text-gray-600">Backend</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold text-lg">Mongo</span>
              </div>
              <p className="text-sm text-gray-600">Database</p>
            </div>
          </div>
        </div>

        {/* Career Outcomes */}
        <div className="bg-white rounded-lg p-8 mb-16 shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Launch Your Full Stack Development Career
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹5-10 LPA</div>
              <h3 className="font-semibold text-gray-900 mb-2">Frontend Developer</h3>
              <p className="text-gray-600 text-sm">Build user interfaces with React</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">₹6-12 LPA</div>
              <h3 className="font-semibold text-gray-900 mb-2">Backend Developer</h3>
              <p className="text-gray-600 text-sm">Create APIs and server-side logic</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">₹8-15 LPA</div>
              <h3 className="font-semibold text-gray-900 mb-2">Full Stack Developer</h3>
              <p className="text-gray-600 text-sm">End-to-end web application development</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">₹10-20 LPA</div>
              <h3 className="font-semibold text-gray-900 mb-2">Tech Lead</h3>
              <p className="text-gray-600 text-sm">Lead development teams and projects</p>
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
                <span className="text-gray-700">Understanding of internet and websites</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Logical thinking ability</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Build</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Professional portfolio website</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">E-commerce web application</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Social media platform</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Real-time chat application</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="enroll" className="bg-gradient-to-r from-blue-900 to-green-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Become a Full Stack Developer?</h2>
          <p className="text-xl mb-6">Join the next batch and master both frontend and backend development</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/917037905464?text=I%20want%20to%20enroll%20in%20Full%20Stack%20Web%20Development%20course" 
               className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Enroll Now - ₹10,000
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

