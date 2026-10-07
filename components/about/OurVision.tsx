"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function OurVision() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-23">
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
                        src="/about/OurVision.png"
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
                      Our Vision
                    </span>

                    <h2
                        className="
                mt-3 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
                    >
                      A Future Where Everyone Can Grow.
                    </h2>

                    <div className="mt-12 sm:mt-14 lg:mt-14">
                        <p className="max-w-[610px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
                           We envision a future where fresh food can be grown efficiently, responsibly and sustainably in more places and by more people. Technology and responsible agriculture can work together to create stronger food systems and communities.
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
                                       Our vision is to contribute to a future where agriculture is more accessible, intelligent and sustainable.

                                    </p>

                                    <p>
                                       We see technology as an enabler—helping farmers, families, businesses, students and communities explore new ways of producing food while making responsible use of available resources.

                                    </p>

                                    <p>
                                    Mazra Care's broader development vision brings together  <strong className="font-semibold text-black">agriculture, education, renewable energy and sustainable tourism </strong>  to create an ecosystem in which knowledge, innovation and economic opportunity can support one another. Monarch mag notes and meetings
                                    </p>

                                    <p>
                               We are working toward a model of agriculture that is not only focused on producing food, but also on <strong className="font-semibold text-black"> building knowledge, encouraging innovation, supporting communities and creating sustainable opportunities. </strong>


                                    </p>
                                       <p>
                                    Our philosophy is simple: <strong className="font-semibold text-black"> innovate responsibly, grow intelligently and sustain what matters. </strong>
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
                    <p className="mt-8 max-w-[610px] text-[17px] leading-[1.55] font-semibold text-[#111827] sm:text-[19px] md:text-[19px] lg:text-[20px] xl:text-[24px]">Innovate. Grow. Sustain.</p>
                </div>
            </div>
        </section>
    );
}