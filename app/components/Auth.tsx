"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FaGoogle } from "react-icons/fa"
import Image from "next/image"
import Footer from "./Footer"

export default function Auth({ onAuthenticate = () => {} }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-purple-600 font-semibold mb-2">WELCOME TO THE CV FORGER</h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              One Platform, Endless Opportunities Create Your Resume Today!
            </h1>
            <p className="text-xl mb-8 text-gray-600">Build your resume in a few clicks</p>
            <p className="text-gray-600 mb-8">
              Crafting Professional Resumes Made Effortless—
              <span className="text-purple-600">
                Showcase Your Achievements, Highlight Your Skills, and Open Doors to Endless Opportunities
              </span>{" "}
              with Modern, Intuitive, and Customizable Templates.
            </p>

            {/* Get Started Button */}
            <div className="max-w-md">
              <Button
                onClick={onAuthenticate}
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-0 top-1/4 transform -translate-x-1/2">
            <div className="w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
          </div>
          <div className="absolute right-0 bottom-1/4 transform translate-x-1/2">
            <div className="w-60 h-60 bg-blue-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Right Section - Main Image and Video */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-2xl mb-8">
            <Image
              src="https://i.postimg.cc/Bbvw09p3/image.png"
              alt="CV Forger Platform Preview"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="w-full max-w-2xl mt-8">
            <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Unlock Your Career Potential: Watch Our Transformative CV Journey
            </h3>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                src="https://www.youtube.com/embed/mvi6ceVrUQ4"
                title="CV Forger Promotional Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

