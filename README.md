
# The CV Forger

**The CV Forger** is a powerful web application designed to empower users in crafting professional resumes, cover letters, and managing their job search with the aid of AI-powered tools, job market insights, and career planning resources. Built using cutting-edge web technologies, this application ensures a seamless and user-friendly experience for career-focused individuals.

![image](https://github.com/user-attachments/assets/5ffdcb89-0ce4-44f1-814c-18f62992053a)


---

## Features

### **1. Resume Builder**
- Professionally designed templates.
- Drag-and-drop section reordering.
- Real-time preview.
- AI-powered improvement suggestions.
- Export to **PDF** and **DOCX**.

### **2. Cover Letter Tool**
- AI-assisted content generation.
- Real-time customization and previews.
- Downloadable in multiple formats.

### **3. Portfolio Builder**
- Create web-based portfolios.
- Customizable layouts and themes.
- Static file generation for hosting.

### **4. AI-Powered Career Objectives**
- Generate personalized career objectives based on experience and industry.

### **5. Resume Analyzer**
- Analyze resumes for content, formatting, and keyword optimization.

### **6. Interview Simulator**
- Practice interviews with AI-generated questions.
- Speech recognition for answers and feedback.

### **7. Job Market Insights**
- Real-time industry data.
- Salary insights and skill demands.

### **8. Skills Gap Analysis**
- Compare your skills with job requirements.
- Suggestions for improvement.

### **9. Application Tracker**
- Manage job applications, interviews, and follow-ups.

### **10. Career Resources**
- Resume writing guidelines.
- Networking tips.
- Career path planning.

### **11. AI-Powered Smart Chatbot**
- 24/7 assistance for career-related queries.


## Technologies Used

### **Frontend**
- React.js with Next.js 13
- TypeScript
- Tailwind CSS
- shadcn/ui

### **Backend**
- Next.js API routes (serverless functions)
- Node.js

### **Database**
- Local storage (demo version)
- Recommended: MongoDB or PostgreSQL for production

## 4. File Structure:


```bash
├── app/
│   ├── api/
│   │   └── cv-assistant/
│   │       └── route.ts
│   ├── application-tracker/
│   │   └── page.tsx
│   ├── career-resources/
│   │   └── page.tsx
│   ├── components/
│   │   ├── AICareerObjectives.tsx
│   │   ├── Auth.tsx
│   │   ├── CareerPathPlanner.tsx
│   │   ├── CoverLetterTool.tsx
│   │   ├── CVChatbot.tsx
│   │   ├── DocxTemplateEditor.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── InterviewSimulator.tsx
│   │   ├── JobSearchTracker.tsx
│   │   ├── NetworkingTips.tsx
│   │   ├── PortfolioBuilder.tsx
│   │   ├── PortfolioHostingInstructions.tsx
│   │   ├── ResumeAnalyzer.tsx
│   │   ├── ResumeForm.tsx
│   │   ├── ResumePreview.tsx
│   │   ├── SalaryInsights.tsx
│   │   └── SmartChatbot.tsx
│   ├── cover-letter/
│   │   └── page.tsx
│   ├── job-market-insights/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── resume-builder/
│   │   └── page.tsx
│   ├── resume-writing-guidelines/
│   │   └── page.tsx
│   ├── skills-gap-analysis/
│   │   └── page.tsx
│   ├── templates/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── docx-templates/
│   └── cv_qa.txt
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```
# Getting Started

## **1. Cloning the Repository**

Run the following commands in your terminal:

```bash
git clone https://github.com/Mahatir-Ahmed-Tusher/The-Cv-Forger.git
cd the-cv-forger
```
## 2. Installing Dependencies
```bash
npm install
```
## 3. Running the Development Server
```bash
npm run dev
```
## 4. Building for Production
```bash
npm run build
```
## 5. Starting the Production Server
```bash
npm start
```
## Environment Variables
Create a .env.local file in the root directory and add the required variables:
```bash
NEXT_PUBLIC_API_URL=your_api_url
```

# Deployment
Easily deploy The CV Forger using Vercel:

1. Connect your GitHub repository.
2. Follow the deployment instructions.
3. Your application will be live in minutes!

# Contributions
Contributions are welcome! Please fork the repository, create a branch for your feature or bug fix, and submit a pull request.

# 📄 License
Distributed under the MIT License. See LICENSE for more information.

Empower Your Career Journey - Craft stunning resumes, ace interviews, and land your dream job with AI-powered insights! ✨
demo link: https://jcpxux4v5csjqqu9.vercel.app/

