'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Plus, FileText, Mail, CalendarIcon } from 'lucide-react'

const statusOptions = ["Applied", "Phone Screen", "Interview", "Offer", "Rejected", "Withdrawn"]

type Application = {
  id: number;
  company: string;
  position: string;
  dateApplied: string;
  status: string;
  notes: string;
  interviewDate?: string;
  resume?: string;
  coverLetter?: string;
}

export default function ApplicationTracker() {
  const [applications, setApplications] = useState<Application[]>([])
  const [newApplication, setNewApplication] = useState<Application>({
    id: 0,
    company: "",
    position: "",
    dateApplied: new Date().toISOString().split('T')[0],
    status: "Applied",
    notes: ""
  })
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [editingApplication, setEditingApplication] = useState<Application | null>(null)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  useEffect(() => {
    const savedApplications = localStorage.getItem('jobApplications')
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications))
    }
  }, [])

  const saveApplications = (apps: Application[]) => {
    localStorage.setItem('jobApplications', JSON.stringify(apps))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewApplication(prev => ({ ...prev, [name]: value }))
  }

  const handleStatusChange = (value: string) => {
    setNewApplication(prev => ({ ...prev, status: value }))
  }

  const addApplication = () => {
    const updatedApplications = [...applications, { ...newApplication, id: Date.now() }]
    setApplications(updatedApplications)
    saveApplications(updatedApplications)
    setNewApplication({
      id: 0,
      company: "",
      position: "",
      dateApplied: new Date().toISOString().split('T')[0],
      status: "Applied",
      notes: ""
    })
    setShowAddDialog(false)
  }

  const updateApplication = () => {
    if (editingApplication) {
      const updatedApplications = applications.map(app =>
        app.id === editingApplication.id ? editingApplication : app
      )
      setApplications(updatedApplications)
      saveApplications(updatedApplications)
      setEditingApplication(null)
      setShowEditDialog(false)
    }
  }

  const deleteApplication = (id: number) => {
    const updatedApplications = applications.filter(app => app.id !== id)
    setApplications(updatedApplications)
    saveApplications(updatedApplications)
  }

  const getStatusCounts = () => {
    const counts = statusOptions.map(status => ({
      status,
      count: applications.filter(app => app.status === status).length
    }))
    return counts
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <Header isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Application Tracker</h1>

        <Tabs defaultValue="applications" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Job Applications</CardTitle>
                  <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
                    <DialogTrigger asChild>
                      <Button className="bg-green-500 hover:bg-green-600">
                        <Plus className="mr-2 h-4 w-4" /> Add Application
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Application</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <Input name="company" placeholder="Company" value={newApplication.company} onChange={handleInputChange} />
                        <Input name="position" placeholder="Position" value={newApplication.position} onChange={handleInputChange} />
                        <Input name="dateApplied" type="date" value={newApplication.dateApplied} onChange={handleInputChange} />
                        <Select value={newApplication.status} onValueChange={handleStatusChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            {statusOptions.map((status) => (
                              <SelectItem key={status} value={status}>{status}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Textarea name="notes" placeholder="Notes" value={newApplication.notes} onChange={handleInputChange} />
                      </div>
                      <Button onClick={addApplication}>Add Application</Button>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Date Applied</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell>{app.company}</TableCell>
                        <TableCell>{app.position}</TableCell>
                        <TableCell>{app.dateApplied}</TableCell>
                        <TableCell>{app.status}</TableCell>
                        <TableCell>
                          <Button variant="outline" className="mr-2" onClick={() => {
                            setEditingApplication(app)
                            setShowEditDialog(true)
                          }}>
                            Edit
                          </Button>
                          <Button variant="destructive" onClick={() => deleteApplication(app.id)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Application Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getStatusCounts()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="status" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Application Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Applications for {selectedDate?.toDateString()}:</h3>
                  <ul>
                    {applications
                      .filter(app => app.dateApplied === selectedDate?.toISOString().split('T')[0])
                      .map(app => (
                        <li key={app.id} className="mb-2">
                          {app.company} - {app.position} ({app.status})
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Application</DialogTitle>
            </DialogHeader>
            {editingApplication && (
              <div className="grid gap-4 py-4">
                <Input
                  name="company"
                  placeholder="Company"
                  value={editingApplication.company}
                  onChange={(e) => setEditingApplication({ ...editingApplication, company: e.target.value })}
                />
                <Input
                  name="position"
                  placeholder="Position"
                  value={editingApplication.position}
                  onChange={(e) => setEditingApplication({ ...editingApplication, position: e.target.value })}
                />
                <Input
                  name="dateApplied"
                  type="date"
                  value={editingApplication.dateApplied}
                  onChange={(e) => setEditingApplication({ ...editingApplication, dateApplied: e.target.value })}
                />
                <Select
                  value={editingApplication.status}
                  onValueChange={(value) => setEditingApplication({ ...editingApplication, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status} value={status}>{status}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  name="notes"
                  placeholder="Notes"
                  value={editingApplication.notes}
                  onChange={(e) => setEditingApplication({ ...editingApplication, notes: e.target.value })}
                />
                <Input
                  name="interviewDate"
                  type="date"
                  placeholder="Interview Date"
                  value={editingApplication.interviewDate || ''}
                  onChange={(e) => setEditingApplication({ ...editingApplication, interviewDate: e.target.value })}
                />
                <Input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      setEditingApplication({ ...editingApplication, resume: file.name })
                    }
                  }}
                />
                <Input
                  name="coverLetter"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      setEditingApplication({ ...editingApplication, coverLetter: file.name })
                    }
                  }}
                />
              </div>
            )}
            <Button onClick={updateApplication}>Update Application</Button>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  )
}

