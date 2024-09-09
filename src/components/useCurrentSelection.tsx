"use client";
import { useEffect, useState } from 'react';

const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.getAttribute('id'));
          }
        });
      },
      { threshold: 0.3} // Adjust this threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return currentSection;
};

export default useCurrentSection;
