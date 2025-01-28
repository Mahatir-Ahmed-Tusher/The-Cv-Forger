import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioHostingInstructions() {
  const [activeTab, setActiveTab] = useState('github')

  const instructions = {
    github: [
      "Create a GitHub account if you don't have one.",
      "Create a new repository named 'username.github.io' (replace 'username' with your GitHub username).",
      "Clone the repository to your local machine.",
      "Copy your portfolio files into the cloned repository folder.",
      "Commit and push the changes to GitHub.",
      "Your portfolio will be live at https://username.github.io"
    ],
    netlify: [
      "Create a Netlify account if you don't have one.",
      "Click the 'New site from Git' button on your Netlify dashboard.",
      "Choose your Git provider (GitHub, GitLab, or Bitbucket) and select your portfolio repository.",
      "Configure your build settings if necessary.",
      "Click 'Deploy site'.",
      "Your portfolio will be live at a Netlify subdomain, which you can customize."
    ],
    vercel: [
      "Create a Vercel account if you don't have one.",
      "Click the 'Import Project' button on your Vercel dashboard.",
      "Choose your Git provider and select your portfolio repository.",
      "Configure your project settings if necessary.",
      "Click 'Deploy'.",
      "Your portfolio will be live at a Vercel subdomain, which you can customize."
    ]
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Portfolio Hosting Instructions</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="github">GitHub Pages</TabsTrigger>
            <TabsTrigger value="netlify">Netlify</TabsTrigger>
            <TabsTrigger value="vercel">Vercel</TabsTrigger>
          </TabsList>
          {Object.entries(instructions).map(([platform, steps]) => (
            <TabsContent key={platform} value={platform}>
              <ol className="list-decimal list-inside space-y-2">
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <Button className="mt-4" onClick={() => window.open(`https://${platform}.com`, '_blank')}>
                Go to {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </Button>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

