'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  Star, 
  Download,
  ExternalLink,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    id: 'technical',
    name: 'Technical Skills',
    color: 'bg-blue-500',
    skills: [
      { name: 'JavaScript', level: 'Expert', certified: true, nftId: 'JS001' },
      { name: 'React', level: 'Advanced', certified: true, nftId: 'REACT001' },
      { name: 'Node.js', level: 'Intermediate', certified: false, nftId: null },
      { name: 'Python', level: 'Advanced', certified: true, nftId: 'PY001' }
    ]
  },
  {
    id: 'soft',
    name: 'Soft Skills',
    color: 'bg-green-500',
    skills: [
      { name: 'Leadership', level: 'Advanced', certified: true, nftId: 'LEAD001' },
      { name: 'Communication', level: 'Expert', certified: true, nftId: 'COMM001' },
      { name: 'Problem Solving', level: 'Advanced', certified: false, nftId: null },
      { name: 'Team Collaboration', level: 'Expert', certified: true, nftId: 'TEAM001' }
    ]
  },
  {
    id: 'design',
    name: 'Design Skills',
    color: 'bg-purple-500',
    skills: [
      { name: 'UI/UX Design', level: 'Intermediate', certified: false, nftId: null },
      { name: 'Figma', level: 'Advanced', certified: true, nftId: 'FIG001' },
      { name: 'Adobe Creative Suite', level: 'Intermediate', certified: false, nftId: null }
    ]
  }
];

const availableAssessments = [
  {
    id: 'typescript',
    name: 'TypeScript Mastery',
    category: 'Technical',
    duration: '45 minutes',
    difficulty: 'Advanced',
    description: 'Comprehensive assessment covering advanced TypeScript concepts'
  },
  {
    id: 'project-management',
    name: 'Project Management',
    category: 'Soft Skills',
    duration: '30 minutes',
    difficulty: 'Intermediate',
    description: 'Evaluate your project planning and execution abilities'
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'Technical',
    duration: '60 minutes',
    difficulty: 'Advanced',
    description: 'Test your skills in data interpretation and visualization'
  }
];

export default function SkillWallet() {
  const [activeTab, setActiveTab] = useState('wallet');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const certifiedSkills = skillCategories.reduce((acc, cat) => 
    acc + cat.skills.filter(skill => skill.certified).length, 0
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const generateNFT = (skillName: string) => {
    alert(`Generating NFT certificate for ${skillName}... This will be minted on Algorand blockchain.`);
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
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skill Wallet
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your professional skills and earn verified NFT certificates on the Algorand blockchain
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{totalSkills}</div>
            <div className="text-gray-600 text-sm">Total Skills</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{certifiedSkills}</div>
            <div className="text-gray-600 text-sm">Certified</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">7</div>
            <div className="text-gray-600 text-sm">NFT Certificates</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8</div>
            <div className="text-gray-600 text-sm">Avg. Score</div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="border-b border-gray-100">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('wallet')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'wallet'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Skills
              </button>
              <button
                onClick={() => setActiveTab('assessments')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'assessments'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Take Assessment
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'certificates'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                NFT Certificates
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'wallet' && (
              <div>
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    All Skills
                  </button>
                  {skillCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Skills Grid */}
                <div className="space-y-8">
                  {skillCategories
                    .filter(cat => selectedCategory === 'all' || selectedCategory === cat.id)
                    .map((category) => (
                      <div key={category.id}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <div className={`w-3 h-3 ${category.color} rounded-full mr-3`}></div>
                          {category.name}
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-medium text-gray-900">{skill.name}</h4>
                                {skill.certified && (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                )}
                              </div>
                              <div className="flex items-center justify-between mb-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(skill.level)}`}>
                                  {skill.level}
                                </span>
                                {skill.certified && skill.nftId && (
                                  <span className="text-xs text-gray-500">NFT: {skill.nftId}</span>
                                )}
                              </div>
                              {skill.certified ? (
                                <div className="flex space-x-2">
                                  <button className="flex-1 text-xs bg-green-100 text-green-700 py-2 px-3 rounded-lg hover:bg-green-200 transition-colors">
                                    View Certificate
                                  </button>
                                  <button
                                    onClick={() => generateNFT(skill.name)}
                                    className="flex-1 text-xs bg-blue-100 text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-200 transition-colors"
                                  >
                                    Generate NFT
                                  </button>
                                </div>
                              ) : (
                                <button className="w-full text-xs bg-gray-200 text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-300 transition-colors">
                                  Take Assessment
                                </button>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {activeTab === 'assessments' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Available Assessments</h3>
                  <p className="text-gray-600">Complete assessments to earn skill certifications and NFT certificates</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableAssessments.map((assessment, index) => (
                    <motion.div
                      key={assessment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">{assessment.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          assessment.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                          assessment.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {assessment.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{assessment.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {assessment.duration}
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {assessment.category}
                        </span>
                      </div>
                      <button className="w-full btn-primary text-sm py-2">
                        Start Assessment
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">NFT Certificates</h3>
                  <p className="text-gray-600">Your verified skill certificates on the Algorand blockchain</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories.flatMap(cat => 
                    cat.skills.filter(skill => skill.certified && skill.nftId)
                  ).map((skill, index) => (
                    <motion.div
                      key={skill.nftId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-6 text-white relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <Trophy className="w-8 h-8" />
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                            {skill.nftId}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                        <p className="text-orange-100 text-sm mb-4">Certified {skill.level}</p>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-3 rounded-lg text-sm transition-colors flex items-center justify-center">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </button>
                          <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-3 rounded-lg text-sm transition-colors flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View on Chain
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Algorand Integration Info */}
                <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="w-6 h-6" />
                    <h3 className="text-lg font-semibold">Powered by Algorand</h3>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Your skill certificates are minted as NFTs on the Algorand blockchain, 
                    providing permanent, verifiable proof of your achievements.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-medium mb-1">Eco-Friendly</div>
                      <div className="text-blue-200">Carbon-negative blockchain</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Instant Verification</div>
                      <div className="text-blue-200">4.5 second finality</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Low Cost</div>
                      <div className="text-blue-200">Minimal transaction fees</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}