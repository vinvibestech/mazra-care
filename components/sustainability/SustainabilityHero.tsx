"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function SustainabilityHero() {
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
  Sustainability
</span>

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
  Growing With the Planet
</h2>

<p
  className="
    mt-5
    max-w-[600px]
    text-[20px]
    font-medium
    leading-[1.35]
    tracking-[-0.02em]
    text-[#27352D]
    sm:text-[22px]
    md:text-[22px]
  "
>
  Smarter farming. Better use of resources.
  <br/>
   A more sustainable future.
</p>

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
              At Mazra Care, we believe agriculture can produce more while
              using natural resources responsibly. Our approach combines{" "}
              <strong className="font-semibold text-black">
                sustainable farming, innovative technology and efficient
                agricultural systems
              </strong>{" "}
              to create a more responsible way to grow.
            </p>

            {/* EXPANDABLE CONTENT */}
            <div
              className={`
                grid
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
                    As agriculture faces increasing pressure on water, land,
                    energy and food systems, the future of farming depends on
                    using resources more intelligently. Mazra Care focuses on
                    developing{" "}
                    <strong className="font-semibold text-black">
                      sustainable agricultural solutions
                    </strong>{" "}
                    that balance productivity with responsible resource
                    management.
                  </p>

                  <p>
                    Our approach brings together{" "}
                    <strong className="font-semibold text-black">
                      hydroponics, aquaponics, aeroponics, controlled farming,
                      renewable energy and smart agricultural technologies
                    </strong>{" "}
                    to support efficient food production while reducing
                    unnecessary resource consumption.
                  </p>

                  <p>
                    Sustainability, for us, extends beyond the farm. It
                    includes{" "}
                    <strong className="font-semibold text-black">
                      education, community development, renewable energy,
                      sustainable tourism and economic empowerment
                    </strong>
                    —creating interconnected systems that can contribute to
                    healthier communities and a more resilient future.
                  </p>

                  <p>
                    <strong className="font-semibold text-black">
                      Grow more responsibly. Use resources intelligently. Build
                      for tomorrow.
                    </strong>
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
                  strokeWidth={1.8}
                  className="transition-transform duration-300"
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
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            aspect-[1.35/1]
            w-full
            overflow-hidden
            rounded-[28px]
            bg-[#EAF2EB]
            sm:rounded-[32px]
            lg:aspect-[1.35/1]
            lg:rounded-[42px]
          "
        >
          <Image
            src="/sustainability/Sustainability.png"
            alt="Sustainable farming and responsible agriculture"
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