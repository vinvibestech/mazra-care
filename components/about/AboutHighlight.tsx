"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function AboutHighlight() {
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
            About Us
          </span>

          <h2
            className="
              mt-3 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Growing a Smarter, More Sustainable Future
          </h2>

          <div className="mt-12 sm:mt-14 lg:mt-14">
            <p className="max-w-[610px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
              Mazra Care brings together agriculture, technology and
              innovation to create smarter, more sustainable farming
              solutions for a changing world. We are building practical
              systems that make growing food more efficient, accessible
              and future-ready.
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
                    At Mazra Care, we believe the future of agriculture
                    lies in combining responsible farming practices with
                    modern technology. Our approach focuses on developing{" "}
                    <strong className="font-semibold text-black">
                      sustainable agricultural solutions
                    </strong>{" "}
                    that can support homes, businesses, communities and
                    larger-scale farming environments.
                  </p>

                  <p>
                    From advanced growing systems to technology-enabled
                    farm management, we work to make agriculture smarter,
                    simpler and more resource-efficient. Our solutions
                    are designed around the evolving needs of modern
                    growers while keeping sustainability, productivity
                    and long-term value at the centre.
                  </p>

                  <p>
                    Our vision extends beyond farming alone. Through the
                    integration of{" "}
                    <strong className="font-semibold text-black">
                      agriculture, education, renewable energy and
                      sustainable tourism
                    </strong>
                    , Mazra Care aims to contribute to stronger
                    communities, greater environmental awareness and a
                    more resilient future.
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
            src="/about/AboutUs.png"
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
