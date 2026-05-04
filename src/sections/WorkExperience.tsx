import aviva from "@/public/images/aviva.png";
import hsbc from "@/public/images/hsbc.png";
import bofa from "@/public/images/bofa.png";
import lmax from "@/public/images/lmax.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import {Card} from "@/components/Card"
import { Fragment } from "react";

const testimonials = [
  {
    name: "Aviva",
    position: "2022 - Summer Work Wxperience",
    text: "Gained expertise in Amazon Web Services and Google Cloud, including their use for modeling cloud infrastructure and architecture. Acquired experience in presenting Internet of Things projects and working with database technologies, as well as understanding NetZero concepts within these platforms.",
    avatar: aviva,
  },
  {
    name: "HSBC",
    position: "2021 - Virtual Work Experience",
    text: "Core understanding of wealth and personal banking, investment banking, and global trade solutions. They focus on areas like marketing, receivable finance, and fraud detection to support their clients. This has given me a broader view of how HSBC operates across different financial sectors",
    avatar: hsbc,
  },
  {
    name: "Bank of America",
    position: "2025 - Global Technology Spring Internship",
    text: "I got selected for Bank of America's Global Technology Spring Week, where I got an inside look at how tech drives innovation in finance. It was an incredible opportunity to learn from experts, participate in workshops, and connect with like-minded peers.",
    avatar: bofa,
  },
  {
    name: "LMAX",
    position: "2024/25 university project",
    text: "I worked on a university project with LMAX as a team leader of 8, where we built a client statement generator webapp using Python and the LMAX API. I learned about the different types of orders and how to use the API to execute trades. I also learned about the different types of markets and how to use the API to get market data.",
    avatar: lmax,
  }
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
