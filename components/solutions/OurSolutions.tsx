"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function OurSolutions() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-12">
            <div
                className="
          mx-auto grid w-full max-w-[1600px] grid-cols-1
          items-center gap-10 px-5 sm:px-8 md:px-10
          lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]
          lg:gap-14 lg:px-12 xl:gap-20 xl:px-14
        "
            >
                {/* LEFT IMAGE */}
                <div
                    className="
            relative order-1 aspect-[1.35/1] w-full overflow-hidden
            rounded-[28px] bg-[#EAF2EB]
            sm:rounded-[32px] lg:rounded-[42px]
          "
                >
                    <Image
                        src="/solutions/OurSolutions.png"
                        alt="Modern greenhouse and sustainable farming fields"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
              object-cover transition-transform duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-[1.025]
            "
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="order-2 flex flex-col items-start">
                    <span className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
                       Our Solutions
                    </span>

                    <h2
                        className="
                mt-3 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
                    >
                        Farming Made Smarter
                    </h2>

                    <div className="mt-12 sm:mt-14 lg:mt-14">
                        <p className="max-w-[610px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
                            We provide complete agricultural solutions for different environments, production requirements and scales. From home-based growing systems to commercial and industrial farms, every solution is designed around efficiency, sustainability and practical results.
                        </p>

                        {/* EXPANDABLE CONTENT */}
                        <div
                            className={`grid transition-all duration-700 ease-in-out ${isExpanded
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="max-w-[610px] space-y-5 pt-5 text-[14px] leading-[1.7] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
                                    <p>
                                     Mazra Care develops integrated farming solutions that bring together modern cultivation methods, intelligent technologies and sustainable resource management.

                                    </p>

                                    <p>
                                      Our portfolio covers <strong className="font-semibold text-black"> hydroponics, aquaponics, aeroponics, smart greenhouses, residential farming, commercial farming and industrial agricultural systems. </strong>  Our approach combines modern farming technologies with practical agricultural methods to create solutions that are adaptable to changing environmental and economic conditions.
                                    </p>

                                    <p>
                                      Technologies such as <strong className="font-semibold text-black"> hydroponics, aquaponics, aeroponics, AI-powered agriculture, precision systems and smart farm monitoring </strong> These solutions can be adapted to different spaces and operational requirements, enabling individuals, businesses and institutions to explore more efficient approaches to food production.
                                    </p>

                                    <p>
                                 Our turnkey approach can extend from <strong className="font-semibold text-black"> planning and system design to installation, commissioning, guidance and ongoing support, </strong> helping clients move from an initial agricultural concept to an operational growing system.


                                    </p>
                                       <p>
                                    The objective is not simply to install a farm, but to create a <strong className="font-semibold text-black"> well-designed agricultural ecosystem </strong> that can be managed efficiently and developed according to future needs.

                                    </p>
                                       <p>
                                   The broader Mazra Care model also connects agricultural innovation with education, renewable energy and community development, creating opportunities for more resilient and sustainable lifestyles. 


                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* READ MORE BUTTON */}
                        <button
                            type="button"
                            onClick={() => setIsExpanded(!isExpanded)}
                            aria-expanded={isExpanded}
                            className="
                group mt-6 inline-flex items-center gap-2
                text-[14px] font-semibold text-[#111827]
                transition-colors duration-300
                hover:text-[#6B9B68]
              "
                        >
                            {isExpanded ? "Read Less" : "Read More"}

                            {isExpanded ? (
                                <ChevronUp
                                    size={17}
                                    className="transition-transform duration-300"
                                />
                            ) : (
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}