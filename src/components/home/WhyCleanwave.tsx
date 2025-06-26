import React from 'react';
import { Award, Zap, Shield, Recycle, Heart, Globe, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import LazySection from '../LazySection';

const WhyCleanwave = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Proven Eco-Incentive System',
      description: 'Get rewarded for making environmentally conscious choices with our transparent and fair reward system.',
      details: 'Our scientifically-backed reward system ensures fair compensation for your environmental efforts. Track your impact with detailed analytics and see how your actions contribute to a cleaner Nigeria.',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Modern technology makes recycling easier, more efficient, and more rewarding than ever before.',
      details: 'AI-powered route optimization, real-time tracking, smart notifications, and predictive analytics ensure the best possible experience for all users.',
      color: 'bg-yellow-500'
    },
    {
      icon: Shield,
      title: 'Trusted Nigerian Team',
      description: 'Built by Nigerians, for Nigerians, with deep local understanding and cultural sensitivity.',
      details: 'Our team understands the unique challenges of waste management in Nigeria and has designed solutions that work within our cultural and economic context.',
      color: 'bg-green-500'
    },
    {
      icon: Recycle,
      title: 'Circular Economy Pioneer',
      description: 'Contributing to a sustainable future for Nigeria through innovative circular economy principles.',
      details: 'We\'re not just collecting waste - we\'re creating a circular economy where waste becomes a resource, generating value for communities and the environment.',
      color: 'bg-purple-500'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Every action creates positive ripple effects throughout Nigerian communities.',
      details: 'From cleaner neighborhoods to job creation, from environmental education to economic empowerment, Cleanwave creates lasting positive change.',
      color: 'bg-red-500'
    },
    {
      icon: Globe,
      title: 'Environmental Leadership',
      description: 'Leading Nigeria towards international environmental standards and sustainability goals.',
      details: 'Aligning with UN Sustainable Development Goals and helping Nigeria meet international environmental commitments while creating local solutions.',
      color: 'bg-indigo-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Constantly innovating and improving our platform based on user feedback and emerging technologies.',
      details: 'Regular updates, new features, and continuous improvement based on user feedback and the latest environmental science research.',
      color: 'bg-orange-500'
    },
    {
      icon: Target,
      title: 'Measurable Results',
      description: 'Track your environmental impact with detailed metrics and transparent reporting.',
      details: 'See exactly how much waste you\'ve diverted from landfills, your carbon footprint reduction, and your contribution to community cleanliness.',
      color: 'bg-pink-500'
    }
  ];

  const testimonials = [
    {
      quote: "Cleanwave made it so easy to recycle at home – and the rewards are real! I've earned enough points to buy groceries for my family.",
      author: "Ummraatu",
      location: "Kano Resident",
      avatar: "U",
      rating: 5
    },
    {
      quote: "As an agent, Cleanwave has provided me with a steady income while helping my community. The training and support are excellent.",
      author: "Ismaila",
      location: "Agent in Gwale",
      avatar: "I",
      rating: 5
    },
    {
      quote: "Our school has been using Cleanwave for 6 months. The students are more environmentally conscious, and we've earned significant rewards.",
      author: "Mrs. Fatima",
      location: "School Administrator",
      avatar: "F",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <LazySection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Choose Cleanwave?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're more than just a recycling platform. We're a movement towards a cleaner, more sustainable Nigeria, powered by technology, driven by community, and focused on creating lasting positive impact.
            </p>
          </motion.div>
        </LazySection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <LazySection key={index} animationClass="scale-in">
              <motion.div
                className="bg-white p-8 rounded-3xl shadow-sm card-hover h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`${reason.color} p-4 rounded-2xl w-fit mx-auto mb-6`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-4 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                  {reason.description}
                </p>
                <p className="text-gray-500 text-center text-xs leading-relaxed">
                  {reason.details}
                </p>
              </motion.div>
            </LazySection>
          ))}
        </div>

        {/* Impact Statistics */}
        <LazySection className="mb-20">
          <div className="bg-primary p-12 rounded-3xl text-white text-center">
            <h3 className="text-3xl font-bold mb-8">Our Growing Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10,000+', label: 'Active Users' },
                { number: '500+', label: 'Verified Agents' },
                { number: '50,000kg', label: 'Waste Recycled' },
                { number: '25', label: 'Communities Served' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold mb-2 stats-counter">{stat.number}</div>
                  <div className="text-green-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* Testimonials */}
        <LazySection>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              What Our Community Says
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who are making a difference with Cleanwave
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="testimonial-card p-8 rounded-3xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <cite className="text-primary font-semibold block">
                      {testimonial.author}
                    </cite>
                    <span className="text-gray-500 text-sm">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </LazySection>

        {/* Call to Action */}
        <LazySection className="mt-20">
          <div className="bg-activebg p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Join the Movement?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Become part of Nigeria's largest recycling community and start making a positive impact today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary px-8 py-4 rounded-xl text-white font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Download App Now
              </motion.button>
              <motion.button 
                className="btn-secondary px-8 py-4 rounded-xl text-black font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Become an Agent
              </motion.button>
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  );
};

export default WhyCleanwave;