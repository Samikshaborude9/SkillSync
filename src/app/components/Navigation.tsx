'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FileText, 
  Video, 
  Mic, 
  Award, 
  Crown,
  Menu,
  X
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Resume Builder', href: '/resume', icon: FileText },
  { name: 'Mock Interview', href: '/interview', icon: Video },
  { name: 'Voice Feedback', href: '/voice-feedback', icon: Mic },
  { name: 'Skill Wallet', href: '/skills', icon: Award },
  { name: 'Pro Features', href: '/pro', icon: Crown },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/*logo*/}
          <Link href="/" className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <span className='text-whitw font-bold text-sm'>
                SS
              </span>
            </div>
            <span className='font-bold text-xl text-gray-900'>SkillSync</span>
          </Link>
          {/*Desktop Navigation*/ }
          <div className='hidden md:flex items-center space-x-1'>
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return(
                <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                  ?'bg-blue-50 text-blue-700'
                  :'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}>
                  <Icon  className='w-4 h-4'/>
                  <span>{item.name}</span>
                </Link>
              );

            })}

          </div>
          {/* mobile menu button*/}
          <div className='md:hidden'>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            >
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/*mobile navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t border-gray-100'>
            <div className='space-y-1'>
              {
                navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return(
                    <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)
                    }
                     className = {`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                      ?'bg-blue-50 text-blue-700'
                      :'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                     }`}
                    >
                      <Icon className='w-5 h-5' />
                      <span>{item.name}</span>
                    </Link>
                  )
                })
              } </div>
          </div>
        )}
      </div>       
    </nav>
  );
}