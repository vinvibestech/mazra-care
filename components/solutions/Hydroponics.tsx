"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function Hydroponics() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-34">
      <div
        className="
          mx-auto grid w-full max-w-[1600px] grid-cols-1
          items-center gap-10 px-5 sm:px-8 md:px-10
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]
          lg:gap-14 lg:px-12 xl:gap-20 xl:px-14
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">
          <span className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
           Hydroponics
          </span>

          <h2
            className="
              mt-3 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Grow More With Less
          </h2>

          <div className="mt-12 sm:mt-14 lg:mt-14">
            <p className="max-w-[610px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
             Our <strong className="font-semibold text-black"> hydroponic farming systems </strong>  enable plants to grow without traditional soil, using carefully managed water and nutrient delivery. They are designed to make efficient use of water, space and growing resources.
            </p>

            {/* EXPANDABLE CONTENT */}
            <div
              className={`grid transition-all duration-700 ease-in-out ${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-[610px] space-y-5 pt-5 text-[14px] leading-[1.7] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
                  <p>
            Hydroponics is a modern soilless farming method that allows plants to receive water and essential nutrients through a controlled growing environment. By removing the dependence on conventional soil cultivation, hydroponic systems can be implemented across a wide range of locations and applications.

                  </p>

                  <p>
                Mazra Care designs <strong className="font-semibold text-black"> turnkey hydroponic farming solutions </strong> ranging from compact kitchen gardens and residential installations to commercial agricultural systems. These solutions are designed to support controlled cultivation, efficient resource utilisation and consistent farm management.


                  </p>

                  <p>Our hydroponic solutions can be integrated with smart monitoring and automation technologies, enabling growers to manage important aspects of the growing environment more effectively.</p>
                  <p>For businesses and agricultural investors, hydroponics also offers opportunities to develop controlled production systems that can operate within space and resource constraints.</p>
                </div>
              </div>
            </div>

            {/* READ MORE BUTTON */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
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
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative aspect-[1.35/1] w-full overflow-hidden
            rounded-[28px] bg-[#EAF2EB]
            sm:rounded-[32px] lg:aspect-[1.35/1] lg:rounded-[42px]
          "
        >
          <Image
            src="/solutions/Hydroponics.png"
            alt="Modern greenhouse and sustainable farming fields"
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
      </div>
    </section>
    </>
  );
}
