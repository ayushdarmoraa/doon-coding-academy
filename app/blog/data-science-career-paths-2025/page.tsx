import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, ArrowRight, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Top 5 Career Paths in Data Science 2025: Salaries, Skills & Growth | Doon Coding Academy',
  description: 'Explore the top 5 data science career paths in 2025. Learn about salaries, required skills, and growth opportunities in AI, ML, and analytics.',
  keywords: [
    'data science careers 2025',
    'data scientist salary India',
    'machine learning jobs',
    'AI career opportunities',
    'data analytics careers',
    'data science course Dehradun'
  ]
}

const DataScienceCareers2025 = () => {
  const careerPaths = [
    {
      title: "Data Scientist",
      salary: "₹6-25 LPA",
      growth: "23% annually",
      description: "The classic data science role focusing on extracting insights from complex datasets using statistical analysis and machine learning.",
      skills: ["Python/R", "Statistics", "Machine Learning", "SQL", "Data Visualization"],
      companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Zomato"]
    },
    {
      title: "Machine Learning Engineer",
      salary: "₹8-30 LPA", 
      growth: "27% annually",
      description: "Bridge the gap between data science and software engineering by deploying ML models into production systems.",
      skills: ["Python", "TensorFlow/PyTorch", "MLOps", "Cloud Platforms", "Software Engineering"],
      companies: ["Netflix", "Uber", "Tesla", "OpenAI", "NVIDIA"]
    },
    {
      title: "Data Analyst",
      salary: "₹4-15 LPA",
      growth: "19% annually", 
      description: "Focus on interpreting data to help businesses make informed decisions through reporting and visualization.",
      skills: ["SQL", "Excel", "Tableau/Power BI", "Python", "Statistics"],
      companies: ["McKinsey", "Deloitte", "Accenture", "TCS", "Infosys"]
    },
    {
      title: "AI Research Scientist",
      salary: "₹12-40 LPA",
      growth: "31% annually",
      description: "Conduct cutting-edge research in artificial intelligence, developing new algorithms and advancing the field.",
      skills: ["Deep Learning", "Research Methodology", "Mathematics", "Python", "Academic Writing"],
      companies: ["DeepMind", "OpenAI", "Facebook AI", "IBM Research", "IIT Labs"]
    },
    {
      title: "Business Intelligence Developer",
      salary: "₹5-18 LPA",
      growth: "15% annually",
      description: "Design and develop BI solutions that help organizations make data-driven business decisions.",
      skills: ["SQL", "ETL Tools", "Data Warehousing", "BI Tools", "Business Acumen"],
      companies: ["Oracle", "SAP", "Tableau", "Microsoft", "Salesforce"]
    }
  ]

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
            Top 5 Career Paths in Data Science 2025: Your Complete Guide
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 20, 2025
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
            src="/instructor-teaching.jpg" 
            alt="Data science instructor teaching students" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Data science continues to be one of the fastest-growing and highest-paying fields in technology. As we move through 2025, the demand for skilled data professionals has reached unprecedented levels, with organizations across all industries seeking experts who can turn data into actionable insights.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
              <h3 className="font-semibold text-blue-800 mb-2">Industry Snapshot 2025</h3>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li>Data science job postings increased by 35% compared to 2024</li>
                <li>Average salary growth of 18% year-over-year</li>
                <li>Over 2.3 million data science jobs expected to be created globally</li>
                <li>AI and ML roles showing the highest demand and compensation</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">The Data Science Landscape in 2025</h2>
            
            <p className="mb-4">
              The data science field has matured significantly, branching into specialized roles that cater to different aspects of the data lifecycle. From collecting and cleaning data to building sophisticated AI models, each career path offers unique opportunities and challenges.
            </p>

            <p className="mb-6">
              What makes 2025 particularly exciting for data science professionals is the convergence of several trends: the democratization of AI tools, the explosion of data from IoT devices, the mainstream adoption of cloud computing, and the increasing focus on ethical AI and responsible data use.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Top 5 Data Science Career Paths</h2>

            {careerPaths.map((career, index) => (
              <div key={index} className="mb-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy">{index + 1}. {career.title}</h3>
                  <div className="text-right">
                    <div className="flex items-center text-green font-semibold">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {career.salary}
                    </div>
                    <div className="flex items-center text-blue-600 text-sm">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {career.growth}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{career.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Key Skills Required:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Top Hiring Companies:</h4>
                    <div className="text-gray-600 text-sm">
                      {career.companies.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Skills That Matter Most in 2025</h2>
            
            <p className="mb-4">
              While technical skills remain crucial, the data science field in 2025 increasingly values professionals who can bridge the gap between technical complexity and business value. Here are the most in-demand skills:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green/5 p-4 rounded-lg">
                <h3 className="font-semibold text-navy mb-2">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Python and R programming</li>
                  <li>Machine Learning frameworks (TensorFlow, PyTorch)</li>
                  <li>Cloud platforms (AWS, Azure, GCP)</li>
                  <li>Big Data technologies (Spark, Hadoop)</li>
                  <li>MLOps and model deployment</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-navy mb-2">Soft Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Business acumen and domain knowledge</li>
                  <li>Communication and storytelling</li>
                  <li>Project management</li>
                  <li>Ethical AI and bias awareness</li>
                  <li>Continuous learning mindset</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">How to Choose Your Path</h2>
            
            <p className="mb-4">
              Selecting the right data science career path depends on your interests, strengths, and career goals. Consider these factors when making your decision:
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">Decision Framework:</h3>
              <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                <li><strong>Interest in Research vs. Application:</strong> Do you prefer discovering new methods or applying existing ones?</li>
                <li><strong>Technical Depth vs. Business Focus:</strong> Are you more excited by algorithms or business impact?</li>
                <li><strong>Team Collaboration vs. Independent Work:</strong> Do you thrive in collaborative environments or prefer solo projects?</li>
                <li><strong>Industry Preference:</strong> Which sectors interest you most (tech, finance, healthcare, etc.)?</li>
                <li><strong>Career Timeline:</strong> Are you looking for immediate opportunities or willing to invest in long-term specialization?</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Getting Started: Education and Training</h2>
            
            <p className="mb-4">
              The path to a successful data science career typically involves a combination of formal education, practical experience, and continuous learning. While a degree in computer science, statistics, or mathematics provides a strong foundation, many successful data scientists come from diverse backgrounds.
            </p>

            <p className="mb-4">
              Structured courses and bootcamps have become increasingly popular for career changers and recent graduates. These programs offer intensive, practical training that focuses on industry-relevant skills and real-world projects.
            </p>

            <p className="mb-6">
              At Doon Coding Academy, our comprehensive Data Science course is designed to prepare students for any of these career paths. Our curriculum covers everything from Python programming and statistics to advanced machine learning and deployment strategies, ensuring graduates are job-ready from day one.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Salary Trends and Market Outlook</h2>
            
            <p className="mb-4">
              Data science salaries in India have seen remarkable growth, with entry-level positions now offering competitive packages that rival traditional software engineering roles. The salary ranges mentioned above reflect current market conditions, but several factors can influence compensation:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Location:</strong> Bangalore, Mumbai, and Delhi NCR offer the highest salaries</li>
              <li><strong>Company Size:</strong> Large tech companies and startups often pay premium salaries</li>
              <li><strong>Specialization:</strong> AI/ML specialists command higher compensation than generalists</li>
              <li><strong>Experience:</strong> Senior professionals with 5+ years can earn significantly more</li>
              <li><strong>Industry:</strong> Finance and healthcare sectors typically offer higher salaries</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Future Trends to Watch</h2>
            
            <p className="mb-4">
              As we look ahead, several trends will shape the data science landscape:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Emerging Technologies</h3>
                <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm">
                  <li>Generative AI and Large Language Models</li>
                  <li>Quantum Machine Learning</li>
                  <li>Edge AI and IoT Analytics</li>
                  <li>Automated Machine Learning (AutoML)</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Industry Focus Areas</h3>
                <ul className="list-disc list-inside space-y-1 text-orange-700 text-sm">
                  <li>Sustainable AI and Green Computing</li>
                  <li>Ethical AI and Bias Mitigation</li>
                  <li>Real-time Analytics and Streaming</li>
                  <li>Personalization and Recommendation Systems</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Conclusion</h2>
            
            <p className="mb-4">
              The data science field in 2025 offers unprecedented opportunities for those willing to invest in developing the right skills. Whether you're drawn to the analytical rigor of traditional data science, the engineering challenges of ML deployment, or the cutting-edge research in AI, there's a path that aligns with your interests and goals.
            </p>

            <p className="mb-6">
              The key to success lies in choosing a path that matches your strengths, staying current with industry trends, and continuously building practical experience through real-world projects. With the right preparation and mindset, a rewarding career in data science awaits.
            </p>

            <div className="bg-green/10 p-6 rounded-lg border border-green/20 mt-8">
              <h3 className="font-semibold text-navy mb-2">Ready to Launch Your Data Science Career?</h3>
              <p className="text-gray-700 mb-4">
                Join our comprehensive Data Science course and gain the skills needed to excel in any of these high-demand career paths. Our industry-focused curriculum and hands-on approach ensure you're ready for the job market.
              </p>
              <Link href="/courses/data-science" className="btn-primary inline-flex items-center">
                Explore Our Data Science Course
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default DataScienceCareers2025

