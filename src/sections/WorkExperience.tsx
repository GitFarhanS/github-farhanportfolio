import bofa from "@/public/images/bofa.png";
import bt from "@/public/images/1920_bt-group-logo-png.png";
import qrt from "@/public/images/QRT.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image, { type StaticImageData } from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

type Experience = {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
};

const testimonials: Experience[] = [
  {
    name: "Qube Research & Technologies",
    position:
      "Incoming Quantitative Technology Analyst · Infrastructure Intern · Internship · Jun 2026 – Jun 2027 · London, UK",
    text: "From June 2026, a twelve-month run on the technology side of a systematic investment management firm.",
    avatar: qrt,
  },
  {
    name: "BT Group",
    position:
      "Technical Designer Intern · Jun 2025 – Aug 2025 · UK",
    text: "Summer internship bridging product design and delivery: translating requirements into clear interaction patterns, iterating with stakeholders, and tightening handoffs so engineering can ship with fewer loops. Recognised with a 2026 return offer on the BT Business UK Design and Delivery programme.",
    avatar: bt,
  },
  {
    name: "Bank of America",
    position: "Global Technology Spring Intern · Apr 2025 · 1 mo",
    text: "Condensed spring insight into how global technology underpins markets, risk, and client platforms at scale. Workshops and case work across security, resilience, and software delivery—leading to a 2026 Cybersecurity Analyst summer internship offer.",
    avatar: bofa,
  },
];

export const WorkExperienceSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Recent roles & programmes"
          description="Highlights from internships and spring programmes; hover or tap to pause the animation."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,_black_10%,_black_90%,_transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-800 inline-flex items-center justify-center rounded-full flex-shrink-0 overflow-hidden p-1.5">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
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
