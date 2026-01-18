import React, { useRef, useEffect, useState, HTMLAttributes } from 'react';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delay = 0, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div 
      ref={ref} 
      className={`reveal ${isVisible ? 'active' : ''} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;