import React from 'react';
import { Smartphone, Users, ArrowRight, Star, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import LazySection from './LazySection';

const AgentHero = () => {
  const stats = [
    { number: '500+', label: 'Verified Agents', icon: Users },
    { number: '₦2.5M+', label: 'Commissions Paid', icon: Star },
    { number: '50,000kg+', label: 'Waste Recycled', icon: TrendingUp },
  ];

  return (
    <section className="hero-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <LazySection animationClass="slide-in-left">
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 bg-activebg rounded-full text-primary font-medium text-sm"
                >
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Empowering Local Recycling Agents
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                  Become a{' '}
                  <span className="gradient-text">Cleanwave Agent</span>
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                  Get paid to champion recycling in your community. Use our Agent App to register users, manage pickups, and track your impact.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="w-5 h-5 text-primary mr-2" />
                        <span className="text-2xl font-bold text-black stats-counter">
                          {stat.number}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center space-x-3 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Download Agent App</span>
                </motion.button>

                <motion.button
                  className="btn-secondary px-8 py-4 rounded-xl text-black font-semibold flex items-center justify-center space-x-3 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Start Registration</span>
                </motion.button>
              </div>
            </div>
          </LazySection>

          {/* Visual Content */}
          <LazySection animationClass="slide-in-right">
            <div className="relative flex justify-center items-center">
              <motion.div
                className="bg-white rounded-[2rem] px-6 py-10 md:px-10 md:py-14 card-hover floating-animation shadow-xl max-w-[380px] w-full"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/agenthero.jpg"
                  alt="Agent App Interface"
                  className="w-full h-[640px] object-cover rounded-[2rem] shadow-md border border-gray-200"
                  loading="lazy"
                />

                {/* Floating Commissions Tag */}
                <motion.div
                  className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-md"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">₦2,500</div>
                    <div className="text-xs text-gray-500">Earned Today</div>
                  </div>
                </motion.div>

                {/* Floating QR Code */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 mb-2">Scan to Download</div>
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border">
                      <span className="text-gray-400 text-xs">QR Code</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Glows */}
              <div className="absolute -z-10 top-20 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-20 left-20 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
            </div>
          </LazySection>
        </div>
      </div>
    </section>
  );
};

export default AgentHero;
