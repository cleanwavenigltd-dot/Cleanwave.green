import React from 'react';
import { Smartphone, Users, ExternalLink, QrCode, Download, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import LazySection from '../LazySection';

const CTASection = () => {
const downloadOptions = [
  {
    icon: Smartphone,
    title: 'Download from Google Play',
    description: 'Get the full Cleanwave experience on your Android device',
    badge: 'Most Popular',
    color: 'bg-white text-primary',
    href: 'https://play.google.com/store/apps/details?id=com.cleanwave.app' // Replace with real link
  },
  {
    icon: Users,
    title: 'Become an Agent',
    description: 'Start earning while making a positive environmental impact',
    badge: 'High Earning Potential',
    color: 'bg-secondary text-black',
    href: '/agent-onboarding' // Update based on your route
  },
  {
    icon: ExternalLink,
    title: 'Open Web App',
    description: 'Access Cleanwave directly from your browser',
    badge: 'No Download Required',
    color: 'border-2 border-white text-white hover:bg-white hover:text-primary',
    href: 'https://web.cleanwave.green'
  }
];


  const features = [
    'Real-time pickup tracking',
    'Instant reward notifications',
    'Comprehensive recycling guide',
    'Community leaderboards',
    'Environmental impact metrics',
    'Secure payment processing'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-active relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <LazySection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-medium text-sm mb-6">
              <Star className="w-4 h-4 mr-2" />
              Join 10,000+ Happy Users
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Recycling Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of Nigerians making a difference while earning meaningful rewards. Transform your waste into wealth and contribute to a cleaner, more sustainable Nigeria.
            </p>
          </motion.div>
        </LazySection>

        {/* Download Options */}
        <LazySection className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${option.color} px-8 py-6 rounded-2xl font-semibold transition-all duration-300 flex flex-col items-center space-y-4 card-hover relative overflow-hidden group no-underline`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {option.badge && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                    {option.badge}
                  </div>
                )}
                <option.icon className="w-8 h-8" />
                <div className="text-center">
                  <div className="font-bold text-lg mb-2">{option.title}</div>
                  <div className="text-sm opacity-80">{option.description}</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </LazySection>
        {/* Features Grid */}
        <LazySection className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              What You Get With Cleanwave
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-white"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* QR Code Section */}
        <LazySection>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                Quick Download
              </h3>
              <p className="text-green-100 mb-6 max-w-md">
                Scan the QR code with your phone camera to download the Cleanwave app instantly and start your recycling journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="bg-white text-primary px-6 py-3 rounded-xl font-semibold flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Now</span>
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>

            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <QrCode className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold text-lg">Scan to Download</span>
              </div>
              <div className="w-40 h-40 bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <span className="text-gray-500 text-sm">QR Code</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Compatible with Android 6.0+
                </p>
              </div>
            </motion.div>
          </div>
        </LazySection>

        {/* Bottom Stats */}
        <LazySection className="mt-20">
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '4.8★', label: 'App Store Rating' },
                { number: '10K+', label: 'Downloads' },
                { number: '₦2.5M+', label: 'Rewards Paid' },
                { number: '50K kg', label: 'Waste Recycled' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white"
                >
                  <div className="text-3xl font-bold mb-2 stats-counter">{stat.number}</div>
                  <div className="text-green-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  );
};

export default CTASection;