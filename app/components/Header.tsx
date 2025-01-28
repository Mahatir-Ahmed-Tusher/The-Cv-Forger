import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaPhone, FaInfoCircle, FaAccessibleIcon, FaEnvelope, FaLock, FaFileContract, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function Header({ isAuthenticated, onLogout }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isPolicyOpen, setIsPolicyOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false)
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)

  return (
    <header className="bg-white text-blue-600 py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        <div className="w-full flex flex-col items-center">
          <Link href="/">
            <Image 
              src="https://i.postimg.cc/3RST7Ff2/image.png" 
              alt="The CV Forger Logo" 
              width={400} 
              height={120} 
              className="object-contain"
            />
          </Link>
          <p className="text-lg italic font-times mt-2 text-gray-600">Forge Your Future, One CV at a Time</p>
        </div>
        <nav className="flex items-center space-x-4 flex-wrap justify-center">
          <Link href="/templates">
            <Button variant="ghost" className="flex items-center">
              Templates
            </Button>
          </Link>
          <Dialog open={isPhoneModalOpen} onOpenChange={setIsPhoneModalOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <FaPhone className="mr-2" />
                Call Us for Customized CV
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Us for a Customized CV</DialogTitle>
                <DialogDescription>
                  For personalized assistance in creating your CV, please call us at:
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2">
                <p className="text-lg font-bold">+8801303194788</p>
                <p className="mt-2">Our expert team is ready to help you craft the perfect CV tailored to your needs.</p>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <FaInfoCircle className="mr-2" />
                About the Developer
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About Me</DialogTitle>
                <DialogDescription>
                  Hello! I'm Mahatir Ahmed Tusher, a passionate problem solver who spends his days immersed in code, mathematical puzzles, and intellectual challenges. When I'm not tangled in algorithms, you'll find me exploring new places or gazing at the stars, marveling at the universe. 
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog open={isAccessibilityOpen} onOpenChange={setIsAccessibilityOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <FaAccessibleIcon className="mr-2" />
                Accessibility
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Accessibility Features</DialogTitle>
                <DialogDescription>
                  At The CV Forger, we are committed to making our website accessible to everyone. Our accessibility features include:

                  1. Keyboard Navigation: All functions can be accessed using a keyboard.
                  2. Screen Reader Compatibility: Our site is optimized for screen readers.
                  3. Color Contrast: We ensure sufficient color contrast for better readability.
                  4. Text Resizing: Users can resize text without loss of content or functionality.
                  5. Alternative Text: All images have descriptive alternative text.
                  6. Clear Structure: Our content is organized with a clear heading structure.
                  7. Customizable Font Options: Users can choose from various font styles.
                  8. Focus Indicators: Visual cues are provided for keyboard focus.

                  We continuously work to improve our accessibility. If you encounter any issues or have suggestions, please contact us.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <FaEnvelope className="mr-2" />
                Contact
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogDescription>
                  If you need personalized guidance for building your CV or require any other assistance, feel free to reach out to us at schneeubermensch@gmail.com. We're here to help!
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog open={isPolicyOpen} onOpenChange={setIsPolicyOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <FaLock className="mr-2" />
                Privacy Policy
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Privacy Policy</DialogTitle>
                <DialogDescription>
                  Your privacy is important to us. It is The CV Forger's policy to respect your privacy regarding any information we may collect from you across our website. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We don't share any personally identifying information publicly or with third-parties, except when required to by law.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <FaFileContract className="mr-2" />
                Terms of Service
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Terms of Service</DialogTitle>
                <DialogDescription>
                  By accessing the website for The CV Forger, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law. This license shall automatically terminate if you violate any of these restrictions and may be terminated by The CV Forger at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {isAuthenticated ? (
            <Button variant="ghost" className="flex items-center" onClick={onLogout}>
              <FaSignOutAlt className="mr-2" />
              Logout
            </Button>
          ) : (
            <Button variant="ghost" className="flex items-center">
              <FaUser className="mr-2" />
              Login / Register
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}

