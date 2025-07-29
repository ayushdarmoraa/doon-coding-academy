import React from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

export const metadata = {
  title: 'Coding Blog | Tips, Projects & Guides – Doon Coding Academy',
  description:
    'Explore coding tips, full stack development tutorials, student success stories, and real-world programming projects from Doon Coding Academy.',
  keywords: [
    'coding blog',
    'web development tutorials',
    'Java projects',
    'Python tips',
    'student coding projects',
    'programming guides',
    'full stack blog',
    'Dehradun coding stories',
    'learning to code India',
    'developer blog'
  ],
};


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Start with Python in 2025: Complete Beginner's Guide",
      excerpt: "Learn how to start programming with Python in 2025. Complete guide covering installation, basics, career paths, and learning resources for beginners.",
      author: "Doon Coding Academy",
      date: "January 15, 2025",
      category: "Programming",
      readTime: "8 min read",
      slug: "how-to-start-python-2025",
      image: "/coding-classroom.jpg"
    },
    {
      id: 2,
      title: "Top 5 Career Paths in Data Science 2025: Your Complete Guide",
      excerpt: "Explore the top 5 data science career paths in 2025. Learn about salaries, required skills, and growth opportunities in AI, ML, and analytics.",
      author: "Doon Coding Academy",
      date: "January 20, 2025",
      category: "Data Science",
      readTime: "12 min read",
      slug: "data-science-career-paths-2025",
      image: "/instructor-teaching.jpg"
    },
    {
      id: 3,
      title: "Why Learn Full-Stack Development Today? Complete 2025 Guide",
      excerpt: "Discover why full-stack development is the most versatile tech career in 2025. Learn about skills, salaries, and opportunities in web development.",
      author: "Doon Coding Academy",
      date: "January 25, 2025",
      category: "Web Development",
      readTime: "10 min read",
      slug: "why-learn-full-stack-development-2025",
      image: "/students-learning.jpg"
    },
    {
      id: 4,
      title: "Python vs Java: Which Programming Language to Choose?",
      excerpt: "A comprehensive comparison of Python and Java to help you decide which language fits your career goals.",
      author: "Doon Coding Academy",
      date: "March 10, 2024",
      category: "Programming",
      readTime: "7 min read",
      slug: "python-vs-java-comparison",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Top 10 Coding Interview Questions for Beginners",
      excerpt: "Prepare for your first coding interview with these commonly asked questions and detailed solutions.",
      author: "Doon Coding Academy",
      date: "March 5, 2024",
      category: "Career",
      readTime: "10 min read",
      slug: "coding-interview-questions-beginners",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Building Your First React Application: A Step-by-Step Guide",
      excerpt: "Learn how to create a modern React application from scratch with practical examples and best practices.",
      author: "Doon Coding Academy",
      date: "February 28, 2024",
      category: "React",
      readTime: "12 min read",
      slug: "first-react-application-guide",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = ["All", "Programming", "Data Science", "Web Development", "Career", "React", "Technology"]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stay updated with the latest programming trends, tutorials, and insights from our expert instructors
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 hover:border-green hover:text-green transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="bg-gray-200 h-64 md:h-full flex items-center justify-center">
                  <p className="text-gray-500">Featured Post Image</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                  <span className="ml-3 text-green font-medium">Programming</span>
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4">
                  How to Start with Python in 2025: Complete Beginner's Guide
                </h2>
                <p className="text-gray-600 mb-6">
                  Learn how to start programming with Python in 2025. Complete guide covering installation, basics, career paths, and learning resources for beginners. 
                  This comprehensive guide covers everything from setup to advanced concepts.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">Doon Coding Academy</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">January 15, 2025</span>
                  <span>8 min read</span>
                </div>
                <Link href="/blog/how-to-start-python-2025" className="btn-primary inline-flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover programming tutorials, career advice, and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Blog Post Image</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-green mr-1" />
                    <span className="text-green text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-green font-medium hover:text-green/80 inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy to-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Get the latest programming tutorials, career tips, and course updates delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn your reading into action. Enroll in our courses and start building your programming skills today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="btn-primary text-lg px-8 py-4">
              View Courses
            </Link>
            <Link href="/enroll" className="btn-outline text-lg px-8 py-4">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
