import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import WhyCleanwave from '../components/home/WhyCleanwave';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <WhyCleanwave />
      <CTASection />
    </div>
  );
};

export default Home;