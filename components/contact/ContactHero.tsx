"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function ContactHero() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:pt-36 lg:pb-24">
      <div
        className="
          mx-auto grid w-full max-w-[1600px] grid-cols-1
          items-center gap-10 px-5 sm:px-8 md:px-10
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]
          lg:gap-14 lg:px-12 xl:gap-20 xl:px-14
        "
      >

        <div className="order-1 flex flex-col items-start">
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
            Contact Us
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
            Let’s Grow Something Better
          </h2>

          {/* SUBTITLE */}
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
            Have a farming idea, a space to transform, or a sustainable
            agriculture project in mind? Let’s talk.
          </p>

          <div className="mt-12 sm:mt-14 lg:mt-14">
            {/* =====================================================
                VISIBLE CONTENT
            ===================================================== */}
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
              Whether you are planning a{" "}
              <strong className="font-semibold text-black">
                home garden, hydroponic system, greenhouse, commercial farm or
                a larger agricultural project
              </strong>
              , Mazra Care is here to help you explore the right solution.
            </p>

            {/* =====================================================
                EXPANDABLE CONTENT
            ===================================================== */}
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
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
                  "
                >
                  {/* PARAGRAPH 1 */}
                  <p>
                    At Mazra Care, we believe every space has the potential to
                    contribute to a smarter and more sustainable future. Our
                    approach brings together{" "}
                    <strong className="font-semibold text-black">
                      modern agriculture, sustainable farming practices and
                      smart technology
                    </strong>{" "}
                    to develop solutions suited to different spaces, needs and
                    scales.
                  </p>

                  {/* PARAGRAPH 2 */}
                  <p>
                    Whether you are an individual exploring home farming, a
                    business planning a commercial growing system, an
                    institution looking for an agricultural solution, or a
                    community exploring sustainable development, our team can
                    help you understand the possibilities and identify an
                    approach suited to your objectives.
                  </p>

                  {/* PARAGRAPH 3 */}
                  <p>
                    From{" "}
                    <strong className="font-semibold text-black">
                      hydroponics, aquaponics and aeroponics to smart farming,
                      controlled growing environments and sustainable
                      agricultural solutions
                    </strong>
                    , we aim to turn ideas into practical opportunities.
                  </p>

                  {/* FINAL STATEMENT */}
                  <p>
                    <strong className="font-semibold text-black">
                      Let’s start a conversation about what you want to grow.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                READ MORE / READ LESS
            ===================================================== */}
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
            lg:aspect-[1.35/1]
            lg:rounded-[42px]
          "
        >
          <Image
            src="/contact/contactHero.png"
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