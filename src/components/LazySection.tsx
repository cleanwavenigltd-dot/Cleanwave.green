import React from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  animationClass = 'fade-in',
  threshold = 0.1,
  triggerOnce = true
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce
  });

  return (
    <div
      ref={ref}
      className={`${className} ${animationClass} ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default LazySection;