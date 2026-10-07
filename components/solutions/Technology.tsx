"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Cpu,
  Wifi,
  Settings,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const technologies = [
  { name: "AI", icon: Cpu },
  { name: "IoT", icon: Wifi },
  { name: "Automation", icon: Settings },
  { name: "Smart Monitoring", icon: ChartNoAxesColumnIncreasing },
];

export default function Technology() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div
        className="
          mx-auto grid w-full max-w-[1600px] grid-cols-1
          items-center gap-10 px-5 sm:px-8 md:px-10
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]
          lg:gap-14 lg:px-12 xl:gap-20 xl:px-14
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">
          <span className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]">
            Technology
          </span>

          <h2
            className="
              mt-7 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Technology
            <br />
            Meets Agriculture
          </h2>

          {/* VISIBLE CONTENT */}
          <p className="mt-6 max-w-[610px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
            We use modern technology to make farming{" "}
            <strong className="font-semibold text-[#263C2F]">
              more intelligent, measurable and easier to manage.
            </strong>{" "}
            By connecting agriculture with AI, IoT, automation and smart
            monitoring, we help growers make better-informed decisions.
          </p>

          {/* TECHNOLOGY ICONS */}
          <div className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-4 lg:mt-11">
            {technologies.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="
                      flex h-[58px] w-[58px] items-center justify-center
                      rounded-full bg-[#EAF4E6] text-[#263C2F]
                      shadow-[0_2px_5px_rgba(0,0,0,0.04)]
                      transition-transform duration-500
                      hover:scale-105
                      sm:h-[64px] sm:w-[64px]
                    "
                  >
                    <Icon size={26} strokeWidth={1.9} />
                  </div>

                  <span className="mt-3 text-[13px] font-semibold text-[#263C2F] sm:text-[14px]">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* BOTTOM STATEMENT */}
    
          <p className="mt-8 max-w-[610px] text-[13px] leading-[1.55] font-semibold text-[#111827] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[20px]"> Better data. Better decisions. Better farming.</p>
          {/* READ MORE CONTENT */}
          <div
            className={`grid w-full transition-all duration-700 ease-in-out ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="max-w-[610px] space-y-5 pt-6 text-[14px] leading-[1.7] text-[#4B5563] sm:text-[15px] md:text-[16px]">
                <p>
                  Technology is becoming an essential part of modern
                  agriculture. Mazra Care integrates emerging technologies into
                  farming systems to improve visibility, operational control
                  and resource management.
                </p>

                <div>
                  <h3 className="mb-2 font-semibold text-[#111827]">
                    AI — Intelligent Insights
                  </h3>
                  <p>
                    Artificial intelligence can support data analysis and help
                    identify patterns that enable more informed agricultural
                    decision-making.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-[#111827]">
                    IoT — Connected Agriculture
                  </h3>
                  <p>
                    Internet of Things technologies can connect agricultural
                    equipment and sensors, allowing relevant farm conditions
                    and system data to be monitored.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-[#111827]">
                    Automation — Smarter Operations
                  </h3>
                  <p>
                    Automation can reduce repetitive manual tasks and support
                    consistent management of irrigation, environmental
                    conditions and other farm processes.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-[#111827]">
                    Smart Monitoring — Data-Driven Farming
                  </h3>
                  <p>
                    Smart monitoring systems provide growers with greater
                    visibility into agricultural environments, helping them
                    understand changing conditions and respond more
                    effectively.
                  </p>
                </div>

                <p>
                  Mazra Care's source material specifically highlights the
                  integration of{" "}
                  <strong className="font-semibold text-black">
                    hydroponics and AI-powered farm management
                  </strong>{" "}
                  as part of its approach to modern agriculture.
                </p>
              </div>
            </div>
          </div>

          {/* READ MORE BUTTON */}
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
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
              <ChevronUp size={17} />
            ) : (
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative order-first aspect-[1.35/1] w-full overflow-hidden
            rounded-[28px] bg-[#EAF2EB]
            sm:rounded-[32px]
            lg:order-none lg:aspect-[1.35/1] lg:rounded-[42px]
          "
        >
          <Image
            src="/solutions/Technology.png"
            alt="Farmer using smart technology to monitor crops inside a greenhouse"
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
      </div>
    </section>
  );
}