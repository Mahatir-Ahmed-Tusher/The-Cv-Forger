'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"

const analysisSamples = [
  `Resume Analysis:
  1. Overall Impression: Strong resume with clear structure.
  2. Strengths:
     - Well-organized sections
     - Quantifiable achievements highlighted
     - Relevant skills clearly presented
  3. Areas for Improvement:
     - Consider adding more industry-specific keywords
     - Elaborate on your most impactful projects
     - Ensure consistent formatting throughout
  4. Recommendations:
     - Tailor your resume more specifically to the job description
     - Add a brief professional summary at the top
     - Include any relevant certifications or continued education`,

  `Resume Evaluation:
  1. General Assessment: Solid foundation, but room for improvement.
  2. Positive Aspects:
     - Clear chronological order of experiences
     - Good use of action verbs
     - Concise bullet points
  3. Potential Enhancements:
     - Strengthen your personal brand statement
     - Incorporate more measurable results and achievements
     - Optimize for Applicant Tracking Systems (ATS)
  4. Suggestions:
     - Use a more modern, clean design
     - Prioritize experiences most relevant to target roles
     - Include a skills section with both hard and soft skills`,

  `Resume Feedback:
  1. Initial Impression: Comprehensive content, but could be more impactful.
  2. Highlights:
     - Detailed work history
     - Educational background well-presented
     - Inclusion of relevant projects
  3. Areas to Address:
     - Reduce overall length; aim for 1-2 pages
     - Make achievements more prominent
     - Improve scannability with better formatting
  4. Action Items:
     - Start with a powerful professional summary
     - Use industry-specific jargon strategically
     - Add links to online portfolios or professional profiles`
]

export default function ResumeAnalyzer() {
  const [resumeContent, setResumeContent] = useState('')
  const [analysis, setAnalysis] = useState('')

  const analyzeResume = () => {
    // This is a placeholder for the actual AI-powered resume analysis
    // In a real implementation, this would involve sending the resume content to an AI service
    const randomAnalysis = analysisSamples[Math.floor(Math.random() * analysisSamples.length)]
    setAnalysis(randomAnalysis)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full">
          Analyze Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>AI Resume Analyzer</DialogTitle>
          <DialogDescription>
            Paste your resume content below for AI-powered analysis and suggestions.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Paste your resume content here..."
            value={resumeContent}
            onChange={(e) => setResumeContent(e.target.value)}
            rows={10}
          />
          <Button onClick={analyzeResume}>Analyze</Button>
          {analysis && (
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              <pre className="text-sm whitespace-pre-wrap">{analysis}</pre>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

