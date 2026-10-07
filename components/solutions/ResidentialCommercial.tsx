"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

const sections = [
  {
    id: "residential",
    label: "Residential Farming",
    title: "Grow at Home.",
    image: "/solutions/ResidentialFarming.png",
    imageAlt: "Residential farming and modern growing space",
    visibleContent: (
      <>
        Turn balconies, terraces, rooftops and backyards into productive green
        spaces with{" "}
        <strong className="font-semibold text-black">
          residential farming solutions
        </strong>{" "}
        designed for modern homes. Grow fresh produce closer to where you live,
        using practical and space-efficient systems.
      </>
    ),
    expandedContent: (
      <>
        <p>
          Residential farming brings modern agricultural technology into
          everyday living spaces.
        </p>

        <p>
          Mazra Care develops compact farming solutions that can be adapted to{" "}
          <strong className="font-semibold text-black">
            homes, balconies, terraces, rooftops, gardens and backyards
          </strong>
          , allowing families to participate directly in food production.
        </p>

        <p>
          From compact hydroponic systems to aquaponic solutions such as BAMM,
          residential farming can provide families with practical
          opportunities to grow fresh vegetables and explore sustainable food
          production within available space.
        </p>

        <p>
          Our residential solutions are designed with usability in mind,
          making modern farming more accessible to households that may have
          limited land but still want to participate in sustainable
          agriculture.
        </p>
      </>
    ),
    imageFirst: true,
  },
  {
    id: "commercial",
    label: "Commercial Farming",
    title: "Built to Grow With Your Business.",
    image: "/solutions/CommercialFarming.png",
    imageAlt: "Commercial greenhouse farming facility",
    visibleContent: (
      <>
        Our{" "}
        <strong className="font-semibold text-black">
          commercial farming solutions
        </strong>{" "}
        are designed for restaurants, businesses, institutions and
        food-production operations seeking scalable and efficient agricultural
        systems. We build solutions around production goals, available space
        and operational requirements.
      </>
    ),
    expandedContent: (
      <>
        <p>
          Commercial agriculture requires systems that balance productivity,
          resource management, operational efficiency and scalability.
        </p>

        <p>
          Mazra Care develops{" "}
          <strong className="font-semibold text-black">
            commercial hydroponic, aquaponic, aeroponic and greenhouse
            solutions
          </strong>{" "}
          for businesses and institutions seeking modern approaches to food
          production.
        </p>

        <p>
          Our solutions can be tailored to the intended production scale, crop
          requirements, available infrastructure and long-term business
          objectives. From initial planning and system design through
          installation and ongoing support, we help clients establish
          agricultural systems designed around their operational needs.
        </p>

        <p>
          Our source material also describes solutions intended for{" "}
          <strong className="font-semibold text-black">
            homes, businesses and government institutions
          </strong>
          , with systems designed to be easy to operate and supported by expert
          engineering.
        </p>
      </>
    ),
    imageFirst: false,
  },
];

export default function ResidentialCommercial() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleExpanded = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {sections.map((section, index) => {
        const isExpanded = expandedSections[section.id] ?? false;

        return (
          <section
            key={section.id}
            className={`w-full bg-white py-14 sm:py-16 md:py-20 ${
              index === 0 ? "lg:py-12" : "lg:py-20"
            }`}
          >
            <div
              className={`
                mx-auto grid w-full max-w-[1600px] grid-cols-1
                items-center gap-10 px-5 sm:px-8 md:px-10
                lg:gap-14 lg:px-12 xl:gap-20 xl:px-14
                ${
                  section.imageFirst
                    ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]"
                    : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]"
                }
              `}
            >
              {/* IMAGE */}
              <div
                className={`
                  relative order-1 aspect-[1.35/1] w-full overflow-hidden
                  rounded-[28px] bg-[#EAF2EB]
                  sm:rounded-[32px] lg:rounded-[42px]
                  ${section.imageFirst ? "lg:order-1" : "lg:order-2"}
                `}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform duration-[1200ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:scale-[1.025]
                  "
                />
              </div>

              {/* CONTENT */}
              <div
                className={`
                  order-2 flex flex-col items-start
                  ${section.imageFirst ? "lg:order-2" : "lg:order-1"}
                `}
              >
                <span className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
                  {section.label}
                </span>

                <h2
                  className="
                    mt-3 max-w-[600px] text-[36px] font-semibold
                    leading-[1.03] tracking-[-0.045em] text-[#111827]
                    sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
                  "
                >
                  {section.title}
                </h2>

                <div className="mt-10 sm:mt-12 lg:mt-14">
                  {/* Visible Content */}
                  <p className="max-w-[610px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
                    {section.visibleContent}
                  </p>

                  {/* Expandable Content */}
                  <div
                    className={`
                      grid transition-[grid-template-rows,opacity]
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-[610px] space-y-5 pt-5 text-[14px] leading-[1.7] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
                        {section.expandedContent}
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpanded(section.id)}
                    aria-expanded={isExpanded}
                    className="
                      group mt-6 inline-flex items-center gap-2
                      text-[14px] font-semibold text-[#111827]
                      transition-colors duration-300
                      hover:text-[#6B9B68]
                    "
                  >
                    {isExpanded ? "Read Less" : "Read More"}

                    {isExpanded ? (
                      <ChevronUp
                        size={17}
                        className="transition-transform duration-300"
                      />
                    ) : (
                      <ArrowRight
                        size={17}
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-1
                        "
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}