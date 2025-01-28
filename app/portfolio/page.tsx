'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import PortfolioBuilder from '../components/PortfolioBuilder'

export default function PortfolioPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Assuming the user is authenticated

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <Header isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Build Your Portfolio</h1>
        <PortfolioBuilder />
      </div>
    </div>
  )
}

