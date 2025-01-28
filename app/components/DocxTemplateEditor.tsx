'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaDownload, FaEdit, FaUpload } from 'react-icons/fa'
import mammoth from 'mammoth'

export default function DocxTemplateEditor() {
  const [templates, setTemplates] = useState([])
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [editedContent, setEditedContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/docx-templates')
      if (!response.ok) {
        throw new Error('Failed to fetch templates')
      }
      const data = await response.json()
      setTemplates(data.templates || [])
    } catch (error) {
      console.error('Error fetching templates:', error)
      setError('Failed to load templates. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTemplateSelect = async (templateId) => {
    try {
      const response = await fetch(`/api/docx-templates/${templateId}`)
      const arrayBuffer = await response.arrayBuffer()
      const result = await mammoth.convertToHtml({ arrayBuffer })
      setSelectedTemplate(templateId)
      setEditedContent(result.value)
    } catch (error) {
      console.error('Error loading template:', error)
      setError('Failed to load the selected template. Please try again.')
    }
  }

  const handleContentChange = (e) => {
    setEditedContent(e.target.value)
  }

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/docx-templates/${selectedTemplate}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: editedContent }),
      })
      if (response.ok) {
        alert('Template saved successfully!')
      } else {
        throw new Error('Failed to save template')
      }
    } catch (error) {
      console.error('Error saving template:', error)
      alert('Failed to save template')
    }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/docx-templates/${selectedTemplate}/download`)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `template_${selectedTemplate}.docx`
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading template:', error)
      alert('Failed to download template')
    }
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const response = await fetch('/api/docx-templates', {
          method: 'POST',
          body: formData,
        })

        if (response.ok) {
          alert('Template uploaded successfully!')
          fetchTemplates() // Refresh the template list
        } else {
          throw new Error('Failed to upload template')
        }
      } catch (error) {
        console.error('Error uploading template:', error)
        alert('Failed to upload template')
      }
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  if (isLoading) {
    return <div>Loading templates...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">DOCX Template Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <Select onValueChange={handleTemplateSelect}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              {templates.map((template) => (
                <SelectItem key={template.id} value={template.id}>
                  {template.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept=".docx"
              onChange={handleUpload}
            />
            <Button onClick={triggerFileInput} className="flex items-center">
              <FaUpload className="mr-2" /> Upload Template
            </Button>
          </div>
        </div>
        {selectedTemplate && (
          <>
            <div className="mb-4">
              <textarea
                className="w-full h-96 p-2 border rounded"
                value={editedContent}
                onChange={handleContentChange}
              />
            </div>
            <div className="flex justify-between">
              <Button onClick={handleSave} className="flex items-center">
                <FaEdit className="mr-2" /> Save Changes
              </Button>
              <Button onClick={handleDownload} className="flex items-center">
                <FaDownload className="mr-2" /> Download DOCX
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

