"use client";

import Image from "next/image";
import meHero from "@/assets/images/meHero3.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import EarthIcon from "@/assets/icons/planets/earth.svg";
import MercuryIcon from "@/assets/icons/planets/mercury.svg";
import VenusIcon from "@/assets/icons/planets/venus.svg";
import MarsIcon from "@/assets/icons/planets/mars.svg";
import JupiterIcon from "@/assets/icons/planets/jupiter.svg";
import SaturnIcon from "@/assets/icons/planets/saturn.svg";
import UranusIcon from "@/assets/icons/planets/uranus.svg";
import NeptuneIcon from "@/assets/icons/planets/neptune.svg";
import ScrollLink from "@/components/smoothScroll";

export const HeroSection = () => {
  return (
    <div className="relative z-0 py-32 md:py-48 lg:py-60 overflow-x-clip">
      {/* Background Elements */}
      <div className="absolute inset-0 z-[-10] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* Planet Rings */}
        {[620, 820, 1020, 1220].map((size) => (
          <div key={size} className="hero-ring" style={{ width: `${size}px`, height: `${size}px` }} />
        ))}

        {/* Planets */}
        <div className="absolute inset-0 z-[-20]">
        <HeroOrbit size={160} rotation={-55} shouldOrbit orbitDuration="20s" shouldSpin spinDuration="58s" glowColor="rgba(209, 213, 219, 0.6)">
          <MercuryIcon className="size-12 fill-gray-300" />
        </HeroOrbit>
        <HeroOrbit size={270} rotation={60} shouldOrbit orbitDuration="28s" shouldSpin spinDuration="243s" glowColor="rgba(252, 211, 77, 0.6)">
          <VenusIcon className="size-16 fill-yellow-300" />
        </HeroOrbit>
        <HeroOrbit size={370} rotation={120} shouldOrbit orbitDuration="33s" shouldSpin spinDuration="24s" glowColor="rgba(16, 185, 129, 0.6)">
          <EarthIcon className="size-16 fill-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={450} rotation={270} shouldOrbit orbitDuration="41s" shouldSpin spinDuration="24s" glowColor="rgba(239, 68, 68, 0.6)">
          <MarsIcon className="size-14 fill-red-300" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={350} shouldOrbit orbitDuration="75s" shouldSpin spinDuration="9s" glowColor="rgba(251, 146, 60, 0.6)">
          <JupiterIcon className="size-32 fill-orange-300" />
        </HeroOrbit>
        <HeroOrbit size={900} rotation={-180} shouldOrbit orbitDuration="100s" shouldSpin spinDuration="10s" glowColor="rgba(254, 243, 199, 0.6)">
          <SaturnIcon className="size-28 fill-orange-100" />
        </HeroOrbit>
        <HeroOrbit size={1050} rotation={-250} shouldOrbit orbitDuration="145s" shouldSpin spinDuration="17s" glowColor="rgba(56, 189, 248, 0.6)">
          <UranusIcon className="size-20 fill-sky-600" />
        </HeroOrbit>
        <HeroOrbit size={1200} rotation={-70} shouldOrbit orbitDuration="180s" shouldSpin spinDuration="16s" glowColor="rgba(129, 140, 248, 0.6)">
          <NeptuneIcon className="size-20 fill-indigo-500" />
        </HeroOrbit>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image 
            src={meHero} 
            className="w-[250px] h-auto object-contain" 
            alt="Me hero" 
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div> 
            </div> 
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto text-center mt-8">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide">
            Analytical mind creative coding
          </h1>
          <p className="mt-4 text-white/60 md:text-lg">
          I am interested in programming and statistics for the use case of artificial intelligence. I enjoy exploring creative approaches to solving a recurring problem.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <ScrollLink sectionId="projects" as="button" className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold" >Explore my work </span>
          <ArrowDown className="size-4" />
        </ScrollLink>
        <ScrollLink sectionId="contact" as="button" className="inline-flex items-center gap-2 bg-white text-gray-900 border-white h-12 px-6 rounded-xl">
        <span role="img" aria-label="Hands raised">🙌</span>
        <span className="font-semibold">Let"s connect</span>
        </ScrollLink>
        </div>
      </div>
    </div>
  );
};
