'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  FileText,
  Video,
  Mic,
  Award
} from 'lucide-react';

const features = [
  { icon: FileText,
    title: 'AI Resume Builder',
    description: 'Create professional resumes and cover letters with AI assistance',
    href: '/resume',
    color: 'bg-blue-500'
  },
  {
    icon: Video,
    title: 'Mock Interviews',
    description: 'Practice with AI-powered video avatars for realistic interview prep',
    href: '/interview',
    color: 'bg-purple-500'
  },
  {
    icon: Mic,
    title: 'Voice Feedback',
    description: 'Get detailed analysis of your speaking skills and communication',
    href: '/voice-feedback',
    color: 'bg-green-500'
  },
  {
    icon: Award,
    title: 'Skill Certification',
    description: 'Earn verified NFT certificates for your professional achievements',
    href: '/skills',
    color: 'bg-orange-500'
  }
];
const stats = [
  { label: 'Resumes Created', value: '10,000+' },
  { label: 'Interviews Practiced', value: '25,000+' },
  { label: 'Skills Certified', value: '5,000+' },
  { label: 'Success Rate', value: '94%' }
]

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/*Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-tr from-blue-600 via-purple-600 to-blue-800'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
          initial ={{opacity: 0, y:20}}
          animate = {{opacity: 1, y:0}}
          transition={{duration: 0.8}}
          className='text-center'
          >

        <div className='flex justify-center mb-6'>
          <div className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-4 text-white'>
          <Sparkles className='w-5 h-5'/>
          <span className="text-sm font-medium">AI-Powered Career Development</span>
          </div>
        </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your AI Career
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your career with AI-powered tools for resume building, interview practice, 
              and skill certification. Your path to success starts here.
            </p>

                        
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button> <Link
                href="/resume"
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link></button>
              <Link
                href="/pro"
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-lg"
              >
                <span>View Pro Features</span>
              </Link>

            </div>
          </motion.div>
        </div>
        <div>

        </div>

      </section>

      {/*Stats Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index)=>{
             return (<motion.div
              key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                >
                   <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>

              </motion.div>              
            )})}
          </div>

        </div>

      </section>
        {/* Features Section */}

        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div 
            initial = {{opacity : 0, y:20}}
            animate = {{opacity:1 , y:0}}
            transition ={{duration:0.8}}
            className='text-center mb-16'
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered tools helps you at every stage of your career journey
            </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={feature.href} className="block group">
                    <div className="card transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-lg bg-white rounded-xl p-6">
                      <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                     </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          </div>

        </section>

        {/*CTA section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who have accelerated their careers with our AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resume"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4 rounded-lg"
              >
                Start Building Your Resume
              </Link>
              <Link
                href="/interview"
                className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg"
              >
                Try Mock Interview
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}