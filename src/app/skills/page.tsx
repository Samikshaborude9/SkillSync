'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const skills = [
  {
    name: 'React.js',
    level: 'Intermediate',
    certified: true,
  },
  {
    name: 'Node.js',
    level: 'Advanced',
    certified: false,
  },
  {
    name: 'Tailwind CSS',
    level: 'Beginner',
    certified: true,
  },
  {
    name: 'Next.js',
    level: 'Intermediate',
    certified: false,
  },
];

export default function SkillsDashboard() {
  const [activeTab, setActiveTab] = useState('wallet');

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Badge Icon Above Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center mb-4"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <BadgeCheck className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>

      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-300 mb-6">
        <button
          onClick={() => setActiveTab('wallet')}
          className={`py-4 px-4 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'wallet'
              ? 'border-orange-500 text-orange-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          My Skills
        </button>
        <button
          onClick={() => setActiveTab('assessments')}
          className={`py-4 px-4 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'assessments'
              ? 'border-orange-500 text-orange-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Assessments
        </button>
      </div>

      {/* Wallet Tab */}
      {activeTab === 'wallet' && (
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 space-y-2 border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{skill.name}</h2>
                {skill.certified && (
                  <BadgeCheck className="text-green-500 w-5 h-5" />
                )}
              </div>
              <p className="text-sm text-gray-600">Level: {skill.level}</p>

              {skill.certified ? (
                <button className="w-full text-xs bg-green-100 text-green-700 py-2 px-3 rounded-lg hover:bg-green-200 transition-colors">
                  View Certificate
                </button>
              ) : (
                <button className="w-full text-xs bg-yellow-100 text-yellow-700 py-2 px-3 rounded-lg hover:bg-yellow-200 transition-colors">
                  Take Assessment
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Assessments Tab */}
      {activeTab === 'assessments' && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <h2 className="text-md font-medium">{skill.name}</h2>
                <p className="text-sm text-gray-600">Level: {skill.level}</p>
              </div>
              <button className="text-xs bg-yellow-100 text-yellow-700 py-2 px-3 rounded-lg hover:bg-yellow-200 transition-colors">
                Take Assessment
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
