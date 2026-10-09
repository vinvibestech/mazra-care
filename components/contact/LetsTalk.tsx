"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function LetsTalk() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div
        className="
          mx-auto grid w-full max-w-[1600px] grid-cols-1
          items-center gap-10 px-5 sm:px-8 md:px-10
          lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]
          lg:gap-14 lg:px-12 xl:gap-20 xl:px-14
        "
      >
        {/* LEFT IMAGE
            Desktop: Left
            Tablet/Mobile: Bottom
        */}
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
            src="/contact/Let'sTalk.png"
            alt="Modern greenhouse and sustainable farming fields"
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

        {/* RIGHT CONTENT
            Desktop: Right
            Tablet/Mobile: Top
        */}
        <div
          className="
            order-1
            flex
            flex-col
            items-start
            lg:order-2
          "
        >
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
            Let's Talk
          </span>

          {/* HEADING */}
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
            Let’s Talk About Your Next Growing Project
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
              Have an idea for a farming project but aren't sure where to
              begin? Tell us what you have in mind, and we’ll help you explore
              the possibilities.
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
                    Agricultural projects can involve many decisions—from
                    selecting the right cultivation method and understanding
                    available space to considering technology, resource
                    efficiency and long-term operational requirements.
                  </p>

                  <p>
                    Mazra Care brings together knowledge across{" "}
                    <strong className="font-semibold text-black">
                      sustainable agriculture, modern farming systems, smart
                      technology and community-focused development
                    </strong>{" "}
                    to help individuals, businesses and institutions explore
                    practical opportunities.
                  </p>

                  <p>
                    Our source material describes Mazra Care's support as
                    extending from{" "}
                    <strong className="font-semibold text-black">
                      homes to industries
                    </strong>
                    , with tailored solutions across agriculture, education,
                    energy and tourism.
                  </p>

                  <p>
                    You do not need to have everything planned before contacting
                    us. Start with your idea, requirement or challenge, and we
                    can begin the conversation from there.
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

          {/* CTA */}
          <button
            type="button"
            className="
              group
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#D0D5DA]
              bg-white
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
              <ArrowRight size={14} strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}