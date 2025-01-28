'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const articles = [
  {
    title: "How to Craft an Impressive Academic Resume",
    author: "Mahatir Ahmed Tusher",
    date: "October 15, 2023",
    content: `
      An academic resume is a comprehensive document that showcases your educational background, research experience, publications, and other scholarly achievements. It is typically used when applying for academic positions, research opportunities, grants, or fellowships. Unlike a traditional resume, an academic resume can be several pages long and provides a detailed account of your academic career.

      Here are some key elements to include in your academic resume:

      1. Contact Information:
         - Full name
         - Professional email address
         - Phone number
         - Current institution and department

      2. Education:
         - List your degrees in reverse chronological order
         - Include the name of the institution, degree earned, field of study, and graduation date
         - Add your thesis or dissertation title if applicable
         - Mention any honors or awards received during your studies

      3. Research Experience:
         - Detail your research positions, including postdoctoral fellowships
         - Describe your research projects, methodologies used, and key findings
         - Highlight any grants or funding you've secured for your research

      4. Teaching Experience:
         - List courses you've taught, including the institution and dates
         - Mention any teaching awards or recognition you've received
         - Include any curriculum development or innovative teaching methods you've implemented

      5. Publications:
         - Organize your publications by type (e.g., peer-reviewed articles, book chapters, conference proceedings)
         - Use a consistent citation format (e.g., APA, MLA, Chicago)
         - Include publications that are in press or under review

      6. Presentations:
         - List conference presentations, invited talks, and guest lectures
         - Include the title of your presentation, conference name, location, and date

      7. Awards and Honors:
         - Mention any academic awards, scholarships, or fellowships you've received
         - Include dates and brief descriptions of the awards

      8. Professional Memberships:
         - List any academic or professional organizations you belong to
         - Mention any leadership roles or committee positions within these organizations

      9. Skills:
         - Highlight relevant technical skills, language proficiencies, or specialized research techniques
         - Include proficiency levels where applicable

      10. References:
          - You can either list your references or state "References available upon request"
          - If listing references, include their name, title, institution, and contact information

      Tips for Crafting an Impressive Academic Resume:

      1. Tailor your resume to the position: Emphasize experiences and achievements that are most relevant to the job or opportunity you're applying for.

      2. Use clear, concise language: While academic writing often involves complex terminology, aim for clarity in your resume. Use action verbs to describe your accomplishments.

      3. Quantify your achievements: Whenever possible, use numbers to demonstrate the impact of your work (e.g., "Secured $50,000 in grant funding" or "Mentored 15 undergraduate students").

      4. Keep it organized: Use consistent formatting throughout your resume. Consider using bold or italic text to highlight important information.

      5. Proofread carefully: Errors in your academic resume can be particularly detrimental. Have a colleague or mentor review your resume for feedback.

      6. Update regularly: Keep your academic resume up-to-date with your latest accomplishments, publications, and experiences.

      7. Consider including a brief research statement: This can give the reader a quick overview of your research interests and expertise.

      8. Be honest: Academic integrity is paramount. Ensure all information in your resume is accurate and truthful.

      Remember, an academic resume is a living document that will grow and evolve throughout your career. By keeping it comprehensive, well-organized, and up-to-date, you'll be well-prepared for any academic opportunity that comes your way.
    `
  },
  {
    title: "How to Create a Professional and Impactful Resume",
    author: "Mahatir Ahmed Tusher",
    date: "October 20, 2023",
    content: `
      Creating a professional and impactful resume is crucial in today's competitive job market. Your resume is often the first impression you make on a potential employer, so it's essential to make it count. Here's a comprehensive guide to help you create a resume that stands out:

      1. Choose the Right Format:
         - Chronological: Best for those with a strong, consistent work history
         - Functional: Ideal for career changers or those with gaps in employment
         - Combination: Blends elements of both, highlighting skills and work history

      2. Start with a Strong Header:
         - Include your full name, phone number, email address, and location
         - Consider adding links to your LinkedIn profile or professional website

      3. Write a Compelling Summary or Objective:
         - Summarize your professional experience and key skills in 2-3 sentences
         - Tailor this section to the job you're applying for

      4. Highlight Your Work Experience:
         - List your work history in reverse chronological order
         - Include company name, your job title, dates of employment, and location
         - Use bullet points to describe your key responsibilities and achievements
         - Quantify your accomplishments whenever possible (e.g., "Increased sales by 25%")
         - Use action verbs to start each bullet point (e.g., "Managed," "Developed," "Implemented")

      5. Education Section:
         - List your degrees in reverse chronological order
         - Include the name of the institution, degree earned, and graduation date
         - Add relevant coursework, academic achievements, or a high GPA if applicable

      6. Skills Section:
         - List relevant hard skills (e.g., software proficiencies, languages) and soft skills
         - Tailor this section to match the job requirements

      7. Additional Sections (if relevant):
         - Certifications
         - Professional associations
         - Volunteer work
         - Publications
         - Awards and honors

      8. Formatting Tips:
         - Use a clean, professional font (e.g., Arial, Calibri, Times New Roman)
         - Keep font size between 10-12 points for body text
         - Use consistent formatting throughout (e.g., same font size for all headers)
         - Utilize white space effectively to make your resume easy to read
         - Keep your resume to 1-2 pages, unless you're in academia or have extensive experience

      9. Tailor Your Resume:
         - Customize your resume for each job application
         - Use keywords from the job description to pass Applicant Tracking Systems (ATS)
         - Highlight experiences and skills most relevant to the position

      10. Proofread and Edit:
          - Check for spelling and grammatical errors
          - Ensure consistency in tense and formatting
          - Have someone else review your resume for feedback

      11. Save and Send Properly:
          - Save your resume as a PDF to preserve formatting
          - Name your file professionally (e.g., "John_Doe_Resume.pdf")

      Remember, your resume should be a dynamic document that evolves with your career. Regularly update it with new skills, experiences, and achievements. By following these guidelines, you'll create a professional and impactful resume that effectively showcases your qualifications and increases your chances of landing an interview.
    `
  },
  {
    title: "Building a Good CV: A Lifeline in Bangladesh's Job Crisis",
    author: "The CV Forger Team",
    date: "January 1, 2025",
    content: `
      Bangladesh, with its burgeoning economy and dynamic youth population, finds itself in the throes of a severe job crisis. High unemployment rates, a saturated job market, and a mismatch between education and industry demands have left many young professionals struggling to find meaningful employment. In such a competitive environment, a well-structured and impactful CV (Curriculum Vitae) can make all the difference.

      This article explores the critical role a strong CV plays in surviving Bangladesh's job crisis and offers insights into crafting a CV that stands out.

      Understanding the Competitive Landscape

      1. The Challenges of the Job Market

      Unemployment Statistics: According to recent reports, Bangladesh's unemployment rate hovers around 5%, with youth unemployment exceeding 10%.

      Job Market Dynamics: Many industries are overburdened with job seekers, while others face a shortage of skilled professionals.

      Global Competition: With globalization, Bangladeshi professionals often compete with candidates from across the world for remote and international roles.

      2. Employers' Expectations

      Companies seek candidates who can hit the ground running. They value technical skills, adaptability, and the ability to work in dynamic environments.

      A professional CV is often the first screening tool used to assess candidates.

      Why a Good CV Matters

      A CV is more than just a document; it's your personal marketing tool. Here's how it can help:

      1. Creating a Strong First Impression

      A well-organized CV immediately communicates professionalism and attention to detail.

      It positions you as a serious contender, even before an interview.

      2. Aligning Skills with Market Needs

      Highlighting relevant skills tailored to specific job roles increases the likelihood of being shortlisted.

      Including certifications and upskilling efforts demonstrates initiative and commitment.

      3. Standing Out in a Saturated Market

      With hundreds of applicants for a single position, a distinctive CV ensures you don't get lost in the crowd.

      Creative layouts or ATS-friendly designs can capture attention while ensuring compatibility with digital screening tools.

      4. Building Confidence

      A well-crafted CV boosts your confidence during interviews, as it serves as a testament to your capabilities and achievements.

      Steps to Craft a Winning CV

      1. Structure and Format

      Use a clean and professional layout with clear headings.

      Opt for a one-page CV for freshers and two pages for experienced professionals.

      Ensure readability by using standard fonts like Arial or Times New Roman.

      2. Personal Details

      Include your full name, professional email, phone number, and LinkedIn profile.

      Add a professional photograph if required.

      3. Professional Summary

      Write a concise statement summarizing your skills, experience, and career goals.

      Example: "Motivated marketing graduate with 2 years of experience in digital marketing and content creation. Skilled in SEO, analytics, and campaign management."

      4. Educational Background

      List your degrees in reverse chronological order.

      Mention significant achievements, like scholarships or top grades.

      5. Work Experience

      Include job titles, company names, and employment dates.

      Focus on accomplishments rather than responsibilities. Use metrics to demonstrate impact (e.g., "Increased sales by 20% through targeted marketing strategies").

      6. Skills Section

      Highlight both technical and soft skills.

      Example:

      Technical: Python, Excel, Data Analysis

      Soft: Communication, Leadership, Time Management

      7. Certifications and Awards

      Mention relevant certifications, such as Google Digital Marketing, PMP, or Microsoft Office Specialist.

      Include awards or recognitions that add value to your profile.

      8. Extracurricular Activities

      Showcase leadership roles, volunteer work, or participation in competitions.

      9. References

      Mention "Available upon request" unless specifically asked to include contact details.

      Customizing Your CV for the Bangladeshi Job Market

      1. Target Local Industries

      Focus on sectors with high demand, such as IT, RMG (Ready-Made Garments), healthcare, and education.

      Use keywords that align with local job postings.

      2. Emphasize Language Proficiency

      Highlight fluency in Bengali and English. For international roles, mention proficiency in other languages.

      3. Showcase Adaptability

      Include experiences that demonstrate resilience and adaptability, traits valued in Bangladesh's evolving job market.

      4. Leverage Digital Platforms

      Add links to portfolios or GitHub accounts for technical roles.

      Maintain an updated LinkedIn profile to complement your CV.

      How a Good CV Can Help You Survive the Job Crisis

      1. Enhancing Employability

      A polished CV ensures you're better prepared for job opportunities as they arise.

      2. Facilitating Career Transitions

      For those looking to switch industries, a CV can highlight transferable skills and experiences.

      3. Supporting Global Opportunities

      An internationally competitive CV opens doors to remote jobs and international roles, diversifying your prospects.

      4. Empowering Networking Efforts

      Sharing a strong CV with mentors, alumni, and industry professionals increases the likelihood of referrals.

      Conclusion

      In a challenging job market like Bangladesh's, a good CV is not just an option—it's a necessity. By effectively showcasing your skills, experiences, and achievements, a well-crafted CV positions you as a strong candidate, ready to seize opportunities. As the competition intensifies, investing time and effort into building a standout CV could be your most crucial career move.
    `
  },
  {
    title: "বাংলাদেশে চাকরি প্রার্থীদের জন্য সিভি লেখার ১০টি টিপস",
    author: "Muhammad Arif Hossain",
    date: "January 1, 2025",
    content: `
      বাংলাদেশের প্রতিযোগিতামূলক চাকরির বাজারে যেকোন জবে আবেদনের পর ইন্টারভিয়ের জন্য শর্টলিস্টেড হওয়ার ক্ষেত্রে একটি প্রফেশনাল সিভি বা রেজ্যুমে অত্যন্ত গুরুত্বপূর্ণ। আমাদের দেশে চাকরিপ্রার্থীগণ বিভিন্ন কোম্পানিতে প্রচুর আবেদন করলেও ইন্টারভিউতে ডাক পাওয়ার হার খুবই কম। স্কিল জবস এর একটি জরিপে দেখা গেছে, বাংলাদেশে একজন ফ্রেশার বা এক বছরের কম অভিজ্ঞতা সম্পন্ন চাকরিপ্রার্থী প্রতি ১০ থেকে ১৫টি কোম্পানিতে চাকরির আবেদনের প্রেক্ষিতে গড়ে ১ থেকে ২টি কোম্পানিতে ইন্টারভিউয়ের সুযোগ পান। আর ইন্টারভিউ এর জন্য সিলেক্ট না হওয়ার অন্যতম কারণ হচ্ছে সঠিক উপায়ে রেজ্যুমে বা সিভি আপটেড না করা। 

      আপনাকে একটি বিষয় মাথায় রাখতে হবে যে আপনার রেজ্যুমেটিই হচ্ছে এমপ্লয়ারকে ইমপ্রেস করার প্রথম উপায়। সুতরাং আপনার সিভি বা রেজ্যুমেটি যদি ইম্প্রেসিভ না হয় তাহলে আপনি যত বেশি কোম্পানিতেই আবেদন করেন না কেন, আপনার ইন্টারভিউ কল পাওয়ার সম্ভাবনা খুবই কম। মনে রাখতে হবে যে আপনার আপনার রেজ্যুমেটি শুধু মাত্র একটি ‘লিষ্ট অব স্কিলস’ নয়, এটি আপনার গল্প। এই রেজ্যুমের মাধ্যমেই এমপ্লয়ার আপনার দক্ষতা, অভিজ্ঞতা এবং ব্যক্তিত্ব সম্পর্কে জানতে পারে এবং এবং আপনি তাদের কোম্পানিতে কাজ করার যোগ্য কি না সে বিষয়ে সিদ্ধান্ত নেয়। সুতরাং, আপনার সিভি বা রেজ্যুমেটি এমন হওয়া উচিৎ যা আপনাকে অন্য প্রতিযোগীদের থেকে আলাদা হিসেবে উপস্থাপন করবে এবং ইন্টারভিউয়ের জন্য কল পাওয়ার সম্ভাবনা আরও বাড়িয়ে দিবে।

সিভি লেখার ১০টি গুরুত্বপূর্ণ টিপস
এই আর্টিকেলটি আপনাকে বাংলাদেশের প্রতিযোগিতামূলক চাকরির বাজারের জন্য একটি আউটস্ট্যান্ডিং সিভি তৈরি করতে সাহায্য করবে। এখানে সিভি লেখার ১০টি গুরুত্বপূর্ণ টিপস শেয়ার করা (CV writing tips) হবে যা আপনাকে আপনার পছন্দের চাকরিটি খুঁজে পেতে সহায়তা করবে।

১. শুরুতেই আপনার কন্টাক্ট ইনফরমেশন উল্লেখ করুন (Contact Information)
একিটি প্রফেশনাল সিভি বা রেজ্যুমের শুরুর অংশটি খুব গুরুত্বপূর্ণ। এই অংশে সাধারণত চাকরিপ্রার্থীর নাম, ঠিকানা, কন্টাক্ট ডিটেলস, সোশ্যাল মিডিয়া লিংক এবং ছবি থাকে। কন্টাক্ট ডিটেলসে (contact details) আপনার আপডেটেড ফোন নাম্বার এবং ইমেইল উল্লেখ করতে ভুল করবেন না। পাশাপাশি আপনার বর্তমান ঠিকানা, পোর্টফোলিও সাইটের লিংক (যদি থাকে) এবং একটি প্রফেশনাল ছবি আপনার সিভির এই অংশে যুক্ত করুন।

২. একটি শক্তিশালী “ক্যারিয়ার সামারি” লিখুন (Career Summary)
আপনার “ক্যারিয়ার সামারি” (Career Summary) হল আপনার সিভির একটি গুরুত্বপূর্ণ অংশ যা নিয়োগকর্তাদের আপনার দক্ষতা, অভিজ্ঞতা এবং ক্যারিয়ারের লক্ষ্য সম্পর্কে একটি সংক্ষিপ্ত ধারণা দেয়। আপনার “ক্যারিয়ার সামারিটি” তিন থেকে চার লাইনের মধ্যে সীমাবদ্ধ রাখুন। ক্যারিয়ার সামারিতে শুধুমাত্র প্রাসঙ্গিক দক্ষতা এবং অভিজ্ঞতা হাইলাইট করুন, অপ্রয়োজনীয় কথাবার্তা লিখে ক্যারিয়ার সামারি লম্বা করার দরকার নেই। আপনার “ক্যারিয়ার সামারি” স্পষ্ট ও সংক্ষিপ্ত রাখুন এবং সেখানে আপনার ক্যারিয়ারের লক্ষ্যসমূহ স্পষ্টভাবে উল্লেখ করুন।



৩. আপনার শিক্ষাগত যোগ্যতা তুলে ধরুন (Educational Qualifications)
সিভিতে আপনার শিক্ষাগত যোগ্যতা অবশ্যই উল্লেখ করতে হবে। আপনি যদি সিভিতে আপনার শিক্ষাগত যোগ্যতা সঠিকভাবে উপস্থাপন করতে না পারেন তাহলে ইন্টারভিউয়ের জন্য শর্টলিস্টেড হওয়ার সম্ভাবনা খুবই কম। শিক্ষাগত যোগ্যতা লেখার ক্ষেত্রে আপনার সর্বশেষ ডিগ্রি থেকে শুরু করতে হবে অর্থাৎ প্রথমে মাস্টার্স এর পর অনার্স পরে এইচ.এস.সি এবং সবার শেষে এস.এস.সি এইভাবে বিপরীত ক্রম (reverse order)’এ লিখতে হবে। প্রতিটি প্রতিষ্ঠানের নাম, ডিগ্রি, প্রধান বিষয় (major), GPA এবং পাশের সাল অন্তর্ভুক্ত করতে হবে।


৪. প্রাসঙ্গিক কাজের অভিজ্ঞতা মেনশন করুন (Work Experience)
আপনার সিভির অভিজ্ঞতা (Work Experience) অংশটি হল আপনার সামগ্রিক দক্ষতা, জ্ঞান এবং অভিজ্ঞতার সবচেয়ে শক্তিশালী প্রমাণ। এটি কেবলমাত্র আপনি কোথায় এবং কখন কাজ করেছেন তা উল্লেখ করার চেয়ে বেশি। এটি নিয়োগকর্তাদের কাছে নিজেকে অন্য প্রার্থীদের থেকে আলাদা হিসেবে প্রমান করার একটি সুযোগ। এটি সেই জায়গা যেখানে আপনি আবেদনকৃত পদের জন্য প্রয়োজনীয় স্কিলস হাইলাইট করতে পারেন এবং আপনি কীভাবে অতীতে সফল হয়েছেন বা বিভিন্ন সমস্যা সমাধান করেছেন সে সম্পর্কে উদাহরণ দিতে পারেন। আপনার যদি কোন ধরণের প্রফেশনাল এক্সপেরিয়েন্স না থাকে তাহলে সিভিতে এক্সপেরিয়েন্স হিসেবে ইন্টার্নশিপ, প্রশিক্ষণ বা কর্মশালায় অংশগ্রহণ, কোন প্রজেক্টে কাজ করা ইত্যাদি উল্লেখ করতে পারেন।


৫. আপনার স্কিলস তালিকাভুক্ত করুন (Skills and Qualifications)
আপনার সিভির “Skills and Qualifications” অংশটি নিয়োগকর্তাদের কাছে আপনার দক্ষতা, জ্ঞান এবং অভিজ্ঞতার সারসংক্ষেপ প্রদান করে। এখানে টেকনিক্যাল স্কিলস’এর পাশাপাশি আপনার টিমওয়ার্ক, প্রভলেম সলভিং এবং কমিউনিকেশনের মতো সফ্ট স্কিলগুলোও সুন্দর ভাবে উল্লেখ করতে হবে। পাশাপাশি কিছু ইন্টারপার্সোনাল স্কিলস যেমন উদ্যমী (enthusiastic), দ্রুত শেখা (quick learning), বিশ্বস্ততা (trustworthy) ইত্যাদি এইখানে তুলে ধরা উচিত।

৬. আপনার ট্রেনিং এবং সার্টিফিকেশন সংক্রান্ত তথ্য দিন (Training and Certifications)
আপনার সিভির “Training and Certifications” অংশটি আপনার স্কিলস ডেভেলপমেন্টের আগ্রহকে এমপ্লয়ারের কাছে তুলে ধরে। আপনি যদি আপনার সিভিতে বেশ কিছু প্রফেশনাল ট্রেইনিংএর কথা উল্লেখ্য করেন তখন আপনার এমপ্লয়ার বুঝতে পারবেন যে নতুন নতুন দক্ষতা অর্জনের ব্যাপারে আপনার আগ্রহ রয়েছে। এক্ষেত্রে, প্রতিটি ট্রেনিং এন্ট্রির জন্য প্রতিষ্ঠানের নাম, প্রশিক্ষণ/সার্টিফিকেশনের বিষয় এবং সম্পন্ন করার তারিখ স্পষ্টভাবে উল্লেখ করতে হবে। উদাহরণস্বরূপ, “কোর্সের নামঃ ডেটা সাইন্স এবং মেশিন লার্নিং কোর্স, প্রতিষ্ঠানঃ স্কিল জবস, তারিখঃ জানুয়ারি ২০২৪।”


৭. এক্সট্রা কারিকুলার এক্টিভিটিস সম্পর্কে লিখুন (Extra Curricular Activities)
সিভিতে “Extra Curricular Activities” যোগ করা বাধ্যতামূলক না হলেও এটি নিয়োগকর্তাদের আপনার দক্ষতা আরও সার্বিকভাবে বুঝতে সাহায্য করে। স্বেচ্ছাসেবামূলক কাজ, ক্লাব স���স্যপদ বা খেলাধুলায় অংশগ্রহণের মাধ্যমে আপনি যে দলগত কাজ, সমস্যা সমাধান, নেতৃত্ব বা সময় ব্যবস্থাপনায় দক্ষতা অর্জন করেছেন এক্সট্রাকাররিক্যুলার এক্টিভিটিজ এর মাধ্যমে সিভিতে তা তুলে ধরতে পারেন। উদাহরণস্বরূপ, “বিশ্ববিদ্যালয়ের বিতর্ক ক্লাবের সভাপতি হিসেবে দুই বছর কাজ করে যোগাযোগ ও দল পরিচালনার দক্ষতা অর্জন”। এভাবে, আপনি কয়েকটি শব্দেই নিয়োগকর্তাকে জানাতে পারেন যে আপনার কাছে শুধু ডিগ্রি নয়, দক্ষতাও আছে।



৮. রেফারেন্স প্রদান করুন (References)
সিভিতে রেফারেন্স হিসেবে কখনোই আত্মীয়স্বজনকে দেবেন না, কারণ তারা নিরপেক্ষ মতামত দিতে পারবেন না। বরং, কোন শিক্ষক বা কর্মক্ষেত্রের সিনিয়রের কাছ থেকে অনুমতি নিয়ে তাদের তথ্য দিন। সিভিতে ভুল তথ্য দেওয়া একেবারেই চলবে না। রেফারেন্সদের পুরো নাম, পদবী, প্রতিষ্ঠান, ঠিকানা ও ফোন নম্বর সঠিকভাবে লিখুন। তাদের জানান যে আপনি তাদের রেফারেন্স হিসেবে ব্যবহার করছেন এবং সিভি ও কভার লেটারের কপি পাঠিয়ে দিন। এভাবে আপনি নিশ্চিত করতে পারেন যে আপনার রেফারেন্স অংশটি পূর্ণাঙ্গ ও নির্ভরযোগ্য।


৯. প্রতিটি জবে আবেদনের সময় আপনার সিভি কাস্টমাইজ করুন (Customize Your CV)
প্রতিটি জবের জন্য আলাদা আলাদা রিকোয়ার্মেন্ট থাকে। তাই, প্রতিটি চাকরির আবেদনের জন্য আপনার সিভি একটু করে খাতিয়ে নেওয়া জরুরি। আবেদন করার আগে চাকরির বিজ্ঞপ্তিটি পড়ে দেখুন এমপ্লয়ার সেখানে কোন দক্ষতা ও অভিজ্ঞতা খুঁজছে। তারপর আপনার সিভিতে সেই দক্ষতা ও অভিজ্ঞতাগুলিকে আরও জোর দিয়ে তুলে ধরুন।

১০. সঠিক ফরমেট এবং ফন্ট ব্যবহার করুন
আপনার সিভির ফরম্যাট পড়তে আকর্ষণীয় হলে, নিয়োগকর্তারা তা পড়ে দেখার সম্ভাবনা বেশি থাকে। এর ফলে আপনার ইন্টারভিউয়ের জন্য ডাক পাওয়ার সম্ভাবনাও বৃদ্ধি পায়। তাই আপনার সিভির জন্য একটি প্রফেশনাল ফরম্যাট নির্বাচন করা খুব জরুরি। আপনার সিভিটি ডক ফাইল হিসেবে সংরক্ষণ করুন। কারণ আপনি নিয়মিত আপডেট করবেন, এবং প্রতিটি প্রতিষ্ঠানের জন্য আলাদা ফাইল তৈরি করতে হবে। ফাইলের নাম সঠিকভাবে লিখুন। আপনার রেজ্যুমেটি সেভ করার সময় “My CV.doc” এজাতীয় নামের পরিবর্তে “নিজের নাম” স্ল্যাশ বা আন্ডারস্কোর সিভি ডট পিডিএফ (Name_CV.pdf) এইভাবে সেভ করতে হবে।

আপনার সিভি পিডিএফ ফাইল হিসেবে পাঠান। টাইমস নিউ রোমান, অ্যারিয়্যাল, বা ভারদানা ফন্ট ব্যবহার করতে পারেন। ফন্ট সাইজ ১১-এর কম হবে না। মাঝেমধ্যে বোল্ড এবং হেডার অপশন ব্যবহার করুন। তবে অবশ্যই কালো রঙ ব্যবহার করতে হবে।


সিভি বা রেজ্যুমে লেখার ক্ষেত্রে কিছু কমন ভুল
সিভি বা রেজ্যুমে হলো আপনার দক্ষতা, অভিজ্ঞতা এবং শিক্ষাগত যোগ্যতার একটি সংক্ষিপ্ত বিবরণ যা আপনি চাকরির আবেদনের সময় ব্যবহার করেন। একটি ভালোভাবে লেখা সিভি আপনাকে চাকরির বাজারে প্রতিযোগিতামূলক সুবিধা দিতে পারে এবং আপনার পছন্দের চাকরি পেতে সাহায্য করতে পারে। তবে, অনেক লোক সিভি বা রেজ্যুমে লেখার সময় কিছু সাধারণ ভুল করে থাকে। এই ভুলগুলো আপনার চাকরি পাওয়ার সম্ভাবনা কমিয়ে দিতে পারে। এখানে সিভি বা রেজ্যুমে লেখার ক্ষেত্রে কিছু কমন তুলে ধরা হলোঃ

বানান এবং ব্যাকরণ ভুল
সিভিতে বানান বা ব্যাকরণের ভুল থাকলে এমপ্লয়ার আপনার ব্যাপারে খারাপ ধারণা করতে পারে। এতে মনে হতে পারে আপনি অমনোযোগী বা অপেশাদার। ভুল ক্রিয়াপদ, বিরাম চিহ্নের ভুল বা শব্দের অপব্যবহার এসব ভুল এড়িয়ে চলুন। কমপ্লিট করার পর আপনার রেজ্যুমেটি জোরে পড়ে ভুল শুনুন, অন্য কাউকে প্রুফ রিড করতে দিন। মনে রাখতে হবে, ভুলমুক্ত সিভি আপনার যোগ্যতা আরও জোরালো করে তুলবে।

অপ্রাসঙ্গিক তথ্য অন্তর্ভুক্ত করা
সিভিতে অপ্রয়োজনীয় তথ্য দেওয়ার প্রয়োজন নেই। নিয়োগকর্তারা আপনার কাজের অভিজ্ঞতা, শিক্ষা, এবং আবেদনকৃত পদের জন্য প্রাসঙ্গিক দক্ষতা জানতে চান। ব্যক্তিগত মতামত, রাজনীতি, ধর্ম, বা শখের মতো তথ্য আপনার সিভি লম্বা ও বিশৃঙ্খল করে তুলতে পারে। চাকরির বিজ্ঞপ্তিটি ভালো করে পড়ুন, সেখানে প্রয়োজনীয় দক্ষতাগুলো ইডেন্টিফাই করুন, এবং আপনার সিভিতে সেগুলোই হাইলাইট করুন। মনে রাখবেন, নিয়োগকর্তাদের সময় কম, তাই আপনার সিভিতে সংক্ষিপ্ত এবং প্রাসঙ্গিক তথ্য দিয়ে তাদের দৃষ্টি আকর্ষণ করুন।

অস্পষ্ট বা অসম্পূর্ণ তথ্য
সিভিতে অস্পষ্ট বা অসম্পূর্ণ তথ্য লিখবেন না। কী করলেন, কখন করলেন, কতটা করলেন – সব ঠিক মতো লিখুন। সিভিতে ” দায়িত্ব পালন” এর চেয়ে “বিক্রয় ১৫% বাড়ানো” লিখলে নিয়োগকর্তাদের বেশি ভালো লাগে। শিক্ষা, দক্ষতা – সবকিছুই সঠিক তথ্য সহ উল্লেখ করুন। নিয়োগকর্তারা সময়ের অভাবে দ্রুত সিদ্ধান্ত নেন, তাই স্পষ্ট তথ্য দেওয়া জরুরি।

ফর্ম্যাটিং ত্রুটি
সিভির ফর্ম্যাটিং ভুল করবেন না! অস্পষ্ট ফন্ট, এলোমেলো মার্জিন, ভুল বানান – এইসবের কারণে আপনার সিভিটি অপেশাদার দেখায়। নিয়োগকর্তারা প্রথমেই ফর্ম্যাটিং দেখবেন, তাই সহজ ফন্ট, সামঞ্জস্যপূর্ণ মার্জিন এবং লাইন স্পেসিং রাখুন। টেবিল বা গ্রাফ কেবল জরুরি হলে দিন। পিডিএফ ফাইলে সিভি সেভ করুন। একটু সাবধানে ফর্ম্যাট করলেই আপনার যোগ্যতা আরও ঝলমল করবে!

কাজের অভিজ্ঞতা সেকশনের দুর্বল বর্ণনা
সিভিতে কাজের অভিজ্ঞতা লিখতে “দায়িত্ব পালন” বা “টিম প্লেয়ার” লেখা যথেষ্ট নয়। এখানে কী করলেন, কীভাবে করলেন, ফলাফল কী হলো – সেসব লিখুন। নির্দিষ্ট উদাহরণ, সংখ্যা ব্যবহার করুন। যেমন, “বিক্রয় ১০% বাড়ানো” বা “৩ মাসে একটি নতুন পণ্য চালু করার প্রকল্প পরিচালনা”। এতে নিয়োগকর্তা বুঝতে পারবেন আপনার দক্ষতা কতটা।

সংযুক্তি (attachment) না পাঠানো
সিভির সাথে সংযুক্তি (attachment) না দেওয়া ভুল! নিয়োগকর্তারা হয়তো সিভে থেকে সব কিছু বুঝতে পারবেন না। তাই শিবির সাথে কভার লেটার, পোর্টফোলিও, সার্টিফিকেট – এসব প্রয়োজনীয় ডকুমেন্টস জমা দিন। এতে আপনার আবেদন আরও জোরদার হবে।

সিভি লেখা সম্পর্কিত কিছু প্রশ্ন ও উত্তর (Resume Writing FAQs)
আমার সিভিতে কী কী বিভাগ থাকা উচিত?
উত্তর: সিভিতে কী কী থাকবে? সাধারণত নাম, ঠিকানা, ফোন, ইমেল, একটি ছোট পরিচিতি, শিক্ষা, কাজের অভিজ্ঞতা, দক্ষতা – এসব থাকে। পুরস্কার, প্রকাশনা, স্বেচ্ছাসেবক কাজ – থাকলে দিতে পারেন। রেফারেন্সের তথ্যও রাখুন কিন্তু সিভিতে দেওয়ার আগে তাদের জানান। দুই পাতা ছাড়ালে লম্বা হবেন না, সহজ ভাষা এবং সঠিক বানান লিখুন। আপডেট রাখাও জরুরি!

আমার সিভি কতটা লম্বা হওয়া উচিত?
উত্তর: আপনার সিভি দুই পৃষ্ঠার বেশি লম্বা হওয়া উচিত নয়। নিয়োগকর্তারা সাধারণত দ্রুত সিদ্ধান্ত নেন, তাই আপনার সিভিতে সংক্ষিপ্ত এবং প্রাসঙ্গিক তথ্য প্রদান করা গুরুত্বপূর্ণ।

আমি কীভাবে আমার সিভিতে কীওয়ার্ড (keyword) ব্যবহার করব?
উত্তর: আপনার সিভিতে কীওয়ার্ড ব্যবহার করার মাধ্যমে আপনি নিয়োগকর্তাদের কাছে আপনার দক্ষতা এবং অভিজ্ঞতা তুলে ধরতে পারেন। চাকরির বিজ্ঞাপনটি মনোযোগ সহকারে পড়ুন এবং নিয়োগকর্তা যে দক্ষতাগুলি খুঁজছেন সেগুলি চিহ্নিত করুন। তারপর, আপনার শিক্ষাগত যোগ্যতা, কাজের অভিজ্ঞতা এবং দক্ষতা বিভাগে সেই কীওয়ার্ডগুলি ব্যবহার করুন। তবে, আপনার সিভিতে প্রতিটি লাইনে কীওয়ার্ড ব্যবহার করার দরকার নেই। কিছু অনলাইন টুল আছে যা আপনাকে আপনার সিভিতে কীওয়ার্ড খুঁজে পেতে এবং ব্যবহার করতে সাহায্য করতে পারে। মনে রাখবেন কীওয়ার্ড ব্যবহার করার চেয়ে গুরুত্বপূর্ণ হল আপনার সিভি কতটা ভালো লেখা।

আমি কি আমার সিভিতে সোশ্যাল মিডিয়া প্রোফাইলের লিঙ্ক (link) দেব?
উত্তর: সিভিতে সোশ্যাল মিডিয়া লিঙ্ক দেওয়া ঐচ্ছিক কিন্তু অত্যন্ত গুরুত্বপূর্ণ। এমপ্লয়ার যদি আপনার সম্পর্কে আরও বিস্তারিত জানতে চায় তাহলে তারা আপনার সোশ্যাল মিডিয়া সাইট ভিজিট করতে পারে। তবে তা কিছু নিয়োগকর্তা দেখতে চাইতে পারেন, সবাই না। সিভিতে সোশ্যাল মিডিয়া লিংক যুক্ত করার আগে কিছু কিছু বিষয় যেমন আপনার প্রোফাইলে শুধুমাত্র পেশাদার তথ্য পোস্ট করা, সোশ্যাল মিডিয়ায় নিজেকে প্রফেশনাল ভাবে উপস্থাপন করা, নিজের কানেকশন বাড়ানো ইত্যাদি নিশ্চিত করুন।

আমি যদি বেকার হই, তাহলে কি আমার কাজের অভিজ্ঞতা সেকশন খালি রাখব?
উত্তর: বেকার হলেও কাজের অভিজ্ঞতা খালি রাখবেন না। ইন্টার্নশিপ স্বেচ্ছাসেবক হিসেবে কাজ, কোর্স, ব্যক্তিগত প্রজেক্ট – এসব লিখুন। এতে আপনি আগ্রহী এবং দক্ষ – এটা নিয়োগকর্তাকে জানায়।
    `
  }
]

