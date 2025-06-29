'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Play, 
  Pause, 
  RotateCcw, 
  Settings,
  Mic,
  MicOff,
  Camera,
  CameraOff
} from 'lucide-react';

const interviewTypes = [
  {
    id: 'technical',
    title: 'Technical Interview',
    description: 'Practice coding problems and technical questions',
    duration: '30-45 minutes',
    difficulty: 'Advanced'
  },
  {
    id: 'behavioral',
    title: 'Behavioral Interview',
    description: 'Work on soft skills and situational questions',
    duration: '20-30 minutes',
    difficulty: 'Intermediate'
  },
  {
    id: 'general',
    title: 'General Interview',
    description: 'Common interview questions and conversation',
    duration: '15-25 minutes',
    difficulty: 'Beginner'
  }
];

const sampleQuestions = [
  "Tell me about yourself and your background.",
  "What are your greatest strengths and weaknesses?",
  "Why are you interested in this position?",
  "Describe a challenging project you worked on.",
  "Where do you see yourself in 5 years?"
];

export default function MockInterview() {
  const [selectedType, setSelectedType] = useState('');
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const startInterview = () => {
    setIsInterviewActive(true);
    setCurrentQuestion(0);
  };

  const endInterview = () => {
    setIsInterviewActive(false);
    setIsRecording(false);
    setCurrentQuestion(0);
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Mock Interview
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice with our AI-powered video avatar for realistic interview preparation
          </p>
        </motion.div>

        {!isInterviewActive ? (
          /* Interview Setup */
          <div className="max-w-4xl mx-auto">
            {/* Interview Type Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Interview Type</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {interviewTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`cursor-pointer rounded-lg border-2 p-6 transition-all hover:shadow-md ${
                      selectedType === type.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration: {type.duration}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        type.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        type.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {type.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Camera Setup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Camera & Audio Setup</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4">
                    {isCameraOn ? (
                      <div className="text-white text-center">
                        <Camera className="w-12 h-12 mx-auto mb-2" />
                        <p>Camera Preview</p>
                      </div>
                    ) : (
                      <div className="text-gray-400 text-center">
                        <CameraOff className="w-12 h-12 mx-auto mb-2" />
                        <p>Camera Off</p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setIsCameraOn(!isCameraOn)}
                      className={`p-3 rounded-full ${
                        isCameraOn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {isCameraOn ? <Camera className="w-5 h-5" /> : <CameraOff className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => setIsMicOn(!isMicOn)}
                      className={`p-3 rounded-full ${
                        isMicOn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Setup Checklist</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${isCameraOn ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="text-gray-700">Camera is working</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${isMicOn ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="text-gray-700">Microphone is working</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">Good lighting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">Quiet environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Start Interview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <button
                onClick={startInterview}
                disabled={!selectedType}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
              >
                <Play className="w-5 h-5" />
                <span>Start Interview</span>
              </button>
              {!selectedType && (
                <p className="text-gray-500 mt-2">Please select an interview type to continue</p>
              )}
            </motion.div>
          </div>
        ) : (
          /* Active Interview */
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* AI Interviewer */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">AI Interviewer</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Video className="w-12 h-12" />
                    </div>
                    <p className="text-lg font-medium">AI Avatar</p>
                    <p className="text-purple-200">Powered by Tavus</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 font-medium mb-2">Current Question:</p>
                  <p className="text-gray-900">{sampleQuestions[currentQuestion]}</p>
                </div>
              </div>

              {/* User Video */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Your Response</h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={toggleRecording}
                      className={`p-2 rounded-full ${
                        isRecording ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {isRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <span className="text-sm text-gray-600">
                      {isRecording ? 'Recording...' : 'Ready'}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4">
                  {isCameraOn ? (
                    <div className="text-white text-center">
                      <Camera className="w-12 h-12 mx-auto mb-2" />
                      <p>Your Video</p>
                    </div>
                  ) : (
                    <div className="text-gray-400 text-center">
                      <CameraOff className="w-12 h-12 mx-auto mb-2" />
                      <p>Camera Off</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setIsCameraOn(!isCameraOn)}
                    className={`p-3 rounded-full ${
                      isCameraOn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {isCameraOn ? <Camera className="w-5 h-5" /> : <CameraOff className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsMicOn(!isMicOn)}
                    className={`p-3 rounded-full ${
                      isMicOn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Interview Controls */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Question {currentQuestion + 1} of {sampleQuestions.length}
                  </span>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestion >= sampleQuestions.length - 1}
                    className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Question
                  </button>
                  <button
                    onClick={endInterview}
                    className="btn-primary bg-red-600 hover:bg-red-700"
                  >
                    End Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}