"use client";

import {
  Cpu,
  RefreshCcw,
  TrendingUp,
  Share2,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Technology-Driven",
    description:
      "We integrate AI, IoT, automation and smart monitoring into modern agricultural systems.",
    icon: Cpu,
  },
  {
    title: "Sustainable by Design",
    description:
      "Our solutions focus on responsible resource use and more sustainable approaches to food production.",
    icon: RefreshCcw,
  },
  {
    title: "Scalable Solutions",
    description:
      "From residential growing systems to commercial agricultural environments, our solutions can be adapted to different applications.",
    icon: TrendingUp,
  },
  {
    title: "Integrated Thinking",
    description:
      "We connect agriculture with education, energy and tourism to create a broader sustainable development ecosystem.",
    icon: Share2,
  },
  {
    title: "Community Focused",
    description:
      "Our initiatives aim to support individuals, families, students, farmers and communities through knowledge, technology and sustainable opportunities. ",
    icon: Users,
  },
];

export default function WhyMazraCare() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
        Why Mazra Care
          </p>

          <h2 className="    mt-3 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]">
            Innovation With Purpose.
          </h2>

          <p className="mt-10 max-w-[1000px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
         We combine agricultural expertise, emerging technology and sustainability to create solutions designed around real-world needs. Our focus is on making modern farming more practical, scalable and future-ready.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 xl:gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="
                  group flex min-h-[210px] flex-col
             
                   rounded-[22px] bg-[#EAF4E6] p-6
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:-translate-y-1
          hover:bg-[#0D1A11]
                  hover:bg-[#0D1A11]
                  sm:min-h-[215px] sm:p-7
                  lg:min-h-[212px] lg:p-6
                  xl:min-h-[213px] xl:p-7
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-11 w-11 shrink-0          items-center justify-center rounded-full
            bg-[#DCE9D9] text-[#263C2B]
            transition-all duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:bg-[#183D2B]
            group-hover:text-[#55D5A3]
                  "
                >
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3
                    className="
                  text-[15px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#111827] transition-colors duration-700 group-hover:text-white sm:text-[15px] md:text-[17px] xl:text-[17px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                    
                      mt-3 text-[14px] leading-[1.6] text-[#817D77] transition-colors duration-700 group-hover:text-white/70 sm:text-[14px] md:text-[14px]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}