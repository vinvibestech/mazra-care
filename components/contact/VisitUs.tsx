"use client";

import { useState } from "react";
import {
  MapPin,
  ArrowRight,
  ChevronUp,
  Navigation,
} from "lucide-react";

export default function VisitUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="
        w-full
        bg-white
        py-12
        sm:py-16
        md:py-20
        lg:py-24
        xl:py-24
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-10
          px-4
          sm:px-6
          md:px-8
          lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]
          lg:gap-12
          lg:px-12
          xl:gap-20
          xl:px-14
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="order-1 flex min-w-0 flex-col items-start">
          {/* EYEBROW */}
          <span
            className="
              text-[11px]
              font-medium
              tracking-[0.02em]
              text-[#667085]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Visit Us
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-3
              max-w-[650px]
              text-[clamp(30px,6vw,52px)]
              font-semibold
              leading-[1.06]
              tracking-[-0.045em]
              text-[#111827]
              sm:mt-4
            "
          >
            Let’s Meet
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              max-w-[650px]
              text-[14px]
              leading-[1.65]
              text-[#617067]
              sm:mt-5
              sm:text-[15px]
              md:text-[16px]
              lg:text-[17px]
              xl:text-[18px]
            "
          >
            Have a project to discuss? Visit us in{" "}
            <strong className="font-semibold text-[#27352D]">
              Dubai, UAE
            </strong>
            , and speak with our team about your farming or sustainability
            requirements.
          </p>

          {/* =================================================
              EXPANDABLE CONTENT
          ================================================== */}
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
                  ? "mt-5 grid-rows-[1fr] opacity-100 sm:mt-6"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className="
                  max-w-[650px]
                  space-y-4
                  pt-2
                  text-[13px]
                  leading-[1.7]
                  text-[#617067]
                  sm:space-y-5
                  sm:pt-3
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[16px]
                "
              >
                <p>
                  A direct conversation can be the starting point for
                  understanding your project in greater detail.
                </p>

                <p>
                  Whether you are exploring a new agricultural venture,
                  planning a smart farming system, considering a hydroponic or
                  greenhouse project, or looking for sustainable solutions for
                  your organisation, meeting with the Mazra Care team can help
                  you take the next step.
                </p>

                <p>
                  Our UAE presence supports our broader vision of developing
                  sustainable solutions with a{" "}
                  <strong className="font-semibold text-[#27352D]">
                    global outlook and international reach.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              READ MORE
          ================================================== */}
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-2
              text-[13px]
              font-semibold
              text-[#111827]
              transition-colors
              duration-300
              hover:text-[#6B9B68]
              sm:mt-6
              sm:text-[14px]
            "
          >
            {isExpanded ? "Read Less" : "Read More"}

            {isExpanded ? (
              <ChevronUp
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300"
              />
            ) : (
              <ArrowRight
                size={16}
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

        {/* =====================================================
            RIGHT LOCATION CARD
        ====================================================== */}
        <div
          className="
            order-2
            relative
            min-h-[400px]
            w-full
            overflow-hidden
            rounded-[24px]
            bg-[#EAF4E6]
            p-5
            sm:min-h-[440px]
            sm:rounded-[28px]
            sm:p-7
            md:min-h-[470px]
            md:p-8
            lg:min-h-[500px]
            lg:rounded-[36px]
            lg:p-9
            xl:rounded-[42px]
            xl:p-10
          "
        >
          {/* MAP GRID */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-60
              [background-image:linear-gradient(rgba(39,83,56,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(39,83,56,0.07)_1px,transparent_1px)]
              [background-size:32px_32px]
              sm:[background-size:38px_38px]
              md:[background-size:42px_42px]
            "
          />

          {/* DECORATIVE CIRCLE TOP */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-[#DCE9DD]
              opacity-60
              blur-[2px]
              sm:h-64
              sm:w-64
            "
          />

          {/* DECORATIVE CIRCLE BOTTOM */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-64
              w-64
              rounded-full
              bg-[#DCE9DD]
              opacity-70
              sm:h-72
              sm:w-72
            "
          />

          {/* LOCATION CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[350px]
              h-full
              flex-col
              justify-between
              sm:min-h-[385px]
              md:min-h-[410px]
              lg:min-h-[420px]
            "
          >
            <div>
              {/* LOCATION ICON */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#DCE9DD]
                  text-[#285438]
                  sm:h-[54px]
                  sm:w-[54px]
                  md:h-[60px]
                  md:w-[60px]
                "
              >
                <MapPin
                  size={24}
                  strokeWidth={1.8}
                  className="sm:size-[26px] md:size-[27px]"
                />
              </div>

              {/* LOCATION LABEL */}
              <span
                className="
                  mt-6
                  block
                  text-[11px]
                  font-medium
                  tracking-[0.02em]
                  text-[#667085]
                  sm:mt-7
                  sm:text-[12px]
                  md:mt-8
                  md:text-[13px]
                "
              >
                Location
              </span>

              {/* LOCATION TITLE */}
              <h3
                className="
                  mt-2
                  max-w-[450px]
                  text-[25px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#1F2B23]
                  sm:mt-3
                  sm:text-[28px]
                  md:text-[32px]
                  lg:text-[38px]
                "
              >
                Dubai, United Arab Emirates
              </h3>

              {/* LOCATION DESCRIPTION */}
              <p
                className="
                  mt-3
                  max-w-[420px]
                  text-[13px]
                  leading-[1.65]
                  text-[#617067]
                  sm:mt-4
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[16px]
                "
              >
                Visit our UAE presence and connect with the Mazra Care team to
                discuss your agricultural or sustainability project.
              </p>
            </div>

{/* CTA */}
<a
  href="https://www.google.com/maps/search/?api=1&query=Dubai%2C%20United%20Arab%20Emirates"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    mt-7
    inline-flex
    w-fit
    self-start
    shrink-0
    items-center
    gap-3
    rounded-full
    border
    border-[#D0D5DA]
   
    px-5
    py-3
    text-[14px]
    font-semibold
    text-[#111827]
    transition-all
    duration-300
    hover:border-[#111827]
    hover:bg-[#111827]
    hover:text-white
  "
>
  <span>Get in Touch</span>

  <span
    className="
      flex
      h-7
      w-7
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-[#111827]
      text-white
      transition-all
      duration-300
      group-hover:bg-white
      group-hover:text-[#111827]
    "
  >
    <ArrowRight
      size={14}
      strokeWidth={2}
    />
  </span>
</a>
          </div>
        </div>
      </div>
    </section>
  );
}