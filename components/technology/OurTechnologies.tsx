"use client";

import Image from "next/image";
import {
  FlaskConical,
  Wifi,
  Settings,
  ChartNoAxesCombined,
  FileText,
  ArrowRight,
} from "lucide-react";

const technologies = [
  {
    id: "ai",
    title: (
      <>
        AI — 
        Smarter Decisions
      </>
    ),
    description: (
      <>
        Artificial intelligence can help interpret agricultural information,
        identify patterns and support more informed growing decisions.
        <br />
        <br />
        Mazra Care's sustainability strategy specifically identifies{" "}
        <strong className="font-semibold text-[#26382C]">
          AI-driven agriculture
        </strong>{" "}
        and an{" "}
        <strong className="font-semibold text-[#26382C]">
          AI-Powered Organic Agriculture System
        </strong>{" "}
        as part of its development vision.
      </>
    ),
    icon: FlaskConical,
  },

  {
    id: "iot",
    title: (
      <>
        IoT — 
        Connected Farming
      </>
    ),
    description: (
      <>
        Internet of Things technology connects sensors and devices within a
        farming environment, enabling agricultural conditions and systems to
        be monitored through connected infrastructure.
        <br />
        <br />
        The Mazra Care source material also references an{" "}
        <strong className="font-semibold text-[#26382C]">
          IoT-based mobile education application
        </strong>
        , demonstrating the broader role of connected technology within its
        ecosystem.
      </>
    ),
    icon: Wifi,
  },

  {
    id: "automation",
    title: (
      <>
        Automation —
        Less Manual Work
      </>
    ),
    description: (
      <>
        Automation can support repetitive agricultural processes and help
        manage functions such as{" "}
        <strong className="font-semibold text-[#26382C]">
          irrigation, lighting and controlled growing conditions
        </strong>
        .
      </>
    ),
    icon: Settings,
  },

  {
    id: "monitoring",
    title: (
      <>
        Smart Monitoring — 
        Know What Is Happening
      </>
    ),
    description: (
      <>
        Smart monitoring enables growers to observe important conditions
        within a farming environment. Temperature, humidity, water conditions
        and plant health can be monitored to provide greater visibility into
        the growing system.
      </>
    ),
    icon: ChartNoAxesCombined,
  },

  {
    id: "analytics",
    title: (
      <>
        Data & Analytics — 
        Turn Data Into Action
      </>
    ),
    description: (
      <>
        Agricultural data can reveal changes and patterns that may not be
        immediately visible. Analysing this information can support more
        informed decisions and help improve operational efficiency.
      </>
    ),
    icon: FileText,
  },
];

export default function OurTechnologies() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div
        className="
          relative mx-auto w-full max-w-[1600px]
          px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14
        "
      >
        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="relative z-10 max-w-[430px]">
          <span
            className="
        text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]
            "
          >
            Our Technologies
          </span>

          <h2
            className="
              mt-4
              max-w-[680px]
text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Smart Tools
         
            for Better Growth
          </h2>

          <p
            className="
              mt-4
   max-w-[1010px] text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
            "
          >
            We use a combination of{" "}
            <strong className="font-semibold text-[#27372D]">
              AI, IoT, automation, smart monitoring and data analytics
            </strong>{" "}
            to make farming more informed, connected and efficient.
          </p>
        </div>

        {/* =========================================================
            DECORATIVE BACKGROUND MARK
        ========================================================== */}
        <div
          className="
            pointer-events-none absolute
            right-[5%] top-[10px]
            hidden h-[280px] w-[250px]
            opacity-[0.55]
            lg:block
            xl:right-[7%]
          "
          aria-hidden="true"
        >
  {/* Decorative Leaf Image */}
<div
  className="
    pointer-events-none absolute
    right-[5%] top-[10px]
    hidden
    h-[300px] w-[350px]
    opacity-[0.55]
    lg:block
    xl:right-[7%]
  "
  aria-hidden="true"
>
  <Image
    src="/tech/leafss.png"
    alt=""
    fill
    className="object-contain"
  />
</div>
        </div>

        {/* =========================================================
            TECHNOLOGY GRID
        ========================================================== */}
        <div
          className="
            relative z-10
            mt-12
            grid grid-cols-1
            gap-x-12 gap-y-10
            sm:mt-14
            sm:grid-cols-2
            sm:gap-x-10
            lg:mt-12
            lg:gap-x-14
            lg:gap-y-12
            xl:gap-x-20
          "
        >
          {/* AI */}
          <TechnologyItem technology={technologies[0]} />

          {/* IOT */}
          <TechnologyItem technology={technologies[1]} />

          {/* AUTOMATION */}
          <TechnologyItem technology={technologies[2]} />

          {/* SMART MONITORING */}
          <TechnologyItem technology={technologies[3]} />

          {/* DATA & ANALYTICS */}
          <TechnologyItem technology={technologies[4]} />

          {/* BOTTOM IMAGE */}
          <div
            className="
              relative
              mt-0
              aspect-[2.4/1]
              w-full
              overflow-hidden
              rounded-[16px]
              bg-[#EAF2EB]
              sm:rounded-[18px]
            "
          >
            <Image
              src="/tech/OurTechnologies.png"
              alt="Smart agricultural monitoring technology"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
                object-cover
                transition-transform
                duration-[1200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
               
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type Technology = {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ElementType;
};

function TechnologyItem({
  technology,
}: {
  technology: Technology;
}) {
  const Icon = technology.icon;

  return (
    <article
      className="
        group
        flex
        items-start
        gap-4
        sm:gap-5
      "
    >
      {/* ICON */}
      <div
        className="
          flex
          h-[46px] w-[46px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#EAF4E6]
          text-[#111827]
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-105
          group-hover:bg-[#DCE7D9]
          sm:h-[48px]
          sm:w-[48px]
        "
      >
        <Icon
          size={22}
          strokeWidth={1.8}
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        {/* TITLE */}
        <h3
          className="
           text-[19px] font-semibold leading-[1.35]
              tracking-[-0.02em] text-[#111827]
             
                   sm:text-[20px]
                        md:text-[21px]
                        xl:text-[22px]
          "
        >
          {technology.title}
        </h3>

 

        {/* DESCRIPTION */}
        <p
          className="
            mt-2
          text-[14px] leading-[1.6]
              text-[#817D77]
           
                sm:text-[14px]
                        md:text-[15px]
          "
        >
          {technology.description}
        </p>

      </div>
    </article>
  );
}