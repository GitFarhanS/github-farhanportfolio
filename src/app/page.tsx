import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import {Header} from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { WorkExperienceSection } from "@/sections/WorkExperience";

export default function Home() {
  return (
    <div>
      <Header/>
      <section id="home"><HeroSection /></section>
      <section><ProjectsSection /></section>
      <section id="workExperience"><WorkExperienceSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="contact"><ContactSection /></section>
      <Footer />
    </div>
  );
}
