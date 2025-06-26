import React, { useState } from 'react';
import { Truck, Gift, ShoppingBag, Wallet, Users, Smartphone, MapPin, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LazySection from '../LazySection';
import Logo from '/logo.png'; // Adjust the path as necessary

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'For Users', icon: Smartphone },
    { id: 1, label: 'For Agents', icon: Users },
    { id: 2, label: 'For Business', icon: BarChart3 },
  ];

  const tabContent = [
    // For Users
    {
      title: 'Seamless Recycling Experience',
      description: 'Transform your household waste into valuable rewards with our user-friendly platform designed for Nigerian families.',
      features: [
        {
          icon: Truck,
          title: 'Smart Waste Pick-Up',
          description: 'Schedule convenient pickups directly from your phone with real-time tracking and flexible timing options.',
          details: 'Our intelligent routing system ensures efficient collection while you track your pickup in real-time. Set recurring schedules or book on-demand pickups that fit your lifestyle.'
        },
        {
          icon: Gift,
          title: 'Earn CleanPoints Rewards',
          description: 'Get rewarded for every recycling action you take with our comprehensive points system.',
          details: 'Earn points for different types of recyclables: 10 points per kg of plastic, 15 points per kg of metal, 5 points per kg of paper. Bonus points for consistent recycling and referrals.'
        },
        {
          icon: ShoppingBag,
          title: 'Marketplace Access',
          description: 'Shop sustainably with your earned CleanPoints at our eco-friendly marketplace.',
          details: 'Access over 500 sustainable products from local Nigerian businesses. From household items to fashion accessories, all available for purchase with your CleanPoints.'
        },
        {
          icon: Wallet,
          title: 'Digital Wallet',
          description: 'Track your earnings, manage rewards, and monitor your environmental impact.',
          details: 'Comprehensive dashboard showing your total earnings, environmental impact metrics, recycling history, and available rewards. Export reports for tax purposes.'
        }
      ]
    },
    // For Agents
    {
      title: 'Empowering Local Champions',
      description: 'Join our network of environmental champions and build a sustainable income while making a positive impact in your community.',
      features: [
        {
          icon: Users,
          title: 'Community Network',
          description: 'Connect with local recycling agents and build your professional network.',
          details: 'Access to exclusive agent community, monthly meetups, knowledge sharing sessions, and mentorship programs from successful agents.'
        },
        {
          icon: MapPin,
          title: 'Territory Management',
          description: 'Manage your assigned area with advanced tools and analytics.',
          details: 'GPS-enabled territory mapping, customer management tools, pickup optimization, and performance analytics to maximize your earnings.'
        },
        {
          icon: BarChart3,
          title: 'Earnings Dashboard',
          description: 'Track your commissions, bonuses, and performance metrics in real-time.',
          details: 'Detailed earnings breakdown, performance rankings, bonus opportunities, and financial planning tools. Weekly payouts directly to your bank account.'
        },
        {
          icon: Gift,
          title: 'Incentive Programs',
          description: 'Benefit from our comprehensive reward and recognition programs.',
          details: 'Monthly performance bonuses, annual recognition awards, training scholarships, and exclusive access to new features and territories.'
        }
      ]
    },
    // For Business
    {
      title: 'Corporate Sustainability Solutions',
      description: 'Comprehensive waste management solutions for businesses, schools, hospitals, and large organizations across Nigeria.',
      features: [
        {
          icon: BarChart3,
          title: 'Bulk Collection Services',
          description: 'Scheduled bulk waste collection with detailed reporting and analytics.',
          details: 'Customized collection schedules, dedicated account management, sustainability reporting, and compliance documentation for corporate requirements.'
        },
        {
          icon: Wallet,
          title: 'Corporate Rewards',
          description: 'Earn substantial rewards for your organization\'s recycling efforts.',
          details: 'Volume-based pricing, corporate discounts, team challenges, and CSR reporting tools to showcase your environmental impact to stakeholders.'
        },
        {
          icon: Users,
          title: 'Employee Engagement',
          description: 'Engage your workforce in sustainability initiatives with gamification.',
          details: 'Employee recycling competitions, sustainability workshops, progress tracking, and recognition programs to boost environmental awareness.'
        },
        {
          icon: ShoppingBag,
          title: 'Procurement Solutions',
          description: 'Access to sustainable products and services for your business needs.',
          details: 'B2B marketplace with eco-friendly office supplies, sustainable packaging solutions, and green technology products at competitive prices.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <LazySection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Comprehensive Recycling Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cleanwave offers tailored solutions for every segment of Nigerian society. Whether you're an individual, agent, or business, we have the perfect recycling solution designed specifically for your needs and goals.
            </p>
          </motion.div>
        </LazySection>

        {/* Tab Navigation */}
        <LazySection className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </LazySection>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="tab-content active"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {tabContent[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tabContent[activeTab].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-activebg p-8 rounded-3xl card-hover group"
                >
                  <div className="bg-primary p-4 rounded-2xl w-fit mb-6 feature-icon-glow group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Information */}
        <LazySection className="mt-20">
          <div className="bg-gray-50 p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black mb-4">
                Why Choose Cleanwave?
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just another recycling app. We're a comprehensive ecosystem designed to transform Nigeria's approach to waste management through technology, community engagement, and sustainable practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Technology-Driven',
                  description: 'Advanced algorithms optimize collection routes, predict demand, and ensure maximum efficiency in our operations.',
                  stat: '95% efficiency rate'
                },
                {
                  title: 'Community-Focused',
                  description: 'Built by Nigerians for Nigerians, understanding local challenges and providing culturally relevant solutions.',
                  stat: '50+ communities served'
                },
                {
                  title: 'Environmentally Impactful',
                  description: 'Every action on our platform contributes to a cleaner Nigeria and a more sustainable future for our children.',
                  stat: '50,000kg+ recycled'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                    <h4 className="text-lg font-semibold text-black mb-3">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  );
};

export default Features;