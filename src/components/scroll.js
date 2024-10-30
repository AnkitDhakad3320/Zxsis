// ScrollRevealWrapper.jsx
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealWrapper = ({ children, revealConfig }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
      ...revealConfig, // Spread additional configurations if provided
    });

    // Apply scroll reveal to all children
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((element) => {
      sr.reveal(element);
    });
  }, [revealConfig]);

  return <div className="scroll-reveal-wrapper">{children}</div>;
};

export default ScrollRevealWrapper;
