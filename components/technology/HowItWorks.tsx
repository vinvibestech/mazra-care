"use client";

import { useState } from "react";
import {
  Wifi,
  MonitorUp,
  ClipboardList,
  Settings2,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sense",
    description: "Sensors collect important farm data.",
    icon: Wifi,
    fullDescription:
      "Sensors and connected devices collect relevant information from the farming environment, including important growing and environmental conditions.",
  },
  {
    number: "02",
    title: "Monitor",
    description: "Data is tracked through smart systems.",
    icon: MonitorUp,
    fullDescription:
      "The collected information is tracked through connected smart systems, giving farmers greater visibility into the operation of the farm.",
  },
  {
    number: "03",
    title: "Analyse",
    description: "Technology helps identify changes and patterns.",
    icon: ClipboardList,
    fullDescription:
      "Data and intelligent systems help identify changes, patterns and conditions that may require attention.",
  },
  {
    number: "04",
    title: "Act",
    description:
      "Automated systems or farmers take the right action.",
    icon: Settings2,
    fullDescription:
      "The information can then support farmer decisions or trigger appropriate automated responses within the farming system.",
  },
];

export default function HowItWorks() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-[52px]">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* HEADER */}
        <div>
          <span
            className="
            text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-[14px]
            "
          >
         How It Works
          </span>

          <h2
            className="
              mt-3
   text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            Connect. Monitor. Improve.
          </h2>

          <p
            className="
              mt-3
              max-w-[760px]
           text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
            "
          >
            Our technology works as a connected process—collecting
            information, monitoring conditions, analysing data and supporting
            the right action at the right time.
          </p>
        </div>

        {/* STEPS */}
        <div
          className="
            mt-16
            grid grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:mt-[68px]
            lg:grid-cols-4
            lg:gap-10
            xl:gap-16
          "
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="min-w-0">
                {/* NUMBER + ICON */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                      inline-flex
                      h-[26px]
                      min-w-[38px]
                      items-center
                      justify-center
                      rounded-full
            
                      bg-[#EAF4E6]
                      px-2
                      text-[12px]
                      font-semibold
                      text-[#26352D]
                    "
                  >
                    {step.number}
                  </span>

                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="text-[#18271F]"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-4
        text-[19px] font-semibold leading-[1.35]
              tracking-[-0.02em] text-[#111827]
             
                   sm:text-[20px]
                        md:text-[21px]
                        xl:text-[22px]
                  "
                >
                  {step.title}
                </h3>

                {/* SHORT DESCRIPTION */}
                <p
                  className="
                    mt-2
                    max-w-[310px]
              text-[14px] leading-[1.6]
              text-[#817D77]
           
                sm:text-[14px]
                        md:text-[15px]
                  "
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>



              {/* FINAL TECHNOLOGY LOOP */}
              <div className="lg:col-span-4 mt-10">
                <p
                  className="
                    max-w-[1000px]
              text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
                  "
                >
                  This{" "}
                  <strong className="font-semibold text-[#17231D]">
                    Sense → Monitor → Analyse → Act
                  </strong>{" "}
                  model creates a continuous technology loop that connects the
                  physical farm environment with digital information and
                  practical agricultural management.
                </p>
              </div>
      </div>
    </section>
  );
}