'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SkillsGapAnalysis() {
  const [jobDescription, setJobDescription] = useState('')
  const [userSkills, setUserSkills] = useState('')
  const [analysis, setAnalysis] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const performAnalysis = () => {
    setIsLoading(true)
    // Simulating API call
    setTimeout(() => {
      const requiredSkills = jobDescription.toLowerCase().match(/\b(\w+)\b/g) || []
      const userSkillsList = userSkills.toLowerCase().match(/\b(\w+)\b/g) || []
      
      const matchedSkills = requiredSkills.filter(skill => userSkillsList.includes(skill))
      const missingSkills = requiredSkills.filter(skill => !userSkillsList.includes(skill))
      
      const matchPercentage = (matchedSkills.length / requiredSkills.length) * 100

      setAnalysis({
        matchPercentage,
        matchedSkills,
        missingSkills,
        recommendations: [
          "Take online courses to learn missing skills",
          "Work on personal projects to gain practical experience",
          "Attend industry workshops and conferences",
          "Seek mentorship in areas where you lack experience"
        ]
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <Header isAuthenticated={true} onLogout={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Skills Gap Analysis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
              <CardDescription>Paste the job description here</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Enter job description..." 
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="min-h-[200px]"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Skills</CardTitle>
              <CardDescription>List your skills (comma-separated)</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Enter your skills..." 
                value={userSkills}
                onChange={(e) => setUserSkills(e.target.value)}
                className="min-h-[200px]"
              />
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button 
            onClick={performAnalysis} 
            disabled={isLoading}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {isLoading ? 'Analyzing...' : 'Perform Analysis'}
          </Button>
        </div>
        {analysis && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Skills Match</h3>
                <Progress value={analysis.matchPercentage} className="w-full" />
                <p className="text-sm text-gray-600 mt-1">{analysis.matchPercentage.toFixed(2)}% match</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Matched Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {analysis.matchedSkills.map((skill, index) => (
                    <span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Missing Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {analysis.missingSkills.map((skill, index) => (
                    <span key={index} className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
                <ul className="list-disc pl-5">
                  {analysis.recommendations.map((recommendation, index) => (
                    <li key={index} className="text-sm text-gray-600">{recommendation}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  )
}

