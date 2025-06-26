import React, { useState } from 'react';
import { Users, DollarSign, BookOpen, Award, MapPin, Phone, Mail } from 'lucide-react';
import AgentHero from '../components/AgentHero';

const ForAgents = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    reason: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Agent registration:', formData);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Commissions',
      description: 'Get paid for every pickup and user sign-up in your area'
    },
    {
      icon: BookOpen,
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support from our team'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Leadership opportunities and community recognition'
    },
    {
      icon: Users,
      title: 'Network Building',
      description: 'Connect with other agents and build your local network'
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AgentHero />
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Become a Cleanwave Agent
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our network of environmental champions and earn while making a positive impact in your community.
          </p>
        </div>

        {/* Who Can Become an Agent */}
        <div className="bg-activebg p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Who Can Become an Agent?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Youths', 'Students', 'Business Owners', 'Market Leaders', 'Environmental Advocates'].map((group, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center">
                <span className="font-medium text-gray-700">{group}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Agent Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                <div className="bg-primary p-3 rounded-lg w-fit mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Your Role */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Your Role as an Agent</h2>
            <ul className="space-y-4">
              {[
                'Onboard users in your area',
                'Organize and report recyclables',
                'Educate community members',
                'Share insights with Cleanwave team'
              ].map((role, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-black mb-4">Earning Model</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Per pickup commission</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Bonus for top-performing agents</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Business/bulk recycler referrals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Join as an Agent</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="City, State"
                required
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Why do you want to join?</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us about your motivation..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-active text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-all duration-300"
            >
              Join as an Agent
            </button>
          </form>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-activebg p-8 rounded-2xl text-center">
          <blockquote className="text-xl text-gray-700 italic mb-4">
            "Becoming a Cleanwave agent changed how I see waste – and my income!"
          </blockquote>
          <cite className="text-primary font-semibold">— Ismaila, Agent in Gwale</cite>
        </div>
      </div>
    </div>
  );
};

export default ForAgents;