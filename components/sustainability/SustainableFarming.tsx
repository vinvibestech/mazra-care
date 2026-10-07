"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

const resources = ["Water", "Energy", "Space", "Nutrients"];

export default function SustainableFarming() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-[76px]">
      <div
        className="
          mx-auto grid w-full max-w-[1600px]
          grid-cols-1 items-center
          gap-10
          px-5
          sm:px-8
          md:px-10
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]
          lg:gap-14
          lg:px-12
          xl:gap-20
          xl:px-14
        "
      >
        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}
        <div className="order-1 flex flex-col items-start lg:order-1">
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
         Sustainable Farming
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
            Less Waste.
            <br />
            More Growth.
          </h2>

          {/* VISIBLE DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-[650px]
                text-[16px]
                leading-[1.65]
                text-[#58685F]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[18px]
            "
          >
            Our{" "}
            <strong className="font-medium text-[#536158]">
              hydroponic, aquaponic and controlled farming systems
            </strong>{" "}
            are designed to make better use of available resources while
            supporting efficient food production. Every resource matters.
          </p>

          {/* RESOURCE PILLS */}
          <div className="mt-9 flex flex-wrap gap-3 sm:mt-10">
            {resources.map((resource) => (
              <span
                key={resource}
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-[#F0F2EC]
                  px-5
                  py-2
                  text-[13px]
                  font-medium
                  text-[#34443A]
                  sm:px-5
                  sm:py-[9px]
                  sm:text-[14px]
                "
              >
                {resource}
              </span>
            ))}
          </div>

         

          {/* =========================================================
              EXPANDED CONTENT
          ========================================================= */}
          <div
            className={`
              grid
              w-full
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
                  max-w-[650px]
                  pt-7
               text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
                "
              >
                {/* INTRO */}
                <p>
                  Mazra Care promotes modern farming methods that can help
                  address challenges associated with traditional agricultural
                  production.
                </p>

                {/* CULTIVATION METHODS */}
                <p className="mt-5">
                  Our portfolio includes{" "}
                  <strong className="font-semibold text-[#17291F]">
                    hydroponics, aquaponics and aeroponics
                  </strong>
                  , providing soilless and controlled cultivation options for
                  different environments. These systems are designed to support
                  efficient production while making more deliberate use of
                  water, nutrients, space and other agricultural inputs.
                </p>

                {/* APPROACH */}
                <p className="mt-5">
                  By combining modern cultivation methods with responsible
                  resource management, Mazra Care seeks to create farming
                  systems that are{" "}
                  <strong className="font-semibold text-[#17291F]">
                    productive, scalable and aligned with sustainable
                    agriculture principles
                  </strong>
                  .
                </p>

                {/* RESOURCE DETAILS */}
                <div className="mt-7 space-y-5">
                  {/* WATER */}
                  <div>
                    <h3 className="font-semibold text-[#17291F]">
                      Water
                    </h3>

                    <p className="mt-1">
                      Efficient cultivation and responsible water management.
                    </p>
                  </div>

                  {/* ENERGY */}
                  <div>
                    <h3 className="font-semibold text-[#17291F]">
                      Energy
                    </h3>

                    <p className="mt-1">
                      Smarter use of energy across agricultural systems.
                    </p>
                  </div>

                  {/* SPACE */}
                  <div>
                    <h3 className="font-semibold text-[#17291F]">
                      Space
                    </h3>

                    <p className="mt-1">
                      Productive growing in controlled and available spaces.
                    </p>
                  </div>

                  {/* NUTRIENTS */}
                  <div>
                    <h3 className="font-semibold text-[#17291F]">
                      Nutrients
                    </h3>

                    <p className="mt-1">
                      Targeted nutrient management for crop requirements.
                    </p>
                  </div>
                </div>
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
              mt-9
              inline-flex
              items-center
              gap-2
              text-[14px]
              font-semibold
              text-[#17291F]
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
            RIGHT IMAGE
        ========================================================= */}
        <div
          className="
            relative
            order-1
            aspect-[1.38/1]
            w-full
            overflow-hidden
            rounded-[28px]
            bg-[#EAF2EB]
            sm:rounded-[32px]
            lg:order-2
            lg:aspect-[1.35/1]
            lg:rounded-[42px]
          "
        >
          <Image
            src="/sustainability/SustainableFarming.png"
            alt="Sustainable hydroponic farming system"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
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