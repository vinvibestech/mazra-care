"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useState } from "react";

const solutions = [
    {
        id: "hydroponics",
        label: "hydroponics",
        title: "Hydroponics",
        description: "Efficient soilless farming.",
        image: "/home/Hydroponics.png",
    },
    {
        id: "aquaponics",
        label: "aquaponics",
        title: "Aquaponics",
        description: "Sustainable farming through nature.",
        image: "/home/Aquaponics.png",
    },
    {
        id: "greenhouse",
        label: "greenhouse",
        title: "Greenhouse",
        description: "Controlled environments for better growth.",
        image: "/home/Greenhouse.png",
    },
];

export default function CompleteSolutions() {
    const [active, setActive] = useState("hydroponics");

    const activeSolution =
        solutions.find((item) => item.id === active) ?? solutions[0];

    const handleNext = () => {
        const currentIndex = solutions.findIndex(
            (item) => item.id === active
        );

        const nextIndex =
            (currentIndex + 1) % solutions.length;

        setActive(solutions[nextIndex].id);
    };

    return (
        <section
            className="
        w-full
        bg-white

        py-14
        sm:py-16
        md:py-20
        lg:py-24
        xl:py-10
      "
        >
            <div
                className="
          mx-auto
          w-full
          max-w-[1500px]

          px-5
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-14
          2xl:px-16
        "
            >
                {/* =========================================
            MAIN RESPONSIVE LAYOUT
        ========================================== */}

                <div
                    className="
            grid
            grid-cols-1
            gap-3

            sm:gap-3

            lg:grid-cols-[minmax(190px,0.75fr)_minmax(300px,1fr)_minmax(400px,1.42fr)]
            lg:items-stretch
            lg:gap-3

            xl:grid-cols-[380px_minmax(380px,1fr)_minmax(500px,1.42fr)]
            xl:gap-3

            2xl:grid-cols-[340px_minmax(400px,1fr)_minmax(560px,1.42fr)]
            2xl:gap-9
          "
                >
                    {/* =========================================
              LEFT CONTENT
          ========================================== */}

                    <div
                        className="
              flex
              flex-col
         

              lg:pr-4
              xl:pr-6
            "
                    >
                        {/* Eyebrow */}
                        <p
                            className="
                mb-3
                text-[12px]
                font-medium
                tracking-[0.02em]
                text-[#6B7280]

                sm:text-[13px]

                md:text-[14px]
              "
                        >
                            Our Solutions
                        </p>

                        {/* Heading */}
                        <h2
                            className="
                 max-w-[650px]
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
                            Complete
                            <br />
                            Agricultural
                            <br />
                            Solutions
                        </h2>

                        {/* Description */}
                        <p
                            className="
                mt-4
                max-w-[360px]
                text-[14px]
                leading-[1.55]
                text-[#4B5563]

                sm:text-[15px]

                md:text-[16px]

                lg:text-[15px]

                xl:text-[16px]
              "
                        >
                            Smart farming solutions designed around your
                            space, needs, and goals.
                        </p>
                    </div>

                    {/* =========================================
              MIDDLE IMAGE COLUMN
          ========================================== */}

                    <div
                        className="
              flex
              flex-col
              gap-3

              sm:gap-3

              md:gap-3
            "
                    >
                        {/* TOP IMAGE */}
                        <div
                            className="
                group
                relative
                w-full
                overflow-hidden
                rounded-[18px]
                bg-[#eee]

                aspect-[1.5/1]

                sm:aspect-[1.6/1]
                sm:rounded-[21px]

                md:aspect-[1.65/1]

                lg:rounded-[22px]
              "
                        >
                            <Image
                                src="/home/OurSolutions2.png"
                                alt="Modern farming"
                                fill
                                priority
                                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.04]
                "
                                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 100vw,
                  30vw
                "
                            />

                            <div className="absolute inset-0 bg-black/5" />

                            {/* Image Button */}
                            <button
                                type="button"
                                aria-label="Open farming solution"
                                className="
                  absolute
                  right-3
                  top-3
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-black/75
                  text-white
                  backdrop-blur-sm
                  transition-transform
                  duration-300
                  hover:scale-110

                  sm:right-4
                  sm:top-4
                  sm:h-10
                  sm:w-10
                "
                            >
                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.8}
                                />
                            </button>
                        </div>

                        {/* BOTTOM IMAGE */}
                        <div
                            className="
                group
                relative
                w-full
                overflow-hidden
                rounded-[18px]
                bg-[#eee]

                aspect-[1.5/1]

                sm:aspect-[1.6/1]
                sm:rounded-[21px]

                md:aspect-[1.65/1]

                lg:rounded-[22px]
              "
                        >
                            <Image
                                src="/home/OurSolutions.png"
                                alt="Fresh agricultural produce"
                                fill
                                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.04]
                "
                                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 100vw,
                  30vw
                "
                            />

                            <div className="absolute inset-0 bg-black/5" />

                            {/* Image Button */}
                            <button
                                type="button"
                                aria-label="Open agricultural produce"
                                className="
                  absolute
                  right-3
                  top-3
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-black/55
                  text-white
                  backdrop-blur-sm
                  transition-transform
                  duration-300
                  hover:scale-110

                  sm:right-4
                  sm:top-4
                  sm:h-10
                  sm:w-10
                "
                            >
                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.8}
                                />
                            </button>
                        </div>
                    </div>

                    {/* =========================================
              RIGHT FEATURED CARD
          ========================================== */}

                    <div
                        className="
              relative
              min-h-[420px]
              w-full
              overflow-hidden
              rounded-[18px]
              bg-[#111]

              sm:min-h-[480px]
              sm:rounded-[23px]

              md:min-h-[540px]

              lg:min-h-[300px]
              lg:h-full
              lg:rounded-[25px]

              xl:min-h-[420px]
              xl:rounded-[28px]

              2xl:min-h-[660px]
            "
                    >
                        {/* Active Image */}
                        <Image
                            key={activeSolution.id}
                            src={activeSolution.image}
                            alt={activeSolution.title}
                            fill
                            className="
                object-cover
                transition-all
                duration-700
                ease-out
              "
                            sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 100vw,
                (max-width: 1280px) 45vw,
                42vw
              "
                        />

                        {/* Dark Overlay */}
                        <div
                            className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/30
                via-black/15
                to-black/80
              "
                        />

                        {/* =====================================
                CATEGORY NAVIGATION
            ====================================== */}

                        <div
                            className="
                absolute
                left-4
                right-16
                top-4
                flex
                w-fit
                max-w-[calc(100%-76px)]
                items-center
                overflow-x-auto
                rounded-full
                border
                border-white/15
                bg-[#171717]/80
                p-1
                backdrop-blur-md
                scrollbar-hide

                sm:left-5
                sm:top-5
                sm:right-16
              "
                        >
                            {solutions.map((solution) => {
                                const isActive =
                                    active === solution.id;

                                return (
                                    <button
                                        key={solution.id}
                                        type="button"
                                        onClick={() =>
                                            setActive(solution.id)
                                        }
                                        className={`
                      shrink-0
                      whitespace-nowrap
                      rounded-full
                      px-3
                      py-2
                      text-[11px]
                      font-medium
                      capitalize
                      transition-all
                      duration-300

                      sm:px-4
                      sm:text-[12px]

                      md:px-5
                      md:text-[13px]

                      ${isActive
                                                ? "bg-[#A7F3D0] text-[#17211B]"
                                                : "text-white/75 hover:text-white"
                                            }
                    `}
                                    >
                                        {solution.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* =====================================
                NEXT BUTTON
            ====================================== */}

                        <button
                            type="button"
                            aria-label="Next solution"
                            onClick={handleNext}
                            className="
                absolute
                right-5
                top-4
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/35
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-black/60
                md:right-4
                md:top-6
             
                sm:h-10
                sm:w-10
              "
                        >
                            <ChevronRight
                                size={17}
                                strokeWidth={1.7}
                            />
                        </button>

                        {/* =====================================
                FEATURE CONTENT
            ====================================== */}

                        <div
                            className="
                absolute
                bottom-6
                left-5
                right-5

                sm:bottom-8
                sm:left-7
                sm:right-7

                md:bottom-9
                md:left-8
                md:right-8

                lg:bottom-10
              "
                        >
                            {/* Title */}
                            <h3
                                className="
                  text-[30px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-white

                  sm:text-[34px]

                  md:text-[40px]

                  lg:text-[38px]

                  xl:text-[42px]
                "
                            >
                                {activeSolution.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="
                  mt-2
                  max-w-[430px]
                  text-[14px]
                  leading-[1.5]
                  text-white/75

                  sm:text-[15px]

                  md:text-[16px]
                "
                            >
                                {activeSolution.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
