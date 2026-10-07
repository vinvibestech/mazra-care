"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const farmTypes = [
  {
    id: "indoor",
    label: "Indoor",
    video: "/home/Indoor.mp4",
    title: "Indoor Farming",

  },
  {
    id: "terrace",
    label: "Terrace",
    video: "/videos/grow/terrace.mp4",
    title: "Terrace Farming",

  },
   {
    id: "balcony",
    label: "Balcony",
    video: "/videos/grow/terrace.mp4",
    title: "Balcony Farming",

  },
   {
    id: "rooftop",
    label: "Rooftop",
    video: "/videos/grow/terrace.mp4",
    title: "Rooftop Farming",

  },
  {
    id: "greenhouse",
    label: "Greenhouse",
    video: "/videos/grow/greenhouse.mp4",
    title: "Greenhouse Farming",

  },
  {
    id: "backyard",
    label: "Backyard",
    video: "/videos/grow/backyard.mp4",
    title: "Backyard Farming",

  },
  {
    id: "commercial",
    label: "Commercial",
    video: "/videos/grow/backyard.mp4",
    title: "Commercial Farming",

  },
];

const locations = [
  "Indoor",
  "Terrace",
  "Balcony",
  "Rooftop",
  "Backyard",
  "Greenhouse",
  "Commercial",
];

