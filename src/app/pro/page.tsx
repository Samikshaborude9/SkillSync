'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Check, 
  X,
  Zap,
  Star,
  Users,
  Shield,
  Headphones
} from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      { name: 'Basic resume builder', included: true },
      { name: '3 mock interviews per month', included: true },
      { name: 'Basic voice feedback', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced AI suggestions', included: false },
      { name: 'Unlimited interviews', included: false },
      { name: 'Premium templates', included: false },
      { name: 'Priority support', included: false },
      { name: 'NFT certificates', included: false },
      { name: 'Custom branding', included: false }
    ],
    cta: 'Current Plan',
    popular: false
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For serious career development',
    features: [
      { name: 'Advanced resume builder', included: true },
      { name: 'Unlimited mock interviews', included: true },
      { name: 'Advanced voice feedback', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced AI suggestions', included: true },
      { name: 'Premium templates', included: true },
      { name: 'NFT certificates', included: true },
      { name: 'Interview recordings', included: true },
      { name: 'Custom branding', included: false },
      { name: 'Team collaboration', included: false }
    ],
    cta: 'Upgrade to Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For teams and organizations',
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Team collaboration', included: true },
      { name: 'Custom branding', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Bulk NFT certificates', included: true },
      { name: 'White-label solution', included: true },
      { name: 'SLA guarantee', included: true },
      { name: 'On-premise deployment', included: true }
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Google',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    quote: 'The AI-powered interview practice helped me land my dream job at Google. The feedback was incredibly detailed and actionable.'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Microsoft',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    quote: 'The resume builder with AI suggestions transformed my CV. I got 3x more interview calls after using this platform.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'Apple',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    quote: 'The voice feedback feature helped me improve my communication skills significantly. Now I feel confident in any interview.'
  }
];

const faqs = [
  {
    question: 'What is RevenueCat and how does it work?',
    answer: 'RevenueCat is our payment processing platform that handles subscriptions, billing, and provides analytics. It ensures secure transactions and seamless subscription management across all devices.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won\'t be charged for the next cycle.'
  },
  {
    question: 'Are the NFT certificates really valuable?',
    answer: 'Our NFT certificates are minted on the Algorand blockchain and provide verifiable proof of your skills. They can be shared with employers and are recognized by many companies in the tech industry.'
  },
  {
    question: 'How accurate is the AI feedback?',
    answer: 'Our AI models are trained on thousands of successful interviews and resumes. The feedback accuracy is continuously improved through machine learning and user feedback.'
  },
  {
    question: 'Is there a free trial for Pro features?',
    answer: 'Yes, we offer a 7-day free trial for all Pro features. You can cancel anytime during the trial period without being charged.'
  }
];

export default function ProFeatures() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleUpgrade = (planName: string) => {
    // This would integrate with RevenueCat
    alert(`Upgrading to ${planName} plan... This would integrate with RevenueCat for payment processing.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unlock Your Career Potential
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan to accelerate your career growth with AI-powered tools and premium features
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-sm border-2 p-8 ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {billingCycle === 'yearly' && plan.name === 'Pro' ? '$15' : plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.price !== '$0' ? `/${billingCycle === 'yearly' ? 'month' : plan.period}` : plan.period}
                  </span>
                </div>
                {billingCycle === 'yearly' && plan.name === 'Pro' && (
                  <p className="text-sm text-green-600 font-medium">Billed annually ($180/year)</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleUpgrade(plan.name)}
                disabled={plan.name === 'Free'}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : plan.name === 'Free'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Pro?</h2>
            <p className="text-xl text-gray-600">Unlock advanced features that give you a competitive edge</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-sm">Advanced AI suggestions for resumes and interview responses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unlimited Access</h3>
              <p className="text-gray-600 text-sm">No limits on interviews, feedback sessions, or downloads</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NFT Certificates</h3>
              <p className="text-gray-600 text-sm">Blockchain-verified skill certificates on Algorand</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-gray-600 text-sm">Get help when you need it with dedicated support</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our users transformed their careers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our Pro features</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                    <div className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RevenueCat Integration Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Secure Payment Processing</h3>
          <p className="text-blue-100 mb-6">
            All payments are processed securely through RevenueCat, ensuring your data is protected 
            and your subscription is managed seamlessly across all devices.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>PCI Compliant</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Trusted by 1M+ Users</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}