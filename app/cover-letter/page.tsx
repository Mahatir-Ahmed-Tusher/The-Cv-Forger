'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import Header from '../components/Header'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CoverLetterTool() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    hiringManager: '',
    jobDescription: '',
    keySkills: '',
    coverLetter: ''
  })
  const [selectedFont, setSelectedFont] = useState('Times New Roman')
  const [isPdfGenerating, setIsPdfGenerating] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Assuming the user is authenticated

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const generateCoverLetter = () => {
    const generatedLetter = `Dear ${formData.hiringManager},

I am writing to express my strong interest in the ${formData.position} position at ${formData.company}. With my background and skills in ${formData.keySkills}, I believe I would be a valuable addition to your team.

[Rest of the generated cover letter...]

Thank you for your time and consideration. I look forward to the opportunity to discuss how I can contribute to ${formData.company}.

Sincerely,
${formData.name}`

    setFormData({ ...formData, coverLetter: generatedLetter })
  }

  const handleDownloadPdf = async () => {
    setIsPdfGenerating(true)
    try {
      const input = document.getElementById('cover-letter-preview')
      const canvas = await html2canvas(input, { scale: 2, logging: false, useCORS: true })
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
      pdf.save('cover-letter.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setIsPdfGenerating(false)
    }
  }

  const handleDownloadDocx = async () => {
    try {
      const content = document.getElementById('cover-letter-preview').innerHTML
      const blob = new Blob([`
        <html>
          <head>
            <style>
              body { margin: 0.5in 0.5in 0.5in 0.5in; }
              * { font-family: ${selectedFont}; }
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
      a.download = 'cover-letter.docx'
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
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">The Cover Letter Tool</h1>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Cover Letter Generator</h2>
          <div className="space-y-4">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="rounded-full"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="rounded-full"
            />
            <Input
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="rounded-full"
            />
            <Input
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleInputChange}
              className="rounded-full"
            />
            <Input
              name="position"
              placeholder="Position Applied For"
              value={formData.position}
              onChange={handleInputChange}
              className="rounded-full"
            />
            <Input
              name="hiringManager"
              placeholder="Hiring Manager's Name"
              value={formData.hiringManager}
              onChange={handleInputChange}
              className="rounded-full"
            />
            <Textarea
              name="jobDescription"
              placeholder="Job Description"
              value={formData.jobDescription}
              onChange={handleInputChange}
              className="rounded-xl"
            />
            <Textarea
              name="keySkills"
              placeholder="Your Key Skills (comma-separated)"
              value={formData.keySkills}
              onChange={handleInputChange}
              className="rounded-xl"
            />
            <Select
              value={selectedFont}
              onValueChange={setSelectedFont}
            >
              <SelectTrigger className="rounded-full">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                <SelectItem value="Helvetica">Helvetica</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={generateCoverLetter}
              className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Generate Cover Letter
            </Button>
            {formData.coverLetter && (
              <div>
                <div
                  id="cover-letter-preview"
                  className="mt-4 p-6 border rounded-lg"
                  style={{ fontFamily: selectedFont }}
                >
                  <pre className="whitespace-pre-wrap">{formData.coverLetter}</pre>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button
                    onClick={handleDownloadPdf}
                    disabled={isPdfGenerating}
                    className="flex-1 rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isPdfGenerating ? 'Generating PDF...' : 'Download PDF'}
                  </Button>
                  <Button
                    onClick={handleDownloadDocx}
                    className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Download DOCX
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

