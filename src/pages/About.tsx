import React from 'react';
import { Target, Clock, Users, Award, MapPin, Lightbulb, Heart, Globe, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import LazySection from '../components/LazySection';

const About = () => {
  const team = [
    { 
      name: 'Aminu Balarabe', 
      role: 'Founder & CEO',
      bio: 'Environmental engineer with 8+ years experience in sustainable development and waste management solutions across Nigeria.',
      expertise: ['Strategic Leadership', 'Environmental Policy', 'Business Development']
    },
    { 
      name: 'Mubarak Ibrahim Mandawari', 
      role: 'Chief Financial Officer',
      bio: 'Financial expert with extensive experience in fintech and sustainable business models in emerging markets.',
      expertise: ['Financial Strategy', 'Investment Management', 'Risk Assessment']
    },
    { 
      name: 'Ameenatouh Jabo', 
      role: 'Chief Marketing Officer',
      bio: 'Marketing strategist specializing in community engagement and digital marketing for social impact initiatives.',
      expertise: ['Digital Marketing', 'Community Building', 'Brand Strategy']
    },
    { 
      name: 'Aishat Abdulganiyyi', 
      role: 'Sustainability Officer',
      bio: 'Environmental scientist focused on circular economy principles and sustainable waste management practices.',
      expertise: ['Environmental Science', 'Sustainability Consulting', 'Policy Development']
    }
  ];

const milestones = [
    {
      date: 'February 2024',
      title: 'Company Founded',
      description: 'Cleanwave Nigeria Ltd was established in Kano with a mission to revolutionize waste management.',
      icon: Lightbulb
    },
    {
      date: 'March 2024',
      title: 'Partnership with Sparklab',
      description: 'Strategic partnership formed with Sparklab Innovation Hub for technical development and mentorship.',
      icon: Users
    },
    {
      date: 'October 2024',
      title: 'Pilot Program Launch',
      description: 'Successful pilot program launched in 5 communities across Kano State with 500+ initial users.',
      icon: Target
    },
    {
      date: 'January 2025',
      title: 'Agent Network Expansion',
      description: 'Recruited and trained 100+ agents across Northern Nigeria, establishing our community network.',
      icon: TrendingUp
    },
    {
      date: 'July 2025',
      title: 'Technology Platform Launch',
      description: 'Full-featured mobile app and web platform launched with advanced recycling tracking capabilities.',
      icon: Globe
    }
    ]

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We prioritize community needs and ensure our solutions are accessible, culturally appropriate, and beneficial to all Nigerians.',
      details: 'Every decision we make is filtered through the lens of community impact. We engage with local leaders, listen to feedback, and adapt our solutions to meet the unique needs of each community we serve.'
    },
    {
      icon: Shield,
      title: 'Transparency & Trust',
      description: 'We operate with complete transparency in our processes, rewards system, and environmental impact reporting.',
      details: 'Our open-book approach includes detailed reporting on waste processing, reward calculations, and environmental impact metrics. Users can track exactly how their contributions make a difference.'
    },
    {
      icon: Globe,
      title: 'Environmental Stewardship',
      description: 'We are committed to creating lasting positive environmental impact through innovative recycling solutions.',
      details: 'Our environmental commitment goes beyond waste collection. We invest in research, support environmental education, and work towards creating a circular economy that benefits both people and planet.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We constantly evolve our technology and processes to provide the best possible experience and maximum impact.',
      details: 'Our dedicated R&D team continuously explores new technologies, from AI-powered sorting to blockchain-based reward systems, ensuring we stay at the forefront of environmental technology.'
    }
  ];

  const goals = [
    {
      title: 'Expand Across Northern Nigeria',
      description: 'Establish operations in all 19 Northern states by 2026',
      target: '19 states',
      timeline: '2026'
    },
    {
      title: 'Build City-Based Recycling Hubs',
      description: 'Create processing facilities in major Nigerian cities',
      target: '10 hubs',
      timeline: '2027'
    },
    {
      title: 'Educate and Empower Communities',
      description: 'Reach 1 million households with recycling education and opportunities',
      target: '1M households',
      timeline: '2030'
    },
    {
      title: 'Become Africa\'s Leading Brand',
      description: 'Establish Cleanwave as the premier recycling-tech brand across Africa',
      target: '5 countries',
      timeline: '2032'
    }
  ];

