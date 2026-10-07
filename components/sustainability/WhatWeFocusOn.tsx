"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronUp,
  Droplets,
  Leaf,
  RefreshCcw,
  Sprout,
} from "lucide-react";

const focusAreas = [
  {
    title: "Save Water",
    description:
      "Efficient farming systems help reduce unnecessary water use.",
    icon: Droplets,
    expandedContent: (
      <>
       Water conservation is an important consideration in modern agriculture .{" "}
        <strong className="font-semibold">
          Hydroponic and aquaponic farming systems
        </strong>{" "}
     can support controlled cultivation while reducing dependence on conventional soil-based growing methods. The Mazra Care source material specifically identifies water conservation as an objective of these soilless cultivation approaches. Monarch mag notes and meetings

      </>
    ),
  },
  {
    title: "Use Space Better",
    description: "Grow more in smaller and controlled spaces.",
    icon: Leaf,
    expandedContent: (
      <>
        Modern controlled farming can make productive use of spaces where
        conventional agriculture may be difficult. From compact home systems
        to commercial growing environments, Mazra Care develops solutions
        around the available space and production requirements.
      </>
    ),
  },
  {
    title: "Reduce Waste",
    description:
      "Smart systems help use water, nutrients",
    icon: RefreshCcw,
    expandedContent: (
      <>
        Intelligent systems can help growers manage{" "}
        <strong className="font-semibold">
          water, nutrients and energy
        </strong>{" "}
        more carefully. Smart monitoring and targeted resource delivery
        provide greater visibility into growing conditions and support more
        informed farm management.
      </>
    ),
  },
  {
    title: "Grow Responsibly",
    description: "Support local and sustainable food production.",
    icon: Sprout,
    expandedContent: (
      <>
        Sustainability also means strengthening access to fresh food and
        encouraging responsible local production. Mazra Care&apos;s model
        connects sustainable agriculture with{" "}
        <strong className="font-semibold">
          community development, education and economic opportunity
        </strong>
        .
      </>
    ),
  },
];

export default function WhatWeFocusOn() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setExpandedCard((current) =>
      current === title ? null : title
    );
  };

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24]">
      <div
        className="
          mx-auto w-full max-w-[1600px]
          px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14
        "
      >
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="max-w-[700px]">
          {/* EYEBROW */}
          <span
            className="
      text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]
            "
          >
        What We Focus On
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-3
text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Better Resources
          </h2>

          {/* MAIN DESCRIPTION */}
          <p
            className="
              mt-4
              max-w-[680px]
          text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
            "
          >
            Sustainable agriculture begins with using resources responsibly.
            We focus on practical solutions that improve{" "}
            <strong className="font-medium text-[#536158]">
              water efficiency, space utilisation, resource management and
              sustainable food production
            </strong>
            .
          </p>

       
          {/* MAIN EXPANDED DESCRIPTION */}
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
              <p
                className="
                mt-6
                  max-w-[1000px]
       text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
                "
              >
                Every agricultural system depends on finite resources. Mazra
                Care focuses on technologies and farming methods that can help
                make better use of the resources available to each growing
                environment.
              </p>
            </div>
          </div>
   {/* MAIN READ MORE */}
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

        {/* =========================================================
            FOCUS CARDS
        ========================================================= */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            items-start
            gap-5
            sm:mt-14
            sm:grid-cols-2
            sm:gap-6
            lg:mt-[76px]
            lg:grid-cols-4
            lg:gap-6
            xl:gap-7
          "
        >
          {focusAreas.map((item) => {
            const Icon = item.icon;

            const isCardExpanded =
              expandedCard === item.title;

            return (
              <article
                key={item.title}
                className="
                  group
                  flex
                  self-start
                  min-h-[260px]
                  flex-col
                  rounded-[22px]
                  bg-[#EAF4E6]
                  p-6
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1
                  hover:bg-[#0D1A11]
                  sm:min-h-[270px]
                  sm:p-7
                  lg:min-h-[250px]
                  lg:p-8
                  xl:min-h-[260px]
                "
              >
                {/* =====================================================
                    ICON
                ===================================================== */}
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
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:bg-[#183D2B]
                    group-hover:text-[#55D5A3]
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                  />
                </div>

                {/* =====================================================
                    CARD CONTENT
                ===================================================== */}
                <div className="mt-8">
                  {/* TITLE */}
                  <h3
                    className="
                      text-[19px]
                      font-semibold
                      leading-[1.35]
                      tracking-[-0.02em]
                      text-[#111827]
                      transition-colors
                      duration-700
                      group-hover:text-white
                      sm:text-[20px]
                      md:text-[21px]
                      xl:text-[22px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* SHORT DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      max-w-[270px]
                      text-[14px]
                      leading-[1.6]
                      text-[#4B5563]
                      transition-colors
                      duration-700
                      group-hover:text-white/70
                      sm:text-[14px]
                      md:text-[15px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* ===================================================
                      CARD READ MORE
                  =================================================== */}
                  <button
                    type="button"
                    onClick={() => toggleCard(item.title)}
                    aria-expanded={isCardExpanded}
                    className="
                      group/card
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[13px]
                      font-semibold
                      text-[#17291F]
                      transition-colors
                      duration-500
                      hover:text-[#6B9B68]
                      group-hover:text-white
                      group-hover:hover:text-[#55D5A3]
                    "
                  >
                    {isCardExpanded
                      ? "Read Less"
                      : "Read More"}

                    {isCardExpanded ? (
                      <ChevronUp
                        size={16}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                        "
                      />
                    ) : (
                      <ArrowRight
                        size={16}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                          group-hover/card:translate-x-1
                        "
                      />
                    )}
                  </button>

                  {/* ===================================================
                      CARD EXPANDED CONTENT
                  =================================================== */}
                  <div
                    className={`
                      grid
                      overflow-hidden
                      transition-[grid-template-rows,opacity]
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isCardExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p
                        className="
                          pt-4
                          text-[13px]
                          leading-[1.7]
                          text-[#4B5563]
                          transition-colors
                          duration-700
                          group-hover:text-white/70
                          sm:text-[14px]
                        "
                      >
                        {item.expandedContent}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}