const videos = [
  {
    title: "15 Tips to Kickstart Your Career as a Fresher | Ayman Sadiq",
    url: "https://www.youtube.com/embed/Llx0sLAtYBM"
  },
  {
    title: "My Career Advice For Anyone Feeling Stuck In Life",
    url: "https://www.youtube.com/embed/Jl4Waz8TmyU"
  },
  {
    title: "My honest advice to someone who feels behind in life",
    url: "https://www.youtube.com/embed/b_VPkTYmI_g"
  },
  {
    title: "Warren Buffett's career advice",
    url: "https://www.youtube.com/embed/8aNKhVPKHBc"
  },
  {
    title: "INFJ Career Advice: 4 Things You Need to be Fulfilled (#4 is Crucial)",
    url: "https://www.youtube.com/embed/zgxN6GaiGbE"
  },
  {
    title: "Career Advice For A World After AI",
    url: "https://www.youtube.com/embed/J4Hd5wudIrk"
  },
  {
    title: "Career Advice If You Feel Stuck In Life",
    url: "https://www.youtube.com/embed/lUyz1hfPc7k"
  },
  {
    title: "Highest Paying Degrees and JOBS in 2030- 35 (Careers you should go for)",
    url: "https://www.youtube.com/embed/2qH7ausehwE"
  },
  {
    title: "How To Build Career Success - Behavioural Scientist Dr Grace Lordan",
    url: "https://www.youtube.com/embed/FwvZf0IjaiQ"
  },
  {
    title: "How to Find a Career You Genuinely Love",
    url: "https://www.youtube.com/embed/O3m14PVOq_g"
  },
  {
    title: "The Psychology of Career Decisions | Sharon Belden Castonguay | TEDxWesleyanU",
    url: "https://www.youtube.com/embed/4e6KSaCxcHs"
  },
  {
    title: "What Nobody Tells You About Your Twenties | Livi Redden | TEDxBayonne",
    url: "https://www.youtube.com/embed/O9pD6LTF4Bk"
  },
  {
    title: "7 Job Search Strategies To Find A Job FAST!",
    url: "https://www.youtube.com/embed/PnxBkOqThjI"
  },
  {
    title: "How people get the good jobs | Taylor Doe | TEDxOklahomaCity",
    url: "https://www.youtube.com/embed/frmwfMTRg-Q"
  },
  {
    title: "The Best Career Advice from Bill Gates, Richard Branson & Hillary Clinton",
    url: "https://www.youtube.com/embed/ranZY3q3Nzo"
  },
  {
    title: "Simon Sinek: The Advice Young People NEED To Hear | E176",
    url: "https://www.youtube.com/embed/NcaQUH2K-wo"
  },
  {
    title: "How to make 2025 the Greatest YEAR of your LIFE",
    url: "https://www.youtube.com/embed/CcGOA3mUG80"
  }
]

