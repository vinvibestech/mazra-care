"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function SustainabilityOurApproach() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-12">
      <div
        className="
          mx-auto grid w-full max-w-[1600px] grid-cols-1
          items-center gap-10 px-5 sm:px-8 md:px-10
          lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]
          lg:gap-14 lg:px-12 xl:gap-20 xl:px-14
        "
      >
        {/* =========================================================
            CONTENT
            Mobile/Tablet: TOP
            Desktop: RIGHT
        ========================================================= */}
        <div className="order-1 flex flex-col items-start lg:order-2">
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
            Our Approach
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-3
              max-w-[600px]
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
            Farming With Purpose
          </h2>

          <div className="mt-12 sm:mt-14 lg:mt-14">
            {/* VISIBLE CONTENT */}
            <p
              className="
                max-w-[610px]
                text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              We combine{" "}
              <strong className="font-semibold text-black">
                sustainable practices, modern technology and efficient farming
                systems
              </strong>{" "}
              to create better ways of growing. Our goal is simple:{" "}
              <strong className="font-semibold text-black">
                Grow More. Waste Less. Protect Tomorrow.
              </strong>
            </p>

            {/* EXPANDABLE CONTENT */}
            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className="
                    max-w-[610px]
                    space-y-5
                    pt-5
                    text-[14px]
                    leading-[1.7]
                    text-[#4B5563]
                    sm:text-[15px]
                    md:text-[16px]
                    lg:text-[15px]
                    xl:text-[16px]
                  "
                >
                  <p>
                    Mazra Care approaches sustainability as an integrated part
                    of modern agriculture rather than a separate initiative.
                    Our farming systems are designed to consider how water,
                    space, nutrients, energy and technology can work together
                    more efficiently.
                  </p>

                  <p>
                    We use modern cultivation methods such as{" "}
                    <strong className="font-semibold text-black">
                      hydroponics and aquaponics
                    </strong>
                    , supported by technologies including AI-driven
                    agriculture, intelligent nutrient delivery,
                    precision-controlled lighting and smart monitoring. These
                    approaches are intended to improve resource efficiency
                    while supporting productive food cultivation.
                  </p>

                  <p>
                    Our sustainability vision also extends beyond agricultural
                    production. Through{" "}
                    <strong className="font-semibold text-black">
                      renewable energy, education, sustainable tourism and
                      community-focused initiatives
                    </strong>
                    , Mazra Care aims to create opportunities that connect
                    environmental responsibility with social and economic
                    development.
                  </p>

                  <p>
                    The result is an approach to agriculture that seeks to be{" "}
                    <strong className="font-semibold text-black">
                      productive, efficient, responsible and adaptable to future
                      needs
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* READ MORE BUTTON */}
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
                  className="transition-transform duration-300"
                />
              ) : (
                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              )}
            </button>
          </div>
        </div>

        {/* =========================================================
            IMAGE
            Mobile/Tablet: BOTTOM
            Desktop: LEFT
        ========================================================= */}
        <div
          className="
            relative
            order-2
            aspect-[1.35/1]
            w-full
            overflow-hidden
            rounded-[28px]
            bg-[#EAF2EB]
            sm:rounded-[32px]
            lg:order-1
            lg:rounded-[42px]
          "
        >
          <Image
            src="/sustainability/OurApproach.png"
            alt="Sustainable farming and modern agricultural systems"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-[1.025]
            "
          />
        </div>
      </div>
    </section>
  );
}