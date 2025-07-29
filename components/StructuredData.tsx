'use client'

import Script from 'next/script'

interface StructuredDataProps {
  type: 'organization' | 'course' | 'review' | 'faq'
  data?: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Doon Coding Academy",
          "alternateName": "DCA",
          "url": "https://doon-coding-academy.vercel.app",
          "logo": "https://doon-coding-academy.vercel.app/logo.png",
          "description": "Learn Full Stack Development, Data Science, Python, and Java at Doon Coding Academy. Expert-led coding courses in Dehradun with job placement assistance.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "22 Near D.R School, Herbertpur",
            "addressLocality": "Dehradun",
            "addressRegion": "Uttarakhand",
            "postalCode": "248142",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7037905464",
            "contactType": "customer service",
            "email": "dooncodingacademy@gmail.com"
          },
          "sameAs": [
            "https://wa.me/919876543210"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Coding Courses",
            "itemListElement": [
              {
                "@type": "Course",
                "name": "Data Science & AI",
                "description": "Comprehensive Data Science course covering Python, Machine Learning, and AI",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Doon Coding Academy"
                }
              },
              {
                "@type": "Course", 
                "name": "Full Stack Web Development",
                "description": "Complete web development course covering frontend and backend technologies",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Doon Coding Academy"
                }
              },
              {
                "@type": "Course",
                "name": "Python Programming",
                "description": "Learn Python from basics to advanced concepts with practical projects",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Doon Coding Academy"
                }
              },
              {
                "@type": "Course",
                "name": "Java Programming", 
                "description": "Master Java programming with object-oriented concepts and frameworks",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Doon Coding Academy"
                }
              }
            ]
          }
        }

      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data?.name || "Programming Course",
          "description": data?.description || "Learn programming with expert instructors",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Doon Coding Academy",
            "url": "https://doon-coding-academy.vercel.app"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["online", "onsite"],
            "duration": data?.duration || "3-6 months",
            "instructor": {
              "@type": "Person",
              "name": "Expert Instructors",
              "description": "Industry professionals with years of experience"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": data?.price || "6000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "EducationalOrganization",
            "name": "Doon Coding Academy"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": data?.author || "Student"
          },
          "reviewBody": data?.review || "Excellent coding academy with great instructors and practical approach."
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do I need prior programming experience?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, our courses are beginner-friendly. We start from the basics and gradually build up to advanced concepts."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide certificates?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, on completion of any course, you will receive an industry-recognized certificate from Doon Coding Academy."
              }
            },
            {
              "@type": "Question",
              "name": "Are classes available online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Both options are available. You can choose between in-person classes at our Herbertpur center or join our online sessions."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide job placement assistance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide interview preparation, resume building, and job placement assistance to help you start your career."
              }
            }
          ]
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) {
    return null
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

export default StructuredData

