"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare } from "lucide-react"

type Message = {
  type: "user" | "bot" | "mistral"
  content: string
}

const chatbotData = {
  "CV/Resume": [
    {
      question: "How can I make my CV stand out?",
      answer:
        "Focus on your unique achievements, tailor your CV to the job description, and use action verbs like 'developed,' 'led,' and 'achieved.'",
    },
    {
      question: "Should I include hobbies in my CV?",
      answer:
        "Only include hobbies if they are relevant to the job or showcase transferable skills, like leadership or teamwork.",
    },
    {
      question: "How often should I update my CV?",
      answer: "Update your CV after every major professional milestone or at least once a year.",
    },
    {
      question: "Can I use colour in my CV design?",
      answer: "Yes, but keep it minimal and professional. Subtle colours for headings or section dividers work best.",
    },
    {
      question: "Should I add a personal statement to my CV?",
      answer:
        "Yes, a personal statement is a great way to summarize your career goals and highlight your value proposition.",
    },
  ],
  Portfolio: [
    {
      question: "What are some tools for creating a digital portfolio?",
      answer: "Popular tools include Wix, Squarespace, WordPress, and GitHub for developers.",
    },
    {
      question: "What types of work should I include in my portfolio?",
      answer:
        "Include projects that showcase your skills, creativity, and impact. For instance, case studies, designs, or code repositories.",
    },
    {
      question: "How do I present a project in my portfolio?",
      answer: "Include a project title, description, your role, the tools used, and the final outcomes.",
    },
    {
      question: "Should I include testimonials in my portfolio?",
      answer: "Testimonials from colleagues or clients can add credibility to your portfolio.",
    },
    {
      question: "Can I include unfinished projects?",
      answer:
        "Only include unfinished projects if they demonstrate important skills and clearly label them as 'works in progress.'",
    },
  ],
  "Job Interview": [
    {
      question: "How should I answer 'Why should we hire you?'",
      answer: "Highlight how your skills, experience, and values align with the company's needs and goals.",
    },
    {
      question: "What should I wear to a job interview in Bangladesh?",
      answer:
        "Business formal is usually preferred. For men, this could be a shirt and tie; for women, a formal dress or saree.",
    },
    {
      question: "How do I stay calm during an interview?",
      answer:
        "Practice deep breathing, prepare thoroughly, and focus on the interviewer's questions rather than your nerves.",
    },
    {
      question: "What is a STAR interview technique?",
      answer:
        "STAR stands for Situation, Task, Action, Result. Use this method to structure answers for behavioural interview questions.",
    },
    {
      question: "How can I negotiate salary in an interview?",
      answer:
        "Research industry standards, be confident, and present a reasonable range based on your skills and experience.",
    },
  ],
  "Career Guidance": [
    {
      question: "How do I identify my strengths and weaknesses?",
      answer: "Reflect on past experiences, ask for feedback from peers, and use tools like SWOT analysis.",
    },
    {
      question: "What are some essential skills for career growth?",
      answer: "Communication, adaptability, problem-solving, and technical skills relevant to your field are key.",
    },
    {
      question: "How do I stay motivated in my career?",
      answer: "Set clear goals, celebrate small achievements, and continuously seek opportunities for learning.",
    },
    {
      question: "Should I pursue higher education for career advancement?",
      answer:
        "It depends on your field. Research industry requirements and weigh the costs against potential benefits.",
    },
    {
      question: "What is career mentorship, and why is it important?",
      answer:
        "Career mentorship involves guidance from experienced professionals, helping you make informed decisions and achieve your goals.",
    },
  ],
  Jobs: [
    {
      question: "How can I find internships in Bangladesh?",
      answer:
        "Look for internships on job portals like Bdjobs and LinkedIn, or approach companies directly through networking.",
    },
    {
      question: "What are the highest-paying jobs in Bangladesh?",
      answer:
        "IT, healthcare, finance, and RMG (Ready-Made Garments) management roles typically offer higher salaries.",
    },
    {
      question: "How do I start freelancing in Bangladesh?",
      answer: "Build skills, create a portfolio, and register on platforms like Upwork, Fiverr, or Toptal.",
    },
    {
      question: "What are the common mistakes in job applications?",
      answer: "Errors include generic CVs, not following instructions, and failing to research the company.",
    },
    {
      question: "How do I build a professional network?",
      answer: "Attend industry events, join professional groups, and connect with peers on LinkedIn.",
    },
  ],
}

async function callMistralAI(prompt: string): Promise<string> {
  try {
    const response = await fetch("/api/mistral", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error("Error calling Mistral AI:", error)
    return "I'm sorry, I encountered an error while processing your request."
  }
}

export default function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content:
        "Hi! I'm your Career Chat Assistant. I can help you with CVs, portfolios, job interviews, and more. Ask me anything!",
    },
  ])
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [scrollAreaRef]) //Corrected dependency

  const handleSendMessage = async () => {
    if (input.trim() === "" || isLoading) return

    const userMessage: Message = { type: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Find the best matching question and answer
    let bestMatch: { question: string; answer: string } | null = null
    let highestScore = 0

    Object.values(chatbotData).forEach((category) => {
      category.forEach((qa) => {
        const score = calculateSimilarity(input.toLowerCase(), qa.question.toLowerCase())
        if (score > highestScore) {
          highestScore = score
          bestMatch = qa
        }
      })
    })

    if (bestMatch && highestScore > 0.6) {
      const botMessage: Message = { type: "bot", content: bestMatch.answer }
      setMessages((prev) => [...prev, botMessage])
    } else {
      // Call Mistral AI for a response
      const mistralResponse = await callMistralAI(input)
      const mistralMessage: Message = { type: "mistral", content: mistralResponse }
      setMessages((prev) => [...prev, mistralMessage])
    }

    setIsLoading(false)
  }

  const calculateSimilarity = (str1: string, str2: string): number => {
    const set1 = new Set(str1.split(" "))
    const set2 = new Set(str2.split(" "))
    const intersection = new Set([...set1].filter((x) => set2.has(x)))
    return intersection.size / Math.max(set1.size, set2.size)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)

    // Generate suggestions
    const allQuestions = Object.values(chatbotData)
      .flat()
      .map((qa) => qa.question)
    const matchingSuggestions = allQuestions
      .filter((question) => question.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5)
    setSuggestions(matchingSuggestions)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setSuggestions([])
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageSquare className="w-8 h-8 text-white" />
      </Button>
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-96 h-[600px] shadow-2xl">
          <CardHeader>
            <CardTitle>Career Chat Assistant</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[450px] p-4" ref={scrollAreaRef}>
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.type === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.type === "user"
                        ? "bg-blue-500 text-white"
                        : message.type === "bot"
                          ? "bg-gray-200 text-gray-800"
                          : "bg-purple-200 text-purple-800"
                    }`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="text-center">
                  <span className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">Thinking...</span>
                </div>
              )}
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Please type your question..."
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="pr-20"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="absolute right-0 top-0 rounded-l-none"
                >
                  Send
                </Button>
              </div>
              {suggestions.length > 0 && (
                <div className="absolute bg-white border rounded-lg mt-1 w-full z-10">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

