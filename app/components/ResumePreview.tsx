'use client'

import React from 'react'
import Image from 'next/image'
import { FaUser, FaGraduationCap, FaBriefcase, FaLanguage, FaTrophy, FaProjectDiagram, FaUserTie, FaInfoCircle } from 'react-icons/fa'

const templates = {
  modern: {
    primaryColor: '#3B82F6',
    secondaryColor: '#1E40AF',
    backgroundColor: '#F3F4F6',
  },
  classic: {
    primaryColor: '#4B5563',
    secondaryColor: '#1F2937',
    backgroundColor: '#FFFFFF',
  },
  creative: {
    primaryColor: '#10B981',
    secondaryColor: '#059669',
    backgroundColor: '#ECFDF5',
  },
  professional: {
    primaryColor: '#374151',
    secondaryColor: '#111827',
    backgroundColor: '#F9FAFB',
  },
  elegant: {
    primaryColor: '#4B5563',
    secondaryColor: '#1F2937',
    backgroundColor: '#F3F4F6',
  },
  minimalist: {
    primaryColor: '#1F2937',
    secondaryColor: '#4B5563',
    backgroundColor: '#FFFFFF',
  },
}

export default function ResumePreview({ resumeData, template }) {
  const selectedTemplate = templates[template] || templates.modern

  const renderSocialMediaLink = (platform, url) => {
    if (!url) return null;
    const platformName = {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      googleScholar: 'Google Scholar',
      kaggle: 'Kaggle',
      huggingFace: 'Hugging Face'
    }[platform];

    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline block text-xs"
      >
        {`${resumeData.name} — ${platformName}`}
      </a>
    );
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg print:shadow-none" style={{
      fontFamily: resumeData.font || 'Calibri, sans-serif',
      backgroundColor: selectedTemplate.backgroundColor,
      color: selectedTemplate.primaryColor,
      width: '210mm',
      minHeight: '297mm',
      margin: '0 auto',
      fontSize: '12px',
      lineHeight: '1.5',
      letterSpacing: '0.3px',
      pageBreakInside: 'auto',
      breakInside: 'auto',
      position: 'relative',
      overflowY: 'auto',
      maxHeight: '80vh',
    }}>
      <div className="relative">
        {resumeData.image && (
          <div className="absolute top-0 right-0">
            <Image
              src={resumeData.image}
              alt="Profile"
              width={100}
              height={100}
              className="object-cover rounded"
            />
          </div>
        )}

        <h1 className="text-2xl font-bold mb-1" style={{ color: selectedTemplate.secondaryColor }}>
          {resumeData.name}
        </h1>

        <div className="flex items-center mb-1">
          <Image src="https://i.postimg.cc/bvrhwxz9/email.png" alt="Email" width={12} height={12} className="mr-1" />
          <p className="text-xs">{resumeData.email}</p>
        </div>
        <div className="flex items-center mb-1">
          <Image src="https://i.postimg.cc/yNGzgDx4/contact.png" alt="Phone" width={12} height={12} className="mr-1" />
          <p className="text-xs">{resumeData.phone}</p>
        </div>
        <div className="flex items-center mb-1">
          <Image src="https://i.postimg.cc/C1fpjwnZ/loc.png" alt="Address" width={12} height={12} className="mr-1" />
          <p className="text-xs">{resumeData.address}</p>
        </div>

        <div className="flex flex-col space-y-1 mt-1">
          {Object.entries(resumeData.socialMedia || {}).map(([platform, url]) => (
            url && <div key={platform}>{renderSocialMediaLink(platform, url)}</div>
          ))}
        </div>

        <div className="mt-3">
          <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
            <FaUser className="mr-1" /> Career Objective
          </h2>
          <p className="mt-1 text-xs text-gray-700">{resumeData.objective}</p>
        </div>

        <hr className="my-3 border-gray-300" />

        <div>
          <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
            <FaGraduationCap className="mr-1" /> Education
          </h2>
          <table className="w-full mt-1 text-xs">
            <thead>
              <tr>
                <th className="px-1 py-1 border text-left">Degree</th>
                <th className="px-1 py-1 border text-left">Institution</th>
                <th className="px-1 py-1 border text-left">Year</th>
                <th className="px-1 py-1 border text-left">GPA/CGPA</th>
              </tr>
            </thead>
            <tbody>
              {resumeData.education && resumeData.education.map((edu, index) => (
                <tr key={index}>
                  <td className="px-1 py-1 border">{edu.degree}</td>
                  <td className="px-1 py-1 border">{edu.school}</td>
                  <td className="px-1 py-1 border">{edu.year}</td>
                  <td className="px-1 py-1 border">{edu.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-3 border-gray-300" />

        <div>
          <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
            <FaBriefcase className="mr-1" /> Experience
          </h2>
          {resumeData.experience && resumeData.experience.map((exp, index) => (
            <div key={index} className="mt-2">
              <h3 className="font-semibold text-xs">{exp.position}</h3>
              <p className="text-xs">{exp.company}, {exp.duration}</p>
              <p className="text-xs">{exp.type === 'research' ? 'Research Experience' : 'Professional Experience'}</p>
              <p className="text-xs">{exp.description}</p>
              
              {exp.type === 'research' && (
                <>
                  {exp.advisor && <p className="mt-1 text-xs"><strong>Advisor:</strong> {exp.advisor}</p>}
                  {exp.collaborators && <p className="text-xs"><strong>Collaborators:</strong> {exp.collaborators}</p>}
                  
                  {(exp.publications.journal.length > 0 || exp.publications.proceeding.length > 0) && (
                    <div className="mt-1">
                      <h4 className="font-semibold text-xs">Publications</h4>
                      {exp.publications.journal.length > 0 && (
                        <div className="mt-1">
                          <h5 className="font-medium text-xs">Journal Papers</h5>
                          <ul className="list-disc pl-4 text-xs">
                            {exp.publications.journal.map((paper, idx) => (
                              <li key={idx}>{paper}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {exp.publications.proceeding.length > 0 && (
                        <div className="mt-1">
                          <h5 className="font-medium text-xs">Proceeding Papers</h5>
                          <ul className="list-disc pl-4 text-xs">
                            {exp.publications.proceeding.map((paper, idx) => (
                              <li key={idx}>{paper}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <hr className="my-3 border-gray-300" />

        <div>
          <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
            <FaLanguage className="mr-1" /> Skills
          </h2>
          {resumeData.skills && resumeData.skills.map((skill, index) => (
            <div key={index} className="mt-1">
              <p className="text-xs"><strong>{skill.field}:</strong> {skill.items}</p>
            </div>
          ))}
        </div>

        <hr className="my-3 border-gray-300" />

        <div>
          <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
            <FaLanguage className="mr-1" /> Languages
          </h2>
          <table className="w-full mt-1 text-xs">
            <thead>
              <tr>
                <th className="px-1 py-1 border text-left">Language</th>
                <th className="px-1 py-1 border text-left">Speaking</th>
                <th className="px-1 py-1 border text-left">Listening</th>
                <th className="px-1 py-1 border text-left">Writing</th>
                <th className="px-1 py-1 border text-left">Reading</th>
              </tr>
            </thead>
            <tbody>
              {resumeData.languages && resumeData.languages.map((lang, index) => (
                <tr key={index}>
                  <td className="px-1 py-1 border">{lang.name}</td>
                  <td className="px-1 py-1 border">{lang.speaking}</td>
                  <td className="px-1 py-1 border">{lang.listening}</td>
                  <td className="px-1 py-1 border">{lang.writing}</td>
                  <td className="px-1 py-1 border">{lang.reading}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {resumeData.includeAwards && (
          <>
            <hr className="my-3 border-gray-300" />
            <div>
              <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
                <FaTrophy className="mr-1" /> Awards and Certifications
              </h2>
              <ul className="list-disc pl-4 text-xs">
                {resumeData.awards && resumeData.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {resumeData.includeProjects && (
          <>
            <hr className="my-3 border-gray-300" />
            <div>
              <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
                <FaProjectDiagram className="mr-1" /> Projects
              </h2>
              {resumeData.projects && resumeData.projects.map((project, index) => (
                <div key={index} className="mt-2">
                  <h3 className="font-semibold text-xs">{project.name}</h3>
                  {project.descriptions.map((desc, descIndex) => (
                    <p key={descIndex} className="mt-1 text-xs">{desc}</p>
                  ))}
                  {project.reference && (
                    <p className="mt-1 text-xs">
                      Reference: <a href={project.reference} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{project.reference}</a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <hr className="my-3 border-gray-300" />

        <div>
          <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
            <FaInfoCircle className="mr-1" /> Personal Information
          </h2>
          <p className="text-xs">Name: {resumeData.personalInfo?.name}</p>
          <p className="text-xs">Father's Name: {resumeData.personalInfo?.fatherName}</p>
          <p className="text-xs">Mother's Name: {resumeData.personalInfo?.motherName}</p>
          <p className="text-xs">Permanent Address: {resumeData.personalInfo?.permanentAddress}</p>
          <p className="text-xs">Nationality: {resumeData.personalInfo?.nationality}</p>
          <p className="text-xs">Religion: {resumeData.personalInfo?.religion}</p>
          <p className="text-xs">Blood Group: {resumeData.personalInfo?.bloodGroup}</p>
        </div>

        {resumeData.includeSignature && resumeData.signature && (
          <>
            <hr className="my-3 border-gray-300" />
            <div className="mt-3">
              <Image
                src={resumeData.signature}
                alt="Signature"
                width={100}
                height={50}
                className="max-w-[100px] h-auto"
              />
              {resumeData.signatureDate && (
                <p className="mt-1 text-xs">Date: {resumeData.signatureDate}</p>
              )}
            </div>
          </>
        )}

        {resumeData.includeReferences && (
          <>
            <hr className="my-3 border-gray-300" />
            <div>
              <h2 className="text-base font-semibold flex items-center" style={{ color: selectedTemplate.secondaryColor }}>
                <FaUserTie className="mr-1" /> References
              </h2>
              {resumeData.references && resumeData.references.map((ref, index) => (
                <div key={index} className="mt-1">
                  <p className="font-semibold text-xs">{ref.name}</p>
                  <p className="text-xs">{ref.position}</p>
                  <p className="text-xs">{ref.contact}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {resumeData.includeDeclaration && (
          <>
            <hr className="my-3 border-gray-300" />
            <div>
              <h2 className="text-base font-semibold mt-2 mb-1" style={{ color: selectedTemplate.secondaryColor }}>
                Declaration
              </h2>
              <p className="text-xs">{resumeData.declaration}</p>
            </div>
          </>
        )}

        {resumeData.customSections && resumeData.customSections.map((section, index) => (
          <React.Fragment key={index}>
            <hr className="my-3 border-gray-300" />
            <div>
              <h2 className="text-base font-semibold mt-2 mb-1" style={{ color: selectedTemplate.secondaryColor }}>
                {section.title}
              </h2>
              <p className="text-xs">{section.content}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

