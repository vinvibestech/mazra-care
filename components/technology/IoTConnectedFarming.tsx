"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function IoTConnectedFarming() {
  const [isIotExpanded, setIsIotExpanded] = useState(false);
  const [isAutomationExpanded, setIsAutomationExpanded] = useState(false);

  return (
    <>
      {/* =========================================================
          IoT & CONNECTED FARMING
      ========================================================== */}
      <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
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
          {/* =====================================================
              LEFT IMAGE
          ====================================================== */}
          <div
            className="
              relative order-1
              aspect-[1.35/1]
              w-full overflow-hidden
              rounded-[28px]
              bg-[#EAF2EB]
              sm:rounded-[32px]
              lg:rounded-[42px]
            "
          >
            <Image
              src="/tech/IoTConnected.png"
              alt="Connected farming technology"
              fill
              priority
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

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}
          <div className="order-2 flex flex-col items-start">
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
              IoT & Connected Farming
            </span>

            {/* TITLE */}
            <h2
              className="
                mt-3
                max-w-[600px]
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
              Connected Systems.
              <br />
              Real-Time Visibility.
            </h2>

            <div className="mt-12 sm:mt-14 lg:mt-14">
              {/* VISIBLE CONTENT */}
              <p
                className="
                  max-w-[610px]
                  text-[14px]
                  leading-[1.55]
                  text-[#4B5563]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[15px]
                  xl:text-[16px]
                "
              >
                IoT technology connects farming equipment, sensors and
                digital systems, creating a more connected agricultural
                environment where important farm conditions can be monitored
                in real time.
              </p>

              {/* =================================================
                  EXPANDED CONTENT
              ================================================== */}
              <div
                className={`
                  grid
                  overflow-hidden
                  transition-[grid-template-rows,opacity]
                  duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isIotExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className="
                      max-w-[610px]
                      space-y-5
                      pt-5
                      text-[14px]
                      leading-[1.7]
                      text-[#4B5563]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[15px]
                      xl:text-[16px]
                    "
                  >
                    <p>
                      The{" "}
                      <strong className="font-semibold text-black">
                        Internet of Things (IoT)
                      </strong>{" "}
                      enables physical devices and sensors to communicate
                      information through connected systems.
                    </p>

                    <p>
                      In agriculture, this can provide visibility into
                      conditions such as temperature, humidity, water and
                      other environmental parameters. Connected information
                      can then be monitored and analysed to support more
                      informed farm management.
                    </p>

                    <p>
                      Mazra Care's technology approach combines{" "}
                      <strong className="font-semibold text-black">
                        IoT, smart monitoring and automation
                      </strong>{" "}
                      to create connected farming environments across
                      different agricultural systems.
                    </p>

                    <p>
                      From controlled greenhouses to hydroponic and
                      aquaponic installations, connected technology can
                      provide farmers with greater awareness of what is
                      happening within their growing environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* READ MORE */}
              <button
                type="button"
                onClick={() =>
                  setIsIotExpanded((prev) => !prev)
                }
                aria-expanded={isIotExpanded}
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-[14px]
                  font-semibold
                  text-[#111827]
                  transition-colors
                  duration-300
                  hover:text-[#6B9B68]
                "
              >
                {isIotExpanded ? "Read Less" : "Read More"}

                {isIotExpanded ? (
                  <ChevronUp
                    size={17}
                    className="
                      transition-transform
                      duration-500
                    "
                  />
                ) : (
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-500
                      ease-out
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
          AUTOMATION
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
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="flex flex-col items-start">
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
              Automation
            </span>

            {/* TITLE */}
            <h2
              className="
                mt-3
                max-w-[600px]
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
              Automating the Everyday
            </h2>

            <div className="mt-12 sm:mt-14 lg:mt-14">
              {/* VISIBLE CONTENT */}
              <p
                className="
                  max-w-[610px]
                  text-[14px]
                  leading-[1.55]
                  text-[#4B5563]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[15px]
                  xl:text-[16px]
                "
              >
                Automation helps simplify repetitive farming activities
                while providing greater consistency and control across
                agricultural operations.
              </p>

              {/* =================================================
                  EXPANDED CONTENT
              ================================================== */}
              <div
                className={`
                  grid
                  overflow-hidden
                  transition-[grid-template-rows,opacity]
                  duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isAutomationExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className="
                      max-w-[610px]
                      space-y-5
                      pt-5
                      text-[14px]
                      leading-[1.7]
                      text-[#4B5563]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[15px]
                      xl:text-[16px]
                    "
                  >
                    <p>
                      Modern farming systems can involve a wide range of
                      repetitive processes, from irrigation and lighting to
                      environmental management and routine monitoring.
                    </p>

                    <p>
                      Mazra Care incorporates automation as part of its smart
                      agriculture approach, enabling selected farming
                      functions to be managed through automated systems.
                    </p>

                    <p>
                      Automation can work alongside{" "}
                      <strong className="font-semibold text-black">
                        IoT sensors, AI and smart monitoring
                      </strong>
                      , allowing information gathered from the growing
                      environment to inform system responses or guide farmer
                      action.
                    </p>

                    <p>
                      The result is a more connected farming workflow where
                      technology can assist with routine operations while
                      farmers remain in control of important agricultural
                      decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* READ MORE */}
              <button
                type="button"
                onClick={() =>
                  setIsAutomationExpanded((prev) => !prev)
                }
                aria-expanded={isAutomationExpanded}
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-[14px]
                  font-semibold
                  text-[#111827]
                  transition-colors
                  duration-300
                  hover:text-[#6B9B68]
                "
              >
                {isAutomationExpanded ? "Read Less" : "Read More"}

                {isAutomationExpanded ? (
                  <ChevronUp
                    size={17}
                    className="
                      transition-transform
                      duration-500
                    "
                  />
                ) : (
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:translate-x-1
                    "
                  />
                )}
              </button>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}
          <div
            className="
              relative
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
              src="/tech/Automation.png"
              alt="Automated smart farming system"
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