
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ]

  const courses = [
    { name: 'Data Science', href: '/courses/data-science', featured: true },
    { name: 'Full Stack Development', href: '/courses/full-stack' },
    { name: 'Python Programming', href: '/courses/python' },
    { name: 'Java Programming', href: '/courses/java' },
    { name: 'All Courses', href: '/courses' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span className="text-2xl font-bold gradient-text">&lt;DCA/&gt;</span>
            <span className="text-sm text-gray-600 font-medium">Doon Coding Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
                className="flex items-center text-gray-700 hover:text-green font-medium transition-colors duration-200"
              >
                Courses
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isCoursesOpen && (
                <div
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border py-2 z-50"
                >
                  {courses.map((course) => (
                    <Link
                      key={course.name}
                      href={course.href}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        course.featured 
                          ? 'text-green font-semibold border-l-4 border-green bg-green/5' 
                          : 'text-gray-700'
                      }`}
                    >
                      {course.name}
                      {course.featured && (
                        <span className="ml-2 text-xs bg-green text-white px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/enroll"
              className="btn-primary"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-green font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Courses */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Courses</div>
                {courses.map((course) => (
                  <Link
                    key={course.name}
                    href={course.href}
                    className={`block px-3 py-1 text-sm hover:text-green ${
                      course.featured ? 'text-green font-semibold' : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {course.name}
                    {course.featured && ' ⭐'}
                  </Link>
                ))}
              </div>
              
              <div className="px-3 py-2">
                <Link
                  href="/enroll"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
