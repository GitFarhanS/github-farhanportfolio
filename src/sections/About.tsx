"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/public/images/book.jpg";
import Image from "next/image";
import JavasciptIcon from "@/public/icons/square-js.svg";
import HTMLIcon from "@/public/icons/html5.svg";
import CSSIcon from "@/public/icons/css3.svg";
import ReactIcon from "@/public/icons/react.svg";
import JavaIcon from "@/public/icons/java.svg";
import GithubIcon from "@/public/icons/github.svg";
import pythonIcon from "@/public/icons/python.svg";
import haskellIcon from "@/public/icons/haskell.svg";
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
    title: "Fitness",
    emoji: "💪",
    left: "5%",
    top: "65%",
  }
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return  (
  <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="Step into my world" description="Discover who I am, what I do, and what fuels my creativity"/>
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Discover the books that have influenced my mindset"/>
            <div className="w-40 mx-auto mt-1 md:-mt-5">
              <Image src={bookImage} alt="Book Cover"/>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools I learnt in my own time and from University." className=""/>
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
          <Card className="p-0 overflow-hidden md:col-span-2 lg:col-span-1 flex justify-center bg-gray-950">
            <div className="w-full overflow-x-auto flex justify-center py-3 md:py-4">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7453874427370369024?collapsed=1"
                height={670}
                width={504}
                className="max-w-full border-0 shrink-0"
                title="Embedded LinkedIn post"
                allowFullScreen
                frameBorder={0}
              />
            </div>
          </Card>
        </div>
      </div>
     </div>
  </div>
  );
};
