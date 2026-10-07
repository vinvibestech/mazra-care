"use client";

import { useState } from "react";
import {
  Leaf,
  Cpu,
  Maximize2,
  Layers,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const features = [
  {
    title: "Sustainable",
    description:
      "We focus on responsible use of water, space and agricultural resources, supporting more efficient approaches to food production.",
    icon: Leaf,
  },
  {
    title: "Smart",
    description:
      "We integrate modern technologies such as AI, IoT, automation and smart monitoring to make agricultural systems more connected and manageable.",
    icon: Cpu,
  },
  {
    title: "Flexible",
    description:
      "Our solutions can be adapted for homes, businesses, institutions, commercial farms and large-scale agricultural projects.",
    icon: Maximize2,
  },
  {
    title: "Complete",
    description:
      "From understanding your requirements and designing the system to installation, guidance and ongoing support, we provide an integrated approach to agricultural solutions.",
    icon: Layers,
  },
];

export default function WhyChooseUs() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleReadMore = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-16">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* HEADER */}
        <div>
          <span className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
            Why Choose Us
          </span>

          <h2
            className="
              mt-3 text-[36px] font-semibold
                  leading-[1.03] tracking-[-0.045em] text-[#111827]
                  sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Built Around Your Needs
          </h2>

          <p className="mt-5 max-w-[900px]  text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
            Every agricultural project is different. Mazra Care develops{" "}
            <strong className="font-semibold text-[#26382C]">
              sustainable, smart, flexible and complete farming solutions
            </strong>{" "}
            designed around the needs of each client and environment.
          </p>
        </div>

        {/* FEATURES */}
        <div
          className="
            mt-10 grid grid-cols-1 gap-8
            sm:mt-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10
            lg:mt-14 lg:grid-cols-4 lg:gap-7
            xl:gap-10
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            const isExpanded = expandedItems.includes(feature.title);

            return (
              <article
                key={feature.title}
                className="flex items-start gap-4 sm:gap-5"
              >
                {/* ICON */}
                <div
                  className="
                flex h-[58px] w-[58px] items-center justify-center
                      rounded-full bg-[#EAF4E6] text-[#263C2F]
                      shadow-[0_2px_5px_rgba(0,0,0,0.04)]
                      transition-transform duration-500
                      hover:scale-105
                      sm:h-[64px] sm:w-[64px]
                  "
                >
                  <Icon
                   size={26} strokeWidth={1.9}
                   
                  />
                </div>

                {/* TEXT */}
                <div className="min-w-0 flex-1 pt-1">
                  <h3
                    className="
                      text-[18px] font-semibold leading-[1.3]
                      tracking-[-0.02em] text-[#18291F]
                      sm:text-[21px]
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* SMOOTH DESCRIPTION */}
                  <div
                    className={`
                      mt-2 overflow-hidden
                      transition-[max-height] duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isExpanded
                          ? "max-h-[300px]"
                          : "max-h-[3.3em]"
                      }
                    `}
                  >
                    <p className="text-[14px] leading-[1.65] text-[#66736B] sm:text-[16px]">
                      {feature.description}
                    </p>
                  </div>

                  {/* READ MORE / LESS */}
                  <button
                    type="button"
                    onClick={() => toggleReadMore(feature.title)}
                    aria-expanded={isExpanded}
                    className="
                      group mt-3 inline-flex items-center gap-1.5
                      text-[13px] font-semibold text-[#263D30]
                      transition-colors duration-300
                      hover:text-[#6B9B68]
                    "
                  >
                    {isExpanded ? "Read Less" : "Read More"}

                    {isExpanded ? (
                      <ChevronUp
                        size={15}
                        className="transition-transform duration-500"
                      />
                    ) : (
                      <ArrowRight
                        size={15}
                        className="
                          transition-transform duration-500
                          group-hover:translate-x-1
                        "
                      />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}