export default function GrowWhereYouAre() {
  const [activeId, setActiveId] = useState("indoor");
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const activeFarm =
    farmTypes.find((farm) => farm.id === activeId) ?? farmTypes[0];

  // Change video when side image is clicked
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.load();

    setIsPlaying(false);
  }, [activeId]);

  const handlePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-22 xl:py-22">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="
                text-[34px]
              font-semibold
              leading-[1.03]
              tracking-[-0.045em]
              text-[#111827]

              sm:text-[40px]

              md:text-[44px]

              lg:text-[46px]

              xl:text-[48px]
            "
          >
            Grow Where You Are
          </h2>

          <p
            className="
              mt-3
                     text-[15px]
                  font-bold
                  leading-[1.4]
                  tracking-[-0.02em]
                  text-[#111827]

                  sm:text-[16px]

                  md:text-[16px]
            "
          >
            Any Space. Any Scale.
          </p>

          <p
            className="
              mt-1
              max-w-[720px]
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
            From balconies and rooftops to commercial farms, we transform
            available spaces into productive growing environments.
          </p>
        </div>

        {/* =====================================================
            MAIN VISUAL AREA
        ====================================================== */}
        <div
          className="
            relative
            mx-auto
            mt-12
            h-auto
            max-w-[1100px]
            sm:mt-14
            md:mt-16
            lg:h-[390px]
            xl:h-[410px]
          "
        >
          {/* =================================================
              LEFT TOP - INDOOR
          ================================================== */}
          <button
            type="button"
            onClick={() => setActiveId("indoor")}
            aria-label="Indoor farming"
            className={`
              group
              absolute
              left-0
              top-[30px]
              hidden
              h-[100px]
              w-[100px]
              overflow-hidden
              rounded-full
        
              bg-white
     
              ring-1
              transition-all
              duration-300
              lg:block
              xl:h-[105px]
              xl:w-[105px]
              ${
                activeId === "indoor"
                  ? "border-white ring-[#E6F5DC] ring-4 scale-105"
                  : "border-white ring-[#E5E7EB] hover:scale-105"
              }
            `}
          >
            <Image
              src="/home/Indoor.png"
              alt="Indoor farming"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="105px"
            />

            {/* active overlay */}
            {activeId === "indoor" && (
              <span className="absolute inset-0 rounded-full bg-black/10" />
            )}
          </button>

          {/* =================================================
              LEFT BOTTOM - TERRACE
          ================================================== */}
          <button
            type="button"
            onClick={() => setActiveId("terrace")}
            aria-label="Terrace farming"
            className={`
              group
              absolute
              bottom-[50px]
              left-[18px]
              hidden
              h-[108px]
              w-[108px]
              overflow-hidden
              rounded-full
      
              ring-1
              transition-all
              duration-300
              lg:block
              xl:h-[115px]
              xl:w-[115px]
              ${
                activeId === "terrace"
                  ? "border-white ring-[#E6F5DC] ring-4 scale-105"
                  : "border-white ring-[#E5E7EB] hover:scale-105"
              }
            `}
          >
            <Image
              src="/home/Terrace.png"
              alt="Terrace farming"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="115px"
            />

            {activeId === "terrace" && (
              <span className="absolute inset-0 rounded-full bg-black/10" />
            )}
          </button>

          {/* =================================================
              RIGHT TOP - GREENHOUSE
          ================================================== */}
          <button
            type="button"
            onClick={() => setActiveId("greenhouse")}
            aria-label="Greenhouse farming"
            className={`
              group
              absolute
              right-0
              top-[30px]
              hidden
              h-[100px]
              w-[100px]
              overflow-hidden
              rounded-full
    
              ring-1
              transition-all
              duration-300
              lg:block
              xl:h-[105px]
              xl:w-[105px]
              ${
                activeId === "greenhouse"
                  ? "border-white ring-[#E6F5DC] ring-4 scale-105"
                  : "border-white ring-[#E5E7EB] hover:scale-105"
              }
            `}
          >
            <Image
              src="/home/green.png"
              alt="Greenhouse farming"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="105px"
            />

            {activeId === "greenhouse" && (
              <span className="absolute inset-0 rounded-full bg-black/10" />
            )}
          </button>

          {/* =================================================
              RIGHT BOTTOM - BACKYARD
          ================================================== */}
          <button
            type="button"
            onClick={() => setActiveId("backyard")}
            aria-label="Backyard farming"
            className={`
              group
              absolute
              bottom-[50px]
              right-[18px]
              hidden
              h-[108px]
              w-[108px]
              overflow-hidden
              rounded-full
   
       
  
              ring-1
              transition-all
              duration-300
              lg:block
              xl:h-[115px]
              xl:w-[115px]
              ${
                activeId === "backyard"
                  ? "border-white ring-[#E6F5DC] ring-4 scale-105"
                  : "border-white ring-[#E5E7EB] hover:scale-105"
              }
            `}
          >
            <Image
              src="/home/Backyard.png"
              alt="Backyard farming"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="115px"
            />

            {activeId === "backyard" && (
              <span className="absolute inset-0 rounded-full bg-black/10" />
            )}
          </button>

          {/* =================================================
              CENTER VIDEO
          ================================================== */}
          <div
            className="
              relative
              mx-auto
              aspect-[1.75/1]
              w-full
              max-w-[620px]
              overflow-hidden
              rounded-[45px]
       
      
              bg-[#E5E7EB]

              sm:rounded-[50px]
              md:max-w-[650px]
              lg:top-[4px]
              lg:max-w-[625px]
              xl:max-w-[650px]
            "
          >
            {/* VIDEO */}
            <video
              ref={videoRef}
              key={activeFarm.video}
              src={activeFarm.video}
              autoPlay
              muted
              loop
              preload="metadata"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* subtle overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />

        

            {/* =================================================
                CENTER CONTENT
            ================================================== */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-6
                left-7
                right-7
                text-white
                sm:bottom-7
                sm:left-9
                sm:right-9
              "
            >
  

              <h3
                className="
                  mt-1
                  text-[20px]
                  font-semibold
                  tracking-[-0.025em]
                  sm:text-[23px]
                "
              >
                {activeFarm.title}
              </h3>

   
            </div>
          </div>
        </div>

        {/* =====================================================
            LOCATION LIST
        ====================================================== */}
          <div
          className="
            mx-auto
            mt-8
            flex
            max-w-[850px]
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2
            sm:mt-10
            sm:gap-x-6
            md:gap-x-7
          "
        >
          {locations.map((location, index) => {
            const active =
              location.toLowerCase() === activeFarm.label.toLowerCase();

            return (
              <div
                key={location}
                className="flex items-center gap-5 sm:gap-6 md:gap-7"
              >
                <button
                  type="button"
                  onClick={() => {
                    const selected = farmTypes.find(
                      (farm) =>
                        farm.label.toLowerCase() ===
                        location.toLowerCase()
                    );

                    if (selected) {
                      setActiveId(selected.id);
                    }
                  }}
                  className={`
                    text-[13px]
                    font-medium
                    leading-[1.4]
                    transition-colors
                    duration-300
                    sm:text-[14px]
                    ${
                      active
                        ? "font-semibold text-[#111827]"
                        : "text-[#6B7280] hover:text-[#111827]"
                    }
                  `}
                >
                  {location}
                </button>

                {index < locations.length - 1 && (
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#D1D5DB]
                    "
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <div className="mt-8 flex justify-center sm:mt-9">
          <Link
            href="/solutions"
            className="
                    group
                mt-6
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

                sm:mt-7
                sm:gap-4
                sm:px-6
                sm:py-3
                sm:text-[14px]

                md:text-[15px]
            "
          >
            <span>Customize Your Farm</span>

            <span
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
              <ArrowRight size={13} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}