const partnerships = [
  {
    name: 'Sparklab Innovation Hub',
    type: 'Technology Partner',
    description: 'Providing technical development support, mentorship, and access to innovation resources.',
    status: 'Active'
  },
  {
    name: 'Sedae Kano State',
    type: 'Government Partnership',
    description: 'Collaboration on waste management policy and large-scale implementation programs in Kano State.',
    status: 'In Discussion'
  },
  {
    name: 'Clean Tech Hub',
    type: 'Innovation Partner',
    description: 'Exploring joint initiatives in clean technology and sustainable waste management solutions.',
    status: 'In Discussion'
  }
];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <LazySection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
              About <span className="gradient-text">Cleanwave</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              We're revolutionizing waste management in Nigeria through innovative technology, community empowerment, and sustainable practices. Our mission is to create a cleaner, more prosperous Nigeria where waste becomes a valuable resource for economic and environmental growth.
            </p>
            <p className="text-md text-gray-500 max-w-3xl mx-auto">
              <strong>Cleanwave</strong> is a portfolio startup at <strong><span className="gradient-text">Sparklab Creativity and Innovation Hub</span></strong>, where we receive mentorship, technical support, and strategic guidance to scale our environmental impact.
            </p>

          </motion.div>
        </LazySection>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <LazySection animationClass="slide-in-left">
            <div className="bg-activebg p-10 rounded-3xl h-full">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-black">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To revolutionize waste management in Nigeria using cutting-edge technology to empower citizens, create economic opportunities, and build a sustainable circular economy that benefits both people and the environment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every Nigerian deserves to live in a clean environment while having the opportunity to earn from their environmental stewardship. Through our platform, we're making this vision a reality.
              </p>
            </div>
          </LazySection>

          <LazySection animationClass="slide-in-right">
            <div className="bg-gray-50 p-10 rounded-3xl h-full">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-black">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To become Africa's leading recycling technology platform, creating a continent where waste is viewed as a valuable resource and every community has access to sustainable waste management solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where Nigeria leads Africa in environmental sustainability, powered by technology and driven by community participation in the circular economy.
              </p>
            </div>
          </LazySection>
        </div>

        {/* Our Story Timeline */}
        <LazySection className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-4xl font-bold text-black">Our Journey</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a simple idea to a growing movement, here's how Cleanwave has evolved to become Nigeria's premier recycling platform.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                      <div className="text-primary font-semibold mb-2">{milestone.date}</div>
                      <h3 className="text-xl font-bold text-black mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="bg-primary p-4 rounded-full">
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* Core Values */}
        <LazySection className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every solution we develop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="bg-primary p-4 rounded-2xl w-fit mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{value.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{value.description}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{value.details}</p>
              </motion.div>
            ))}
          </div>
        </LazySection>

        {/* Team */}
        <LazySection className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-4xl font-bold text-black">Meet Our Team</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in environmental science, technology, finance, and community development.
            </p>
          </div>

          {/* Executive Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Executive Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Aminu Balarabe - CEO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/aminu.jpg" 
                    alt="Aminu Balarabe" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Aminu Balarabe</h3>
                  <p className="text-primary font-medium mb-3 text-center">Founder & Chief Executive Officer (CEO)</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Environmental engineer with 8+ years experience in sustainable development and waste management solutions across Nigeria.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Strategic Leadership</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Environmental Policy</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Business Development</span>
                  </div>
                </div>
              </motion.div>

              {/* Mubarak Ibrahim Mandawari - COO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/mubarak-ibrahim.jpg" 
                    alt="Mubarak Ibrahim Mandawari" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Mubarak Ibrahim Mandawari</h3>
                  <p className="text-primary font-medium mb-3 text-center">Chief Operating Officer (COO)</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Operations expert with extensive experience in scaling sustainable business models in emerging markets.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Operations</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Process Optimization</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Team Leadership</span>
                  </div>
                </div>
              </motion.div>

              {/* Ahmad Muhammad Mijin Yawa - CTO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/ahmady.jpg" 
                    alt="Ahmad Muhammad Mijinyawa" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Ahmad Muhammad Mijin Yawa</h3>
                  <p className="text-primary font-medium mb-3 text-center">Chief Technology Officer (CTO)</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Technology visionary with expertise in building scalable platforms for environmental solutions.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Software Architecture</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Product Development</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Technical Strategy</span>
                  </div>
                </div>
              </motion.div>

              {/* Samuel Makolo - CSO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/samuel.jpg" 
                    alt="Samuel Makolo" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Samuel Makolo</h3>
                  <p className="text-primary font-medium mb-3 text-center">Chief Sustainability Officer (CSO)</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Environmental scientist focused on circular economy principles and sustainable waste management.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Sustainability</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Circular Economy</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Environmental Impact</span>
                  </div>
                </div>
              </motion.div>

              {/* Ahmad Suleiman - CMO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/ahmads.jpg" 
                    alt="Ahmad Suleiman" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Ahmad Suleiman</h3>
                  <p className="text-primary font-medium mb-3 text-center">Chief Marketing Officer (CMO)</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Marketing strategist specializing in community engagement and digital marketing for social impact.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Brand Strategy</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Digital Marketing</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Community Engagement</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Senior Management */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Senior Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Isaac John */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/isaac.jpg" 
                    alt="Isaac John" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Isaac John</h3>
                  <p className="text-primary font-medium mb-3 text-center">Head of Partnerships & Strategic Collaborations</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Partnership expert with a track record of building strategic alliances for social impact.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Partnerships</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Stakeholder Engagement</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Business Development</span>
                  </div>
                </div>
              </motion.div>

              {/* Adegbite Adejoju Pelumi */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/ade.jpg" 
                    alt="Adegbite Adejoju Pelumi" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Adegbite Adejoju Pelumi</h3>
                  <p className="text-primary font-medium mb-3 text-center">Business Growth & Research Manager</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Research and growth specialist focused on scaling sustainable business models.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Market Research</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Business Strategy</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Growth Hacking</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mid-Level Management */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Mid-Level Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Umar Mustapha Sani */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/umarmustapha.jpg" 
                    alt="Umar Mustapha Sani" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Umar Mustapha Sani</h3>
                  <p className="text-primary font-medium mb-3 text-center">Field Operations Coordinator (Agent Oversight)</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Field operations specialist ensuring smooth operations across our agent network.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Field Operations</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Logistics</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Team Management</span>
                  </div>
                </div>
              </motion.div>

              {/* Hauwa Umar Abdullahi */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/hauwaumar.jpg" 
                    alt="Hauwa Umar Abdullahi" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Hauwa Umar Abdullahi</h3>
                  <p className="text-primary font-medium mb-3 text-center">Administrative Officer</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Ensuring organizational efficiency through effective administrative systems.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Administration</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Office Management</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Coordination</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Marketing & Communications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Marketing & Communications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Amina Jabo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/aminajabo.jpg" 
                    alt="Amina Jabo" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Amina Jabo</h3>
                  <p className="text-primary font-medium mb-3 text-center">Assistant Marketing Officer & Social Media Manager</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Digital marketing specialist managing our online presence and community engagement.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Social Media</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Content Creation</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Digital Marketing</span>
                  </div>
                </div>
              </motion.div>

              {/* Ummuraatu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/ummuratu.jpg" 
                    alt="Ummuraatu" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Ummuraatu Muhammadgit </h3>
                  <p className="text-primary font-medium mb-3 text-center">Graphics Designer</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Creative designer producing visual content that communicates our brand effectively.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Graphic Design</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Brand Identity</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Visual Communication</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sustainability Unit */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Sustainability Unit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Hauwa Saad */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/team/hauwasaad.jpg" 
                    alt="Hauwa Saad" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">Hauwa Saad</h3>
                  <p className="text-primary font-medium mb-3 text-center">Assistant Sustainability Officer</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    Supporting sustainability initiatives and environmental impact assessments.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Sustainability</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Environmental Research</span>
                    <span className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium">Community Engagement</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </LazySection>

        {/* Vision & Goals */}
        <LazySection className="mb-20">
          <div className="bg-gray-50 p-12 rounded-3xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-4xl font-bold text-black">Strategic Goals</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our ambitious roadmap for transforming Nigeria's waste management landscape and expanding across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{goal.target}</div>
                      <div className="text-sm text-gray-500">by {goal.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{goal.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* Partnerships */}
        <LazySection>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6">Partnerships & Collaborations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in the power of collaboration. Our strategic partnerships enable us to deliver comprehensive solutions and maximize our impact across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">{partnership.name}</h3>
                    <p className="text-primary font-medium text-sm">{partnership.type}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    partnership.status === 'Active' ? 'bg-green-100 text-green-800' :
                    partnership.status === 'In Discussion' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {partnership.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{partnership.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-activebg p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Interested in Partnering?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                We're always looking for like-minded organizations to collaborate with. Whether you're a government agency, NGO, academic institution, or private company, let's explore how we can work together.
              </p>
              <motion.button 
                className="btn-primary px-8 py-4 rounded-xl text-white font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us for Partnerships
              </motion.button>
            </motion.div>
          </div>
        </LazySection>
      </div>
    </div>
  );
};

export default About;