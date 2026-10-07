"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function PrecisionTechnology() {
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
        {/* LEFT IMAGE */}
        <div
          className="
            relative order-1 aspect-[1.35/1] w-full overflow-hidden
            rounded-[28px] bg-[#EAF2EB]
            sm:rounded-[32px] lg:rounded-[42px]
          "
        >
          <Image
            src="/tech/Precision.png"
            alt="Precision technology for crop growth"
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

        {/* RIGHT CONTENT */}
        <div className="order-2 flex flex-col items-start">
          <span className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
            Precision Technology For Crop Growth
          </span>

          <h2
            className="
              mt-3 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Technology Designed Around the Crop
          </h2>

          <div className="mt-12 sm:mt-14 lg:mt-14">
            {/* VISIBLE CONTENT */}
            <p
              className="
                max-w-[610px] text-[14px] leading-[1.55] text-[#4B5563]
                sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
              "
            >
              Mazra Care combines controlled growing systems with technologies
              that help manage{" "}
              <strong className="font-semibold text-black">
                light, nutrients and growing conditions
              </strong>{" "}
              according to agricultural requirements.
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
                    text-[14px] leading-[1.7] text-[#4B5563]
                    sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
                  "
                >
                  <p>
                    The Mazra Care source material identifies{" "}
                    <strong className="font-semibold text-black">
                      precision-controlled LED lighting
                    </strong>{" "}
                    and{" "}
                    <strong className="font-semibold text-black">
                      intelligent nutrient delivery
                    </strong>{" "}
                    among its innovative farming technologies.
                  </p>

                  <p>
                    Precision-controlled lighting can help create consistent
                    growing conditions within controlled environments, while
                    intelligent nutrient delivery focuses on providing targeted
                    nutrients according to crop requirements.
                  </p>

                  <p>
                    These technologies can be integrated with hydroponic,
                    aquaponic and other controlled farming systems to create a
                    more structured growing environment.
                  </p>

                  <p>
                    By combining cultivation technology with intelligent
                    resource management, Mazra Care aims to support{" "}
                    <strong className="font-semibold text-black">
                      efficient, controlled and technology-enabled crop
                      production
                    </strong>
                    .
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
      </div>
    </section>
  );
}