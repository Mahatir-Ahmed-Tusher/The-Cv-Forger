'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Manufacturing"
]

const positions = [
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Management",
  "Executive"
]

const salaryData = {
  Technology: {
    "Entry Level": 50000,
    "Mid Level": 80000,
    "Senior Level": 120000,
    "Management": 150000,
    "Executive": 200000
  },
  Finance: {
    "Entry Level": 55000,
    "Mid Level": 90000,
    "Senior Level": 130000,
    "Management": 160000,
    "Executive": 220000
  },
  Healthcare: {
    "Entry Level": 45000,
    "Mid Level": 75000,
    "Senior Level": 110000,
    "Management": 140000,
    "Executive": 190000
  },
  Education: {
    "Entry Level": 40000,
    "Mid Level": 60000,
    "Senior Level": 80000,
    "Management": 100000,
    "Executive": 130000
  },
  Manufacturing: {
    "Entry Level": 48000,
    "Mid Level": 70000,
    "Senior Level": 100000,
    "Management": 130000,
    "Executive": 180000
  }
}

export default function SalaryInsights() {
  const [industry, setIndustry] = useState("")
  const [position, setPosition] = useState("")
  const [salary, setSalary] = useState(0)
  const [comparisonData, setComparisonData] = useState([])

  const calculateSalary = () => {
    if (industry && position) {
      const calculatedSalary = salaryData[industry][position]
      setSalary(calculatedSalary)

      const comparison = Object.entries(salaryData).map(([ind, positions]) => ({
        industry: ind,
        salary: positions[position]
      }))
      setComparisonData(comparison)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded-full">
          Explore Salaries
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Salary Insights</DialogTitle>
          <DialogDescription>
            Compare salaries across industries and positions to negotiate better.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((ind) => (
                <SelectItem key={ind} value={ind}>{ind}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={position} onValueChange={setPosition}>
            <SelectTrigger>
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              {positions.map((pos) => (
                <SelectItem key={pos} value={pos}>{pos}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={calculateSalary}>Calculate Salary</Button>
          {salary > 0 && (
            <div>
              <h3 className="text-lg font-semibold">Estimated Salary: ${salary.toLocaleString()}</h3>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="industry" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="salary" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

