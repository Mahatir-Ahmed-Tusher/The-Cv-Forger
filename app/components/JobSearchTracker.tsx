'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from 'next/link'

export default function JobSearchTracker() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full">
          Track Applications
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Job Application Tracker</DialogTitle>
          <DialogDescription>
            Keep track of your job applications and their status.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Link href="/application-tracker">
            <Button className="w-full">Go to Application Tracker</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

