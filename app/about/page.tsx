import React from 'react'
import Link from 'next/link'
import { Users, Award, BookOpen, Target, Heart, Lightbulb } from 'lucide-react'

export const metadata = {
  title: "About Us | Doon Coding Academy - Dehradun's Best Coding Institute",
  description:
    "Learn about Doon Coding Academy's mission, vision, and expert instructors. Based in Herbertpur, Dehradun, we offer quality coding education in Full Stack, C, Java, Python.",
  keywords: [
    "about doon coding academy",
    "coding teachers in Dehradun",
    "best coding institute Dehradun",
    "about us coding school",
    "programming mentors in Herbertpur",
    "Herbertpur coding tutors"
  ],
  openGraph: {
    title: "About Doon Coding Academy",
    description:
      "Know more about our expert team and teaching philosophy. We specialize in hands-on coding education in Full Stack, Java, Python, and C.",
    url: "https://dooncodingacademy.in/about",
    siteName: "Doon Coding Academy",
    locale: "en_IN",
    type: "website",
  },
};


const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Doon Coding Academy
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Empowering students with quality coding education and a student-first approach
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide world-class coding education that bridges the gap between 
                academic learning and industry requirements. We believe in nurturing 
                not just programmers, but problem-solvers who can think critically 
                and innovate.
              </p>
              <p className="text-lg text-gray-600">
                Our approach combines theoretical knowledge with practical application, 
                ensuring that our students are industry-ready from day one.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading coding education provider in Uttarakhand, known for 
                producing skilled developers who contribute meaningfully to the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in a student-first approach that emphasizes practical learning 
              and individual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Student-First Approach</h3>
              <p className="text-gray-600">
                Every student is unique. We adapt our teaching methods to suit individual 
                learning styles and pace.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Practical Learning</h3>
              <p className="text-gray-600">
                We emphasize hands-on coding and real-world projects over theoretical 
                concepts alone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Industry Focus</h3>
              <p className="text-gray-600">
                Our curriculum is designed keeping current industry trends and 
                requirements in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Learning Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Hybrid Learning Model
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We offer the best of both worlds - offline classes for hands-on learning 
                and online sessions for flexibility.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Offline Classes</h4>
                    <p className="text-gray-600">Face-to-face interaction with instructors and peers</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Online Support</h4>
                    <p className="text-gray-600">24/7 access to resources and doubt resolution</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Flexible Schedule</h4>
                    <p className="text-gray-600">Weekend and evening batches available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-navy to-green text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Hybrid Model?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>Structured classroom learning</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Peer interaction and collaboration</span>
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Immediate feedback and guidance</span>
                </li>
                <li className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  <span>Flexible learning options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for our commitment to quality education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green mb-2">500+</div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green mb-2">85%</div>
              <p className="text-gray-600">Placement Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green mb-2">50+</div>
              <p className="text-gray-600">Industry Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green mb-2">4.8/5</div>
              <p className="text-gray-600">Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Become part of a learning community that values growth, innovation, and success.
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

export default About
