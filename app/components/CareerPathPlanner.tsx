'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const industries = ["Technology", "Finance", "Healthcare", "Education", "Manufacturing"]
const careerLevels = ["Entry Level", "Mid Level", "Senior Level", "Management", "Executive"]

export default function CareerPathPlanner() {
  const [currentIndustry, setCurrentIndustry] = useState("")
  const [currentLevel, setCurrentLevel] = useState("")
  const [targetLevel, setTargetLevel] = useState("")
  const [yearsExperience, setYearsExperience] = useState("")
  const [skills, setSkills] = useState("")
  const [careerPlan, setCareerPlan] = useState(null)

  const generateCareerPlan = () => {
    // This is a simplified career plan generation.
    // In a real application, this would involve more complex logic or AI.
    const plan = {
      currentStatus: `You are currently in the ${currentIndustry} industry at a ${currentLevel} position with ${yearsExperience} years of experience.`,
      targetStatus: `Your goal is to reach a ${targetLevel} position.`,
      steps: [
        "Continue to develop technical skills relevant to your industry.",
        "Seek mentorship from professionals in your target position.",
        "Take on additional responsibilities in your current role to demonstrate leadership.",
        "Consider pursuing relevant certifications or advanced degrees.",
        "Build your professional network through industry events and online platforms."
      ],
      skillsToAcquire: [
        "Advanced project management",
        "Team leadership and delegation",
        "Strategic planning and execution",
        "Financial management and budgeting",
        "Advanced communication and negotiation skills"
      ]
    }
    setCareerPlan(plan)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-full">
          Plan Your Career
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Career Path Planner</DialogTitle>
          <DialogDescription>
            Map out your long-term career goals and get personalized advice.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select value={currentIndustry} onValueChange={setCurrentIndustry}>
            <SelectTrigger>
              <SelectValue placeholder="Select your current industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>{industry}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={currentLevel} onValueChange={setCurrentLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select your current career level" />
            </SelectTrigger>
            <SelectContent>
              {careerLevels.map((level) => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={targetLevel} onValueChange={setTargetLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select your target career level" />
            </SelectTrigger>
            <SelectContent>
              {careerLevels.map((level) => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Years of experience"
            value={yearsExperience}
            onChange={(e) => setYearsExperience(e.target.value)}
          />
          <Textarea
            placeholder="List your key skills (comma-separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <Button onClick={generateCareerPlan}>Generate Career Plan</Button>
        </div>
        {careerPlan && (
          <Card>
            <CardHeader>
              <CardTitle>Your Career Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{careerPlan.currentStatus}</CardDescription>
              <CardDescription>{careerPlan.targetStatus}</CardDescription>
              <h4 className="font-semibold mt-4">Steps to Achieve Your Goal:</h4>
              <ul className="list-disc pl-5">
                {careerPlan.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-4">Skills to Acquire:</h4>
              <ul className="list-disc pl-5">
                {careerPlan.skillsToAcquire.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  )
}

