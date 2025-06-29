'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Sparkles, 
  User, 
  Briefcase, 
  GraduationCap,
  Award,
  Plus,
  Trash2
} from 'lucide-react';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
}

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState('personal');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    { id: '1', company: '', position: '', startDate: '', endDate: '', description: '' }
  ]);

  const [education, setEducation] = useState<Education[]>([
    { id: '1', school: '', degree: '', field: '', graduationDate: '' }
  ]);

  const [skills, setSkills] = useState<string[]>(['']);

  const tabs = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'skills', name: 'Skills', icon: Award },
  ];

  const addExperience = () => {
    setExperiences([...experiences, {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const addEducation = () => {
    setEducation([...education, {
      id: Date.now().toString(),
      school: '',
      degree: '',
      field: '',
      graduationDate: ''
    }]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const generateWithAI = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('AI enhancement complete! Your resume has been optimized.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Resume Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a professional resume with AI-powered suggestions and optimization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              {/* Tabs */}
              <div className="border-b border-gray-100">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'personal' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={personalInfo.fullName}
                          onChange={(e) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={personalInfo.email}
                          onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={personalInfo.phone}
                          onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          value={personalInfo.location}
                          onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="New York, NY"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Summary
                      </label>
                      <textarea
                        value={personalInfo.summary}
                        onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Brief summary of your professional background and goals..."
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
                      <button
                        onClick={addExperience}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Experience</span>
                      </button>
                    </div>
                    {experiences.map((exp, index) => (
                      <div key={exp.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-medium text-gray-900">Experience {index + 1}</h4>
                          {experiences.length > 1 && (
                            <button
                              onClick={() => removeExperience(exp.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={exp.company}
                            onChange={(e) => {
                              const updated = experiences.map(item => 
                                item.id === exp.id ? {...item, company: e.target.value} : item
                              );
                              setExperiences(updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Position Title"
                            value={exp.position}
                            onChange={(e) => {
                              const updated = experiences.map(item => 
                                item.id === exp.id ? {...item, position: e.target.value} : item
                              );
                              setExperiences(updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="date"
                            placeholder="Start Date"
                            value={exp.startDate}
                            onChange={(e) => {
                              const updated = experiences.map(item => 
                                item.id === exp.id ? {...item, startDate: e.target.value} : item
                              );
                              setExperiences(updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="date"
                            placeholder="End Date"
                            value={exp.endDate}
                            onChange={(e) => {
                              const updated = experiences.map(item => 
                                item.id === exp.id ? {...item, endDate: e.target.value} : item
                              );
                              setExperiences(updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <textarea
                          placeholder="Job description and achievements..."
                          value={exp.description}
                          onChange={(e) => {
                            const updated = experiences.map(item => 
                              item.id === exp.id ? {...item, description: e.target.value} : item
                            );
                            setExperiences(updated);
                          }}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                      <button
                        onClick={addEducation}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Education</span>
                      </button>
                    </div>
                    {education.map((edu, index) => (
                      <div key={edu.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-medium text-gray-900">Education {index + 1}</h4>
                          {education.length > 1 && (
                            <button
                              onClick={() => removeEducation(edu.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="School/University"
                            value={edu.school}
                            onChange={(e) => {
                              const updated = education.map(item => 
                                item.id === edu.id ? {...item, school: e.target.value} : item
                              );
                              setEducation(updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) => {
                              const updated = education.map(item => 
                                item.id === edu.id ? {...item, degree: e.target.value} : item
                              );
                              setEducation(updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Field of Study"
                            value={edu.field}
                            onChange={(e) => {
                              const updated = education.map(item => 
                                item.id === edu.id ? {...item, field: e.target.value} : item
                              );
                              setEducation(updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="date"
                            placeholder="Graduation Date"
                            value={edu.graduationDate}
                            onChange={(e) => {
                              const updated = education.map(item => 
                                item.id === edu.id ? {...item, graduationDate: e.target.value} : item
                              );
                              setEducation(updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
                      <button
                        onClick={addSkill}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Skill</span>
                      </button>
                    </div>
                    <div className="space-y-3">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <input
                            type="text"
                            placeholder="Enter a skill"
                            value={skill}
                            onChange={(e) => {
                              const updated = skills.map((s, i) => i === index ? e.target.value : s);
                              setSkills(updated);
                            }}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          {skills.length > 1 && (
                            <button
                              onClick={() => removeSkill(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview/Actions Section */}
          <div className="space-y-6">
            {/* AI Enhancement */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Enhancement</h3>
              <p className="text-gray-600 mb-4">
                Let our AI optimize your resume content for better impact and ATS compatibility.
              </p>
              <button
                onClick={generateWithAI}
                disabled={isGenerating}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isGenerating ? 'Enhancing...' : 'Enhance with AI'}</span>
              </button>
            </div>

            {/* Download Options */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Resume</h3>
              <div className="space-y-3">
                <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Word</span>
                </button>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
              <div className="bg-gray-50 rounded-lg p-4 min-h-[400px]">
                <div className="text-center text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Resume preview will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}