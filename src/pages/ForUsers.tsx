import React from 'react';
import { Smartphone, Gift, Truck, CheckCircle, HelpCircle, Users, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import LazySection from '../components/LazySection';

const ForUsers = () => {
  const steps = [
    {
      icon: Smartphone,
      title: 'Download the app',
      description: 'Get Cleanwave from Google Play Store'
    },
    {
      icon: CheckCircle,
      title: 'Sign up & schedule pickup',
      description: 'Create account and book your first collection'
    },
    {
      icon: Truck,
      title: 'Sort recyclables',
      description: 'Prepare your waste for collection'
    },
    {
      icon: CheckCircle,
      title: 'Agent picks up',
      description: 'Our agent collects your recyclables'
    },
    {
      icon: Gift,
      title: 'Earn CleanPoints',
      description: 'Get rewarded for your contribution'
    },
    {
      icon: Gift,
      title: 'Redeem rewards & repeat',
      description: 'Shop with points and continue recycling'
    }
  ];

  const features = [
    'Request collections',
    'Track earnings & activity',
    'Shop using points',
    'Learn recycling tips',
    'Contact agents/support'
  ];

  const benefits = [
    'Cleaner homes & streets',
    'Earn rewards',
    'Healthier communities',
    'Easy to use',
    'Join a movement'
  ];

  const faqs = [
    {
      question: 'How do I start?',
      answer: 'Download the app and book a pickup.'
    },
    {
      question: 'Is it free?',
      answer: 'Yes, and you earn rewards.'
    },
    {
      question: 'What do you collect?',
      answer: 'Plastics, sachets, cans, cartons, and more.'
    },
    {
      question: 'Can I use it offline?',
      answer: 'Yes, partially. Pickups require internet.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: Users },
    { number: '500+', label: 'Verified Agents', icon: Star },
    { number: '50,000kg', label: 'Waste Recycled', icon: TrendingUp },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <LazySection animationClass="slide-in-left">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-activebg rounded-full text-primary font-medium text-sm"
              >
                <Star className="w-4 h-4 mr-2" />
                Recycle & Earn
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                Simple Steps to <span className="gradient-text">Recycle and Earn</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-xl">
                Cleanwave empowers everyday Nigerians to transform waste into wealth with just a few taps.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-primary mr-2" />
                      <span className="text-2xl font-bold text-black stats-counter">{stat.number}</span>
                    </div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </LazySection>

          <LazySection animationClass="slide-in-right">
            <div className="relative flex justify-center items-center">
              <motion.div
                className="bg-white rounded-[2rem] p-4 card-hover floating-animation shadow-xl max-w-[380px] w-full"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/hero2.jpg"
                  alt="User Mobile App"
                  className="w-full h-[640px] object-cover rounded-[2rem] border border-gray-200"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute -z-10 top-20 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-20 left-20 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
            </div>
          </LazySection>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-activebg p-6 rounded-2xl card-hover mb-6">
                  <div className="bg-primary p-4 rounded-lg w-fit mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">App Features</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-8">Benefits</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Gift className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="bg-activebg p-8 rounded-2xl mb-16 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">See Cleanwave in Action</h2>
          <div className="max-w-md mx-auto">
            <img 
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=400" 
              alt="Cleanwave App Interface" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="mt-8">
            <button className="btn-primary px-8 py-4 rounded-lg text-white font-semibold inline-flex items-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>Download Now</span>
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Q: {faq.question}</h3>
                    <p className="text-gray-700">A: {faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForUsers;