const bookReviews = [
  {
    title: "What Color Is Your Parachute? 2021: Your Guide to a Lifetime of Meaningful Work and Career Success",
    author: "Richard N. Bolles",
    review: "This classic career guide, updated annually, offers practical advice on job hunting and career changing. It includes self-assessment tools, job search strategies, and tips for networking in the digital age. A must-read for anyone looking to find their ideal career path."
  },
  {
    title: "Designing Your Life: How to Build a Well-Lived, Joyful Life",
    author: "Bill Burnett and Dave Evans",
    review: "Written by Stanford professors, this book applies design thinking principles to career and life planning. It offers exercises and strategies to help readers create a fulfilling career and life. Ideal for those feeling stuck or unsure about their career direction."
  },
  {
    title: "So Good They Can't Ignore You: Why Skills Trump Passion in the Quest for Work You Love",
    author: "Cal Newport",
    review: "Newport challenges the common advice to 'follow your passion' and instead argues for developing rare and valuable skills. This book provides a fresh perspective on building a career you love through mastery and creating career capital."
  }
]

export default function CareerResources() {
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Assuming the user is authenticated
  const [selectedArticle, setSelectedArticle] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <Header isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Career Resources</h1>
        
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="books">Book Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="articles">
            {selectedArticle ? (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
                <p className="text-gray-600 mb-4">By {selectedArticle.author} | {selectedArticle.date}</p>
                <div className="prose max-w-none">
                  {selectedArticle.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                <Button onClick={() => setSelectedArticle(null)} className="mt-4">
                  Back to Articles
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{article.title}</CardTitle>
                      <CardDescription>{article.author} | {article.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">{article.content.split('\n')[0]}</p>
                      <Button onClick={() => setSelectedArticle(article)} className="mt-4">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bookReviews.map((book, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{book.title}</CardTitle>
                    <CardDescription>By {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{book.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

