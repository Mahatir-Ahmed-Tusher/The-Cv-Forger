'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumeWritingGuidelines() {
  const [activeVideo, setActiveVideo] = useState('')

  const articles = [
    {
      title: "How to Craft an Impressive Academic Resume",
      author: "Mahatir Ahmed Tusher",
      url: "https://mahatirtusher.com/how-to-craft-an-impressive-academic-resume/"
    },
    {
      title: "How to Create a Professional and Impactful Resume",
      author: "Mahatir Ahmed Tusher",
      url: "https://mahatirtusher.com/how-to-create-a-professional-and-impactful-resume/"
    }
  ]

  const videos = [
    { id: "Tt08KmFfIYQ", title: "Write an Incredible Resume: 5 Golden Rules!" },
    { id: "5uhmS8nzxM4", title: "The Resume That Got Me Into Google" },
    { id: "y3R9e2L8I9E", title: "How to make Ultimate Resume ? Step by step guide for Software Engineers" },
    { id: "1ckBSyC9PDc", title: "This Resume got me a Remote Job without any Degree" },
    { id: "eEAEB8qM7Ds", title: "I reviewed 4752 resumes so that you can avoid these Resume Mistakes + Free Template!" }
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Resume Writing Guidelines</h1>
      <Tabs defaultValue="tips" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
          <TabsTrigger value="articles">Helpful Articles</TabsTrigger>
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
        </TabsList>
        <TabsContent value="tips">
          <Card className="mb-8 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">How to Make Your CV Great</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Keep it concise and relevant</li>
                <li>Use action verbs to describe your achievements</li>
                <li>Tailor your CV to the job you're applying for</li>
                <li>Proofread carefully for errors</li>
                <li>Use a clean, professional layout</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">How to Draw Employers' Attention</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Highlight your most relevant skills and experiences</li>
                <li>Quantify your achievements with numbers and percentages</li>
                <li>Include relevant keywords from the job description</li>
                <li>Showcase your unique selling points</li>
                <li>Include a strong, tailored personal statement</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="articles">
          <Card className="mb-8 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Recommended Articles</CardTitle>
              <CardDescription>Expand your knowledge with these insightful articles</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {articles.map((article, index) => (
                  <li key={index}>
                    <Link href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {article.title}
                    </Link>
                    <p className="text-sm text-gray-600">By {article.author}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="videos">
          <Card className="mb-8 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Video Tutorials</CardTitle>
              <CardDescription>Watch these videos for more tips on creating an outstanding resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  {videos.map((video) => (
                    <Button
                      key={video.id}
                      onClick={() => setActiveVideo(video.id)}
                      variant="outline"
                      className="w-full text-left"
                    >
                      {video.title}
                    </Button>
                  ))}
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  {activeVideo && (
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideo}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center">
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

