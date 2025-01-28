'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, MicOff, Play, CircleStopIcon as Stop } from 'lucide-react'

const jobTypes = [
  "Software Development",
  "Data Science",
  "Product Management",
  "UI/UX Design",
  "Digital Marketing",
  "Business Development"
]

const difficultyLevels = [
  "Entry Level",
  "Mid Level",
  "Senior Level"
]

const commonQuestions = {
  "Software Development": {
    "Entry Level": [
      "What programming languages are you most comfortable with?",
      "Can you explain the difference between class and functional components in React?",
      "How do you handle errors in your code?",
      "What is version control and why is it important?"
    ],
    "Mid Level": [
      "Explain the concept of dependency injection.",
      "How do you optimize application performance?",
      "What design patterns have you implemented in your projects?",
      "How do you ensure code quality in your team?"
    ],
    "Senior Level": [
      "How would you architect a scalable microservices system?",
      "What strategies do you use for managing technical debt?",
      "How do you mentor junior developers?",
      "Describe a challenging technical problem you solved."
    ]
  },
  // Add more job types with their respective questions
}

export default function InterviewSimulator() {
  const [jobType, setJobType] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [audioChunks, setAudioChunks] = useState([])

  const startInterview = () => {
    if (jobType && difficulty) {
      const questions = commonQuestions[jobType]?.[difficulty] || []
      if (questions.length > 0) {
        setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)])
      }
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      const chunks = []

      recorder.ondataavailable = (e) => {
        chunks.push(e.data)
      }

      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/webm' })
        // Here you would typically send this blob to your AI service for analysis
        // For now, we'll simulate feedback
        generateFeedback()
      }

      recorder.start()
      setMediaRecorder(recorder)
      setAudioChunks(chunks)
      setIsRecording(true)
    } catch (err) {
      console.error('Error accessing microphone:', err)
      alert('Unable to access microphone. Please check your permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop()
      mediaRecorder.stream.getTracks().forEach(track => track.stop())
      setIsRecording(false)
    }
  }

  const generateFeedback = () => {
    // Simulate AI feedback
    const feedbackTemplates = [
      "Good clarity in your response. Consider providing more specific examples.",
      "Strong technical explanation. Try to include more real-world applications.",
      "Well-structured answer. You could elaborate more on the implementation details.",
      "Good understanding shown. Consider discussing potential challenges and solutions."
    ]
    setFeedback(feedbackTemplates[Math.floor(Math.random() * feedbackTemplates.length)])
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded-full">
          Practice Interview
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>AI Interview Simulator</DialogTitle>
          <DialogDescription>
            Practice your interview skills with AI-powered feedback.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger>
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficultyLevels.map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button onClick={startInterview} disabled={!jobType || !difficulty}>
            <Play className="mr-2 h-4 w-4" />
            Start Interview
          </Button>

          {currentQuestion && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Question:</h3>
                <p className="text-gray-700 mb-4">{currentQuestion}</p>
                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={isRecording ? stopRecording : startRecording}
                    variant={isRecording ? "destructive" : "default"}
                  >
                    {isRecording ? (
                      <>
                        <MicOff className="mr-2 h-4 w-4" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Mic className="mr-2 h-4 w-4" />
                        Start Recording
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {feedback && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">AI Feedback:</h3>
                <p className="text-gray-700">{feedback}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

