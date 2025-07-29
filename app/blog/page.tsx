'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Image from 'next/image'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
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
      image: "/blog-python.jpg"
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
      image: "/blog-data-science.jpg"
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
      image: "/blog-web-dev.jpg"
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
      image: "/blog-programming.jpg"
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
      image: "/blog-programming.jpg"
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
      image: "/blog-web-dev.jpg"
    }
  ]

  const categories = ["All", "Programming", "Data Science", "Web Development", "Career", "React", "Technology"]

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs 
          items={[
            { label: 'Blog' }
          ]} 
        />
      </div>

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
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'border-green bg-green text-white'
                    : 'border-gray-300 hover:border-green hover:text-green'
                }`}
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
          {filteredPosts.length > 0 && (
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    <span className="ml-3 text-green font-medium">{filteredPosts[0].category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{filteredPosts[0].author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{filteredPosts[0].date}</span>
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                  <Link href={`/blog/${filteredPosts[0].slug}`} className="btn-primary inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover programming tutorials, career advice, and industry insights
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
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
                    <Link href={`/blog/${post.slug}`} className="text-green font-medium hover:text-green-dark transition-colors duration-200 inline-flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category. Try selecting a different category.</p>
            </div>
          )}
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
