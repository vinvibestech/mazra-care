"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ChevronUp,
  Cpu,
  MonitorCog,
  Settings2,
  Wifi,
} from "lucide-react";

const technologyItems = [
  {
    title: "AI",
    icon: Cpu,
  },
  {
    title: "IoT",
    icon: Wifi,
  },
  {
    title: "Automation",
    icon: Settings2,
  },
  {
    title: "Smart Monitoring",
    icon: MonitorCog,
  },
];

export default function TechnologyForSustainability() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10">
      <div
        className="
          mx-auto w-full max-w-[1600px]
          overflow-hidden
          rounded-[42px]
          bg-[#EAF4E6]
          px-7 py-12
          sm:rounded-[48px]
          sm:px-10 sm:py-14
          md:px-14 md:py-16
          lg:rounded-[56px]
          lg:px-16 lg:py-[76px]
          xl:px-[86px]
        "
      >
        <div
          className="
            grid grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =========================================================
              CONTENT
          ========================================================= */}
          <div className="order-1 flex flex-col items-start lg:order-1">
            {/* EYEBROW */}
            <span
              className="
                   text-[12px]
    font-medium
    tracking-[0.02em]
    text-[#6B7280]
    sm:text-[13px]
    md:text-[14px]
              "
            >
             Technology For Sustainability
            </span>

            {/* TITLE */}
            <h2
              className="
                mt-4
                max-w-[620px]
   text-[36px]
    font-semibold
    leading-[1.03]
    tracking-[-0.045em]
    text-[#111827]
    sm:text-[42px]
    md:text-[46px]
    lg:text-[36px]
    xl:text-[52px]
              "
            >
              Smart Technology,
              <br />
              Sustainable Results
            </h2>

            {/* VISIBLE CONTENT */}
            <p
              className="
                mt-8
                max-w-[650px]
               text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              Technology helps us understand what crops need and use resources
              more efficiently. Through{" "}
              <strong className="font-medium text-[#536158]">
                AI, IoT, automation and smart monitoring
              </strong>
              , we bring greater intelligence to modern farming.
            </p>

            {/* TECHNOLOGY ITEMS */}
            <div
              className="
                mt-10
                flex
                w-full
                flex-wrap
                gap-x-8
                gap-y-7
                sm:mt-11
                sm:gap-x-10
                lg:gap-x-11
                xl:gap-x-12
              "
            >
              {technologyItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex
                      min-w-[82px]
                      flex-col
                      items-center
                      text-center
                    "
                  >
                    {/* ICON CIRCLE */}
                    <div
                      className="
                        flex
                        h-[58px]
                        w-[58px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#DDE5DD]
                        text-[#294438]
                        transition-all
                        duration-500
                        hover:bg-[#D4DED4]
                      "
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* LABEL */}
                    <span
                      className="
                        mt-3
                        whitespace-nowrap
                        text-[14px]
                        font-medium
                        text-[#263C32]
                        sm:text-[15px]
                      "
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* BOTTOM STATEMENT */}
            <p
              className="
                mt-10
                text-[16px]
                font-semibold
                leading-[1.5]
                text-[#17291F]
                sm:mt-11
                sm:text-[17px]
              "
            >
              Better information leads to better farming decisions.
            </p>

   

            {/* EXPANDED CONTENT */}
            <div
              className={`
                grid
                w-full
                overflow-hidden
                transition-[grid-template-rows,opacity]
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className="
                    max-w-[650px]
                    space-y-6
                    pt-7
             text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
                  "
                >
                  {/* INTRO */}
                  <p>
                    The future of sustainable agriculture depends not only on
                    how we grow, but also on how intelligently we manage
                    agricultural systems.
                  </p>

                  <p>
                    Mazra Care&apos;s sustainability strategy incorporates{" "}
                    <strong className="font-semibold text-[#17291F]">
                      AI-driven agriculture, smart farming technologies and
                      intelligent systems
                    </strong>{" "}
                    to support more informed agricultural decisions. The source
                    material identifies AI-based agriculture as a key component
                    of its 2025–2030 vision for sustainable development.
                  </p>

                  {/* AI */}
                  <div>
                    <h3 className="font-semibold text-[#17291F]">
                      AI — Intelligent Agriculture
                    </h3>

                    <p className="mt-2">
                      AI-driven agricultural systems can help analyse
                      information and support decision-making across farming
                      operations. Mazra Care&apos;s strategy specifically
                      references an{" "}
                      <strong className="font-semibold text-[#17291F]">
                        AI-Powered Organic Agriculture System
                      </strong>{" "}
                      as part of its sustainable development vision.
                    </p>
                  </div>

                  {/* IOT */}
                  <div>
                    <h3 className="font-semibold text-[#17291F]">
                      IoT — Connected Farming
                    </h3>

                    <p className="mt-2">
                      Internet of Things technologies can connect agricultural
                      systems and devices, creating greater visibility into
                      farm conditions and operations.
                    </p>
                  </div>

                  {/* AUTOMATION */}
                  <div>
                    <h3 className="font-semibold text-[#17291F]">
                      Automation — Efficient Operations
                    </h3>

                    <p className="mt-2">
                      Automation can support consistent management of
                      agricultural processes while reducing dependence on
                      repetitive manual intervention.
                    </p>
                  </div>

                  {/* SMART MONITORING */}
                  <div>
                    <h3 className="font-semibold text-[#17291F]">
                      Smart Monitoring — Better Decisions
                    </h3>

                    <p className="mt-2">
                      Smart monitoring provides access to relevant information
                      about growing conditions and system performance, helping
                      farmers make more informed decisions.
                    </p>
                  </div>

                  {/* FINAL */}
                  <p>
                    Technology is therefore not used simply for automation—it
                    becomes a tool for{" "}
                    <strong className="font-semibold text-[#17291F]">
                      resource efficiency, agricultural intelligence and
                      sustainable farm management
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
         {/* =========================================================
                READ MORE
            ========================================================= */}
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#17291F]
                transition-colors
                duration-300
                hover:text-[#6B9B68]
              "
            >
              {isExpanded ? "Read Less" : "Read More"}

              {isExpanded ? (
                <ChevronUp
                  size={17}
                  strokeWidth={1.8}
                />
              ) : (
                <ArrowRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              )}
            </button>
          </div>

          {/* =========================================================
              IMAGE
          ========================================================= */}
          <div
            className="
              relative
              order-2
              aspect-[1.5/1]
              w-full
              overflow-hidden
              rounded-[28px]
              bg-[#E4EAE2]
              sm:rounded-[32px]
              lg:order-2
              lg:rounded-[40px]
            "
          >
            <Image
              src="/sustainability/TechnologySustainability.png"
              alt="Smart technology for sustainable agriculture"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="
                object-cover
                transition-transform
                duration-[1200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:scale-[1.025]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}