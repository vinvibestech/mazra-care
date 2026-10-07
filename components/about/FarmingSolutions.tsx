"use client";

import { useState } from "react";

import {
    Sprout,
    Fish,
    Warehouse,
    House,
    Building2,
    Cpu,
    ArrowRight,
    ChevronUp,
} from "lucide-react";

const solutions = [
    {
        title: "Hydroponic Farming",
        description: "Soilless cultivation systems designed to support efficient food production while enabling greater control over growing conditions and resource use.",
        icon: Sprout,
    },
    {
        title: "Aquaponic Farming",
        description: "Integrated systems that connect fish and plant production, creating a resource-efficient approach to food cultivation.",
        icon: Fish,
    },
    {
        title: "Aeroponic Farming",
        description: "Advanced cultivation systems that support efficient plant growth through controlled delivery of water and nutrients.",
        icon: Warehouse,
    },
    {
        title: "Smart Greenhouses",
        description: "Controlled growing environments that use technology and monitoring systems to create more consistent agricultural conditions.",
        icon: House,
    },
    {
        title: "Residential Farming",
        description: "Compact and practical farming solutions designed for homes, kitchens, gardens and smaller spaces, including family-focused growing systems",
        icon: Building2,
    },
    {
        title: "Commercial Farming",
        description: "Scalable agricultural systems designed to support businesses and larger production environments.",
        icon: Cpu,
    },
];

export default function FarmingSolutions() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-10">
            <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
                {/* HEADER */}
                <div className="flex flex-col items-start">
                    <span className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
                        What We Do
                    </span>

                    <h2
                        className="
              mt-7 max-w-[600px]
              text-[36px] font-semibold leading-[1.08]
              tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[46px]
              xl:text-[48px]
            "
                    >
                        From Ideas to
                        <br />
                        Growing Systems.
                    </h2>

                    <div className="mt-5">
                        <p className="text-[15px] leading-[1.6] text-[#4B5563] sm:text-[17px]">
                            We provide integrated solutions across modern farming—from hydroponics
                            and aquaponics to smart greenhouses, residential and commercial farming
                            systems. Our goal is to turn agricultural ideas into efficient, scalable
                            growing environments.
                        </p>

                        <div
                            className={`grid transition-all duration-700 ease-in-out ${isExpanded
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p className="pt-4 text-[15px] leading-[1.7] text-[#4B5563] sm:text-[17px]">
                                    Mazra Care develops and supports a range of modern agricultural
                                    solutions designed for different spaces, applications and levels of
                                    production.
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsExpanded((prev) => !prev)}
                            aria-expanded={isExpanded}
                            className="group mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#111827] transition-colors duration-300 hover:text-[#6B9B68]"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                            {isExpanded ? (
                                <ChevronUp size={17} />
                            ) : (
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* SOLUTION CARDS */}
                <div
                    className="
    mt-12 grid grid-cols-1 gap-5
    sm:mt-14 sm:grid-cols-2 sm:gap-6
    lg:mt-[76px] lg:grid-cols-3 lg:gap-6
    xl:gap-7
  "
                >
                    {solutions.map((solution) => {
                        const Icon = solution.icon;

                        return (
                            <article
                                key={solution.title}
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
                                    <Icon size={27} strokeWidth={1.8} />
                                </div>

                                {/* CARD CONTENT */}
                                <div className="mt-8">
                                    <h3
                                        className="
              text-[19px] font-semibold leading-[1.35]
              tracking-[-0.02em] text-[#111827]
              transition-colors duration-700
              group-hover:text-white
                   sm:text-[20px]
                        md:text-[21px]
                        xl:text-[22px]
            "
                                    >
                                        {solution.title}
                                    </h3>

                                    <p
                                        className="
              mt-3 text-[14px] leading-[1.6]
              text-[#817D77]
              transition-colors duration-700
              group-hover:text-white/70
                sm:text-[14px]
                        md:text-[15px]
            "
                                    >
                                        {solution.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
                {/* ADDITIONAL CONTENT */}
                <div className="mt-12 border-t border-[#E9ECEF] pt-8 sm:mt-14 sm:pt-10">
                    <h3 className="text-[20px] font-semibold tracking-[-0.025em] text-[#111827] sm:text-[22px]">
                        Beyond Farming Systems
                    </h3>

                    <p className="mt-4 max-w-[1100px] text-[15px] leading-[1.7] text-[#4B5563] sm:text-[16px]">
                        The integration of {" "}
                        <strong className="font-semibold text-[#18251B]">
                            AI, IoT, automation and farm-monitoring technologies {" "}
                        </strong>
                        to support smarter agricultural management and operational efficiency. about us

                    </p>
                    <p className="mt-4 max-w-[1100px] text-[15px] leading-[1.7] text-[#4B5563] sm:text-[16px]">
                        Beyond individual farming systems, Mazra Care's wider approach connects agriculture with <strong className="font-semibold text-[#18251B]"> education, renewable energy and sustainable tourism, </strong> creating opportunities for broader community development and sustainable economic activity. Monarch mag notes and meetings

                    </p>
                </div>
            </div>
        </section>
    );
}