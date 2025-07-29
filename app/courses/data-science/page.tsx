import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'
import StructuredData from '../../../components/StructuredData'
import { 
  Brain, 
  BarChart3, 
  Database, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  Star,
  Code,
  Sigma,
  GitFork,
  Zap,
  MessageSquare,
  Cloud,
  Rocket
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Science Course | Master Python, ML & AI in Dehradun | Doon Coding Academy',
  description: 'Learn Data Science with Python, Machine Learning, and AI at Doon Coding Academy. Comprehensive 6-month course in Dehradun with hands-on projects and job placement assistance.',
  keywords: [
    'Data Science course Dehradun',
    'Machine Learning training',
    'Python for Data Science',
    'AI course in Dehradun',
    'Data Analytics training',
    'ML bootcamp Dehradun',
    'Data Science certification',
    'Python ML course'
  ]
}

const DataSciencePage = () => {
  const modules = [
    {
      title: "Python Fundamentals & Data Science Basics",
      duration: "Week 1-2",
      icon: <Code className="w-6 h-6 text-green" />,
      topics: ["Python syntax and data structures", "Jupyter Notebooks", "Introduction to Data Science", "Data types and sources"]
    },
    {
      title: "Data Collection & Preprocessing",
      duration: "Week 3-4", 
      icon: <Database className="w-6 h-6 text-green" />,
      topics: ["Web scraping with Beautiful Soup", "Data cleaning techniques", "Handling missing values", "Data transformation"]
    },
    {
      title: "Exploratory Data Analysis & Visualization",
      duration: "Week 5-6",
      icon: <BarChart3 className="w-6 h-6 text-green" />,
      topics: ["Descriptive statistics", "Matplotlib & Seaborn", "Data distributions", "Outlier detection"]
    },
    {
      title: "Statistical Foundations",
      duration: "Week 7-8",
      icon: <Sigma className="w-6 h-6 text-green" />,
      topics: ["Probability theory", "Hypothesis testing", "Regression analysis", "ANOVA"]
    },
    {
      title: "Machine Learning - Supervised Learning",
      duration: "Week 9-12",
      icon: <Brain className="w-6 h-6 text-green" />,
      topics: ["Linear & Logistic Regression", "Decision Trees & Random Forests", "Support Vector Machines", "Model evaluation"]
    },
    {
      title: "Machine Learning - Unsupervised Learning",
      duration: "Week 13-14",
      icon: <GitFork className="w-6 h-6 text-green" />,
      topics: ["K-Means clustering", "Hierarchical clustering", "Principal Component Analysis", "Dimensionality reduction"]
    },
    {
      title: "Deep Learning Fundamentals",
      duration: "Week 15-18",
      icon: <Zap className="w-6 h-6 text-green" />,
      topics: ["Neural Networks", "TensorFlow & Keras", "CNNs for image processing", "RNNs for sequences"]
    },
    {
      title: "Natural Language Processing",
      duration: "Week 19-20",
      icon: <MessageSquare className="w-6 h-6 text-green" />,
      topics: ["Text preprocessing", "Sentiment analysis", "Topic modeling", "Word embeddings"]
    },
    {
      title: "Big Data & Cloud Technologies",
      duration: "Week 21-22",
      icon: <Cloud className="w-6 h-6 text-green" />,
      topics: ["Introduction to Big Data", "Apache Spark overview", "Cloud platforms", "Data pipelines"]
    },
    {
      title: "Capstone Project & Deployment",
      duration: "Week 23-24",
      icon: <Rocket className="w-6 h-6 text-green" />,
      topics: ["End-to-end project", "Model deployment", "MLOps basics", "Portfolio building"]
    }
  ]

  const tools = [
    "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn",
    "TensorFlow", "Keras", "Jupyter Notebook", "Google Colab", "Git", "SQL"
  ]

  const careerPaths = [
    { title: "Data Scientist", salary: "₹6-15 LPA", description: "Analyze complex data to drive business decisions" },
    { title: "Machine Learning Engineer", salary: "₹8-20 LPA", description: "Build and deploy ML models in production" },
    { title: "Data Analyst", salary: "₹4-10 LPA", description: "Extract insights from data for business intelligence" },
    { title: "AI Research Scientist", salary: "₹10-25 LPA", description: "Develop cutting-edge AI algorithms and solutions" }
  ]

  const projects = [
    "Customer Churn Prediction Model",
    "Stock Price Forecasting System", 
    "Sentiment Analysis of Social Media",
    "Recommendation Engine",
    "Image Classification with Deep Learning",
    "Natural Language Chatbot"
  ]

  return (
    <div className="min-h-screen">
      <StructuredData type="course" data={{
        name: "Data Science & AI Course",
        description: "Master Python, Machine Learning, and AI with hands-on projects and real-world applications",
        duration: "6 months",
        price: "15000"
      }} />
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs 
          items={[
            { label: 'Courses', href: '/courses' },
            { label: 'Data Science & AI' }
          ]} 
        />
      </div>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green/20 text-green-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Most In-Demand Course
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Data Science & AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Transform your career with our comprehensive Data Science course. Learn Python, Machine Learning, and AI from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
                Enroll Now - ₹15,000
              </Link>
              <Link href="#curriculum" className="btn-secondary text-lg px-8 py-4">
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-8 h-8 text-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Duration</h3>
              <p className="text-gray-600">6 Months</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Batch Size</h3>
              <p className="text-gray-600">Max 15 Students</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certificate</h3>
              <p className="text-gray-600">Industry Recognized</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="w-8 h-8 text-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Job Assistance</h3>
              <p className="text-gray-600">100% Placement Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our carefully designed curriculum covers everything from Python basics to advanced AI concepts
            </p>
          </div>

          <div className="grid gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green">
                <div className="flex items-center mb-4">
                  {module.icon}
                  <h3 className="text-xl font-semibold text-navy ml-3">
                    Module {index + 1}: {module.title}
                  </h3>
                </div>
                <span className="text-green font-medium mb-4 block">{module.duration}</span>
                <div className="grid md:grid-cols-2 gap-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Master industry-standard tools used by top data scientists
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="font-medium text-navy">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Real-World Projects
            </h2>
            <p className="text-xl text-gray-600">
              Build a portfolio with hands-on projects that showcase your skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green">
                <Brain className="w-8 h-8 text-green mb-4" />
                <h3 className="text-lg font-semibold text-navy mb-2">{project}</h3>
                <p className="text-gray-600">
                  End-to-end implementation with real datasets and deployment
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Career Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Launch your career in the fastest-growing field in tech
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-navy">{career.title}</h3>
                  <span className="text-green font-bold">{career.salary}</span>
                </div>
                <p className="text-gray-600">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-navy mb-6 text-center">Prerequisites</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-4">Required</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green mr-3" />
                    <span>Basic computer literacy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green mr-3" />
                    <span>High school mathematics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green mr-3" />
                    <span>Logical thinking ability</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-4">Recommended</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-400 mr-3" />
                    <span>Basic programming knowledge (any language)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-400 mr-3" />
                    <span>Statistics background (helpful but not required)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Data Science Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join the next batch and transform your career with the most in-demand skills in tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Enroll Now - ₹15,000
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Talk to Counselor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataSciencePage

