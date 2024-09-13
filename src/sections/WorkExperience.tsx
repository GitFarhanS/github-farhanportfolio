import google from "@/public/images/google_logo.png";
import level2 from "@/public/images/level2.png";
import aviva from "@/public/images/aviva.png";
import baird from "@/public/images/baird.png";
import hsbc from "@/public/images/hsbc.png";
import insight from "@/public/images/insightifa.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import {Card} from "@/components/Card"
import { Fragment } from "react";

const testimonials = [
  {
    name: "Google",
    position: "2024 - Google X SEOLondon Insight day",
    text: "I gained valuable insights into technical careers at Google through discussions with their experienced employees. My group collaborated on challenging technical assessments, enhancing our problem-solving skills.",
    avatar: google,
  },
  {
    name: "Level2",
    position: "2024 - Quantitative Trader Internship",
    text: "I learned about trading strategies using the Strategy Builder, applied technical indicators for signals, and tested it with the Backtesting Module. After optimising for better returns, I simulated it with paper trading before deploying it with real funds, continuously monitoring and adjusting as needed.",
    avatar: level2,
  },
  {
    name: "Aviva",
    position: "2022 - Summer Work Wxperience",
    text: "Gained expertise in Amazon Web Services and Google Cloud, including their use for modeling cloud infrastructure and architecture. Acquired experience in presenting Internet of Things projects and working with database technologies, as well as understanding NetZero concepts within these platforms.",
    avatar: aviva,
  },
  {
    name: "Robert W. Baird & Co",
    position: "2022 - Equities Open day",
    text: "I’ve learned from Robert W. Baird what equities are, focusing on mergers and acquisitions and private equity. Includes analysing market trends to identify investment opportunities. This insight has deepened my understanding of how financial markets and strategic investments intersect.",
    avatar: baird,
  },
  {
    name: "HSBC",
    position: "2021 - Virtual Work Experience",
    text: "Core understanding of wealth and personal banking, investment banking, and global trade solutions. They focus on areas like marketing, receivable finance, and fraud detection to support their clients. This has given me a broader view of how HSBC operates across different financial sectors",
    avatar: hsbc,
  },
  {
    name: "InsightIFA",
    position: "2023 - Financial Advisor PA Work Experience",
    text: "Analysed client data to create tailored reports. Created an SQL algorithm in Navicat to eliminate redundant cold leads. Assisted in archiving wills and streamlining SQL data.",
    avatar: insight,
  },
];

export const WorkExperienceSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Work Experience" title= "Companies I have gained knowledge from"  description=" Here are some key takeaways, hover or tap to pause the animation"/>
          <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,_black_10%,_black_90%,_transparent)] py-4 -my-4">
            <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
              {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-[80%] max-w-[80%]"/>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
              </Fragment>
              ))}

          </div>
        </div>
      </div>
    </div>
  );
};
