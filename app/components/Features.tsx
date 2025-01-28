import { Pencil, Shield, MonitorSmartphone, FileText, Bot, UserCheck, FileOutput, Mail, Sparkles } from 'lucide-react'

const features = [
  {
    icon: MonitorSmartphone,
    title: "Easy online resume builder",
    description: "Create an awesome resume in minutes, without leaving your web browser.",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: Pencil,
    title: "Automatic spell-checker",
    description: "Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: Shield,
    title: "Your data is safe",
    description: "Your data is kept private and protected by strong 256-bit encryption.",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: Sparkles,
    title: "Automatic summary generator",
    description: "Create a powerful resume profile or cover letter in one click. Writer's block is no longer an obstacle. Try for free!",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: FileText,
    title: "Approved templates",
    description: "Professionally-designed resume templates and examples. Just edit and download in 5 minutes.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Bot,
    title: "AI pre-written phrases",
    description: "Use the power of AI and data analysis, choose pre-generated effective phrases and keywords.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
  },
  {
    icon: UserCheck,
    title: "Optimized resumes",
    description: "Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application!",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
  },
  {
    icon: FileOutput,
    title: "Multi-format resume options",
    description: "Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.",
    color: "text-teal-500",
    bgColor: "bg-teal-100",
  },
  {
    icon: Mail,
    title: "Cover letters",
    description: "Our cover letter builder works with the same ease and use of elegant templates as the resume creator.",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  }
]

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Features designed to help you win your dream job
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 p-3 rounded-full ${feature.bgColor}`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

