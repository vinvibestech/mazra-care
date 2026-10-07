
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronUp,
  GraduationCap,
  Leaf,
  Sprout,
  Zap,
} from "lucide-react";

const pillars = [
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Education is positioned as a foundation for sustainable development. Mazra Care's 2025–2030 strategy includes learning programmes focused on Agritech Innovation, AI-Based Food Systems, Green Economy and Sustainability Skills, helping prepare young people for emerging sustainable industries.",
  },
  {
    title: "Agriculture",
    icon: Sprout,
    description:
      "Agriculture remains central to the model, combining traditional farming knowledge with modern technologies such as hydroponics, aquaponics, AI-driven crop management and intelligent cultivation systems.",
  },
  {
    title: "Renewable Energy",
    icon: Zap,
    description:
      "Mazra Care promotes renewable energy infrastructure and sustainable energy practices as part of its effort to reduce environmental impact.",
  },
  {
    title: "Sustainable Tourism",
    icon: Leaf,
    description:
      "Eco-tourism and climate-resilient community planning are included in Mazra Care's sustainability vision, creating opportunities to connect agriculture, energy, culture and local economic development.",
  },
];

export default function SustainabilityBeyondFarming() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="
        w-full bg-white
        py-12
        sm:py-16
        md:py-20
        lg:py-[76px]
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
        <div className="w-full">
          {/* EYEBROW */}
          <span
            className="
              text-[11px]
              font-medium
              tracking-[0.02em]
              text-[#77827D]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
        Sustainability Beyond Farming
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-3
              max-w-[860px]
       text-[36px]
    font-semibold
    leading-[1.03]
    tracking-[-0.045em]
    text-[#111827]
    sm:text-[42px]
    md:text-[46px]
    lg:text-[36px]
    xl:text-[52px]
            "
          >
            A Connected Approach to Sustainability
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5
              max-w-[1100px]
           text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
            "
          >
            Sustainability reaches beyond agriculture. Mazra Care connects{" "}
            <strong className="font-medium text-[#536158]">
              education, agriculture, renewable energy and sustainable tourism
            </strong>{" "}
            to create systems that support environmental responsibility and
            community development.
          </p>
        </div>

        {/* =====================================================
            READ MORE CONTENT
        ====================================================== */}
        <div
          className={`
            grid
            overflow-hidden
            transition-[grid-template-rows,opacity]
            duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isExpanded
                ? "mt-6 grid-rows-[1fr] opacity-100 sm:mt-8"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className="
                max-w-[1100px]
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
                Mazra Care&apos;s sustainability vision is built around
                interconnected sectors where progress in one area can support
                development in another.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            READ MORE / READ LESS
        ====================================================== */}
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className="
            group
            mt-6
            inline-flex
            items-center
            gap-2
            text-[13px]
            font-semibold
            text-[#17291F]
            transition-colors
            duration-300
            hover:text-[#6B9B68]
            sm:mt-8
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

        {/* =====================================================
            FOUR PILLARS
        ====================================================== */}
        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-4
            sm:mt-11
            sm:grid-cols-2
            sm:gap-5
            md:gap-6
            lg:mt-14
            lg:grid-cols-4
            lg:gap-5
            xl:mt-16
            xl:gap-6
          "
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="
                  group
                  flex
                  min-h-[330px]
                  flex-col
                  rounded-[20px]
                  bg-[#EAF4E6]
                  p-5
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1
                  hover:bg-[#0D1A11]
                  sm:min-h-[350px]
                  sm:rounded-[22px]
                  sm:p-6
                  md:min-h-[365px]
                  md:p-7
                  lg:min-h-[370px]
                  lg:p-6
                  xl:min-h-[405px]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-12
                    w-12
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
                    sm:h-[54px]
                    sm:w-[54px]
                    md:h-[58px]
                    md:w-[58px]
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.7}
                    className="sm:size-[26px] md:size-[27px]"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-4
                    text-[18px]
                    font-semibold
                    leading-[1.35]
                    tracking-[-0.02em]
                    text-[#111827]
                    transition-colors
                    duration-700
                    group-hover:text-white
                    sm:mt-5
                    sm:text-[19px]
                    md:text-[20px]
                    xl:text-[22px]
                  "
                >
                  {pillar.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-2
                    text-[13px]
                    leading-[1.65]
                    text-[#817D77]
                    transition-colors
                    duration-700
                    group-hover:text-white/70
                    sm:mt-3
                    sm:text-[14px]
                    md:text-[15px]
                    md:leading-[1.6]
                  "
                >
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
       <div className="min-h-0 overflow-hidden">
            <div
              className="
                mt-6
                max-w-[1100px]
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
                Together, these areas create a broader sustainability ecosystem
                designed to support{" "}
                <strong className="font-semibold text-[#17291F]">
                  people, communities, agriculture and the environment
                </strong>
                .
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
