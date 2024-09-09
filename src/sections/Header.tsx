"use client"; // This directive ensures the file is treated as a client component

import ScrollLink from "@/components/smoothScroll";
import useCurrentSection from "@/components/useCurrentSelection"; // Adjust the import path

export const Header = () => {
  const currentSection = useCurrentSection(); // Ensure this is used correctly
  console.log("Current section:", currentSection);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 rounded-full backdrop-blur">
        <ScrollLink sectionId="home" as="button" className={`nav-item ${currentSection === "home" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "hover:bg-white/10"}`}>
          Home
        </ScrollLink>
        <ScrollLink sectionId="projects" as="button" className={`nav-item ${currentSection === "projects" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "hover:bg-white/10"}`}>
          Projects
        </ScrollLink>
        <ScrollLink sectionId="workExperience" as="button" className={`nav-item ${currentSection === "workExperience" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "hover:bg-white/10"}`}>
          Work Exp
        </ScrollLink>
        <ScrollLink sectionId="about" as="button" className={`nav-item ${currentSection === "about" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "hover:bg-white/10"}`}>
          About
        </ScrollLink>
        <ScrollLink sectionId="contact" as="button" className={`nav-item ${currentSection === "contact" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "hover:bg-white/10"}`}>
          Contact
        </ScrollLink>
      </nav>
    </div>
  );
};
