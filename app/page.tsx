"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  Mail,
  Globe,
  BookOpen,
  FileImage,
  Brain,
  Sparkles,
  TrendingUp,
  Target,
  Video,
  BarChart,
  FileCheck,
  Users,
  Briefcase,
} from "lucide-react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Auth from "./components/Auth"
import Features from "./components/Features"
import { Toaster } from "@/components/ui/toaster"
import dynamic from "next/dynamic"
import AICareerObjectives from "./components/AICareerObjectives"
import ResumeAnalyzer from "./components/ResumeAnalyzer"
import InterviewSimulator from "./components/InterviewSimulator"
import NetworkingTips from "./components/NetworkingTips"
import JobSearchTracker from "./components/JobSearchTracker"
import CareerPathPlanner from "./components/CareerPathPlanner"
import SalaryInsights from "./components/SalaryInsights"
import SmartChatbot from "./components/SmartChatbot"

const DynamicResumeForm = dynamic(() => import("./components/ResumeForm"), { ssr: false })
const DynamicResumePreview = dynamic(() => import("./components/ResumePreview"), { ssr: false })
const DynamicPortfolioBuilder = dynamic(() => import("./components/PortfolioBuilder"), { ssr: false })
const DynamicCoverLetterTool = dynamic(() => import("./components/CoverLetterTool"), { ssr: false })

const features = [
  {
    icon: FileText,
    title: "Create Resume",
    description: "Create a professional-quality resume in minutes.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    href: "/resume-builder",
    buttonText: "CREATE NEW RESUME",
  },
  {
    icon: FileImage,
    title: "Browse Our Templates",
    description: "Explore our collection of professional CV templates.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    href: "/templates",
    buttonText: "VIEW TEMPLATES",
  },
  {
    icon: Mail,
    title: "Create Cover Letter",
    description: "Create an eye-catching cover letter to send with your resume.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    href: "/cover-letter",
    buttonText: "CREATE NEW LETTER",
  },
  {
    icon: Globe,
    title: "Build Your Portfolio",
    description: "Transform your resume into a mobile-friendly website that you can share with recruiters!",
    color: "text-red-600",
    bgColor: "bg-red-100",
    href: "/portfolio",
    buttonText: "BUILD YOUR PORTFOLIO",
  },
  {
    icon: BookOpen,
    title: "Resume Writing Guidelines",
    description: "Learn expert tips and tricks for crafting the perfect resume.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    href: "/resume-writing-guidelines",
    buttonText: "VIEW GUIDELINES",
  },
]

const advancedFeatures = [
  {
    icon: Brain,
    title: "AI Career Objectives",
    description: "Generate tailored career objectives using AI.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    component: AICareerObjectives,
  },
  {
    icon: Sparkles,
    title: "Resume Analyzer",
    description: "Get AI-powered insights and suggestions to improve your resume.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    component: ResumeAnalyzer,
  },
  {
    icon: Video,
    title: "Interview Simulator",
    description: "Practice your interview skills with our AI-powered simulator.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    component: InterviewSimulator,
  },
  {
    icon: TrendingUp,
    title: "Skills Gap Analysis",
    description: "Identify and bridge the gap between your skills and job requirements.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    href: "/skills-gap-analysis",
    buttonText: "ANALYZE SKILLS",
  },
  {
    icon: Target,
    title: "Job Market Insights",
    description: "Get real-time insights into Bangladesh's job market trends and demands.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    href: "/job-market-insights",
    buttonText: "EXPLORE INSIGHTS",
  },
  {
    icon: BookOpen,
    title: "Career Resources",
    description: "Access articles, blogs, and videos about careers, jobs, resumes, and industry news.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    href: "/career-resources",
    buttonText: "EXPLORE RESOURCES",
  },
  {
    icon: BarChart,
    title: "Salary Insights",
    description: "Compare salaries across industries and positions to negotiate better.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    component: SalaryInsights,
  },
  {
    icon: FileCheck,
    title: "Application Tracker",
    description: "Keep track of your job applications and follow-ups.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    href: "/application-tracker",
    buttonText: "TRACK APPLICATIONS",
  },
  {
    icon: Users,
    title: "Networking Tips",
    description: "Learn effective networking strategies to boost your career.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    component: NetworkingTips,
  },
  {
    icon: Briefcase,
    title: "Career Path Planner",
    description: "Map out your long-term career goals and get personalized advice.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    component: CareerPathPlanner,
  },
]

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!isAuthenticated) {
    return <Auth onAuthenticate={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      <Header isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} />
      <main className="container mx-auto px-4 py-16 flex-grow">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="text-center mb-16">
              <h2 className="text-purple-600 font-medium mb-4">FORGE YOUR FUTURE WITH THE CV FORGER</h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Craft Your Perfect CV</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
                >
                  <CardHeader>
                    <div
                      className={`mx-auto p-3 rounded-full ${feature.bgColor} w-16 h-16 flex items-center justify-center`}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Link href={feature.href}>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                        {feature.buttonText}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Features</h2>
              <p className="text-lg text-gray-600 mb-8">Unlock the power of AI to enhance your career</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {advancedFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
                >
                  <CardHeader>
                    <div
                      className={`mx-auto p-3 rounded-full ${feature.bgColor} w-16 h-16 flex items-center justify-center`}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center">
                    {feature.component ? (
                      <feature.component />
                    ) : (
                      <Link href={feature.href}>
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                          {feature.buttonText}
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>

      <Features />
      <Footer />
      <Toaster />
      <SmartChatbot />
    </div>
  )
}

