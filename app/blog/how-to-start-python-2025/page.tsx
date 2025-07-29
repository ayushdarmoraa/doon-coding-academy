import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Start with Python in 2025: Complete Beginner\'s Guide | Doon Coding Academy',
  description: 'Learn how to start programming with Python in 2025. Complete guide covering installation, basics, career paths, and learning resources for beginners.',
  keywords: [
    'Python programming 2025',
    'learn Python beginner',
    'Python tutorial',
    'Python career guide',
    'programming for beginners',
    'Python course Dehradun'
  ]
}

const PythonGuide2025 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="inline-flex items-center text-green hover:text-green-dark mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How to Start with Python in 2025: Complete Beginner's Guide
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 15, 2025
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Doon Coding Academy
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <img 
            src="/coding-classroom.jpg" 
            alt="Students learning Python programming" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Python continues to dominate the programming landscape in 2025, maintaining its position as the most beginner-friendly and versatile programming language. Whether you're looking to enter data science, web development, automation, or artificial intelligence, Python serves as an excellent starting point for your programming journey.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Why Python in 2025?</h2>
            
            <p className="mb-4">
              Python's popularity has only grown stronger in 2025, and for good reason. The language offers an unparalleled combination of simplicity and power, making it ideal for beginners while remaining robust enough for enterprise-level applications. Major tech companies like Google, Netflix, Instagram, and Spotify continue to rely heavily on Python for their core systems.
            </p>

            <p className="mb-6">
              The job market for Python developers remains exceptionally strong in 2025. According to recent industry reports, Python developers command some of the highest salaries in the tech industry, with entry-level positions starting at ₹4-6 LPA in India and experienced developers earning ₹15-25 LPA or more.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Getting Started: Installation and Setup</h2>
            
            <p className="mb-4">
              The first step in your Python journey is setting up your development environment. In 2025, Python 3.12 is the latest stable version, and it's what we recommend for all new learners. Here's how to get started:
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Quick Setup Steps:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download Python 3.12 from python.org</li>
                <li>Install a code editor (VS Code recommended)</li>
                <li>Set up a virtual environment</li>
                <li>Install essential packages (pip, jupyter)</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Python Fundamentals: What You'll Learn First</h2>
            
            <p className="mb-4">
              Python's syntax is designed to be intuitive and readable. Unlike many other programming languages, Python uses indentation to define code blocks, which naturally encourages clean, organized code. Here are the core concepts every beginner should master:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Variables and Data Types</h3>
            <p className="mb-4">
              Python handles variables dynamically, meaning you don't need to declare their type explicitly. The language supports various data types including integers, floats, strings, lists, dictionaries, and more.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Control Structures</h3>
            <p className="mb-4">
              Learn to control program flow using if-else statements, loops (for and while), and functions. These building blocks form the foundation of all programming logic.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Object-Oriented Programming</h3>
            <p className="mb-6">
              While not immediately necessary for beginners, understanding classes and objects becomes crucial as you advance. Python's OOP implementation is clean and straightforward.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Career Paths with Python in 2025</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green/5 p-6 rounded-lg border-l-4 border-green">
                <h3 className="font-semibold text-navy mb-2">Data Science & AI</h3>
                <p className="text-gray-700">
                  Python dominates the data science field with libraries like pandas, NumPy, and scikit-learn. AI and machine learning roles are among the highest-paying in tech.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-navy mb-2">Web Development</h3>
                <p className="text-gray-700">
                  Frameworks like Django and Flask make Python excellent for web development. Many major websites run on Python backends.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-navy mb-2">Automation & DevOps</h3>
                <p className="text-gray-700">
                  Python excels at automation tasks, system administration, and DevOps workflows. It's the go-to language for many operational tasks.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-navy mb-2">Software Development</h3>
                <p className="text-gray-700">
                  From desktop applications to mobile backends, Python's versatility makes it suitable for various software development projects.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Learning Resources and Next Steps</h2>
            
            <p className="mb-4">
              While self-learning is possible, structured courses provide the fastest path to proficiency. At Doon Coding Academy, our Python course is designed specifically for beginners, covering everything from basic syntax to advanced concepts like web development with Flask.
            </p>

            <p className="mb-4">
              Our 3-month Python program includes hands-on projects, personalized mentoring, and job placement assistance. Students work on real-world projects that build a portfolio demonstrating their skills to potential employers.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Common Beginner Mistakes to Avoid</h2>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
              <h3 className="font-semibold text-red-800 mb-2">Avoid These Pitfalls:</h3>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li>Trying to learn everything at once - focus on fundamentals first</li>
                <li>Not practicing regularly - consistency is key in programming</li>
                <li>Skipping error handling - learn to debug from the beginning</li>
                <li>Not using version control (Git) early in your journey</li>
                <li>Comparing yourself to others - everyone learns at their own pace</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Conclusion</h2>
            
            <p className="mb-4">
              Starting with Python in 2025 positions you perfectly for a successful career in technology. The language's continued growth, combined with its beginner-friendly nature and powerful capabilities, makes it an ideal choice for new programmers.
            </p>

            <p className="mb-6">
              Remember, the key to mastering Python—or any programming language—is consistent practice and building real projects. Don't just read about code; write it, break it, fix it, and learn from the process.
            </p>

            <div className="bg-green/10 p-6 rounded-lg border border-green/20 mt-8">
              <h3 className="font-semibold text-navy mb-2">Ready to Start Your Python Journey?</h3>
              <p className="text-gray-700 mb-4">
                Join our comprehensive Python course at Doon Coding Academy and transform your career with one of the most in-demand programming languages.
              </p>
              <Link href="/courses/python" className="btn-primary inline-flex items-center">
                Learn More About Our Python Course
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default PythonGuide2025

