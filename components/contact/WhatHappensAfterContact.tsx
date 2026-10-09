
"use client";

import { useState } from "react";
import Image from "next/image";
import {
    MessageCircle,
    ClipboardCheck,
    Sprout,
    MoveRight,
    ArrowRight,
    ChevronUp,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Tell Us",
        description: "Share your idea, space and objectives.",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Understand",
        description: "Explore your requirements and project possibilities.",
        icon: ClipboardCheck,
    },
    {
        number: "03",
        title: "Explore",
        description: "Identify suitable farming and sustainability solutions.",
        icon: Sprout,
    },
    {
        number: "04",
        title: "Start",
        description: "Move forward with the next stage of your project.",
        icon: MoveRight,
    },
];

export default function WhatHappensAfterContact() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
                {/* SECTION HEADER */}
                <div className="max-w-[900px]">
                    <span className="       text-[11px]
              font-medium
              tracking-[0.02em]
              text-[#6B7280]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]">
                        What Happens After You Contact Us?
                    </span>

                    <h2 className="mt-3             text-[clamp(30px,6vw,52px)]
              font-semibold
              leading-[1.06]
              tracking-[-0.045em]
              text-[#111827]">
                        From Enquiry to Opportunity
                    </h2>

                    <p className="mt-5 max-w-[820px]       text-[14px]
              leading-[1.6]
              text-[#4B5563]
              sm:mt-5
              sm:text-[15px]
              md:text-[16px]
              lg:text-[15px]
              xl:text-[16px]">
                        Every project begins with understanding. Once you contact us, we
                        start by learning about your{" "}
                        <strong className="font-semibold text-[#27352D]">
                            space, objectives and requirements
                        </strong>
                        .
                    </p>

                    {/* EXPANDABLE DESCRIPTION */}
                    <div
                        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpanded
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <div className="max-w-[820px] space-y-4 pt-5       text-[14px]
              leading-[1.6]
              text-[#4B5563]
              sm:mt-5
              sm:text-[15px]
              md:text-[16px]
              lg:text-[15px]
              xl:text-[16px]">
                                <p>
                                    A successful agricultural project begins with a clear
                                    understanding of what you want to achieve.
                                </p>

                                <p>
                                    Our initial conversation can focus on your available space,
                                    project type, intended use, farming objectives and any
                                    specific requirements you may already have.
                                </p>

                                <p>
                                    From there, the relevant information can be used to explore
                                    potential{" "}
                                    <strong className="font-semibold text-[#27352D]">
                                        farming systems, sustainable agricultural solutions and
                                        technology-enabled approaches
                                    </strong>{" "}
                                    suited to your project.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* READ MORE BUTTON */}
                    <button
                        type="button"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        aria-expanded={isExpanded}
                        className="group mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#111827] transition-colors duration-300 hover:text-[#6B9B68]"
                    >
                        {isExpanded ? "Read Less" : "Read More"}

                        {isExpanded ? (
                            <ChevronUp size={17} strokeWidth={1.8} />
                        ) : (
                            <ArrowRight
                                size={17}
                                strokeWidth={1.8}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        )}
                    </button>
                </div>

                {/* IMAGE + PROCESS STEPS */}
                <div className="mt-14 grid items-stretch gap-10 lg:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:gap-16">
                    {/* LEFT SIDE — IMAGE ONLY */}
                    <div className="relative min-h-[320px] overflow-hidden rounded-[24px] sm:min-h-[420px] lg:min-h-[560px]">
                        <Image
                            src="/contact/WhatHappens.png"
                            alt="Modern greenhouse farming"
                            fill
                            priority
                            sizes="(max-width: 1023px) 100vw, 40vw"
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                        />
                    </div>

                    {/* RIGHT SIDE — PROCESS LIST */}
                    <div className="flex min-w-0 flex-col">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    className="group grid grid-cols-[38px_minmax(0,1fr)_42px] items-start gap-3 border-b border-[#DDE5DD] py-6 transition-colors duration-500 first:border-t sm:grid-cols-[50px_minmax(0,1fr)_48px] sm:gap-5 sm:py-7 lg:py-8"
                                >
                                    {/* STEP NUMBER */}
                                    <span className="pt-1 text-[14px] font-medium tracking-wide text-[#9AA59D] transition-colors duration-500 group-hover:text-[#6B9B68] sm:text-[15px]">
                                        {step.number}
                                    </span>

                                    {/* STEP CONTENT */}
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-3">
                                            <h3 className="       text-[17px]
        font-semibold
        leading-[1.25]
        tracking-[-0.02em]
        text-[#111827]

        transition-colors
        duration-500

        group-hover:text-[#183D2B]

        sm:text-[18px]
        md:text-[20px]
        lg:text-[22px]">
                                                {step.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 max-w-[430px]      text-[13px]
        leading-[1.65]
        text-[#718078]

        transition-colors
        duration-500

        group-hover:text-[#53675A]

        sm:text-[14px]
        md:text-[14px]
        lg:text-[15px]">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* STEP ICON */}
                                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#EAF4E6] text-[#263C2B] transition-transform duration-500 group-hover:translate-x-1 sm:h-[48px] sm:w-[48px]">
                                        <Icon size={21} strokeWidth={1.7} />
                                    </div>
                                </article>
                            );
                        })}

                        {/* BOTTOM NOTE */}
                        <div className="mt-7 flex items-start rounded-[16px] p-5 sm:mt-8 sm:p-6">


                            <p className="      text-[14px]
              leading-[1.6]
              text-[#4B5563]
              sm:text-[15px]
              md:text-[16px]
              lg:text-[15px]
              xl:text-[16px]">
                                Every project is different. The conversation helps establish
                                your requirements and identify the appropriate next steps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
