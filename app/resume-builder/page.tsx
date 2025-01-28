'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileDown } from 'lucide-react'
import ResumeForm from '../components/ResumeForm'
import ResumePreview from '../components/ResumePreview'
import { motion } from 'framer-motion'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import Header from '../components/Header'

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState('modern')
  const [isPdfGenerating, setIsPdfGenerating] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Assuming the user is authenticated

  const handleDownloadPdf = async () => {
    setIsPdfGenerating(true)
    try {
      const input = document.getElementById('resume-preview')
      const canvas = await html2canvas(input, { scale: 2 })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 30
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('resume.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setIsPdfGenerating(false)
    }
  }

  const handleDownloadDocx = async () => {
    try {
      const content = document.getElementById('resume-preview').innerHTML
      const blob = new Blob([`
        <html>
          <head>
            <style>
              body { margin: 0.5in 0.5in 0.5in 0.5in; }
              * { font-family: ${resumeData?.font || 'Calibri'}; }
            </style>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `], { type: 'application/vnd.ms-word' })
      
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'resume.docx'
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating DOCX:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <Header isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} />
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-purple-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create Your Professional Resume
        </motion.h1>

        <motion.p 
          className="text-xl text-center mb-8 text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Craft a standout resume that opens doors to your dream career
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Resume Details</h2>
              <ResumeForm 
                setResumeData={setResumeData} 
                setSelectedTemplate={setSelectedTemplate}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Resume Preview</h2>
              <div id="resume-preview">
                {resumeData && (
                  <ResumePreview 
                    resumeData={resumeData} 
                    template={selectedTemplate}
                  />
                )}
              </div>
              {resumeData && (
                <div className="mt-6 flex justify-center space-x-4">
                  <Button
                    onClick={handleDownloadPdf}
                    disabled={isPdfGenerating}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {isPdfGenerating ? 'Generating PDF...' : 'Download PDF'}
                    <FileDown className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleDownloadDocx}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Download DOCX
                    <FileDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

