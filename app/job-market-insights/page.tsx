'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const jobRoles = [
  "Software Engineer",
  "RMG Professional",
  "Healthcare Professional",
  "Banking Professional",
  "Education Professional",
  "IT Professional"
]

const locations = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Khulna",
  "Rajshahi"
]

const salaryData = {
  "Software Engineer": {
    averageSalary: 60000,
    salaryRange: {
      entry: "20,000-40,000",
      mid: "50,000-120,000",
      senior: "150,000+"
    },
    demandTrend: "High",
    topSkills: ["JavaScript", "Python", "React", "Node.js", "SQL"],
    jobOpenings: 1200,
    growthRate: 15
  },
  "RMG Professional": {
    averageSalary: 45000,
    salaryRange: {
      entry: "15,000-25,000",
      mid: "35,000-70,000",
      senior: "100,000+"
    },
    demandTrend: "Stable",
    topSkills: ["Quality Control", "Production Planning", "Supply Chain", "Textile Engineering", "Compliance"],
    jobOpenings: 2500,
    growthRate: 8
  },
  "Healthcare Professional": {
    averageSalary: 55000,
    salaryRange: {
      entry: "20,000-30,000",
      mid: "50,000-90,000",
      senior: "120,000+"
    },
    demandTrend: "High",
    topSkills: ["Patient Care", "Medical Knowledge", "Healthcare Management", "Clinical Skills", "Telemedicine"],
    jobOpenings: 800,
    growthRate: 12
  },
  "Banking Professional": {
    averageSalary: 65000,
    salaryRange: {
      entry: "25,000-40,000",
      mid: "50,000-100,000",
      senior: "150,000+"
    },
    demandTrend: "Moderate",
    topSkills: ["Financial Analysis", "Risk Management", "Banking Software", "Customer Service", "Compliance"],
    jobOpenings: 600,
    growthRate: 10
  },
  "Education Professional": {
    averageSalary: 40000,
    salaryRange: {
      entry: "15,000-25,000",
      mid: "30,000-60,000",
      senior: "80,000+"
    },
    demandTrend: "Stable",
    topSkills: ["Teaching", "Curriculum Development", "EdTech", "Student Assessment", "Communication"],
    jobOpenings: 1500,
    growthRate: 7
  },
  "IT Professional": {
    averageSalary: 70000,
    salaryRange: {
      entry: "25,000-45,000",
      mid: "60,000-130,000",
      senior: "180,000+"
    },
    demandTrend: "Very High",
    topSkills: ["Cloud Computing", "Cybersecurity", "AI/ML", "DevOps", "System Administration"],
    jobOpenings: 2000,
    growthRate: 20
  }
}

const industryTrends = [
  { year: 2020, growth: 5.2 },
  { year: 2021, growth: 6.8 },
  { year: 2022, growth: 7.5 },
  { year: 2023, growth: 8.2 },
  { year: 2024, growth: 9.0 }
]

export default function JobMarketInsights() {
  const [selectedRole, setSelectedRole] = useState(jobRoles[0])
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [insights, setInsights] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchInsights = () => {
    setIsLoading(true)
    setTimeout(() => {
      const roleData = salaryData[selectedRole]
      setInsights({
        averageSalary: roleData.averageSalary,
        demandTrend: roleData.demandTrend,
        topSkills: roleData.topSkills,
        salaryByExperience: [
          { experience: 'Entry Level', salary: parseInt(roleData.salaryRange.entry.split('-')[0].replace(/\D/g, '')) },
          { experience: 'Mid Level', salary: parseInt(roleData.salaryRange.mid.split('-')[0].replace(/\D/g, '')) },
          { experience: 'Senior Level', salary: parseInt(roleData.salaryRange.senior.replace(/\+|\D/g, '')) }
        ],
        jobOpenings: roleData.jobOpenings,
        growthRate: roleData.growthRate
      })
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchInsights()
  }, [selectedRole, selectedLocation])

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
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Bangladesh Job Market Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Job Role</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a job role" />
                </SelectTrigger>
                <SelectContent>
                  {jobRoles.map((role) => (
                    <SelectItem key={role} value={role}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : insights && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Average Salary (BDT)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">{insights.averageSalary.toLocaleString()}</p>
                <p className="text-sm text-gray-600 mt-2">Monthly average in {selectedLocation}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Demand Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">{insights.demandTrend}</p>
                <p className="text-sm text-gray-600 mt-2">Current market demand</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Growth Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">{insights.growthRate}%</p>
                <p className="text-sm text-gray-600 mt-2">Annual growth rate</p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Industry Growth Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={industryTrends}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="growth" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {insights.topSkills.map((skill, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Salary by Experience Level (BDT)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={insights.salaryByExperience}>
                      <XAxis dataKey="experience" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="salary" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

