"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function TechnologyVision() {
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);

  return (
    <>
      {/* =========================================================
          TECHNOLOGY FOR EDUCATION & FUTURE SKILLS
      ========================================================== */}

      <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
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
              relative order-1
              aspect-[1.35/1]
              w-full overflow-hidden
              rounded-[28px]
              bg-[#EAF2EB]
              sm:rounded-[32px]
              lg:rounded-[42px]
            "
          >
            <Image
              src="/tech/EducationFutureSkills.png"
              alt="Technology education and future farming skills"
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

          {/* RIGHT CONTENT */}
          <div className="order-2 flex flex-col items-start">
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
            Technology For Education & Future Skills 
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
              Building Technology-Literate Farmers
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
                Technology becomes more powerful when people understand how to
                use it. Mazra Care combines{" "}
                <strong className="font-semibold text-black">
                  agricultural technology with practical education
                </strong>{" "}
                to develop knowledge for the next generation of farming.
              </p>

              {/* EXPANDED CONTENT */}
              <div
                className={`
                  grid
                  overflow-hidden
                  transition-[grid-template-rows,opacity]
                  duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isEducationExpanded
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
                      Mazra Care&apos;s broader development strategy includes
                      specialised learning in{" "}
                      <strong className="font-semibold text-black">
                        Agritech Innovation, AI-Based Food Systems and Green
                        Economy and Sustainability Skills
                      </strong>
                      .
                    </p>

                    <p>
                      Through this approach, agricultural education moves
                      beyond theory and introduces learners to the technologies
                      and systems shaping modern agriculture.
                    </p>

                    <p>
                      The objective is to help create a generation that
                      understands not only how food is grown, but also how{" "}
                      <strong className="font-semibold text-black">
                        AI, IoT, smart systems and sustainable technologies
                      </strong>{" "}
                      can influence the future of agriculture.
                    </p>
                  </div>
                </div>
              </div>

              {/* READ MORE */}
              <button
                type="button"
                onClick={() =>
                  setIsEducationExpanded((prev) => !prev)
                }
                aria-expanded={isEducationExpanded}
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
                {isEducationExpanded ? "Read Less" : "Read More"}

                {isEducationExpanded ? (
                  <ChevronUp
                    size={17}
                    className="transition-transform duration-500"
                  />
                ) : (
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-500
                      ease-out
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
          OUR TECHNOLOGY VISION
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
          <div className="flex flex-col items-start">
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
            Our Technology Vision
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
              Building the Future of Agriculture
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
                We envision a future where technology makes farming{" "}
                <strong className="font-semibold text-black">
                  smarter, more connected and more accessible
                </strong>
                , helping people grow food with greater knowledge and control.
              </p>

              {/* EXPANDED CONTENT */}
              <div
                className={`
                  grid
                  overflow-hidden
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
                      Agriculture is entering an increasingly technology-driven
                      era. AI, IoT, automation, connected monitoring and data
                      analytics are changing how farming environments can be
                      managed.
                    </p>

                    <p>
                      Mazra Care&apos;s vision is to bring these technologies
                      together with sustainable cultivation systems to create
                      practical agricultural solutions for homes, businesses,
                      institutions and larger farming environments.
                    </p>

                    <p>
                      Our broader 2025–2030 development strategy identifies{" "}
                      <strong className="font-semibold text-black">
                        AI-driven agriculture
                      </strong>{" "}
                      as a key area of focus, alongside education, renewable
                      energy and sustainable tourism.
                    </p>

                    <p>
                      By combining technology with agricultural knowledge and
                      sustainable practices, Mazra Care aims to contribute to a
                      future where farming is{" "}
                      <strong className="font-semibold text-black">
                        more intelligent, resource-conscious and adaptable
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
                  setIsVisionExpanded((prev) => !prev)
                }
                aria-expanded={isVisionExpanded}
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
                {isVisionExpanded ? "Read Less" : "Read More"}

                {isVisionExpanded ? (
                  <ChevronUp
                    size={17}
                    className="transition-transform duration-500"
                  />
                ) : (
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-500
                      ease-out
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
              lg:rounded-[42px]
            "
          >
            <Image
              src="/tech/OurTechnologyVision.png"
              alt="Future of smart agriculture"
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