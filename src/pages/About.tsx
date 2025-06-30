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
      date: 'May 2024',
      title: 'Pilot Program Launch',
      description: 'Successful pilot program launched in 5 communities across Kano State with 500+ initial users.',
      icon: Target
    },
    {
      date: 'August 2024',
      title: 'Agent Network Expansion',
      description: 'Recruited and trained 100+ agents across Northern Nigeria, establishing our community network.',
      icon: TrendingUp
    },
    {
      date: 'October 2024',
      title: 'Technology Platform Launch',
      description: 'Full-featured mobile app and web platform launched with advanced recycling tracking capabilities.',
      icon: Globe
    },
    {
      date: 'December 2024',
      title: 'Major Milestone',
      description: 'Reached 10,000+ active users and processed over 50,000kg of recyclable materials.',
      icon: Award
    }
  ];

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
      name: 'Kano State Government',
      type: 'Government Partnership',
      description: 'Collaboration on waste management policy and large-scale implementation programs.',
      status: 'In Discussion'
    },
    {
      name: 'University of Maiduguri',
      type: 'Academic Partner',
      description: 'Research collaboration on sustainable waste management and environmental impact studies.',
      status: 'Planned'
    },
    {
      name: 'Green Initiative Nigeria',
      type: 'NGO Partnership',
      description: 'Joint environmental education programs and community outreach initiatives.',
      status: 'Active'
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm card-hover"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-activebg text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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