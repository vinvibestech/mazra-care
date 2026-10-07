
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    title: "Plan",
    description: "Smart Planning",
    image: "/home/Plan.png",
  },
  {
    title: "Design",
    description: "Custom Design",
    image: "/home/Design.png",
  },
  {
    title: "Build",
    description: "Professional Installation",
    image: "/home/Build.png",
  },
  {
    title: "Grow",
    description: "Farm Management",
    image: "/home/Grow.png",
  },
  {
    title: "Support",
    description: "Ongoing Support",
    image: "/home/Support.png",
  },
];

export default function FromIdeaToHarvest() {
  return (
    <section
      className="
        w-full
        bg-[#F8FAF8]

        py-14
        sm:py-18
        md:py-22
        lg:py-28
        xl:py-20
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
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2
            className="
              text-[34px]
              font-semibold
              leading-[1.03]
              tracking-[-0.045em]
              text-[#111827]

              sm:text-[40px]

              md:text-[44px]

              lg:text-[46px]

              xl:text-[48px]
            "
          >
            From Idea to Harvest
          </h2>

          {/* Avatar + Description */}
          <div
            className="
              mt-4
              flex
              w-full
              max-w-[680px]
              flex-col
              items-center
              justify-center
              gap-3

              sm:mt-3
              sm:flex-row
              sm:gap-3
            "
          >
            {/* Avatar Group */}
            <div
              className="
                flex
                shrink-0
                -space-x-2
              "
            >
              <div
                className="
                  relative
                  h-7
                  w-7
                  overflow-hidden
                  rounded-full
                  border-2
                  border-white

                  sm:h-8
                  sm:w-8
                "
              >
                <Image
                  src="/home/Grow.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>

              <div
                className="
                  relative
                  h-7
                  w-7
                  overflow-hidden
                  rounded-full
                  border-2
                  border-white

                  sm:h-8
                  sm:w-8
                "
              >
                <Image
                  src="/home/Plan.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>

              <div
                className="
                  relative
                  h-7
                  w-7
                  overflow-hidden
                  rounded-full
                  border-2
                  border-white

                  sm:h-8
                  sm:w-8
                "
              >
                <Image
                  src="/home/Design.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
            </div>

            {/* Description */}
            <p
              className="
                max-w-[620px]
                text-[12px]
                leading-[1.55]
                text-[#6B7280]

                sm:text-[13px]

                md:text-[14px]

                lg:text-[15px]
              "
            >
              From the first idea to ongoing farm support, we manage the
              entire journey.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <div
          className="
            relative
            mt-12

            sm:mt-16

            md:mt-18

            lg:mt-20
          "
        >
          {/* ===================================================
              MOBILE / SMALL TABLET
              Vertical timeline
          ==================================================== */}

       <div className="lg:hidden">
  <div
    className="
      mx-auto
      flex
      w-full
      max-w-[520px]
      flex-col
      items-center
      gap-10

      sm:gap-12
      md:gap-14
    "
  >
    {processSteps.map((step) => (
      <div
        key={step.title}
        className="
          flex
          w-full
          flex-col
          items-center
          text-center
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            h-[110px]
            w-[110px]
            overflow-hidden
            rounded-full
            border-[4px]
            border-white
            shadow-[0_2px_8px_rgba(0,0,0,0.16)]
            ring-1
            ring-[#E5E7EB]

            sm:h-[125px]
            sm:w-[125px]

            md:h-[135px]
            md:w-[135px]
          "
        >
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
            sizes="140px"
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-4
            text-[18px]
            font-semibold
            leading-[1.2]
            tracking-[-0.02em]
            text-[#111827]

            sm:text-[19px]

            md:text-[20px]
          "
        >
          {step.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-1
            text-[13px]
            leading-[1.5]
            text-[#6B7280]

            sm:text-[14px]

            md:text-[15px]
          "
        >
          {step.description}
        </p>
      </div>
    ))}
  </div>
</div>

          {/* ===================================================
              DESKTOP
              Horizontal process
          ==================================================== */}

          <div
            className="
              hidden
              lg:grid
              lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]
              lg:items-start
              lg:gap-x-3

              xl:gap-x-5

              2xl:gap-x-7
            "
          >
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="contents"
              >
                {/* STEP */}
                <div
                  className="
                    flex
                    min-w-0
                    flex-col
                    items-center
                    text-center
                  "
                >
                  {/* Image */}
                  <div
                    className="
                      relative
                      h-[118px]
                      w-[118px]
                      overflow-hidden
                      rounded-full
                      border-[4px]
                      border-white
                      shadow-[0_2px_8px_rgba(0,0,0,0.16)]
                      ring-1
                      ring-[#E5E7EB]

                      xl:h-[130px]
                      xl:w-[130px]

                      2xl:h-[138px]
                      2xl:w-[138px]
                    "
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="140px"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-4
                      text-[16px]
                      font-semibold
                      leading-[1.2]
                      tracking-[-0.02em]
                      text-[#111827]

                      xl:text-[17px]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-1
                      max-w-[150px]
                      text-[13px]
                      leading-[1.4]
                      text-[#6B7280]

                      xl:text-[14px]
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* ARROW */}
                {index < processSteps.length - 1 && (
                  <div
                    className="
                      flex
                      h-[118px]
                      items-center
                      justify-center
                      text-[#A3AAA5]

                      xl:h-[130px]

                      2xl:h-[138px]
                    "
                  >
                    <ArrowRight
                      size={15}
                      strokeWidth={1.2}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div
          className="
            mt-12
            flex
            justify-center

            sm:mt-14

            md:mt-16

            lg:mt-18

            xl:mt-20
          "
        >
       
              {/* Learn More */}
                        <Link
                            href='/'
                            className="
                group
                mt-6
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-[#D2D7DF]
                px-5
                py-2.5
                text-[13px]
                font-bold
                text-[#273142]
                transition-all
                duration-300
                hover:border-black
                hover:bg-black
                hover:text-white

                sm:mt-7
                sm:gap-4
                sm:px-6
                sm:py-3
                sm:text-[14px]

                md:text-[15px]
              "
                        >
                            <span>Explore Our Process</span>

                            <span
                                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-white
                  group-hover:text-black

                  sm:h-7
                  sm:w-7
                "
                            >
                                <ArrowRight
                                    size={14}
                                    strokeWidth={2}
                                />
                            </span>
                        </Link>
        </div>
      </div>
    </section>
  );
}
