"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book.jpg";
import Image from "next/image";
import JavasciptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavaIcon from "@/assets/icons/java.svg";
import GithubIcon from "@/assets/icons/github.svg";
import pythonIcon from "@/assets/icons/python.svg";
import haskellIcon from "@/assets/icons/haskell.svg";
import mapImage from "@/assets/images/nottinghamMap.png";
import SWEIcon from "@/assets/icons/software-engineer-icon.svg"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion}  from "framer-motion";
import { useRef } from "react";

const toolbox = [
  {
    title: "JavaScript",
    iconType: JavasciptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {title: "Python",
    iconType: pythonIcon,
  },
  {title: "Haskell",
    iconType: haskellIcon,
  }
]

const hobbies =[
  {
    title: "3D modelling",
    emoji: "📐",
    left: "5%",
    top: "5%",
  },
  {
    title: "Reviewer",
    emoji: "⭐",
    left: "43%",
    top: "0%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Biking",
    emoji: "🏍️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "💪",
    left: "5%",
    top: "65%",
  },
  {
    title: "Investing",
    emoji: "📈",
    left: "45%",
    top: "70%",
  },
  {
    title: "Editor",
    emoji: "🎬",
    left: "75%",
    top: "5%",
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return  (
  <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A look into my world" description="Learn more about who I am, what I do and what inspires me"/>
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Discover the books that have influenced my mindset"/>
            <div className="w-40 mx-auto mt-1 md:-mt-5">
              <Image src={bookImage} alt="Book Cover"/>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exception digital experiences." className=""/>
            <ToolboxItems items={toolbox} className="" itemsWrapperClassname="animate-move-left [animation-duration:30s]"/>
            <ToolboxItems items={toolbox} className="mt-6" itemsWrapperClassname= "animate-move-right [animation-duration:15s]"/>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the code" description="Explore my interest and hobbies beyond the digital realm" className="px-6 py-6"/>
            <div className="relative flex-1" ref= {constraintRef}>
              {hobbies.map(hobby => (
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{left: hobby.left, top: hobby.top,}} drag dragConstraints={constraintRef}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 scale-75">
              <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
              <SWEIcon className="absolute size-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="url(#map-icon-gradient)" />
              <svg className="size-0 absolute">
                <defs>
                  <linearGradient id="map-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(235,209,151)" />
                    <stop offset="33%" stopColor="rgb(180,136,17)" />
                    <stop offset="66%" stopColor="rgb(162,121,13)" />
                    <stop offset="100%" stopColor="rgb(187,155,73)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Card>
        </div>
      </div>
     </div>
  </div>
  );
};
