"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function SmartMonitoring() {
  const [isMonitoringExpanded, setIsMonitoringExpanded] = useState(false);
  const [isAnalyticsExpanded, setIsAnalyticsExpanded] = useState(false);

  return (
    <>
      {/* =========================================================
          SMART MONITORING
          LEFT IMAGE — RIGHT CONTENT
      ========================================================== */}
      <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-20">
        <div
          className="
            mx-auto grid w-full max-w-[1600px]
            grid-cols-1 items-center
            gap-10 px-5
            sm:px-8
            md:px-10
            lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]
            lg:gap-14
            lg:px-12
            xl:gap-20
            xl:px-14
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              relative
              order-1
              aspect-[1.35/1]
              w-full
              overflow-hidden
              rounded-[28px]
              bg-[#EAF2EB]
              sm:rounded-[32px]
              lg:rounded-[42px]
            "
          >
            <Image
              src="/tech/SmartMonitoring.png"
              alt="Smart agricultural monitoring system"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="
                object-cover
                transition-transform
                duration-[1200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:scale-[1.025]
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2 flex flex-col items-start">
            <span
              className="
                text-[12px] font-medium
                tracking-[0.02em] text-[#6B7280]
                sm:text-[13px] md:text-[14px]
              "
            >
              Smart Monitoring
            </span>

            <h2
              className="
                 mt-3 max-w-[600px] text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
              "
            >
              Know What Is Happening
            </h2>

            <div className="mt-12 sm:mt-14 lg:mt-14">
              {/* VISIBLE CONTENT */}
              <p
                className="
                  max-w-[610px]
                  text-[14px] leading-[1.55]
                  text-[#4B5563]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[15px]
                  xl:text-[16px]
                "
              >
                Smart monitoring gives farmers greater visibility into their
                growing environment by tracking important conditions such as{" "}
                <strong className="font-semibold text-black">
                  temperature, humidity, water and plant health
                </strong>
                .
              </p>

              {/* EXPANDED CONTENT */}
              <div
                className={`
                  grid overflow-hidden
                  transition-[grid-template-rows,opacity]
                  duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isMonitoringExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className="
                      max-w-[610px]
                      space-y-5 pt-5
                      text-[14px] leading-[1.7]
                      text-[#4B5563]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[15px]
                      xl:text-[16px]
                    "
                  >
                    <p>
                      Effective farming begins with understanding the
                      conditions in which crops are growing.
                    </p>

                    <p>
                      Smart monitoring systems can collect and display
                      information from the agricultural environment, helping
                      farmers observe changes and respond appropriately.
                    </p>

                    <p>
                      Within a technology-enabled farm, monitoring can be
                      connected with sensors, data systems and automated
                      equipment. This creates a continuous information flow
                      that supports more informed farm management.
                    </p>

                    <p>
                      Mazra Care's technology model is built around the
                      principle{" "}
                      <strong className="font-semibold text-black">
                        Sense → Monitor → Analyse → Act
                      </strong>
                      , connecting data collection with practical agricultural
                      action.
                    </p>
                  </div>
                </div>
              </div>

              {/* READ MORE */}
              <button
                type="button"
                onClick={() =>
                  setIsMonitoringExpanded((prev) => !prev)
                }
                aria-expanded={isMonitoringExpanded}
                className="
                  group mt-6 inline-flex
                  items-center gap-2
                  text-[14px] font-semibold
                  text-[#111827]
                  transition-colors duration-300
                  hover:text-[#6B9B68]
                "
              >
                {isMonitoringExpanded ? "Read Less" : "Read More"}

                {isMonitoringExpanded ? (
                  <ChevronUp size={17} />
                ) : (
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform duration-500
                      group-hover:translate-x-1
                    "
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DATA & ANALYTICS
          LEFT CONTENT — RIGHT IMAGE
      ========================================================== */}
      <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-20">
        <div
          className="
            mx-auto grid w-full max-w-[1600px]
            grid-cols-1 items-center
            gap-10 px-5
            sm:px-8
            md:px-10
            lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]
            lg:gap-14
            lg:px-12
            xl:gap-20
            xl:px-14
          "
        >
          {/* LEFT CONTENT */}
          <div className="order-2 flex flex-col items-start lg:order-1">
            <span
              className="
                text-[12px] font-medium
                tracking-[0.02em] text-[#6B7280]
                sm:text-[13px] md:text-[14px]
              "
            >
              Data & Analytics
            </span>

            <h2
              className="
                mt-3 max-w-[600px]
                text-[36px] font-semibold
                leading-[1.03]
                tracking-[-0.045em]
                text-[#111827]
                sm:text-[42px]
                md:text-[46px]
                lg:text-[36px]
                xl:text-[52px]
              "
            >
              Turn Data Into Action
            </h2>

            <div className="mt-12 sm:mt-14 lg:mt-14">
              {/* VISIBLE CONTENT */}
              <p
                className="
                  max-w-[610px]
                  text-[14px] leading-[1.55]
                  text-[#4B5563]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[15px]
                  xl:text-[16px]
                "
              >
                Data transforms farming observations into useful information.
                By analysing farm data, growers can identify changes,
                understand patterns and make more informed operational
                decisions.
              </p>

              {/* EXPANDED CONTENT */}
              <div
                className={`
                  grid overflow-hidden
                  transition-[grid-template-rows,opacity]
                  duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isAnalyticsExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className="
                      max-w-[610px]
                      space-y-5 pt-5
                      text-[14px] leading-[1.7]
                      text-[#4B5563]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[15px]
                      xl:text-[16px]
                    "
                  >
                    <p>
                      Every connected farming system can generate valuable
                      information about its operating environment.
                    </p>

                    <p>
                      Data collected through sensors and smart systems can
                      help provide insights into{" "}
                      <strong className="font-semibold text-black">
                        growing conditions, environmental changes, resource
                        use and system performance
                      </strong>
                      .
                    </p>

                    <p>
                      When this information is analysed, it can support better
                      decision-making across the farming process. Data
                      analytics therefore becomes an important link between
                      technology and practical agricultural management.
                    </p>

                    <p>
                      Mazra Care's technology approach uses data as part of a
                      broader system that connects{" "}
                      <strong className="font-semibold text-black">
                        sensing, monitoring, analysis and action
                      </strong>
                      , helping create a more informed and responsive farming
                      environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* READ MORE */}
              <button
                type="button"
                onClick={() =>
                  setIsAnalyticsExpanded((prev) => !prev)
                }
                aria-expanded={isAnalyticsExpanded}
                className="
                  group mt-6 inline-flex
                  items-center gap-2
                  text-[14px] font-semibold
                  text-[#111827]
                  transition-colors duration-300
                  hover:text-[#6B9B68]
                "
              >
                {isAnalyticsExpanded ? "Read Less" : "Read More"}

                {isAnalyticsExpanded ? (
                  <ChevronUp size={17} />
                ) : (
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform duration-500
                      group-hover:translate-x-1
                    "
                  />
                )}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative order-1
              aspect-[1.35/1]
              w-full
              overflow-hidden
              rounded-[28px]
              bg-[#EAF2EB]
              sm:rounded-[32px]
              lg:order-2
              lg:rounded-[42px]
            "
          >
            <Image
              src="/tech/DataAnalytics.png"
              alt="Agricultural data and analytics"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
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
      </section>
    </>
  );
}