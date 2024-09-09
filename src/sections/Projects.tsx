import checkersImage from "@/assets/images/Checkers.png";
import chatroomImage from "@/assets/images/Chatroom.png";
import othelloImage from "@/assets/images/Othello.png";
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "University Project",
    year: "2024",
    title: "Minimax \"AI\" Othello",
    results: [
      { title: "100% in all individual Java Projects at university" },
      { title: "Usage of MVC architecture" },
      { title: "Basic AI that evaluates each possible move" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: othelloImage,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Chatroom using Supabase",
    results: [
      { title: "Using new skills learnt from university" },
      { title: "JavaScript and Supabase backend" },
      { title: "HTML5 and CSS3 frontend, JS and SQL with hashing backend" },
    ],
    link: "https://gitfarhans.github.io/chatroom/",
    image: chatroomImage,
  },
  {
    company: "HackNotts",
    year: "2023",
    title: "Minimax \"AI\" checkers",
    results: [
      { title: "Completed this in a timed hackathon project" },
      { title: "Utilising OOP that I learnt previously" },
      { title: "Created in pygame, with an encrypted system" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: checkersImage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24" id="projects">
    <div className="container">
    <SectionHeader eyebrow="Real-world results" title= "Featured Projects"  description=" See how I transformed concepts into engaging digital experiences"></SectionHeader>
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
              <a href={project.link}>
                <button className="bg-white text-gray-950 
                h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex 
                items-center justify-center gap-2 mt-8">
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className = "size-4" />
                </button>
              </a>
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
