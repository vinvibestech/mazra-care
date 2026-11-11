"use client";

import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Leaf,
  Sprout,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    id: "technology",
    label: "technology",
    icon: Cpu,
    video: "/home/technologyVideo.mp4",
    title: "Smart Technology",
    description:
      "Mazra Care combines modern agriculture, education and renewable energy to create innovative, future-ready farming solutions.",
    href: "/technology",
  },
  {
    id: "innovation",
    label: "innovation",
    icon: Cpu,
    video: "/home/innovationVideo.mp4",
    title: "Sustainable Innovation",
    description:
      "Mazra Care combines modern agriculture, education and renewable energy to create innovative, future-ready farming solutions.",
    href: "/technology",
  },
  {
    id: "sustainable",
    label: "sustainable",
    icon: Sprout,
    video: "/home/sustainableVideo.mp4",
    title: "Responsible Sustainability",
    description:
      "Hydroponics, aquaponics and aeroponics promote water conservation, resource efficiency and environmentally responsible food production.",
    href: "/sustainability",
  },
  {
    id: "healthy",
    label: "healthy",
    icon: Leaf,
    video: "/home/healthyVideo.mp4",
    title: "Community Empowerment",
    description:
      "Mazra Care connects families, students and farmers through sustainable agriculture, practical education and opportunities for economic growth.",
    href: "/solutions",
  },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function SmartSolutions() {
  const [activeTab, setActiveTab] = useState("technology");

  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeContent =
    tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  const duration = shouldReduceMotion ? 0 : 0.8;

  /* RESTART VIDEO WHEN TAB CHANGES */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.load();

    video.play().catch(() => {
      // Browser may block autoplay.
    });
  }, [activeTab]);

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-14
          2xl:px-16
        "
      >
        {/* MOBILE / TABLET TAB NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration, ease: smoothEase }}
          className="
            mb-8
            flex
            w-full
            gap-2
            overflow-x-auto
            pb-2
            scrollbar-hide
            sm:mb-10
            lg:hidden
          "
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -2 }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.97 }
                }
                transition={{ duration: 0.25, ease: smoothEase }}
                className={`
                  group
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-[12px]
                  font-medium
                  transition-all
                  duration-300
                  sm:px-5
                  sm:py-3
                  sm:text-[13px]
                  ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-[#DDE1E7] bg-white text-[#273142] hover:border-black"
                  }
                `}
              >
                <Icon
                  size={15}
                  strokeWidth={1.8}
                  className={
                    isActive
                      ? "text-white"
                      : tab.id === "sustainable" || tab.id === "healthy"
                        ? "text-[#62B936]"
                        : "text-[#667085]"
                  }
                />

                <span className="capitalize whitespace-nowrap">
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* MAIN RESPONSIVE GRID */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            md:gap-12
            lg:grid-cols-[190px_minmax(0,1.25fr)_minmax(300px,1fr)]
            lg:gap-10
            xl:grid-cols-[220px_minmax(0,640px)_minmax(0,1fr)]
            xl:gap-12
            2xl:grid-cols-[220px_minmax(0,680px)_minmax(0,1fr)]
            2xl:gap-14
          "
        >
          {/* DESKTOP TAB NAVIGATION */}
          <div className="hidden flex-col items-start gap-3 lg:flex">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  initial={{
                    opacity: 0,
                    x: shouldReduceMotion ? 0 : -18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                    ease: smoothEase,
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { x: 3 }
                  }
                  whileTap={
                    shouldReduceMotion ? undefined : { scale: 0.98 }
                  }
                  className={`group
                    flex
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    border
                    px-5
                    py-3
                    text-[13px]
                    font-medium
                    transition-all
                    duration-300
                    xl:text-[14px]
                    ${
                      isActive
                        ? "border-black bg-black text-white"
                        : "border-[#DDE1E7] bg-white text-[#273142] hover:border-black"
                    }
                  `}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.8}
                    className={
                      isActive
                        ? "text-white"
                        : tab.id === "sustainable" || tab.id === "healthy"
                          ? "text-[#62B936]"
                          : "text-[#667085]"
                    }
                  />

                  <span className="capitalize whitespace-nowrap">
                    {tab.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* VIDEO */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 35,
              scale: shouldReduceMotion ? 1 : 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration,
              ease: smoothEase,
            }}
            className="
              relative
              w-full
              overflow-hidden
              rounded-[20px]
              bg-[#eee]
              aspect-[1.15/1]
              sm:aspect-[1.35/1]
              sm:rounded-[24px]
              md:aspect-[1.5/1]
              lg:aspect-[1.35/1]
              lg:rounded-[26px]
              xl:aspect-[1.52/1]
              xl:rounded-[28px]
            "
          >
            <video
              ref={videoRef}
              key={activeContent.video}
              autoPlay
              muted
              loop
              playsInline
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            >
              <source
                src={activeContent.video}
                type="video/mp4"
              />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              justify-center
              lg:min-h-[350px]
              lg:max-w-[560px]
              lg:pl-0
              xl:min-h-[390px]
              xl:max-w-[610px]
              xl:pl-1
            "
          >
            <motion.div
              key={activeContent.id}
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : 30,
                y: shouldReduceMotion ? 0 : 15,
                filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration,
                ease: smoothEase,
              }}
              className="flex flex-col"
            >
              {/* TITLE */}
              <h2
                className="
                  max-w-[650px]
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
                {activeContent.title}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-4
                  max-w-[620px]
                  text-[15px]
                  font-normal
                  leading-[1.55]
                  tracking-[-0.01em]
                  text-[#4B5563]
                  sm:mt-5
                  sm:text-[16px]
                  md:text-[17px]
                  lg:text-[17px]
                  xl:text-[17px]
                "
              >
                {activeContent.description}
              </p>

              {/* LEARN MORE */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                transition={{
                  duration,
                  delay: shouldReduceMotion ? 0 : 0.15,
                  ease: smoothEase,
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -2 }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.98 }
                }
                className="mt-6 w-fit sm:mt-7"
              >
                <Link
                  href={activeContent.href}
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#D2D7DF]
                    px-5
                    py-2.5
                    text-[13px]
                    font-bold
                    text-[#273142]
                    transition-all
                    duration-300
                    hover:border-black
                    hover:bg-black
                    hover:text-white
                    sm:gap-4
                    sm:px-6
                    sm:py-3
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  <span>Learn More</span>

                  <motion.span
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { rotate: -45 }
                    }
                    transition={{
                      duration: 0.25,
                      ease: smoothEase,
                    }}
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-white
                      transition-all
                      duration-300
                      group-hover:bg-white
                      group-hover:text-black
                      sm:h-7
                      sm:w-7
                    "
                  >
                    <ArrowRight size={14} strokeWidth={2} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
