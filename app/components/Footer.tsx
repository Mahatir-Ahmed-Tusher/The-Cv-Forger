import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaShare } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Footer() {
  const [searchTerm, setSearchTerm] = useState('')
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = 'Create your professional CV with The CV Forger'

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`
  }

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400')
  }

  const faqData = [
    {
      question: "What is the difference between a CV and a resume?",
      answer: "A CV (Curriculum Vitae) is a detailed document outlining your entire career history, often used in academic, research, or international job applications. A resume is a concise summary of skills, work experience, and achievements tailored to a specific job, commonly used in corporate applications."
    },
    {
      question: "How do I write an impressive CV?",
      answer: "Focus on clarity, relevance, and professionalism. Highlight achievements, quantify results, tailor the content to the job, and ensure proper formatting."
    },
    {
      question: "What are the essential sections to include in a CV?",
      answer: "Essential sections include: Personal details (name, contact information), Career objectives or professional summary, Work experience, Education, Skills, Certifications, awards, or achievements, and optionally, References."
    },
    {
      question: "How long should my CV be?",
      answer: "Ideally, 1–2 pages for most industries. Academic or research CVs may be longer."
    },
    {
      question: "What format should I use for my CV?",
      answer: "Use a professional and clean format with a consistent layout. Use bullet points, sections, and headers to improve readability."
    },
    {
  question: "Can I add GitHub, Kaggle, or personal portfolio links to my CV?",
  answer: "Include clickable links under your contact information with proper labels."
},
{
  question: "Can I customize the CV template?",
  answer: "Yes, many CV builders allow template customization."
},
{
  question: "Can I save and download my CV in different formats?",
  answer: "Yes, download options usually include PDF, Word, or both."
},
{
  question: "Can you help me convert my old CV into a modern format?",
  answer: "Yes, upload it, and I'll reformat it for you."
},
{
  question: "Can you help me write a cover letter?",
  answer: "Provide details, and I'll craft one for you."
},
{
  question: "Can you provide examples of professional CV templates?",
  answer: "Yes, modern templates are often available on platforms like Canva, Microsoft Word, or specialized CV builders. Choose templates that fit your profession and style."
},
{
  question: "Can you review my CV and suggest improvements?",
  answer: "Yes! Upload your CV, and I'll provide feedback."
},
{
  question: "Do I need a cover letter along with my CV?",
  answer: "Yes, if requested. It's an opportunity to personalize your application."
},
{
  question: "How can I make my CV stand out from others?",
  answer: "- Customize it for the job role.\n- Highlight measurable achievements.\n- Use a professional design.\n- Include relevant keywords from the job description."
},
{
  question: "How can I tailor my CV for a specific job application?",
  answer: "Match keywords from the job description. Highlight relevant skills and experiences."
},
{
  question: "How do I add certifications or awards to my CV?",
  answer: "Create a separate section for certifications or awards. Include the title, awarding body, and date."
},
{
  question: "How do I add my signature to the CV?",
  answer: "Add a digital signature or upload an image of your signature."
},
{
  question: "How do I add or remove sections from my CV?",
  answer: "Use a customizable CV builder or manually adjust your document."
},
{
  question: "How do I avoid common mistakes in CV writing?",
  answer: "Avoid typos, irrelevant details, and unprofessional formatting. Customize for each role."
},
{
  question: "How do I create a CV if I'm switching careers?",
  answer: "Focus on transferable skills and relevant achievements."
},
{
  question: "How do I format the education section in my CV?",
  answer: "- Institution name\n- Degree earned\n- Dates attended\n- Relevant achievements or coursework"
},
{
  question: "How do I list work experience on my CV?",
  answer: "Start with the most recent job and include:\n- Job title\n- Employer name\n- Employment dates\n- Key responsibilities and achievements"
},
{
  question: "How do I write a CV for an academic position?",
  answer: "Include research experience, publications, presentations, and teaching experience."
},
{
  question: "How do I write a good career objective for my CV?",
  answer: "Keep it concise, specific, and aligned with the job you're applying for. Highlight your career goals and how they align with the company's objectives."
},
{
  question: "How do I write an impressive CV?",
  answer: "Focus on clarity, relevance, and professionalism. Highlight achievements, quantify results, tailor the content to the job, and ensure proper formatting."
},
{
  question: "How far back should I go with my education?",
  answer: "Include the highest level of education completed. Early schooling isn't necessary."
},
{
  question: "How long should my CV be?",
  answer: "Ideally, 1–2 pages for most industries. Academic or research CVs may be longer."
},
{
  question: "How often should I update my CV?",
  answer: "Update it whenever you gain new experience or skills."
},
{
  question: "How should I adjust my CV for different industries?",
  answer: "Focus on industry-specific skills and experiences. Use a tone and style relevant to the sector."
},
{
  question: "How should I list my skills in a CV?",
  answer: "Use a bulleted format. Divide them into technical (hard) skills and interpersonal (soft) skills."
},
{
  question: "How should I present my language proficiency in the CV?",
  answer: "Use a table format and classify levels (e.g., Beginner, Intermediate, Fluent)."
},
{
  question: "How should I write a CV as a fresh graduate with no experience?",
  answer: "Emphasize education, projects, internships, and extracurricular activities."
},
{
  question: "How should I write a CV if I have a career gap?",
  answer: "Address gaps briefly in a cover letter or highlight skills gained during that time."
},
{
  question: "How should I write my contact details in the CV?",
  answer: "Include your full name, phone number, professional email address, and location (city and state). Optional: LinkedIn or portfolio links."
},
{
  question: "Should I add my date of birth or marital status?",
  answer: "Only include these if required by the job or local customs. Typically, they're omitted in most Western countries."
},
{
  question: "Should I include a career summary or an objective?",
  answer: "Include a summary if you have significant experience; use an objective if you're a recent graduate or changing careers."
},
{
  question: "Should I include a photo on my CV?",
  answer: "It depends on regional preferences. In the US and UK, photos are generally avoided. In Europe or creative industries, a professional photo may be included."
},
{
  question: "Should I include both hard and soft skills in my CV?",
  answer: "Yes, include a mix relevant to the job role."
},
{
  question: "Should I include hobbies and interests in my CV?",
  answer: "Include them only if they're relevant or demonstrate unique skills."
},
{
  question: "Should I include my GPA on my CV?",
  answer: "Include it if it's high and relevant to the role. Otherwise, leave it out."
},
{
  question: "Should I include my LinkedIn profile in my CV?",
  answer: "Yes, if it's up to date and professional."
},
{
  question: "Should I include part-time jobs or internships in my CV?",
  answer: "Yes, if they're relevant to the role or demonstrate transferable skills."
},
{
  question: "Should I include references, and how should I format them?",
  answer: "Include references if requested. Use full names, titles, and contact information."
},
{
  question: "Should my CV be in black and white or include colors?",
  answer: "Use minimal colors for highlights or headers. Avoid overloading with bright colors."
},
{
  question: "What are examples of transferable skills for a CV?",
  answer: "- Communication\n- Teamwork\n- Leadership\n- Problem-solving\n- Time management"
},
{
  question: "What are the current trends in CV design for 2024?",
  answer: "- Minimalist layouts\n- Professional colors\n- Interactive PDFs with clickable links\n- Emphasis on skills over job titles"
},
{
  question: "What are the essential sections to include in a CV?",
  answer: "- Personal details (name, contact information)\n- Career objectives or professional summary\n- Work experience\n- Education\n- Skills\n- Certifications, awards, or achievements\n- References (optional)"
},
{
  question: "What font and font size should I use for my CV?",
  answer: "Use professional fonts like Calibri, Arial, or Times New Roman. Font size: 10–12 for body text, 14–16 for headers."
},
{
  question: "What format should I use for my CV?",
  answer: "Use a professional and clean format with a consistent layout. Use bullet points, sections, and headers to improve readability."
},
{
  question: "What if I have no prior work experience? How should I handle that in my CV?",
  answer: "Focus on internships, volunteer work, projects, and relevant coursework."
},
{
  question: "What is a CV quality score, and how can I improve it?",
  answer: "A CV quality score evaluates clarity, relevance, and formatting. Improve by tailoring content and ensuring professional design."
},
{
  question: "What is the difference between a CV and a resume?",
  answer: "A CV (Curriculum Vitae) is a detailed document outlining your entire career history, often used in academic, research, or international job applications. A resume is a concise summary of skills, work experience, and achievements tailored to a specific job, commonly used in corporate applications."
},
{
  question: "What's the best file format for submitting a CV—PDF or Word?",
  answer: "PDF is preferred to maintain formatting."
},
{
  question: "What's the difference between a CV and a cover letter?",
  answer: "A CV outlines your qualifications. A cover letter explains why you're a good fit for the role."
},
{
  question: "How can I optimize my CV for Applicant Tracking Systems (ATS)?",
  answer: "Use relevant keywords from the job description, stick to standard section headings, use a simple and clean format, and avoid using images or complex layouts that ATS might not be able to parse."
},
{
  question: "Should I include my social media profiles on my CV?",
  answer: "Include professional social media profiles like LinkedIn. Only include other social media if they're relevant to the job (e.g., a Twitter account for a social media manager position)."
},
{
  question: "How do I explain employment gaps in my CV?",
  answer: "Be honest and concise. Mention any relevant skills or experiences gained during the gap, such as volunteering, freelance work, or personal projects."
},
{
  question: "How can I make my CV more accessible for people with disabilities?",
  answer: "Use a clear, readable font, ensure good color contrast, use descriptive alt text for any images, and create a logical structure with proper headings."
},
{
  question: "Should I use the same CV for every job application?",
  answer: "No, you should tailor your CV for each job application to highlight the most relevant skills and experiences for that specific role."
},
{
  question: "How do I showcase my achievements in my CV?",
  answer: "Use specific, quantifiable examples of your achievements. For example, 'Increased sales by 25% over six months' or 'Led a team of 10 to complete a project ahead of schedule and under budget.'"
}
  ]

  const filteredFAQ = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">The CV Forger</h3>
            <p className="text-sm">Creating professional resumes with ease</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Home</a></li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <a href="#" className="hover:text-blue-300 transition-colors duration-300">About Us</a>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>About Us</DialogTitle>
                      <DialogDescription className="space-y-4">
                        <span className="block">Welcome to The CV Forger, where we turn your professional journey into a captivating story. Founded by a team of interstellar resume experts, we've been crafting out-of-this-world CVs since the dawn of the digital age.</span>
                        <span className="block">Our mission? To revolutionize the way earthlings present themselves in the cosmic job market. Using our patented "Quantum Resume Technology," we analyze parallel universes to find the perfect career path for you.</span>
                        <span className="block">At The CV Forger, we believe that every person has a unique constellation of skills. Our team of resume astronauts will help you navigate the treacherous waters of job applications, ensuring your CV shines brighter than a supernova.</span>
                        <span className="block">Join us on this exciting voyage and let's forge a CV that will make even the Martians jealous!</span>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <a href="#" className="hover:text-blue-300 transition-colors duration-300">Services</a>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Our Services</DialogTitle>
                      <DialogDescription className="space-y-4">
                        <span className="block">At The CV Forger, we offer a range of out-of-this-world services to skyrocket your career:</span>
                        <span className="block"><strong>Quantum Resume Building:</strong> Using advanced quantum algorithms, we create CVs that exist in multiple states of impressiveness simultaneously.</span>
                        <span className="block"><strong>Time-Traveling Cover Letters:</strong> Our writers journey to the future to see what employers want, then craft the perfect cover letter for you.</span>
                        <span className="block"><strong>Holographic Portfolio Creator:</strong> Transform your work into stunning 3D holograms that employers can interact with.</span>
                        <span className="block"><strong>Telepathic Interview Preparation:</strong> Our psychic career counselors prepare you for interviews by reading the minds of potential employers.</span>
                        <span className="block"><strong>Interdimensional Networking:</strong> Connect with professionals from parallel universes to expand your career opportunities across the multiverse.</span>
                        <span className="block">Remember, at The CV Forger, we don't just build resumes - we forge destinies across the cosmos!</span>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <a href="#" className="hover:text-blue-300 transition-colors duration-300">Contact</a>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription className="space-y-4">
                        <span className="block">Ready to forge your cosmic career? Get in touch with our team of interdimensional CV experts!</span>
                        <span className="block"><strong>Email:</strong> schneeubermensch@gmail.com</span>
                        <span className="block"><strong>Phone:</strong> 01303194788</span>
                        <span className="block"><strong>Telepathic Hotline:</strong> Just think really hard about CVs, and we'll pick up your brainwaves!</span>
                        <span className="block">Our office is located in the space-time continuum, just left of the Big Dipper. Drop by anytime - our quantum entangled door is always open!</span>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <a href="#" className="hover:text-blue-300 transition-colors duration-300">FAQ</a>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center">Frequently Asked Questions</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="flex space-x-2 mb-4">
                        <Input
                          type="text"
                          placeholder="Search FAQ..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="flex-grow"
                        />
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        {filteredFAQ.map((item, index) => (
                          <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <p className="flex items-center"><FaPhone className="mr-2" /> 01303194788</p>
            <p className="flex items-center"><FaEnvelope className="mr-2" /> schneeubermensch@gmail.com</p>
            <form className="mt-4">
              <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
                  <FaShare className="mr-2" />
                  Share The CV Forger
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share The CV Forger</DialogTitle>
                  <DialogDescription>
                    Share this amazing CV builder with your network
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center gap-4 mt-4">
                  <Button onClick={() => handleShare('facebook')} className="bg-[#1877f2] hover:bg-[#166fe5]">
                    <FaFacebookF className="mr-2" />
                    Facebook
                  </Button>
                  <Button onClick={() => handleShare('twitter')} className="bg-[#1da1f2] hover:bg-[#1a94da]">
                    <FaTwitter className="mr-2" />
                    Twitter
                  </Button>
                  <Button onClick={() => handleShare('linkedin')} className="bg-[#0a66c2] hover:bg-[#0958ab]">
                    <FaLinkedinIn className="mr-2" />
                    LinkedIn
                  </Button>
                  <Button onClick={() => handleShare('email')} className="bg-[#ea4335] hover:bg-[#d33828]">
                    <FaEnvelope className="mr-2" />
                    Email
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <p>&copy; 2024 The CV Forger. All rights reserved.</p>
          <p className="mt-2">Developed by Mahatir Ahmed Tusher</p>
        </div>
      </div>
    </footer>
  )
}

