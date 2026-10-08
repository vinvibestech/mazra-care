"use client";

import { useState } from "react";
import {
  Home,
  Building2,
  GraduationCap,
  Users,
  Sprout,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const audienceCards = [
  {
    title: "Home & Residential",
    description:
      "Explore productive home gardens, compact farming systems and residential growing solutions.",
    icon: Home,
  },
  {
    title: "Businesses",
    description:
      "Explore commercial farming, food production and technology-enabled agricultural opportunities.",
    icon: Building2,
  },
  {
    title: "Institutions",
    description:
      "Develop agricultural, educational or sustainability-focused projects for institutional environments.",
    icon: GraduationCap,
  },
  {
    title: "Communities",
    description:
      "Explore integrated solutions that connect agriculture, education, energy and sustainable community development.",
    icon: Users,
  },
  {
    title: "Farmers & Agricultural Entrepreneurs",
    description:
      "Explore modern cultivation methods, smart farming technologies and sustainable agricultural systems.",
    icon: Sprout,
  },
];

export default function WhoCanContactMazraCare() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setExpandedCard((current) => (current === title ? null : title));
  };

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-20">
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-14
        "
      >
        {/* HEADER */}
        <div className="max-w-[900px]">
          {/* EYEBROW */}
          <span
            className="
              text-[12px]
              font-medium
              tracking-[0.02em]
              text-[#6B7280]
              sm:text-[13px]
              md:text-[14px]
            "
          >
           Who Can Contact Mazra Care
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-3
              max-w-[850px]
              text-[36px]
              font-semibold
              leading-[1.04]
              tracking-[-0.045em]
              text-[#111827]
              sm:text-[42px]
              md:text-[46px]
              lg:text-[48px]
              xl:text-[52px]
            "
          >
            Solutions for Different Needs. One Conversation to Begin.
          </h2>

          {/* VISIBLE CONTENT */}
          <p
            className="
              mt-5
              max-w-[820px]
                    text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
            "
          >
            Mazra Care welcomes enquiries from{" "}
            <strong className="font-semibold text-[#27352D]">
              individuals, families, businesses, institutions and communities
            </strong>{" "}
            exploring sustainable agriculture and modern farming solutions.
          </p>

          {/* READ MORE CONTENT */}
          <div
            className={`
              grid
              overflow-hidden
              transition-[grid-template-rows,opacity]
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className="
                  max-w-[820px]
                  pt-5
                         text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
                "
              >
                <p>
                  Our agricultural approach can be relevant to different types
                  of users and project environments.
                </p>
              </div>
            </div>
          </div>

          {/* READ MORE */}
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-2
              text-[14px]
              font-semibold
              text-[#111827]
              transition-colors
              duration-300
              hover:text-[#6B9B68]
            "
          >
            {isExpanded ? "Read Less" : "Read More"}

            {isExpanded ? (
              <ChevronUp
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300"
              />
            ) : (
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            )}
          </button>
        </div>

        {/* AUDIENCE CARDS */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            items-start
            gap-4
            sm:mt-14
            sm:grid-cols-2
            sm:gap-5
            lg:mt-16
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {audienceCards.map((item, index) => {
            const Icon = item.icon;
            const isCardExpanded = expandedCard === item.title;

            return (
              <article
                key={item.title}
                className={`
                  group
                  self-start
                  overflow-hidden
                  rounded-[22px]
                  bg-[#EAF4E6]
                  p-6
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1
                  hover:bg-[#0D1A11]
                  sm:p-7
                  lg:p-7
                  xl:p-8
                  ${
                    index === 4
                      ? "lg:col-span-4 lg:flex lg:items-center lg:gap-10"
                      : ""
                  }
                `}
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[58px]
                    w-[58px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DCE9D9]
                    text-[#263C2B]
                    transition-all
                    duration-500
                    group-hover:bg-[#183D2B]
                    group-hover:text-[#55D5A3]
                  "
                >
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <div className={index === 4 ? "lg:flex-1" : ""}>
                  {/* TITLE */}
                  <h3
                    className="
                      mt-6
                      text-[19px]
                      font-semibold
                      leading-[1.2]
                      tracking-[-0.02em]
                      text-[#1F3024]
                      transition-colors
                      duration-500
                      group-hover:text-white
                      sm:text-[20px]
                      lg:text-[21px]
                      xl:text-[22px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      text-[14px]
                      leading-[1.65]
                      text-[#617067]
                      transition-colors
                      duration-500
                      group-hover:text-white/75
                      sm:text-[15px]
                    "
                  >
                    {item.description}
                  </p>


                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}