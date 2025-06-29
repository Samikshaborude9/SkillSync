'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  RotateCcw,
  Volume2,
  BarChart3,
  Clock,
  Zap
} from 'lucide-react';

const analysisMetrics = [
  {
    label: 'Clarity',
    score: 85,
    color: 'bg-green-500',
    feedback: 'Your speech is clear and easy to understand'
  },
  {
    label: 'Pace',
    score: 72,
    color: 'bg-yellow-500',
    feedback: 'Consider slowing down slightly for better comprehension'
  },
  {
    label: 'Confidence',
    score: 90,
    color: 'bg-blue-500',
    feedback: 'You sound confident and assured'
  },
  {
    label: 'Engagement',
    score: 78,
    color: 'bg-purple-500',
    feedback: 'Good vocal variety, could use more emphasis on key points'
  }
];

const practicePrompts = [
  "Describe your ideal work environment and why it suits you.",
  "Tell me about a time you had to learn something completely new.",
  "How do you handle stress and pressure in the workplace?",
  "What motivates you to do your best work?",
  "Describe a project you're particularly proud of."
];

export default function VoiceFeedback() {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    // Simulate recording timer
    const timer = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    
    // Auto-stop after demo
    setTimeout(() => {
      setIsRecording(false);
      setHasRecording(true);
      clearInterval(timer);
    }, 5000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setHasRecording(true);
  };

  const analyzeRecording = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowAnalysis(true);
    }, 3000);
  };

  const resetRecording = () => {
    setIsRecording(false);
    setHasRecording(false);
    setShowAnalysis(false);
    setRecordingTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center">
              <Mic className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voice Feedback Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice your speaking skills and get AI-powered feedback on clarity, pace, and confidence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recording Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Practice Prompts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Practice Prompts</h2>
              <div className="space-y-3">
                {practicePrompts.map((prompt, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPrompt(index)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPrompt === index
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="text-gray-900">{prompt}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recording Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Voice Recording</h2>
              
              <div className="text-center mb-8">
                <div className="mb-6">
                  <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center transition-all ${
                    isRecording 
                      ? 'bg-red-500 animate-pulse' 
                      : hasRecording 
                        ? 'bg-green-500' 
                        : 'bg-gray-200'
                  }`}>
                    {isRecording ? (
                      <Mic className="w-16 h-16 text-white" />
                    ) : hasRecording ? (
                      <Volume2 className="w-16 h-16 text-white" />
                    ) : (
                      <MicOff className="w-16 h-16 text-gray-400" />
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {formatTime(recordingTime)}
                  </div>
                  <p className="text-gray-600">
                    {isRecording 
                      ? 'Recording in progress...' 
                      : hasRecording 
                        ? 'Recording complete' 
                        : 'Ready to record'
                    }
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  {!isRecording && !hasRecording && (
                    <button
                      onClick={startRecording}
                      className="btn-primary flex items-center space-x-2 px-8 py-4"
                    >
                      <Mic className="w-5 h-5" />
                      <span>Start Recording</span>
                    </button>
                  )}

                  {isRecording && (
                    <button
                      onClick={stopRecording}
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center space-x-2"
                    >
                      <Pause className="w-5 h-5" />
                      <span>Stop Recording</span>
                    </button>
                  )}

                  {hasRecording && !showAnalysis && (
                    <>
                      <button
                        onClick={analyzeRecording}
                        disabled={isAnalyzing}
                        className="btn-primary flex items-center space-x-2 px-8 py-4 disabled:opacity-50"
                      >
                        <BarChart3 className="w-5 h-5" />
                        <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Recording'}</span>
                      </button>
                      <button
                        onClick={resetRecording}
                        className="btn-secondary flex items-center space-x-2 px-8 py-4"
                      >
                        <RotateCcw className="w-5 h-5" />
                        <span>Record Again</span>
                      </button>
                    </>
                  )}

                  {showAnalysis && (
                    <button
                      onClick={resetRecording}
                      className="btn-primary flex items-center space-x-2 px-8 py-4"
                    >
                      <RotateCcw className="w-5 h-5" />
                      <span>New Recording</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Waveform Visualization */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-center h-20">
                  {isRecording ? (
                    <div className="flex items-end space-x-1">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-green-500 rounded-full animate-pulse"
                          style={{
                            width: '4px',
                            height: `${Math.random() * 60 + 10}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  ) : hasRecording ? (
                    <div className="flex items-end space-x-1">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-blue-500 rounded-full"
                          style={{
                            width: '4px',
                            height: `${Math.random() * 60 + 10}px`
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-400 text-center">
                      <Volume2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>Audio waveform will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Analysis Results */}
          <div className="space-y-6">
            {showAnalysis && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Analysis Results</h3>
                
                <div className="space-y-6">
                  {analysisMetrics.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{metric.label}</span>
                        <span className="text-2xl font-bold text-gray-900">{metric.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.score}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-3 rounded-full ${metric.color}`}
                        />
                      </div>
                      <p className="text-sm text-gray-600">{metric.feedback}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">AI Recommendation</h4>
                      <p className="text-blue-800 text-sm">
                        Focus on varying your pace and adding more emphasis to key points. 
                        Your confidence and clarity are excellent strengths to maintain.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tips & Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Speaking Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Optimal Pace</p>
                    <p className="text-sm text-gray-600">Speak at 150-160 words per minute</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Volume2 className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Clear Articulation</p>
                    <p className="text-sm text-gray-600">Pronounce each word distinctly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Vocal Variety</p>
                    <p className="text-sm text-gray-600">Vary tone and emphasis for engagement</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ElevenLabs Integration Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Powered by ElevenLabs</h3>
              <p className="text-green-100 text-sm">
                Advanced AI voice analysis technology for professional speech coaching
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}