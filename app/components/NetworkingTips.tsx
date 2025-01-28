'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const networkingTips = [
  {
    title: "Attend Industry Events",
    description: "Participate in conferences, workshops, and meetups related to your field to meet like-minded professionals."
  },
  {
    title: "Utilize LinkedIn",
    description: "Maintain an updated LinkedIn profile and engage with content in your industry. Connect with professionals and join relevant groups."
  },
  {
    title: "Informational Interviews",
    description: "Reach out to professionals in roles you're interested in and ask for a brief informational interview to learn about their career path."
  },
  {
    title: "Join Professional Associations",
    description: "Become a member of professional associations in your field to access networking events, resources, and job boards."
  },
  {
    title: "Volunteer",
    description: "Offer your skills to non-profit organizations or community projects to expand your network while making a positive impact."
  },
  {
    title: "Follow Up",
    description: "After meeting new contacts, follow up with a personalized message or email to maintain the connection."
  },
  {
    title: "Be a Resource",
    description: "Offer help and share valuable information with your network. Building relationships is a two-way street."
  },
  {
    title: "Practice Your Elevator Pitch",
    description: "Develop a concise introduction about yourself and your professional goals for networking opportunities."
  }
]

export default function NetworkingTips() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  const nextTip = () => {
    setCurrentTipIndex((prevIndex) => (prevIndex + 1) % networkingTips.length)
  }

  const prevTip = () => {
    setCurrentTipIndex((prevIndex) => (prevIndex - 1 + networkingTips.length) % networkingTips.length)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-full">
          Networking Tips
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Effective Networking Strategies</DialogTitle>
          <DialogDescription>
            Learn how to build and maintain professional relationships to boost your career.
          </DialogDescription>
        </DialogHeader>
        <Card>
          <CardHeader>
            <CardTitle>{networkingTips[currentTipIndex].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{networkingTips[currentTipIndex].description}</CardDescription>
          </CardContent>
        </Card>
        <div className="flex justify-between mt-4">
          <Button onClick={prevTip}>Previous Tip</Button>
          <Button onClick={nextTip}>Next Tip</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

