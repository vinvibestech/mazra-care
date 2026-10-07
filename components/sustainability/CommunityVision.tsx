
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function CommunityVision() {
  const [isCommunityExpanded, setIsCommunityExpanded] = useState(false);
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);

  return (
    <>
      {/* =========================================================
          COMMUNITY & SOCIAL SUSTAINABILITY
          LEFT IMAGE — RIGHT CONTENT
      ========================================================== */}

      <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-20">
        <div
          className="
            mx-auto grid w-full max-w-[1600px]
            grid-cols-1 items-center
            gap-10 px-5
            sm:px-8
            md:px-10
            lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]
            lg:gap-14
            lg:px-12
            xl:gap-20
            xl:px-14
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              relative
              order-1
              aspect-[1.35/1]
              w-full
              overflow-hidden
              rounded-[28px]
              bg-[#EAF2EB]
              sm:rounded-[32px]
              lg:rounded-[42px]
            "
          >
            <Image
              src="/sustainability/CommunitySocial.png"
              alt="Community and social sustainability"
              fill
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

          {/* RIGHT CONTENT */}
          <div className="order-2 flex flex-col items-start">
            <span
              className="
                text-[12px] font-medium
                tracking-[0.02em] text-[#6B7280]
                sm:text-[13px] md:text-[14px]
              "
            >
              Community & Social Sustainability
            </span>

            <h2
              className="
                mt-3 max-w-[600px] text-[36px] font-semibold
                leading-[1.03] tracking-[-0.045em] text-[#111827]
                sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
              "
            >
              Sustainability That Includes People
            </h2>

            <div className="mt-12 sm:mt-14 lg:mt-14">
              {/* VISIBLE CONTENT */}
              <p
                className="
                  max-w-[610px]
                  text-[14px] leading-[1.55]
                  text-[#4B5563]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[15px]
                  xl:text-[16px]
                "
              >
                A sustainable future must benefit people as well as the planet.
                Mazra Care connects{" "}
                <strong className="font-semibold text-black">
                  agriculture, education and economic opportunity
                </strong>{" "}
                to help individuals, families and communities participate in
                sustainable development.
              </p>

              {/* EXPANDED CONTENT */}
              <div
                className={`
                  grid overflow-hidden
                  transition-[grid-template-rows,opacity]
                  duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isCommunityExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className="
                      max-w-[610px]
                      space-y-5 pt-5
                      text-[14px] leading-[1.7]
                      text-[#4B5563]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[15px]
                      xl:text-[16px]
                    "
                  >
                    <p>
                      Mazra Care&apos;s sustainability model recognises that
                      environmental progress and community development are
                      closely connected.
                    </p>

                    <p>
                      The organisation&apos;s programmes aim to provide
                      communities with practical knowledge in{" "}
                      <strong className="font-semibold text-black">
                        modern agriculture, sustainable energy, responsible
                        resource management and eco-friendly living
                      </strong>
                      . Educational initiatives are designed to help students
                      and communities develop skills that can contribute to
                      future sustainable industries.
                    </p>

                    <p>
                      Mazra Care also identifies opportunities for economic
                      development through{" "}
                      <strong className="font-semibold text-black">
                        sustainable agriculture and eco-tourism
                      </strong>
                      , while its broader community programmes focus on
                      families, students and local communities.
                    </p>

                    <p>
                      One of the key concepts within the source material is
                      creating sustainable lifestyles where agriculture,
                      energy, education and community development work together
                      rather than operating independently.
                    </p>

                    <p>
                      This people-centred approach positions sustainability not
                      simply as an environmental objective, but as a pathway
                      towards{" "}
                      <strong className="font-semibold text-black">
                        resilience, knowledge, opportunity and long-term
                        community development
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* READ MORE */}
              <button
                type="button"
                onClick={() =>
                  setIsCommunityExpanded((prev) => !prev)
                }
                aria-expanded={isCommunityExpanded}
                className="
                  group mt-6 inline-flex
                  items-center gap-2
                  text-[14px] font-semibold
                  text-[#111827]
                  transition-colors duration-300
                  hover:text-[#6B9B68]
                "
              >
                {isCommunityExpanded ? "Read Less" : "Read More"}

                {isCommunityExpanded ? (
                  <ChevronUp size={17} />
                ) : (
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform duration-500
                      group-hover:translate-x-1
                    "
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR VISION
          LEFT CONTENT — RIGHT IMAGE
      ========================================================== */}

      <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-20">
        <div
          className="
            mx-auto grid w-full max-w-[1600px]
            grid-cols-1 items-center
            gap-10 px-5
            sm:px-8
            md:px-10
            lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]
            lg:gap-14
            lg:px-12
            xl:gap-20
            xl:px-14
          "
        >
          {/* LEFT CONTENT */}
          <div className="order-2 flex flex-col items-start lg:order-1">
            <span
              className="
                text-[12px] font-medium
                tracking-[0.02em] text-[#6B7280]
                sm:text-[13px] md:text-[14px]
              "
            >
              Our Vision
            </span>

            <h2
              className="
                mt-3 max-w-[600px]
                text-[36px] font-semibold
                leading-[1.03]
                tracking-[-0.045em]
                text-[#111827]
                sm:text-[42px]
                md:text-[46px]
                lg:text-[36px]
                xl:text-[52px]
              "
            >
              A Greener Way to Grow
            </h2>

            <div className="mt-12 sm:mt-14 lg:mt-14">
              {/* VISIBLE CONTENT */}
              <p
                className="
                  max-w-[610px]
                  text-[14px] leading-[1.55]
                  text-[#4B5563]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[15px]
                  xl:text-[16px]
                "
              >
                We envision a future where farming is{" "}
                <strong className="font-semibold text-black">
                  productive, responsible and accessible
                </strong>
                . By bringing together agriculture, technology, renewable
                energy and education, we aim to build systems that work better
                for people and the planet.
              </p>

              {/* EXPANDED CONTENT */}
              <div
                className={`
                  grid overflow-hidden
                  transition-[grid-template-rows,opacity]
                  duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isVisionExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className="
                      max-w-[610px]
                      space-y-5 pt-5
                      text-[14px] leading-[1.7]
                      text-[#4B5563]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[15px]
                      xl:text-[16px]
                    "
                  >
                    <p>
                      Mazra Care&apos;s vision for sustainable development
                      extends beyond individual farming systems. It focuses on
                      creating an interconnected ecosystem where{" "}
                      <strong className="font-semibold text-black">
                        education, agriculture, energy and tourism
                      </strong>{" "}
                      contribute to a more sustainable future.
                    </p>

                    <p>
                      Our 2025–2030 strategy identifies{" "}
                      <strong className="font-semibold text-black">
                        Agritech Innovation, AI-Based Food Systems, Green
                        Economy and Sustainability Skills, AI-driven
                        agriculture, renewable energy and sustainable tourism
                      </strong>{" "}
                      as key areas for future development.
                    </p>

                    <p>
                      We believe the next generation of agriculture can be more
                      intelligent, resource-conscious and accessible. Through
                      sustainable farming technologies, renewable energy,
                      education and community-focused initiatives, Mazra Care
                      aims to contribute to agricultural systems that are
                      designed not only for today&apos;s needs, but also for
                      tomorrow&apos;s challenges.
                    </p>

                    <p>
                      <strong className="font-semibold text-black">
                        Grow Better. Live Greener. Build a Sustainable Future.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* READ MORE */}
              <button
                type="button"
                onClick={() =>
                  setIsVisionExpanded((prev) => !prev)
                }
                aria-expanded={isVisionExpanded}
                className="
                  group mt-6 inline-flex
                  items-center gap-2
                  text-[14px] font-semibold
                  text-[#111827]
                  transition-colors duration-300
                  hover:text-[#6B9B68]
                "
              >
                {isVisionExpanded ? "Read Less" : "Read More"}

                {isVisionExpanded ? (
                  <ChevronUp size={17} />
                ) : (
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform duration-500
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
              relative order-1
              aspect-[1.35/1]
              w-full
              overflow-hidden
              rounded-[28px]
              bg-[#EAF2EB]
              sm:rounded-[32px]
              lg:order-2
              lg:rounded-[42px]
            "
          >
            <Image
              src="/sustainability/OurVision.png"
              alt="Mazra Care sustainable agriculture vision"
              fill
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
    </>
  );
}