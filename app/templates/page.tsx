'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const templates = [
  {
    name: 'ATS Classic HR Resume',
    image: 'https://i.postimg.cc/cHKYKxJJ/ATS-classic-HR-resume-page0001-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1q2LxMKUNB0kC_9WKp5pG1OeENK1cZqNn/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Most Downloaded']
  },
  {
    name: 'Attorney Resume',
    image: 'https://i.postimg.cc/3RPGmsyF/Attorney-resume-page0001-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1USmWQfr97EYU1pGx2Ms9QIwtwwJ8yC3P/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Legal']
  },
  {
    name: 'Basic Sales Resume',
    image: 'https://i.postimg.cc/wTYJvdY6/Basic-sales-resume-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1OmZcX3cbzEPDr7ZvFP6r23H4P9lU6Sij/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Simple',
    tags: ['Sales']
  },
  {
    name: 'Bold Modern Cover Letter',
    image: 'https://i.postimg.cc/9QW7dtfK/Bold-modern-cover-letter-Copy-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1sUbX-QCooTtgODzDgFw4thJsMaExztco/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Creative',
    tags: ['Cover Letter']
  },
  {
    name: 'Classic UI/UX Designer Resume',
    image: 'https://i.postimg.cc/T3CWCLLw/Classic-UIUX-designer-resume-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1Ctwa5ErW5xKRBJMFDsk5KnKMmnXI2OvX/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Design']
  },
  {
    name: 'Alternative UI/UX Designer Resume',
    image: 'https://i.postimg.cc/T3CWCLLw/Classic-UIUX-designer-resume-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1GL5YJU4slTGqeKkuqBu2F5xD6ADlqHEV/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Creative',
    tags: ['Design']
  },
  {
    name: 'CV Template 3',
    image: 'https://i.postimg.cc/wTYJvdY6/Basic-sales-resume-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/12_M1txFzLZgYUS-Gyq7o2uyBl0H6Tc0a/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Simple',
    tags: []
  },
  {
    name: 'CV Template 5',
    image: 'https://i.postimg.cc/wTYJvdY6/Basic-sales-resume-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1K2x7Y_MmBCxhp0EH5HfVPc7pUezAzrai/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Simple',
    tags: []
  },
  {
    name: 'Industry Manager Resume',
    image: 'https://i.postimg.cc/4dh7fW87/Industry-manager-resume.png',
    downloadLink: 'https://docs.google.com/document/d/1K2x7Y_MmBCxhp0EH5HfVPc7pUezAzrai/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Management']
  },
  {
    name: 'Job Interview Checklist',
    image: 'https://i.postimg.cc/4dh7fW87/Industry-manager-resume.png',
    downloadLink: 'https://docs.google.com/document/d/1DUOyK39VkvRERFchQ2npl2p_PF5oGrrr/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Resources',
    tags: ['Interview']
  },
  {
    name: 'Modern Accounting Resume',
    image: 'https://i.postimg.cc/wTYJvdY6/Basic-sales-resume-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1ChxJet4zONTUzifm66dReiFNXELdm4M1/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Finance']
  },
  {
    name: 'Modern Multi-page Resume',
    image: 'https://i.postimg.cc/9QW7dtfK/Bold-modern-cover-letter-Copy-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1OCcQfiOxKBBhZIxKMCJj9BlYkixuDEta/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Creative',
    tags: ['Multi-page']
  },
  {
    name: 'Modern Hospitality Resume',
    image: 'https://i.postimg.cc/wTYJvdY6/Basic-sales-resume-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1OCcQfiOxKBBhZIxKMCJj9BlYkixuDEta/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Hospitality']
  },
  {
    name: 'Modern Web Developer Resume',
    image: 'https://i.postimg.cc/cHKYKxJJ/ATS-classic-HR-resume-page0001-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1wa7Z6KZ71cFhxJkhXa7gXVJhe2nKRlr2/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Tech']
  },
  {
    name: 'Project Management Resume',
    image: 'https://i.postimg.cc/3RPGmsyF/Attorney-resume-page0001-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1DMM0b6iQ-srtC806xV0PuVHEG-MTfFuI/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Management']
  },
  {
    name: 'Internal Company Transfer Resume',
    image: 'https://i.postimg.cc/cHKYKxJJ/ATS-classic-HR-resume-page0001-Copy.jpg',
    downloadLink: 'https://docs.google.com/document/d/1xbdnqfsqk6p-A5T61uHSEArbb9cw44Jp/edit?usp=sharing&ouid=104220705338243063840&rtpof=true&sd=true',
    category: 'Professional',
    tags: ['Internal']
  }
]

const heroSlides = [
  { 
    title: "Modern Design", 
    description: "Stand out with our contemporary layouts",
    image: templates[0].image
  },
  { 
    title: "Professional Style", 
    description: "Impress employers with sleek, polished designs",
    image: templates[1].image
  },
  { 
    title: "Creative Layouts", 
    description: "Showcase your unique skills with eye-catching templates",
    image: templates[3].image
  }
]

export default function TemplatesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeTemplate, setActiveTemplate] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 font-montserrat">
      <Header isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional CV Templates
          </h1>
          <p className="text-xl text-gray-600">
            Make CV from our Templates
          </p>
        </motion.div>

        {/* Hero Section with Sliding Animation */}
        <motion.div 
          className="relative h-[600px] mb-16 overflow-hidden rounded-xl shadow-2xl bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full flex items-center justify-between p-12"
              initial={{ opacity: 0, x: 300 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                x: currentSlide === index ? 0 : 300,
                zIndex: currentSlide === index ? 1 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="max-w-lg">
                <motion.h2 
                  className="text-5xl font-bold text-white mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-2xl text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {slide.description}
                </motion.p>
              </div>
              <motion.div
                className="relative w-[400px] h-[500px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contain rounded-lg shadow-xl"
                  priority
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Filter Options */}
        <div className="mb-8 flex justify-center">
          <motion.select
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-xs"
            onChange={(e) => setSelectedCategory(e.target.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <option value="All">All Categories</option>
            <option value="Professional">Professional</option>
            <option value="Creative">Creative</option>
            <option value="Simple">Simple</option>
            <option value="Resources">Resources</option>
          </motion.select>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={template.image}
                      alt={template.name}
                      fill
                      className="object-cover"
                    />
                    {template.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + tagIndex * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 font-bold">{template.name}</CardTitle>
                  <CardDescription>
                    Professional template designed for maximum impact
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <motion.button
                    onClick={() => setActiveTemplate(template)}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Preview
                  </motion.button>
                  <motion.a 
                    href={template.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Customize & Download
                  </motion.a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Template Preview Modal */}
        {activeTemplate && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-3xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">{activeTemplate.name}</h2>
              <Image
                src={activeTemplate.image}
                alt={activeTemplate.name}
                width={800}
                height={600}
                className="w-full h-auto object-contain mb-4"
              />
              <div className="flex justify-end">
                <Button onClick={() => setActiveTemplate(null)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  )
}

