
"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Droplets,
  RefreshCw,
  Settings,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    id: "water",
    title: "Less Water",
    description:
      "Efficient farming systems that use up to 90% less water.",
    image: "/home/LessWater.png",
    icon: Droplets,
  },
  {
    id: "waste",
    title: "Less Waste",
    description:
      "Minimize resource waste through closed-loop systems.",
    image: "/home/LessWaste.png",
    icon: RefreshCw,
    active: true,
  },
  {
    id: "resources",
    title: "Smarter Resources",
    description:
      "Optimal use of energy, space and natural resources.",
    image: "/home/SmarterResources.png",
    icon: Settings,
  },
  {
    id: "growth",
    title: "Better Growth",
    description:
      "Healthier plants and higher yields with consistent results.",
    image: "/home/BetterGrowth.png",
    icon: Sparkles,
  },
];

export default function SustainabilityBenefits() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="
              flex flex-wrap items-center justify-center
              gap-x-2 gap-y-1
                 text-[34px]
              font-semibold
              leading-[1.03]
              tracking-[-0.045em]
              text-[#111827]

              sm:text-[40px]

              md:text-[44px]

              lg:text-[46px]

              xl:text-[48px]
              sm:gap-x-3
            "
          >
            <span>Less Waste</span>

            <span
              className="
                relative hidden h-[30px] w-[52px]
                overflow-hidden rounded-full
                sm:inline-block sm:h-[34px] sm:w-[60px]
                md:h-[38px] md:w-[68px]
              "
            >
              <Image
                src="/home/LessWaste.png"
                alt=""
                fill
                className="object-cover"
                sizes="68px"
              />
            </span>

            <span>More Possibilities.</span>
          </h2>

          <p
            className="
              mt-3 max-w-[850px]
                text-[15px]
                font-normal
                leading-[1.55]
                tracking-[-0.01em]
                text-[#4B5563]

                sm:mt-5
                sm:text-[16px]

                md:text-[17px]

                lg:text-[17px]

                xl:text-[17px]
            "
          >
            We design farming systems that use resources more efficiently
            while supporting sustainable food
            <br className="hidden sm:block" />
            production.
          </p>
        </div>

        {/* BENEFIT CARDS */}
        <div
          className="
            mt-9 grid grid-cols-1 gap-4
            sm:mt-11 sm:grid-cols-2 sm:gap-5
            lg:mt-14 lg:grid-cols-4 lg:gap-5
            xl:gap-7
          "
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.id}
                className="
                  group relative flex min-h-[360px]
                  flex-col overflow-hidden rounded-[24px]
                  bg-[#EAF4E6] p-5
                  transition-transform duration-500
                  hover:-translate-y-1
                  sm:min-h-[380px] sm:rounded-[26px] sm:p-6
                  md:min-h-[400px] md:p-7
                  lg:min-h-[390px]
                  xl:min-h-[410px] xl:p-8
                "
              >
                {/* HOVER BACKGROUND */}
                <div
                  className="
                    pointer-events-none absolute inset-0 z-0
                    rounded-[inherit] bg-[#0D1A11]
                    opacity-0
                    transition-opacity
                    duration-[900ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:opacity-100
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  {/* ICON */}
                  <div
                    className="
                      flex h-8 w-8 items-center justify-center
                      text-[#006B55]
                      transition-all duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-105
                      group-hover:text-[#38D7A0]
                    "
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  {/* TEXT */}
                  <div className="mt-6 sm:mt-7 md:mt-8">
                    <h3
                      className="
                        text-[19px] font-semibold
                        leading-[1.2] tracking-[-0.025em]
                        text-[#111827]
                        transition-all duration-700
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:-translate-y-[1px]
                        group-hover:text-white
                        sm:text-[20px]
                        md:text-[21px]
                        xl:text-[22px]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className="
                        mt-2 max-w-[310px]
                        text-[14px] leading-[1.55]
                        text-[#53616A]
                        transition-colors duration-700
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:text-white/75
                        sm:text-[14px]
                        md:text-[15px]
                      "
                    >
                      {benefit.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div
                    className="
                      relative mt-7 h-[155px] w-full
                      overflow-hidden rounded-[18px]
                      sm:mt-auto sm:h-[150px]
                      md:h-[165px]
                      lg:h-[145px]
                      xl:h-[160px]
                    "
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-[1400ms]
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:scale-[1.035]
                      "
                      sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 1023px) 50vw,
                        25vw
                      "
                    />

                    {/* IMAGE OVERLAY */}
                    <div
                      className="
                        absolute inset-0 bg-black/0
                        transition-colors duration-700
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:bg-black/[0.05]
                      "
                    />

                    {/* ARROW */}
                    <button
                      type="button"
                      aria-label={`Explore ${benefit.title}`}
                      className="
                        absolute bottom-3 right-3
                        flex h-8 w-8 items-center justify-center
                        rounded-full bg-black/55 text-white
                        transition-all duration-700
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        hover:scale-110 hover:bg-black/70
                        sm:h-7 sm:w-7
                      "
                    >
                      <ArrowUpRight size={14} strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
