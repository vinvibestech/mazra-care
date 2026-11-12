"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const solutions = [
  {
    id: "hydroponics",
    title: "Hydroponics",
    description:
      "Grow plants without soil using precisely managed water and nutrient systems.",
    image: "/home/Hydroponics.jpg",
  },
  {
    id: "aquaponics",
    title: "Aquaponics",
    description:
      "Integrate fish cultivation and plant production through a connected, water-recirculating ecosystem.",
    image: "/home/Aquaponic.png",
  },
  {
    id: "aeroponics",
    title: "Aeroponics",
    description:
      "Explore advanced cultivation systems that nourish plant roots through controlled nutrient mist.",
    image: "/home/Aeroponics.png",
  },
  {
    id: "smartfarming",
    title: "Smart Farming",
    description:
      "Connect sensors, automation and digital monitoring for more informed farm management.",
    image: "/home/SmartFarming.png",
  },
];

export default function CompleteSolutions() {
  const [active, setActive] = useState("hydroponics");

  const activeSolution =
    solutions.find((item) => item.id === active) ?? solutions[0];

  const handleNext = () => {
    const currentIndex = solutions.findIndex(
      (item) => item.id === active
    );

    const nextIndex = (currentIndex + 1) % solutions.length;

    setActive(solutions[nextIndex].id);
  };

  return (
    <section className="w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-14 2xl:px-16">

        {/* MAIN RESPONSIVE LAYOUT */}
        <div
          className="
            grid grid-cols-1 items-start gap-8
            sm:gap-10
            lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1.4fr)]
            lg:gap-5
            xl:grid-cols-[minmax(250px,0.8fr)_minmax(0,1fr)_minmax(0,1.4fr)]
            xl:gap-7
            2xl:grid-cols-[340px_minmax(0,1fr)_minmax(0,1.42fr)]
            2xl:gap-9
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            className="flex min-w-0 flex-col lg:pr-2 xl:pr-5"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="mb-3 text-xs font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px] md:text-sm">
              Our Solutions
            </p>

            <h2
              className="
                max-w-[650px] text-[36px] font-semibold
                leading-[1.07] tracking-[-0.045em] text-[#111827]
                sm:text-[42px]
                md:text-[46px]
                lg:text-[36px]
                xl:text-[48px]
                2xl:text-[52px]
              "
            >
              Complete
              <br />
              Agricultural
              <br />
              Solutions
            </h2>

            <p
              className="
                mt-4 max-w-[380px] text-sm
                leading-[1.65] text-[#4B5563]
                sm:text-[15px]
                md:text-base
                lg:text-[15px]
                xl:text-base
              "
            >
              Innovative, adaptable farming systems designed around your
              space, resources and growing ambitions.
            </p>
          </motion.div>

          {/* MIDDLE IMAGE COLUMN */}
          <motion.div
            className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: "easeOut",
            }}
          >
            {/* TOP IMAGE */}
            <div
              className="
                group relative aspect-[1.5/1] w-full
                overflow-hidden rounded-[18px] bg-[#eee]
                sm:aspect-[1/1]
                lg:aspect-[1.55/1]
                lg:rounded-[22px]
              "
            >
              <Image
                src="/home/OurSolutions2.png"
                alt="Modern farming"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-black/5" />

              <button
                type="button"
                aria-label="Open farming solution"
                className="
                  absolute right-3 top-3 flex h-9 w-9
                  items-center justify-center rounded-full
                  bg-black/75 text-white backdrop-blur-sm
                  transition-transform duration-300 hover:scale-110
                  sm:right-4 sm:top-4 sm:h-10 sm:w-10
                "
              >
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </button>
            </div>

            {/* BOTTOM IMAGE */}
            <div
              className="
                group relative aspect-[1.5/1] w-full
                overflow-hidden rounded-[18px] bg-[#eee]
                sm:aspect-[1/1]
                lg:aspect-[1.55/1]
                lg:rounded-[22px]
              "
            >
              <Image
                src="/home/OurSolutions.png"
                alt="Fresh agricultural produce"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-black/5" />

              <button
                type="button"
                aria-label="Open agricultural produce"
                className="
                  absolute right-3 top-3 flex h-9 w-9
                  items-center justify-center rounded-full
                  bg-black/55 text-white backdrop-blur-sm
                  transition-transform duration-300 hover:scale-110
                  sm:right-4 sm:top-4 sm:h-10 sm:w-10
                "
              >
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT FEATURED CARD */}
          <motion.div
            className="
              relative min-h-[420px] w-full min-w-0
              overflow-hidden rounded-[18px] bg-[#111]
              sm:min-h-[480px] sm:rounded-[23px]
              md:min-h-[540px]
              lg:h-full lg:min-h-[400px] lg:rounded-[25px]
              xl:min-h-[480px] xl:rounded-[28px]
              2xl:min-h-[600px]
            "
            initial={{ opacity: 0, x: 45, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.22,
              ease: "easeOut",
            }}
          >
            {/* ACTIVE IMAGE */}
            <Image
              key={activeSolution.id}
              src={activeSolution.image}
              alt={activeSolution.title}
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 100vw,
                (max-width: 1280px) 45vw,
                42vw
              "
              className="object-cover transition-all duration-700 ease-out"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/80" />

            {/* NEXT BUTTON */}
            <button
              type="button"
              aria-label="Next solution"
              onClick={handleNext}
              className="
                absolute right-4 top-4 z-20
                flex h-10 w-10 items-center justify-center
                rounded-full border border-white/15
                bg-[#171717]/80 text-white backdrop-blur-md
                transition-all duration-300
                hover:bg-[#A7F3D0] hover:text-[#17211B]
                sm:right-5 sm:top-5 sm:h-11 sm:w-11
              "
            >
              <ChevronRight size={19} strokeWidth={1.7} />
            </button>

            {/* FEATURE CONTENT */}
            <motion.div
              key={activeSolution.id + "-content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                absolute bottom-6 left-5 right-5
                sm:bottom-8 sm:left-7 sm:right-7
                md:bottom-9 md:left-8 md:right-8
                lg:bottom-9
                xl:bottom-10
              "
            >
              <h3
                className="
                  text-[30px] font-semibold
                  leading-[1.05] tracking-[-0.04em] text-white
                  sm:text-[34px]
                  md:text-[40px]
                  lg:text-[34px]
                  xl:text-[40px]
                  2xl:text-[44px]
                "
              >
                {activeSolution.title}
              </h3>

              <p
                className="
                  mt-2 max-w-[430px] text-sm
                  leading-[1.6] text-white/75
                  sm:text-[15px]
                  md:text-base
                "
              >
                {activeSolution.description}
              </p>

              {/* SOLUTION INDICATOR */}
              <div className="mt-6 flex items-center gap-2">
                {solutions.map((solution) => (
                  <span
                    key={solution.id}
                    className={`
                      h-1.5 rounded-full transition-all duration-300
                      ${
                        active === solution.id
                          ? "w-8 bg-[#A7F3D0]"
                          : "w-2 bg-white/50"
                      }
                    `}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}