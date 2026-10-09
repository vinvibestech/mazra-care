"use client";

import { useState } from "react";
import {
  Droplets,
  Fish,
  Wind,
  Warehouse,
  Cpu,
  Home,
  Building2,
  Leaf,
  ArrowUpRight,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

const enquiryCards = [
  {
    number: "01",
    title: "Hydroponic Farming",
    description:
      "Soilless cultivation systems designed for controlled and efficient growing.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Aquaponic Farming",
    description:
      "Integrated systems connecting fish and plant production.",
    icon: Fish,
  },
  {
    number: "03",
    title: "Aeroponic Farming",
    description:
      "Advanced soilless cultivation approaches for efficient plant production.",
    icon: Wind,
  },
  {
    number: "04",
    title: "Greenhouse Projects",
    description:
      "Controlled growing environments designed around specific agricultural requirements.",
    icon: Warehouse,
  },
  {
    number: "05",
    title: "Smart Agriculture",
    description:
      "Technology-enabled farming using AI, IoT and intelligent monitoring.",
    icon: Cpu,
  },
  {
    number: "06",
    title: "Residential Farming",
    description:
      "Agricultural systems designed for homes, gardens and smaller spaces.",
    icon: Home,
  },
  {
    number: "07",
    title: "Commercial Farming",
    description:
      "Scalable agricultural solutions for businesses and food production.",
    icon: Building2,
  },
  {
    number: "08",
    title: "Sustainable Development Projects",
    description:
      "Integrated initiatives connecting agriculture with education, energy and community development.",
    icon: Leaf,
  },
];

export default function WhatCanYouEnquireAbout() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="
        w-full
        bg-white
        py-12
        sm:py-16
        md:py-20
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="w-full max-w-[950px]">
          {/* EYEBROW */}
          <span
            className="
              text-[11px]
              font-medium
              tracking-[0.02em]
              text-[#6B7280]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            What Can You Enquire About
          </span>

          {/* MAIN TITLE */}
          <h2
            className="
              mt-3
              max-w-[850px]
              text-[clamp(30px,6vw,52px)]
              font-semibold
              leading-[1.06]
              tracking-[-0.045em]
              text-[#111827]
            "
          >
            Tell Us What You’re Building
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              max-w-[850px]
              text-[14px]
              leading-[1.6]
              text-[#4B5563]
              sm:mt-5
              sm:text-[15px]
              md:text-[16px]
              lg:text-[15px]
              xl:text-[16px]
            "
          >
            From sustainable farming systems to smart agricultural projects,
            our team can help you explore solutions aligned with your{" "}
            <strong className="font-semibold text-[#27352D]">
              space, goals and requirements
            </strong>
            .
          </p>

          {/* =================================================
              EXPANDABLE CONTENT
          ================================================== */}
          <div
            className={`
              grid
              overflow-hidden
              transition-[grid-template-rows,opacity]
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isExpanded
                  ? "mt-5 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0 overflow-hidden">
              <p
                className="
                  max-w-[850px]
                  pt-2
                  text-[13px]
                  leading-[1.65]
                  text-[#4B5563]
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[16px]
                "
              >
                Your enquiry can relate to a wide range of agricultural and
                sustainability-focused projects, including:
              </p>
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
              text-[13px]
              font-semibold
              text-[#111827]
              transition-colors
              duration-300
              hover:text-[#6B9B68]
              sm:text-[14px]
            "
          >
            {isExpanded ? "Read Less" : "Read More"}

            {isExpanded ? (
              <ChevronUp
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300"
              />
            ) : (
              <ArrowRight
                size={16}
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

        {/* =====================================================
            ENQUIRY LIST
        ====================================================== */}
        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-3
            sm:mt-11
            sm:gap-4
            lg:mt-16
            lg:block
          "
        >
          {enquiryCards.map((item) => {
            const Icon = item.icon;

            return (
            <article
  key={item.number}
  className="
    group
    relative
    min-w-0
    overflow-hidden
    rounded-[18px]
    border
    border-[#DDE5DD]
    bg-white
    px-4
    py-5

    transition-all
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]

    hover:-translate-y-[2px]
    hover:border-[#DCE9D9]
    hover:bg-[#EAF4E6]

    sm:px-5
    sm:py-6

    md:px-6
    md:py-7

    lg:mb-2
    lg:grid
    lg:grid-cols-[70px_58px_minmax(0,1fr)_50px]
    lg:items-center
    lg:gap-7
    lg:rounded-[18px]
    lg:border-x-0
    lg:border-t-0
    lg:border-b
    lg:py-7

    xl:grid-cols-[80px_58px_minmax(0,1fr)_50px]
    xl:gap-8
    xl:px-7
    xl:py-8
  "
>
  {/* =========================================
      MOBILE / TABLET TOP
  ========================================== */}
  <div
    className="
      flex
      items-center
      gap-4

      lg:contents
    "
  >
    {/* NUMBER */}
    <span
      className="
        shrink-0
        text-[12px]
        font-medium
        tracking-[0.04em]
        text-[#9AA59D]

        transition-all
        duration-500

        group-hover:translate-x-1
        group-hover:text-[#55795A]

        sm:text-[13px]
        md:text-[14px]

        lg:text-[15px]
      "
    >
      {item.number}
    </span>

    {/* ICON */}
    <div
      className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#EAF4E6]
        text-[#263C2B]

        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        group-hover:scale-105
        group-hover:bg-[#183D2B]
        group-hover:text-[#55D5A3]

        sm:h-12
        sm:w-12

        md:h-[54px]
        md:w-[54px]

        lg:h-[58px]
        lg:w-[58px]
      "
    >
      <Icon
        size={21}
        strokeWidth={1.7}
        className="
          sm:size-[22px]
          md:size-[23px]
        "
      />
    </div>
  </div>

  {/* =========================================
      CONTENT
  ========================================== */}
  <div
    className="
      mt-5
      min-w-0
      pr-2

      sm:mt-5

      md:mt-6

      lg:mt-0
      lg:pr-0
    "
  >
    <h3
      className="
        text-[17px]
        font-semibold
        leading-[1.25]
        tracking-[-0.02em]
        text-[#111827]

        transition-colors
        duration-500

        group-hover:text-[#183D2B]

        sm:text-[18px]
        md:text-[20px]
        lg:text-[22px]
      "
    >
      {item.title}
    </h3>

    <p
      className="
        mt-2
        max-w-[850px]
        text-[13px]
        leading-[1.65]
        text-[#718078]

        transition-colors
        duration-500

        group-hover:text-[#53675A]

        sm:text-[14px]
        md:text-[14px]
        lg:text-[15px]
      "
    >
      {item.description}
    </p>
  </div>

  {/* =========================================
      ARROW
  ========================================== */}
  <div
    className="
      mt-5
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-[#D7DED7]
      bg-white
      text-[#263C2B]

      transition-all
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]

      group-hover:scale-105
      group-hover:border-[#183D2B]
      group-hover:bg-[#183D2B]
      group-hover:text-[#55D5A3]

      sm:h-10
      sm:w-10

      md:h-11
      md:w-11

      lg:mt-0
      lg:h-[50px]
      lg:w-[50px]
    "
  >
    <ArrowUpRight
      size={17}
      strokeWidth={1.7}
      className="
        transition-transform
        duration-500

        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5

        sm:size-[18px]
        md:size-[19px]
      "
    />
  </div>
</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
