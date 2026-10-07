
"use client";

import {
  Search,
  Pencil,
  Settings,
  Leaf,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your space, objectives, production requirements and expectations. This allows us to identify the most appropriate agricultural approach for your project.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team develops a farming solution around your specific requirements, considering available space, system type, technology, production goals and scalability.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Once the solution is finalised, we move into implementation, installation and system setup, ensuring the required farming infrastructure and technologies are integrated appropriately.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Our relationship does not end with installation. We provide guidance and ongoing support to help you operate, understand and develop your farming system.",
    icon: Leaf,
  },
];

export default function OurProcess() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-20">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start">
          <span className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
            Our Process
          </span>

          <h2
            className="
              mt-3 max-w-[700px]
              text-[clamp(30px,5vw,48px)]
              font-semibold leading-[1.08]
              tracking-[-0.045em] text-[#111827]
            "
          >
            From Idea to Harvest
          </h2>

          <p
            className="
              mt-4 max-w-[850px]
              text-[14px] leading-[1.65]
              text-[#5F6B63]
              sm:text-[15px]
              md:text-[16px]
              lg:text-[17px]
            "
          >
            Every Mazra Care project begins with understanding your
            requirements and ends with a functioning agricultural system
            supported by ongoing guidance. Our process connects{" "}
            <strong className="font-semibold text-[#26382C]">
              planning, design, implementation and farm support.
            </strong>
          </p>
        </div>

        {/* PROCESS CARDS */}
        <div
          className="
            mt-9 grid grid-cols-1 gap-4
            sm:mt-11 sm:grid-cols-2 sm:gap-5
            lg:mt-14 lg:gap-6
            xl:grid-cols-4 xl:gap-7
          "
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative min-w-0">
                <article
                  className="
                    group flex h-full min-h-[260px] flex-col
                    rounded-[20px] 
                    bg-[#EAF4E6] p-5
                    transition-all duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-1 
                    sm:min-h-[280px] sm:rounded-[22px] sm:p-6
                    md:min-h-[300px] md:p-7
                    xl:min-h-[320px]
                  "
                >
                  {/* CARD TOP */}
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        inline-flex h-7 min-w-[38px]
                        items-center justify-center rounded-full
                        bg-[#DCE2D4] px-3
                        text-[12px] font-semibold text-[#34463A]
                        sm:text-[13px]
                      "
                    >
                      {step.number}
                    </span>

                    <Icon
                      size={24}
                      strokeWidth={1.9}
                      className="
                        text-[#263C30]
                        transition-transform duration-500
                        group-hover:scale-110
                        sm:size-[25px]
                      "
                    />
                  </div>

                  {/* CARD CONTENT */}
                  <div className="mt-5 sm:mt-6">
                    <h3
                      className="
                        text-[18px] font-semibold
                        tracking-[-0.025em] text-[#18291F]
                        sm:text-[19px]
                        md:text-[20px]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2 text-[13px] leading-[1.65]
                        text-[#66736B]
                        sm:text-[14px]
                        md:text-[15px] md:leading-[1.7]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </article>

                {/* CONNECTING ARROW — LARGE SCREENS */}
                {index !== processSteps.length - 1 && (
                  <div
                    className="
                      absolute -right-[19px] top-1/2 z-10
                      hidden h-9 w-9 -translate-y-1/2
                      items-center justify-center rounded-full
                      bg-[#DCE3D5] text-[#263C30]
                      xl:flex
                    "
                  >
                    <ArrowRight size={19} strokeWidth={2} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
