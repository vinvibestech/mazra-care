"use client";

import {
  Leaf,
  TrendingUp,
  Settings2,
  Monitor,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Save Resources",
    description:
      "Connected systems can provide greater visibility into resource use and support more efficient management of water, energy and other agricultural inputs.",
  },
  {
    icon: TrendingUp,
    title: "Improve Productivity",
    description:
      "Technology can help create and maintain controlled growing conditions that support plant growth and agricultural operations.",
  },
  {
    icon: Settings2,
    title: "Reduce Manual Work",
    description:
      "Automation can assist with repetitive farming activities and routine system management.",
  },
  {
    icon: Monitor,
    title: "Monitor Anywhere",
    description:
      "Connected systems can provide access to relevant farm information through digital and monitoring infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Make Better Decisions",
    description:
      "Data and analytics can help transform observations into useful information for more informed agricultural management.",
  },
];

export default function Benefits() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-[68px]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-14
        "
      >
        {/* HEADER */}
        <div>
          {/* EYEBROW */}
          <span
            className="
    text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]
            "
          >
            Benefits
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-3
      text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Smarter Systems. Better Farming.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              max-w-[850px]
              text-[14px]
              leading-[1.55]
              text-[#68756E]
              sm:text-[15px]
              md:text-[16px]
            "
          >
            Our technology is designed to help farming systems become{" "}
            <strong className="font-semibold text-[#111827]">
              more informed, efficient and easier to manage
            </strong>
            , from small growing spaces to large agricultural operations.
          </p>
        </div>

        {/* BENEFITS */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:mt-[62px]
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`
                  min-w-0
                  py-8
                  lg:py-0
                  lg:pr-8
                  xl:pr-7
                  ${
                    index > 0
                      ? "border-t border-[#E1E5E2] sm:border-t lg:border-l lg:border-t-0 lg:pl-7"
                      : ""
                  }
                  ${
                    index === 4
                      ? "sm:col-span-2 lg:col-span-4 xl:col-span-1"
                      : ""
                  }
                `}
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[54px]
                    w-[54px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF4E6]
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.8}
                    className="text-[#17251E]"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-5
                 text-[19px] font-semibold leading-[1.35]
              tracking-[-0.02em] text-[#111827]
             
                   sm:text-[20px]
                        md:text-[21px]
                        xl:text-[19px]
                  "
                >
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-2
                    max-w-[290px]
           text-[14px] leading-[1.6]
              text-[#817D77]
           
                sm:text-[14px]
                        md:text-[15px]
                  "
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* SOURCE / CLOSING CONTENT */}
        <div className="mt-12 pt-6">
          <p
            className="
              max-w-[1050px]
            text-[14px]
              leading-[1.55]
              text-[#68756E]
              sm:text-[15px]
              md:text-[16px]
            "
          >
            These benefits reflect the core technology objectives already
            presented in the Technology PDF:{" "}
            <strong className="font-semibold text-[#17251E]">
              resource efficiency, improved productivity, reduced manual work
              and connected monitoring
            </strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
}