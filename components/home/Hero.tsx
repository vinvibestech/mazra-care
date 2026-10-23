
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main className="min-h-screen">
      <section className="relative h-[100svh] overflow-hidden py-16 text-white sm:py-20 md:py-24 lg:py-28 xl:py-32">
        {/* BACKGROUND IMAGE — CINEMATIC ZOOM */}
        <motion.div
          initial={{
            scale: shouldReduceMotion ? 1 : 1.12,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: "url('/home/Hero.png')",
          }}
        />

        {/* DARK OVERLAY */}
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.4,
            ease: "easeOut",
          }}
          className="absolute inset-0 bg-black/45"
        />

        {/* BOTTOM GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

        {/* CONTENT CONTAINER */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-5 sm:px-7 md:px-10 lg:px-12 xl:px-14">
          {/* HERO CONTENT */}
          <div className="flex flex-1 items-center pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-28 md:pb-20 lg:pt-24 lg:pb-24">
            <div className="w-full max-w-[1000px]">
              {/* EYEBROW */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.25,
                }}
                className="mb-4 max-w-[520px] text-[11px] font-medium leading-relaxed tracking-[0.02em] text-white/80 sm:text-[12px] md:mb-5 md:text-[13px] lg:text-[15px]"
              >
                Smart Agriculture. Sustainable Living.
              </motion.p>

              {/* MAIN HEADING */}
              <h1 className="font-bold leading-[0.95] tracking-[-0.045em] text-[clamp(32px,7vw,58px)] sm:text-[clamp(42px,6vw,68px)] md:text-[clamp(52px,5.5vw,76px)] lg:text-[76px] xl:text-[82px]">
                {/* FIRST LINE */}
                <motion.span
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 55,
                    filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.1,
                    delay: shouldReduceMotion ? 0 : 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-2 whitespace-nowrap sm:gap-3"
                >
                  Growing a Smarter

                  {/* GREEN LEAF BADGE */}
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 0.3,
                      rotate: shouldReduceMotion ? 0 : -35,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.8,
                      delay: shouldReduceMotion ? 0 : 1,
                      type: "spring",
                      stiffness: 180,
                      damping: 13,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.12,
                            rotate: 8,
                          }
                    }
                    className="inline-flex h-7 w-7 shrink-0 translate-y-[-2px] items-center justify-center rounded-full bg-[#9BE85B] sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-[42px] lg:w-[42px]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5"
                    >
                      <path
                        d="M19.5 3.5C12.5 3.7 7.6 5.8 5.2 9.4C3.4 12.1 4.1 15.3 6.4 17.1C8.8 19 12.2 18.7 14.5 16.3C17.7 13 19.1 8.5 19.5 3.5Z"
                        fill="currentColor"
                        className="text-black"
                      />

                      <path
                        d="M4.5 20C7.1 15.5 10.3 12.3 15.8 9"
                        stroke="#9BE85B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.span>
                </motion.span>

                {/* SECOND LINE */}
                <motion.span
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 45,
                    filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1,
                    delay: shouldReduceMotion ? 0 : 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-1 block whitespace-nowrap"
                >
                  Greener Tomorrow.
                </motion.span>
              </h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  delay: shouldReduceMotion ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 max-w-[500px] text-[11px] leading-[1.6] text-white/85 sm:mt-6 sm:text-[12px] md:text-[13px] lg:mt-6 lg:text-[18px]"
              >
                Transforming the future of agriculture through hydroponics,
                aquaponics, intelligent technology and sustainable solutions
                designed for homes, communities and businesses.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 flex flex-col items-stretch gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-3 md:mt-7"
              >
                {/* EXPLORE SOLUTIONS */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.03,
                        }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-full"
                >
                  <Link
                    href="/solutions"
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/40 bg-white/5 px-5 py-3 text-[11px] font-medium backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black sm:min-h-[42px] sm:w-auto sm:px-5 sm:text-[12px] md:px-6"
                  >
                    Explore Solutions
                  </Link>
                </motion.div>

                {/* START YOUR FARM */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.03,
                        }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-full"
                >
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#E7F5D8] px-5 py-3 text-[11px] font-semibold text-black transition-colors duration-300 hover:bg-white sm:min-h-[42px] sm:w-auto sm:px-5 sm:text-[12px] md:px-6"
                  >
                    Start Your Farm
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
