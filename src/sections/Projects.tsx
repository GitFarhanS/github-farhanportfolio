import checkersImage from "@/public/images/Checkers.png";
import lmaxImage from "@/public/images/lmaxImage.png";
import gridImage from "@/public/images/GRID-portfolio-new-img.png";
import styleSwipeImage from "@/public/images/Style-swipe-portfolio.png";
import CheckIcon from "@/public/icons/check-circle.svg"
import ArrowUpRightIcon from "@/public/icons/arrow-up-right.svg"
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "HackLondon",
    year: "2026",
    title: "GRID",
    results: [
      { title: "Societies Track winner — geospatial simulator for substation stress, DC and wind-farm placement, and sustainability-focused viability reporting" },
      { title: "CesiumJS 3D visualization and scenario tooling; Python/Flask backend; 7-day metrics and PDF report generation" },
      { title: "Real data ingestion, renewable offset modeling, and evidence-backed outputs aligned with National Grid–style planning questions" },
    ],
    link: "https://devpost.com/software/grid-38zo0l",
    image: gridImage,
  },
  {
    company: "HackSheffield",
    year: "2025",
    title: "Style Swipe",
    results: [
      { title: "MLH Best Use of Gemini API and Frasers Group winner — AI virtual try-on from front/side/back photos with Tinder-style swiping through matched UK retail products" },
      { title: "FastAPI, PostgreSQL, and SQLAlchemy; SerpApi Google Shopping; Gemini for composite 9:16 try-on renders and preference-driven search" },
      { title: "Results and analytics in-app plus Grafana dashboards for engagement, clicks, and conversion-style funnels" },
    ],
    link: "https://devpost.com/software/style-swipe-7h2zak",
    image: styleSwipeImage,
  },
  {
    company: "University Partnership Project with LMAX",
    year: "2025",
    title: "Trading Statement Generator",
    results: [
      { title: "Led a team of 8, using Agile and Scrum methodologies" },
      { title: "Created and algorithm around LMAX's API to generate trading statements" },
      { title: "Auth0 for authentication and user management" },
      { title: "Flask Backend, Docker to containerise the application" },
    ],
    link: "#",
    image: lmaxImage,
  }
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24" id="projects">
    <div className="container">
    <SectionHeader eyebrow="Real-world results" title= "Featured Projects"  description=" Discover how I turned basic ideas into captivating digital solutions"></SectionHeader>
      <div className=" flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{top: `calc(64px + ${projectIndex * 40}px)`}}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 
                inline-flex gap-2 font-bold uppercase tracking-widest 
                text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckIcon className="size-5 md:size-6 flex-shrink-0" />
                      <span>{result.title}</span>
                    </li>
                  ))}
              </ul>
              {project.link && project.link !== "#" ? (
                <a href={project.link}>
                  <button className="bg-white text-gray-950 
                      h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex 
                      items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                  </a>
                ) : (
                  <div className="invisible h-12 w-full md:w-auto px-8 mt-8"></div>
                )}
                </div>
              <div className="relative">
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
            </div>
          </Card>
          ))}
      </div>
    </div>
  </section>);
};
