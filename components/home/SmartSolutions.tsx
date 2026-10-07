"use client";

import Link from "next/link";
import {
    ArrowRight,
    Cpu,
    Leaf,
    Sprout,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const tabs = [
    {
        id: "technology",
        label: "technology",
        icon: Cpu,
        video: "/home/technology.mp4",
        eyebrow: "Sustainable Agriculture",
        title: "Smarter Solutions.",
        description:
            "We combine technology, innovation, and sustainable farming to create efficient agricultural solutions for homes, businesses, and large-scale projects.",
        highlight1: "We don't just build farms.",
        highlight2: "We build sustainable ecosystems.",
        href: "/solutions",
    },

    {
        id: "innovation",
        label: "innovation",
        icon: Cpu,
        video: "/videos/innovation.mp4",
        eyebrow: "Innovation in Agriculture.",
        title: "Innovation That Grows.",
        description:
            "From intelligent systems to advanced growing techniques, we develop innovative solutions that make modern farming more efficient and adaptable.",
        highlight1: "Innovation drives progress.",
        highlight2: "We turn ideas into growing systems.",
        href: "/technology",
    },

    {
        id: "sustainable",
        label: "sustainable",
        icon: Sprout,
        video: "/videos/sustainable.mp4",
        eyebrow: "Built for Sustainability.",
        title: "Growing Sustainably.",
        description:
            "Our farming systems are designed to reduce resource consumption while supporting responsible food production and long-term environmental sustainability.",
        highlight1: "Grow more with less.",
        highlight2: "Build a better future for agriculture.",
        href: "/sustainability",
    },

    {
        id: "healthy",
        label: "healthy",
        icon: Leaf,
        video: "/videos/healthy.mp4",
        eyebrow: "Healthier Food Systems.",
        title: "Healthier By Nature.",
        description:
            "We create controlled growing environments that support fresh, nutritious produce while helping communities build healthier and more reliable food systems.",
        highlight1: "Better growing.",
        highlight2: "Healthier food for everyone.",
        href: "/solutions",
    },
];

export default function SmartSolutions() {
    const [activeTab, setActiveTab] = useState("technology");

    const videoRef = useRef<HTMLVideoElement>(null);

    const activeContent =
        tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

    /* =====================================
        RESTART VIDEO WHEN TAB CHANGES
    ====================================== */

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.load();

        video.play().catch(() => {
            // Browser may block autoplay
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
                {/* =====================================
            MOBILE / TABLET TAB NAVIGATION
        ====================================== */}

                <div
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
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
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

                  ${isActive
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
                                            : tab.id === "sustainable" ||
                                                tab.id === "healthy"
                                                ? "text-[#62B936]"
                                                : "text-[#667085]"
                                    }
                                />

                                <span className="capitalize whitespace-nowrap">
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* =====================================
            MAIN RESPONSIVE GRID
        ====================================== */}

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
                    {/* =====================================
              DESKTOP TAB NAVIGATION
          ====================================== */}

                    <div
                        className="
              hidden
              lg:flex
              flex-col
              items-start
              gap-3
            "
                    >
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
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

                    ${isActive
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
                                                : tab.id === "sustainable" ||
                                                    tab.id === "healthy"
                                                    ? "text-[#62B936]"
                                                    : "text-[#667085]"
                                        }
                                    />

                                    <span className="capitalize whitespace-nowrap">
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* =====================================
              VIDEO
          ====================================== */}

                    <div
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
                        {/* Video */}
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

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10" />

                        {/* Play Button */}
                    
                    </div>

                    {/* =====================================
              RIGHT CONTENT
          ====================================== */}

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
                        {/* Eyebrow */}
                        <p
                            className="
                mb-2
                text-[13px]
                font-medium
                tracking-[0.02em]
                text-[#6B7280]

                sm:text-[14px]

                md:text-[13px]
              "
                        >
                            {activeContent.eyebrow}
                        </p>

                        {/* Title */}
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

                        {/* Description */}
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

                        {/* Highlight */}
                        <div className="mt-5">
                            <p
                                className="
                  text-[15px]
                  font-bold
                  leading-[1.4]
                  tracking-[-0.02em]
                  text-[#111827]

                  sm:text-[16px]

                  md:text-[16px]
                "
                            >
                                {activeContent.highlight1}
                                <br />
                                {activeContent.highlight2}
                            </p>
                        </div>

                        {/* Learn More */}
                        <Link
                            href={activeContent.href}
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
                            <span>Learn More</span>

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
                                <ArrowRight
                                    size={14}
                                    strokeWidth={2}
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}