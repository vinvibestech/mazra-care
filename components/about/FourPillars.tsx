"use client";

import {
    Sprout,
    GraduationCap,
    Zap,
    Trees,
} from "lucide-react";

const pillars = [
    {
        title: "Agriculture",
        description:
            "We combine modern agricultural technology with sustainable farming practices to support efficient food production and innovative growing systems.",
        icon: Sprout,
    },
    {
        title: "Education",
        description:
            "We promote practical learning around agriculture, sustainability, technology and emerging green-economy skills, helping develop knowledge for the next generation. Monarch mag notes and meetings",
        icon: GraduationCap,
    },
    {
        title: "Energy",
        description:
            "We explore renewable energy and energy-efficient solutions that can complement agriculture and support more sustainable communities.",
        icon: Zap,
    },
    {
        title: "Tourism",
        description:
            "We connect agriculture, sustainability and cultural experiences through eco-tourism concepts designed to create awareness and support local economic opportunities.",
        icon: Trees,
    },
];

export default function FourPillars() {
    return (
        <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-15">
            <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
                {/* HEADER */}
                <div>
                    <p className="text-[12px] font-semibold tracking-[0.08em] text-[#7B8580] sm:text-[13px]">
                        Our Four Pillars
                    </p>

                    <h2 className="mt-3 text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-[40px] md:text-[46px] lg:text-[50px]">
                        One Vision. Four Connected Pillars.
                    </h2>

                    <p className="mt-10 max-w-[850px] text-[15px] leading-[1.6] text-[#65716C] sm:text-[17px]">
                        Mazra Care's approach extends beyond farming. Our ecosystem connects Agriculture, Education, Energy and Tourism to create sustainable opportunities for people, communities and businesses.
                    </p>
                </div>

                {/* PILLAR CARDS */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5 xl:gap-6">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;

                        return (
                            <article
                                key={pillar.title}
                                className="
           group flex min-h-[260px] flex-col
          rounded-[22px] bg-[#EAF4E6] p-6
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:-translate-y-1
          hover:bg-[#0D1A11]
          sm:min-h-[270px] sm:p-7
          lg:min-h-[250px] lg:p-8
          xl:min-h-[260px]
                "
                            >
                                {/* ICON */}
                                <div
                                    className="
           flex h-[58px] w-[58px] shrink-0
            items-center justify-center rounded-full
            bg-[#DCE9D9] text-[#263C2B]
            transition-all duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:bg-[#183D2B]
            group-hover:text-[#55D5A3]
                  "
                                >
                                    <Icon size={25} strokeWidth={1.8} />
                                </div>

                                {/* CONTENT */}
                                <div className="mt-7">
                                    <h3
                                        className="text-[19px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#111827] transition-colors duration-700 group-hover:text-white sm:text-[20px] md:text-[21px] xl:text-[22px]">
                                        {pillar.title}
                                    </h3>

                                    <p className="mt-3 text-[14px] leading-[1.6] text-[#817D77] transition-colors duration-700 group-hover:text-white/70 sm:text-[14px] md:text-[15px]">
                                        {pillar.description}
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