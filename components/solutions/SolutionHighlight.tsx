"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function SolutionHighlight() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
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
            Solutions
          </span>

          <h2
            className="
              mt-3 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Smart Solutions for Modern Farming
          </h2>

          <div className="mt-12 sm:mt-14 lg:mt-14">
            <p className="max-w-[610px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
              Mazra Care delivers smart, sustainable and technology-driven farming solutions designed for modern food production. From compact growing spaces to large-scale agricultural projects, we create systems that help grow efficiently while making responsible use of resources.
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
             Agriculture is evolving rapidly, and modern farming requires solutions that are efficient, adaptable and sustainable. Mazra Care combines agricultural expertise, innovative farming technologies and intelligent systems to develop solutions for homes, businesses, institutions and large-scale agricultural operations.

                  </p>

                  <p>
                  Our solutions are designed around the specific requirements of each project, considering available space, production goals, resource efficiency and operational needs. From hydroponic and aquaponic systems to smart greenhouses, commercial farms and industrial agricultural infrastructure, we provide integrated solutions designed to support productive and sustainable food systems.

                  </p>

                  <p>
                   By bringing technology and agriculture together, Mazra Care aims to make modern farming more accessible, manageable and future-ready. Our approach is built around one objective: helping people and businesses grow smarter while creating more sustainable agricultural systems.

                  </p>
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
            src="/solutions/Solutions.png"
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
  );
}
