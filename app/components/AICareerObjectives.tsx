'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

const objectiveTypes = [
  { value: "entry-level", label: "Type 1: Entry-Level Career Objectives" },
  { value: "transition", label: "Type 2: Career Transition Objectives" },
  { value: "experienced", label: "Type 3: Experienced Professional Objectives" },
  { value: "growth", label: "Type 4: Career Growth Objectives" },
  { value: "niche", label: "Type 5: Niche/Specific Career Objectives" }
]

const careerObjectives = {
  "entry-level": [
    "Seeking an entry-level position in a forward-thinking organization where I can harness my academic foundation and proactive approach to contribute to team objectives.",
    "Aspiring to kickstart my career in marketing by utilizing my knowledge of digital trends, branding strategies, and consumer analytics.",
    "Seeking an entry-level role in software development where I can apply my expertise in programming languages, problem-solving abilities, and an eagerness to learn.",
    "Eager to join an organization where I can launch my HR career, contributing to recruitment, employee development, and engagement initiatives.",
    "A recent graduate with a strong foundation in financial principles, looking to apply analytical and problem-solving skills in an entry-level finance or accounting position.",
    "Dedicated to delivering excellent customer service by building rapport with clients and addressing their needs effectively."
  ],
  "transition": [
    "Motivated to transition into [desired field], leveraging my [specific transferable skills] from [previous role/field].",
    "With a background in [administrative/related role], I am transitioning into healthcare to make a meaningful impact.",
    "Pivoting into the tech industry, I bring a strong foundation in analytical thinking, project management, and recent certifications in [specific area].",
    "Transitioning from a corporate role to the field of education, driven by a passion for inspiring learners and sharing practical insights.",
    "Seeking a managerial role to capitalize on my leadership and team-building experience.",
    "Transitioning into the creative sector to merge my analytical skills with my passion for design and storytelling."
  ],
  "experienced": [
    "A highly experienced professional with over [X years] in [industry/role], seeking to utilize my expertise to address complex challenges and deliver measurable results.",
    "Skilled project manager with extensive experience in leading multidisciplinary teams and delivering complex projects.",
    "Proven sales professional with a record of exceeding revenue targets and driving market share growth.",
    "Accomplished finance professional with a robust track record in financial planning, analysis, and risk management.",
    "Senior software developer with deep expertise in [specific technologies or methodologies].",
    "Operations manager with [X years] of experience in streamlining workflows, reducing costs, and driving efficiency."
  ],
  "growth": [
    "Seeking a challenging role in a growth-oriented organization where I can expand my skills and take on increasing responsibilities.",
    "Striving to advance into a managerial position where I can lead teams, implement innovative solutions, and contribute to strategic planning and organizational success.",
    "Looking for opportunities to deepen my knowledge and expertise in [specific field], focusing on emerging trends and innovative solutions that create a meaningful impact.",
    "Passionate about exploring cross-functional roles to gain a holistic understanding of business operations and develop a versatile skill set that aligns with organizational needs.",
    "Focused on building leadership capabilities to inspire teams, drive collaboration, and achieve strategic objectives that benefit both the organization and stakeholders.",
    "Aspiring to align my career growth with roles that have a significant long-term impact, contributing to societal advancement or industry transformation."
  ],
  "niche": [
    "Aspiring to become a data scientist who transforms complex datasets into actionable insights.",
    "Committed to driving environmental sustainability initiatives by developing and implementing eco-friendly practices.",
    "Looking to specialize in AI and machine learning, focusing on developing intelligent systems that enhance productivity, automate tasks, and contribute to technological advancements.",
    "Seeking a role at the intersection of IT and healthcare, where I can leverage technical expertise to streamline medical processes, enhance patient care, and drive innovation in health technology.",
    "Passionate about storytelling and creative expression, I am seeking a content creation role that allows me to craft compelling narratives, engage audiences, and bring ideas to life through innovative mediums.",
    "Dedicated to making a difference through roles in NGOs or social enterprises."
  ]
}

export default function AICareerObjectives() {
  const [selectedType, setSelectedType] = useState("")
  const [objectives, setObjectives] = useState([])

  const handleTypeChange = (value) => {
    setSelectedType(value)
    setObjectives(careerObjectives[value])
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-full">
          Generate Career Objectives
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>AI Career Objectives Generator</DialogTitle>
          <DialogDescription>
            Choose a career objective type to generate tailored objectives.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select onValueChange={handleTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select objective type" />
            </SelectTrigger>
            <SelectContent>
              {objectiveTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {objectives.length > 0 && (
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Generated Objectives:</h4>
              {objectives.map((objective, index) => (
                <p key={index} className="text-sm mb-2">{index + 1}. {objective}</p>
              ))}
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

