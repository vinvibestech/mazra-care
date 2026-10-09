
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function WhyConnectWithMazraCare() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-20">
      <div
        className="
          mx-auto grid w-full max-w-[1600px] grid-cols-1
          items-center gap-10 px-5 sm:px-8 md:px-10
          lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]
          lg:gap-14 lg:px-12 xl:gap-20 xl:px-14
        "
      >
        <div
          className="
            relative order-2 aspect-[1.35/1] w-full
            overflow-hidden rounded-[28px] bg-[#EAF2EB]
            sm:rounded-[32px] lg:order-1 lg:rounded-[42px]
          "
        >
          <Image
            src="/contact/WhyConnect.png"
            alt="Modern agriculture and sustainable farming solutions"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover transition-transform duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-[1.025]
            "
          />
        </div>

        {/* RIGHT CONTENT
            Desktop: Right
            Tablet/Mobile: Top
        */}
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
        Why Connect With Mazra Care?
          </span>

          {/* HEADING */}
          <h2
            className="
              mt-3 max-w-[600px]     text-[36px]
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
            More Than a Farming Enquiry
          </h2>

          <div className="mt-8 sm:mt-10 lg:mt-12">
            {/* VISIBLE CONTENT */}
            <p
              className="
                max-w-[610px]            text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              Mazra Care brings together{" "}
              <strong className="font-semibold text-[#111827]">
                agriculture, technology, sustainability and community
                development
              </strong>{" "}
              to explore solutions for a changing world.
            </p>

            {/* EXPANDABLE CONTENT */}
            <div
              className={`
                grid overflow-hidden
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
                    max-w-[610px] space-y-5 pt-5
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
                    Mazra Care's wider mission is built around four
                    interconnected pillars:{" "}
                    <strong className="font-semibold text-black">
                      Education, Agriculture, Energy and Tourism.
                    </strong>
                  </p>

                  <p>
                    The organisation's source material describes its approach
                    as combining traditional agricultural knowledge with
                    modern technologies such as{" "}
                    <strong className="font-semibold text-black">
                      hydroponics and AI-driven crop management
                    </strong>
                    , while also connecting agriculture with renewable energy,
                    education and sustainable tourism.
                  </p>

                  <p>
                    This integrated perspective allows conversations to extend
                    beyond a single farming system and consider the wider
                    opportunities surrounding sustainable development.
                  </p>

                  <p>
                    Whether your interest is agricultural production, smart
                    farming, sustainable living, education or a larger
                    community-focused initiative, your enquiry can be the
                    first step towards exploring what is possible.
                  </p>
                </div>
              </div>
            </div>

            {/* READ MORE / READ LESS */}
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="
                group mt-6 inline-flex items-center gap-2
                text-[14px] font-semibold text-[#111827]
                transition-colors duration-300 hover:text-[#6B9B68]
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
}
