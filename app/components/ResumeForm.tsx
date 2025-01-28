'use client'

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { FaPlus, FaTrash, FaImage, FaGripVertical, FaSignature } from 'react-icons/fa'

const proficiencyLevels = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Native Speaker',
  'Conversational'
]

const fonts = [
  'Calibri',
  'Garamond',
  'Helvetica',
  'Georgia',
  'Cambria',
  'Times New Roman',
  'Verdana',
  'Arial'
]

const templates = [
  'modern',
  'classic',
  'creative',
  'professional',
  'elegant',
  'minimalist'
]

const socialMediaPlatforms = [
  { name: 'GitHub', key: 'github' },
  { name: 'LinkedIn', key: 'linkedin' },
  { name: 'Kaggle', key: 'kaggle' },
  { name: 'Google Scholar', key: 'googleScholar' },
  { name: 'Hugging Face', key: 'huggingFace' }
]

export default function ResumeForm({ setResumeData, setSelectedTemplate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    image: null,
    signature: null,
    objective: '',
    education: [{ degree: '', school: '', year: '', gpa: '' }],
    experience: [{ 
      type: 'professional', 
      position: '', 
      company: '', 
      duration: '', 
      description: '',
      advisor: '',
      collaborators: '',
      publications: {
        journal: [''],
        proceeding: ['']
      }
    }],
    skills: [{ field: '', items: '' }],
    languages: [{
      name: '',
      speaking: 'Beginner',
      listening: 'Beginner',
      reading: 'Beginner',
      writing: 'Beginner'
    }],
    includeAwards: true,
    awards: [''],
    includeProjects: false,
    projects: [{ name: '', descriptions: [''], reference: '' }],
    personalInfo: {
      name: '',
      fatherName: '',
      motherName: '',
      permanentAddress: '',
      nationality: '',
      religion: '',
      bloodGroup: '',
    },
    includeReferences: false,
    references: [{ name: '', position: '', contact: '' }],
    includeDeclaration: true,
    declaration: '',
    customSections: [],
    sectionOrder: [
      'personalInfo',
      'objective',
      'education',
      'experience',
      'skills',
      'languages',
      'awards',
      'projects',
      'references',
      'declaration',
      'customSections'
    ],
    font: 'Calibri',
    includeSignature: false,
    socialMedia: {
      github: '',
      linkedin: '',
      googleScholar: '',
      kaggle: '',
      huggingFace: ''
    },
    includedSocialMedia: [],
    signatureDate: '',
  })
  const [localSelectedTemplate, setLocalSelectedTemplate] = useState('modern')
  const [showImageGuidelines, setShowImageGuidelines] = useState(false)
  const [showSignatureGuidelines, setShowSignatureGuidelines] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSignatureChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, signature: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e, index, field) => {
    const { name, value } = e.target
    if (field) {
      const newData = [...formData[field]]
      newData[index] = { ...newData[index], [name]: value }
      setFormData({ ...formData, [field]: newData })
    } else if (name.includes('.')) {
      const [section, key] = name.split('.')
      setFormData({
        ...formData,
        [section]: { ...formData[section], [key]: value }
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleLanguageProficiencyChange = (index, aspect, value) => {
    const newLanguages = [...formData.languages]
    newLanguages[index] = { ...newLanguages[index], [aspect]: value }
    setFormData({ ...formData, languages: newLanguages })
  }

  const handleArrayInputChange = (e, index, field) => {
    const newData = [...formData[field]]
    newData[index] = e.target.value
    setFormData({ ...formData, [field]: newData })
  }

  const addField = (field) => {
    const newItem = field === 'education' ? { degree: '', school: '', year: '', gpa: '' } :
                   field === 'experience' ? { 
                     type: 'professional', 
                     position: '', 
                     company: '', 
                     duration: '', 
                     description: '',
                     advisor: '',
                     collaborators: '',
                     publications: {
                       journal: [''],
                       proceeding: ['']
                     }
                   } :
                   field === 'languages' ? { name: '', speaking: 'Beginner', listening: 'Beginner', reading: 'Beginner', writing: 'Beginner' } :
                   field === 'projects' ? { name: '', descriptions: [''], reference: '' } :
                   field === 'references' ? { name: '', position: '', contact: '' } :
                   field === 'skills' ? { field: '', items: '' } : ''
    
    setFormData({
      ...formData,
      [field]: [...formData[field], newItem]
    })
  }

  const removeField = (field, index) => {
    const newData = [...formData[field]]
    newData.splice(index, 1)
    setFormData({ ...formData, [field]: newData })
  }

  const addCustomSection = () => {
    setFormData({
      ...formData,
      customSections: [...formData.customSections, { title: '', content: '' }],
      sectionOrder: [...formData.sectionOrder, `customSection${formData.customSections.length}`]
    })
  }

  const handleCustomSectionChange = (index, field, value) => {
    const newCustomSections = [...formData.customSections]
    newCustomSections[index] = { ...newCustomSections[index], [field]: value }
    setFormData({ ...formData, customSections: newCustomSections })
  }

  const removeCustomSection = (index) => {
    const newCustomSections = [...formData.customSections]
    newCustomSections.splice(index, 1)
    const newSectionOrder = formData.sectionOrder.filter(section => section !== `customSection${index}`)
    setFormData({ ...formData, customSections: newCustomSections, sectionOrder: newSectionOrder })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setResumeData({ ...formData, template: localSelectedTemplate })
  }

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const newSectionOrder = Array.from(formData.sectionOrder)
    const [reorderedItem] = newSectionOrder.splice(result.source.index, 1)
    newSectionOrder.splice(result.destination.index, 0, reorderedItem)

    setFormData({ ...formData, sectionOrder: newSectionOrder })
  }

  const handleSocialMediaToggle = (platform) => {
    const newIncludedSocialMedia = formData.includedSocialMedia.includes(platform)
      ? formData.includedSocialMedia.filter(p => p !== platform)
      : [...formData.includedSocialMedia, platform]
    setFormData({ ...formData, includedSocialMedia: newIncludedSocialMedia })
  }

  const addProjectDescription = (projectIndex) => {
    const newProjects = [...formData.projects]
    newProjects[projectIndex].descriptions.push('')
    setFormData({ ...formData, projects: newProjects })
  }

  const updateProjectDescription = (projectIndex, descIndex, value) => {
    const newProjects = [...formData.projects]
    newProjects[projectIndex].descriptions[descIndex] = value
    setFormData({ ...formData, projects: newProjects })
  }

  const removeProjectDescription = (projectIndex, descIndex) => {
    const newProjects = [...formData.projects]
    newProjects[projectIndex].descriptions.splice(descIndex, 1)
    setFormData({ ...formData, projects: newProjects })
  }

  const addPublication = (experienceIndex, type) => {
    const newExperience = [...formData.experience]
    newExperience[experienceIndex].publications[type].push('')
    setFormData({ ...formData, experience: newExperience })
  }

  const updatePublication = (experienceIndex, type, pubIndex, value) => {
    const newExperience = [...formData.experience]
    newExperience[experienceIndex].publications[type][pubIndex] = value
    setFormData({ ...formData, experience: newExperience })
  }

  const removePublication = (experienceIndex, type, pubIndex) => {
    const newExperience = [...formData.experience]
    newExperience[experienceIndex].publications[type].splice(pubIndex, 1)
    setFormData({ ...formData, experience: newExperience })
  }

  const renderSection = (section) => {
    switch (section) {
      case 'personalInfo':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <Input
              type="text"
              name="personalInfo.name"
              placeholder="Name"
              value={formData.personalInfo.name}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="personalInfo.fatherName"
              placeholder="Father's Name"
              value={formData.personalInfo.fatherName}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="personalInfo.motherName"
              placeholder="Mother's Name"
              value={formData.personalInfo.motherName}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="personalInfo.permanentAddress"
              placeholder="Permanent Address"
              value={formData.personalInfo.permanentAddress}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="personalInfo.nationality"
              placeholder="Nationality"
              value={formData.personalInfo.nationality}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="personalInfo.religion"
              placeholder="Religion"
              value={formData.personalInfo.religion}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="personalInfo.bloodGroup"
              placeholder="Blood Group"
              value={formData.personalInfo.bloodGroup}
              onChange={handleInputChange}
            />
          </div>
        )
      case 'objective':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Career Objective</h2>
            <Textarea
              name="objective"
              placeholder="Write a compelling career objective that highlights your goals and aspirations..."
              value={formData.objective}
              onChange={handleInputChange}
              required
              className="min-h-[100px]"
            />
          </div>
        )
      case 'education':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg">
                <table className="w-full mb-2">
                  <thead>
                    <tr>
                      <th className="px-2 py-1 border">Degree</th>
                      <th className="px-2 py-1 border">Institution</th>
                      <th className="px-2 py-1 border">Year</th>
                      <th className="px-2 py-1 border">GPA/CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 border">
                        <Input
                          type="text"
                          name="degree"
                          value={edu.degree}
                          onChange={(e) => handleInputChange(e, index, 'education')}
                          required
                        />
                      </td>
                      <td className="px-2 py-1 border">
                        <Input
                          type="text"
                          name="school"
                          value={edu.school}
                          onChange={(e) => handleInputChange(e, index, 'education')}
                          required
                        />
                      </td>
                      <td className="px-2 py-1 border">
                        <Input
                          type="text"
                          name="year"
                          value={edu.year}
                          onChange={(e) => handleInputChange(e, index, 'education')}
                          required
                        />
                      </td>
                      <td className="px-2 py-1 border">
                        <Input
                          type="text"
                          name="gpa"
                          value={edu.gpa}
                          onChange={(e) => handleInputChange(e, index, 'education')}
                          required
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                {index > 0 && (
                  <Button type="button" onClick={() => removeField('education', index)} className="mt-2">
                    <FaTrash className="mr-2" /> Remove
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" onClick={() => addField('education')} className="mt-2">
              <FaPlus className="mr-2" /> Add Education
            </Button>
          </div>
        )
      case 'experience':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg">
                <Select
                  name="type"
                  value={exp.type}
                  onValueChange={(value) => {
                    const newExperience = [...formData.experience]
                    newExperience[index] = {
                      ...newExperience[index],
                      type: value,
                      advisor: '',
                      collaborators: '',
                      publications: { journal: [''], proceeding: [''] }
                    }
                    setFormData({ ...formData, experience: newExperience })
                  }}
                >
                  <SelectTrigger className="w-full mb-2">
                    <SelectValue placeholder="Select experience type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => handleInputChange(e, index, 'experience')}
                  required
                  className="mb-2"
                />
                <Input
                  type="text"
                  name="company"
                  placeholder="Company/Institution"
                  value={exp.company}
                  onChange={(e) => handleInputChange(e, index, 'experience')}
                  required
                  className="mb-2"
                />
                <Input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={exp.duration}
                  onChange={(e) => handleInputChange(e, index, 'experience')}
                  required
                  className="mb-2"
                />
                <Textarea
                  name="description"
                  placeholder="Job Description"
                  value={exp.description}
                  onChange={(e) => handleInputChange(e, index, 'experience')}
                  required
                  className="mb-2"
                />
                {exp.type === 'research' && (
                  <>
                    <Input
                      type="text"
                      name="advisor"
                      placeholder="Advisor's Name"
                      value={exp.advisor}
                      onChange={(e) => handleInputChange(e, index, 'experience')}
                      className="mb-2"
                    />
                    <Input
                      type="text"
                      name="collaborators"
                      placeholder="Collaborators (comma-separated)"
                      value={exp.collaborators}
                      onChange={(e) => handleInputChange(e, index, 'experience')}
                      className="mb-2"
                    />
                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-semibold mb-2">Publications</h4>
                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Journal Papers</h5>
                        {exp.publications.journal.map((paper, pubIndex) => (
                          <div key={pubIndex} className="flex gap-2 mb-2">
                            <Input
                              type="text"
                              placeholder="Journal Paper Citation"
                              value={paper}
                              onChange={(e) => updatePublication(index, 'journal', pubIndex, e.target.value)}
                              className="flex-1"
                            />
                            {pubIndex > 0 && (
                              <Button
                                type="button"
                                variant="destructive"
                                onClick={() => removePublication(index, 'journal', pubIndex)}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          type="button"
                          onClick={() => addPublication(index, 'journal')}
                          className="mb-2"
                        >
                          Add Journal Paper
                        </Button>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Proceeding Papers</h5>
                        {exp.publications.proceeding.map((paper, pubIndex) => (
                          <div key={pubIndex} className="flex gap-2 mb-2">
                            <Input
                              type="text"
                              placeholder="Proceeding Paper Citation"
                              value={paper}
                              onChange={(e) => updatePublication(index, 'proceeding', pubIndex, e.target.value)}
                              className="flex-1"
                            />
                            {pubIndex > 0 && (
                              <Button
                                type="button"
                                variant="destructive"
                                onClick={() => removePublication(index, 'proceeding', pubIndex)}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          type="button"
                          onClick={() => addPublication(index, 'proceeding')}
                        >
                          Add Proceeding Paper
                        </Button>
                      </div>
                    </div>
                  </>
                )}
                {index > 0 && (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeField('experience', index)}
                    className="mt-4"
                  >
                    Remove Experience
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" onClick={() => addField('experience')}>
              Add Experience
            </Button>
          </div>
        )
      case 'skills':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            {formData.skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <Input
                  type="text"
                  name="field"
                  placeholder="Field of Skills"
                  value={skill.field}
                  onChange={(e) => {
                    const newSkills = [...formData.skills]
                    newSkills[index] = { ...newSkills[index], field: e.target.value }
                    setFormData({ ...formData, skills: newSkills })
                  }}
                  className="mb-2"
                />
                <Input
                  type="text"
                  name="items"
                  placeholder="Skills (comma-separated)"
                  value={skill.items}
                  onChange={(e) => {
                    const newSkills = [...formData.skills]
                    newSkills[index] = { ...newSkills[index], items: e.target.value }
                    setFormData({ ...formData, skills: newSkills })
                  }}
                  className="mb-2"
                />
                {index > 0 && (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => {
                      const newSkills = [...formData.skills]
                      newSkills.splice(index, 1)
                      setFormData({ ...formData, skills: newSkills })
                    }}
                  >
                    Remove Skill Field
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  skills: [...formData.skills, { field: '', items: '' }]
                })
              }}
            >
              Add Skill Field
            </Button>
          </div>
        )
      case 'languages':
        return (
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2">Languages</h2>
            {formData.languages.map((lang, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg">
                <div className="overflow-x-auto">
                  <table className="w-full mb-2">
                    <thead>
                      <tr>
                        <th className="px-2 py-1 border">Language</th>
                        <th className="px-2 py-1 border">Speaking</th>
                        <th className="px-2 py-1 border">Listening</th>
                        <th className="px-2 py-1 border">Writing</th>
                        <th className="px-2 py-1 border">Reading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 py-1 border">
                          <Input
                            type="text"
                            value={lang.name}
                            onChange={(e) => {
                              const newLanguages = [...formData.languages];
                              newLanguages[index] = { ...newLanguages[index], name: e.target.value };
                              setFormData({ ...formData, languages: newLanguages });
                            }}
                            required
                            className="min-w-[120px]"
                          />
                        </td>
                        {['speaking', 'listening', 'writing', 'reading'].map((aspect) => (
                          <td key={aspect} className="px-2 py-1 border">
                            <Select
                              value={lang[aspect]}
                              onValueChange={(value) => handleLanguageProficiencyChange(index, aspect, value)}
                            >
                              <SelectTrigger className="min-w-[120px]">
                                <SelectValue placeholder={`Select ${aspect} level`} />
                              </SelectTrigger>
                              <SelectContent>
                                {proficiencyLevels.map((level) => (
                                  <SelectItem key={level} value={level}>
                                    {level}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                {index > 0 && (
                  <Button type="button" onClick={() => removeField('languages', index)} className="mt-2">
                    <FaTrash className="mr-2" /> Remove
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" onClick={() => addField('languages')} className="mt-2">
              <FaPlus className="mr-2" /> Add Language
            </Button>
          </div>
        );
      case 'awards':
        return (
          formData.includeAwards && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Awards and Certifications</h2>
              {formData.awards.map((award, index) => (
                <div key={index} className="mb-2">
                  <Input
                    type="text"
                    placeholder="Award/Certification"
                    value={award}
                    onChange={(e) => handleArrayInputChange(e, index, 'awards')}
                  />
                  {index > 0 && (
                    <Button type="button" onClick={() => removeField('awards', index)} className="mt-2">
                      <FaTrash className="mr-2" /> Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" onClick={() => addField('awards')} className="mt-2">
                <FaPlus className="mr-2" /> Add Award/Certification
              </Button>
            </div>
          )
        )
      case 'projects':
        return (
          formData.includeProjects && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Projects</h2>
              {formData.projects.map((project, index) => (
                <div key={index} className="mb-4 p-4 border rounded-lg">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Project Name"
                    value={project.name}
                    onChange={(e) => handleInputChange(e, index, 'projects')}
                    required
                    className="mb-2"
                  />
                  {project.descriptions.map((desc, descIndex) => (
                    <div key={descIndex} className="mb-2">
                      <div className="flex gap-2">
                        <Textarea
                          placeholder={`Project Description ${descIndex + 1}`}
                          value={desc}
                          onChange={(e) => updateProjectDescription(index, descIndex, e.target.value)}
                          className="flex-1"
                        />
                        {descIndex > 0 && (
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => removeProjectDescription(index, descIndex)}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={() => addProjectDescription(index)}
                    className="mb-2"
                  >
                    Add Description
                  </Button>
                  <Input
                    type="text"
                    name="reference"
                    placeholder="Online Reference (if any)"
                    value={project.reference}
                    onChange={(e) => handleInputChange(e, index, 'projects')}
                    className="mb-2"
                  />
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => removeField('projects', index)}
                    >
                      Remove Project
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" onClick={() => addField('projects')}>
                Add Project
              </Button>
            </div>
          )
        )
      case 'references':
        return (
          formData.includeReferences && (
            <div>
              <h2 className="text-xl font-semibold mb-2">References</h2>
              {formData.references.map((ref, index) => (
                <div key={index} className="mb-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={ref.name}
                    onChange={(e) => handleInputChange(e, index, 'references')}
                    required
                  />
                  <Input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={ref.position}
                    onChange={(e) => handleInputChange(e, index, 'references')}
                    required
                  />
                  <Input
                    type="text"
                    name="contact"
                    placeholder="Contact Information"
                    value={ref.contact}
                    onChange={(e) => handleInputChange(e, index, 'references')}
                    required
                  />
                  {index > 0 && (
                    <Button type="button" onClick={() => removeField('references', index)} className="mt-2">
                      <FaTrash className="mr-2" /> Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" onClick={() => addField('references')} className="mt-2">
                <FaPlus className="mr-2" /> Add Reference
              </Button>
            </div>
          )
        )
      case 'declaration':
        return (
          formData.includeDeclaration && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Declaration</h2>
              <Textarea
                name="declaration"
                placeholder="I, [Your Name], hereby declare that all the information provided in this resume istrue and correct to the best of my knowledge and belief."
                value={formData.declaration}
                onChange={handleInputChange}
                required
              />
            </div>
          )
        )
      case 'customSections':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Custom Sections</h2>
            {formData.customSections.map((section, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg">
                <Input
                  type="text"
                  placeholder="Section Title"
                  value={section.title}
                  onChange={(e) => handleCustomSectionChange(index, 'title', e.target.value)}
                  className="mb-2"
                />
                <Textarea
                  placeholder="Section Content"
                  value={section.content}
                  onChange={(e) => handleCustomSectionChange(index, 'content', e.target.value)}
                  className="mb-2"
                />
                <Button type="button" onClick={() => removeCustomSection(index)} className="mt-2">
                  <FaTrash className="mr-2" /> Remove Section
                </Button>
              </div>
            ))}
            <Button type="button" onClick={addCustomSection} className="mt-2">
              <FaPlus className="mr-2" /> Add Custom Section
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <div className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />

          <div>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowImageGuidelines(!showImageGuidelines)}
              className="mb-2"
            >
              <FaImage className="mr-2" /> Add Profile Image
            </Button>

            {showImageGuidelines && (
              <div className="mb-4">
                <Alert>
                  <AlertDescription>
                    <h3 className="font-semibold mb-2">Image Guidelines:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Dimensions: 150-200 pixels (width) × 150-200 pixels (height)</li>
                      <li>Aspect Ratio: 1:1 (Square)</li>
                      <li>Maximum file size: 100-200 KB</li>
                      <li>Format: JPEG or PNG</li>
                      <li>Resolution: 72 DPI for screen, 300 DPI for print</li>
                      <li>Background: Plain or neutral-colored</li>
                    </ul>
                    <Input
                      type="file"
                      accept="image/jpeg,image/png"
                      onChange={handleImageChange}
                      className="mt-2"
                    />
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>

          <div className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Social Media Links</h3>
            {socialMediaPlatforms.map((platform) => (
              <div key={platform.key} className="flex items-center space-x-2">
                <Switch
                  checked={formData.includedSocialMedia.includes(platform.key)}
                  onCheckedChange={() => handleSocialMediaToggle(platform.key)}
                />
                <Label>{platform.name}</Label>
                {formData.includedSocialMedia.includes(platform.key) && (
                  <Input
                    type="url"
                    name={`socialMedia.${platform.key}`}
                    placeholder={`${platform.name} URL`}
                    value={formData.socialMedia[platform.key]}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.includeProjects}
            onCheckedChange={(checked) => setFormData({ ...formData, includeProjects: checked })}
          />
          <Label>Include Projects Section</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.includeAwards}
            onCheckedChange={(checked) => setFormData({ ...formData, includeAwards: checked })}
          />
          <Label>Include Awards and Certifications Section</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.includeReferences}
            onCheckedChange={(checked) => setFormData({ ...formData, includeReferences: checked })}
          />
          <Label>Include References Section</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.includeDeclaration}
            onCheckedChange={(checked) => setFormData({ ...formData, includeDeclaration: checked })}
          />
          <Label>Include Declaration</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.includeSignature}
            onCheckedChange={(checked) => setFormData({ ...formData, includeSignature: checked })}
          />
          <Label>Include Signature</Label>
        </div>
        {formData.includeSignature && (
          <div>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowSignatureGuidelines(!showSignatureGuidelines)}
              className="mb-2"
            >
              <FaSignature className="mr-2" /> Add Signature
            </Button>

            {showSignatureGuidelines && (
              <div className="mb-4">
                <Alert>
                  <AlertDescription>
                    <h3 className="font-semibold mb-2">Signature Guidelines:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Format: PNG with transparent background</li>
                      <li>Dimensions: 300-400 pixels (width) × 100-150 pixels (height)</li>
                      <li>Maximum file size: 100 KB</li>
                      <li>Color: Black or dark blue</li>
                    </ul>
                    <Input
                      type="file"
                      accept="image/png"
                      onChange={handleSignatureChange}
                      className="mt-2"
                    />
                  </AlertDescription>
                </Alert>
              </div>
            )}
            <div className="mt-2">
              <Label htmlFor="signatureDate">Signature Date (dd/mm/yy)</Label>
              <Input
                type="text"
                id="signatureDate"
                name="signatureDate"
                placeholder="DD/MM/YY"
                value={formData.signatureDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="resume-sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {formData.sectionOrder.map((section, index) => (
                <Draggable key={section} draggableId={section} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="mb-6 p-4 border rounded-lg"
                    >
                      <div className="flex items-center mb-2">
                        <span {...provided.dragHandleProps} className="mr-2 cursor-move">
                          <FaGripVertical />
                        </span>
                        {renderSection(section)}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div>
        <h2 className="text-xl font-semibold mb-2">Template and Font Selection</h2>
        <Select
          name="template"
          value={localSelectedTemplate}
          onValueChange={(value) => {
            setLocalSelectedTemplate(value)
            setSelectedTemplate(value)
          }}
        >
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Select a template" />
          </SelectTrigger>
          <SelectContent>
            {templates.map((template) => (
              <SelectItem key={template} value={template}>
                {template.charAt(0).toUpperCase() + template.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select
          name="font"
          value={formData.font}
          onValueChange={(value) => setFormData({ ...formData, font: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map((font) => (
              <SelectItem key={font} value={font}>
                {font}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">Generate Resume</Button>
    </form>
  )
}

