'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import JSZip from 'jszip'
import saveAs from 'file-saver'
import PortfolioHostingInstructions from './PortfolioHostingInstructions'

export default function PortfolioBuilder() {
  const [projects, setProjects] = useState([{ title: '', description: '', link: '' }])

  const addProject = () => {
    setProjects([...projects, { title: '', description: '', link: '' }])
  }

  const updateProject = (index, field, value) => {
    const updatedProjects = [...projects]
    updatedProjects[index][field] = value
    setProjects(updatedProjects)
  }

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index)
    setProjects(updatedProjects)
  }

  const generatePortfolioFiles = async () => {
    const zip = new JSZip()

    // Generate HTML
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Portfolio</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <div class="portfolio">
          <header>
            <h1>My Portfolio</h1>
          </header>
          <main>
            ${projects.map(project => `
              <div class="project">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
              </div>
            `).join('')}
          </main>
          <footer>
            <p>&copy; ${new Date().getFullYear()} - All rights reserved</p>
          </footer>
        </div>
        <script src="script.js"></script>
      </body>
      </html>
    `

    // Generate CSS
    const css = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background: #f5f5f5;
      }

      .portfolio {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      header {
        text-align: center;
        margin-bottom: 3rem;
      }

      h1 {
        font-size: 2.5rem;
        color: #2d3748;
      }

      .project {
        background: white;
        border-radius: 8px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s;
      }

      .project:hover {
        transform: translateY(-5px);
      }

      h2 {
        color: #4a5568;
        margin-bottom: 1rem;
      }

      p {
        color: #718096;
        margin-bottom: 1rem;
      }

      a {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: #4299e1;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background 0.2s;
      }

      a:hover {
        background: #3182ce;
      }

      footer {
        text-align: center;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #e2e8f0;
      }
    `

    // Generate JavaScript
    const js = `
      document.addEventListener('DOMContentLoaded', () => {
        // Add smooth scroll behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault()
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            })
          })
        })

        // Add animation to projects on scroll
        const projects = document.querySelectorAll('.project')
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = 1
                entry.target.style.transform = 'translateY(0)'
              }
            })
          },
          { threshold: 0.1 }
        )

        projects.forEach(project => {
          project.style.opacity = 0
          project.style.transform = 'translateY(20px)'
          project.style.transition = 'opacity 0.5s, transform 0.5s'
          observer.observe(project)
        })
      })
    `

    // Add files to zip
    zip.file('index.html', html)
    zip.file('styles.css', css)
    zip.file('script.js', js)

    // Generate and download zip file
    const content = await zip.generateAsync({ type: 'blob' })
    saveAs(content, 'portfolio.zip')
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Portfolio Builder</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4 p-4 border rounded-lg">
              <div>
                <Label htmlFor={`project-title-${index}`}>Project Title</Label>
                <Input
                  id={`project-title-${index}`}
                  value={project.title}
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  placeholder="Enter project title"
                  className="rounded-full"
                />
              </div>
              <div>
                <Label htmlFor={`project-description-${index}`}>Project Description</Label>
                <Textarea
                  id={`project-description-${index}`}
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  placeholder="Describe your project"
                  className="rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor={`project-link-${index}`}>Project Link</Label>
                <Input
                  id={`project-link-${index}`}
                  value={project.link}
                  onChange={(e) => updateProject(index, 'link', e.target.value)}
                  placeholder="https://example.com"
                  className="rounded-full"
                />
              </div>
              <Button 
                type="button" 
                variant="destructive" 
                onClick={() => removeProject(index)}
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Remove Project
              </Button>
            </div>
          ))}
          <div className="flex gap-4">
            <Button 
              type="button" 
              onClick={addProject}
              className="flex-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Add Project
            </Button>
            <Button 
              type="button" 
              onClick={generatePortfolioFiles}
              className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Download Portfolio Files
            </Button>
          </div>
        </form>
        <div className="mt-8">
          <PortfolioHostingInstructions />
        </div>
      </CardContent>
    </Card>
  )
}

