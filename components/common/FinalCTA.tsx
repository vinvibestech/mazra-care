
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp, Sprout } from "lucide-react";

export default function FinalCTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleStartProject = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="relative w-full max-w-[1500px] overflow-hidden rounded-[28px] bg-[#153F2B] sm:rounded-[36px] lg:rounded-[44px]">
        {/* Background image */}
        <Image
          src="/images/farms/greenhouses.jpg"
          alt="Lush green agricultural fields"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#102E20]/95 via-[#153F2B]/90 to-[#153F2B]/75" />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 md:px-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:px-20 lg:py-20 xl:px-24 xl:py-24">
          {/* Main content */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
              <Sprout size={16} className="text-[#B9D8A8]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-xs">
                Let’s Build Something Meaningful
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Let’s Grow Something{" "}
              <span className="text-[#B9D8A8]">
                Better,
              </span>{" "}
              Together.
            </h2>

            {/* Visible content */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">
              Have an idea, a space or a project in mind? Start the
              conversation with Mazra Care and explore the possibilities
              of{" "}
              <strong className="font-semibold text-white">
                smarter, more sustainable farming.
              </strong>
            </p>

            {/* Expandable content */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
              aria-hidden={!isExpanded}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="max-w-2xl space-y-4 pt-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  <p>
                    The future of agriculture will be shaped by
                    innovation, responsible resource use, technology
                    and people who are willing to explore new ways of
                    growing.
                  </p>

                  <p>
                    Mazra Care is building a vision around these
                    principles by bringing together{" "}
                    <strong className="font-semibold text-white">
                      sustainable agriculture, smart technology,
                      education, renewable energy and community
                      development.
                    </strong>
                  </p>

                  <p>
                    Whatever stage your idea is at, you can start by
                    telling us what you are looking to achieve.
                  </p>

                  <p className="border-l-2 border-[#B9D8A8] pl-4 font-medium italic text-white">
                    Your idea could be the beginning of something
                    that grows far beyond a farm.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-9">
              <button
                type="button"
                onClick={handleStartProject}
                className="group inline-flex min-h-14 items-center gap-4 rounded-full bg-[#C5DDB7] py-2 pl-6 pr-2 text-sm font-semibold text-[#173B29] transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#153F2B] sm:text-base"
              >
                <span>Start Your Project</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173B29] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={19} />
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
              >
                <span>
                  {isExpanded ? "Read Less" : "Read More"}
                </span>

                {isExpanded ? (
                  <ChevronUp
                    size={17}
                    className="transition-transform duration-300"
                  />
                ) : (
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Right-side visual accent */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] xl:h-56 xl:w-56">
              <div className="absolute inset-3 rounded-full border border-dashed border-white/20" />

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#C5DDB7] text-[#173B29] xl:h-28 xl:w-28">
                <Sprout
                  size={48}
                  strokeWidth={1.4}
                  className="xl:h-14 xl:w-14"
                />
              </div>

              <span className="absolute -bottom-3 rounded-full border border-white/15 bg-[#214C36] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 xl:text-xs">
                Grow With Purpose
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
