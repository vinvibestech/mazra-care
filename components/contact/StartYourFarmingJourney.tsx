"use client";

import Image from "next/image";
import { useState } from "react";

import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  FileText,
  ChevronDown,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const projectTypes = [
  "Residential Farming",
  "Hydroponics",
  "Aquaponics",
  "Aeroponics",
  "Greenhouse",
  "Commercial Farming",
  "Industrial Farming",
  "Smart Farming",
  "Agricultural Project",
  "Education & Training",
  "Sustainability Project",
  "Other",
];

export default function StartYourFarmingJourney() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-20">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-10
          px-5
          sm:px-8
          md:px-10
          lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
          lg:gap-16
          lg:px-12
          xl:gap-20
          xl:px-14
        "
      >
        {/* LEFT CONTENT */}
        <div className="order-1 flex w-full flex-col">
          {/* Eyebrow */}
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
         Start Your Farming Journey
          </span>

          {/* Heading */}
          <h2
            className="
              mt-4
              max-w-[700px]
                text-[36px]
    font-semibold
    leading-[1.03]
    tracking-[-0.01em]
    text-[#111827]
    sm:text-[42px]
    md:text-[46px]
    lg:text-[36px]
    xl:text-[52px]
            "
          >
            Start Your Farming Journey
          </h2>

          {/* Intro */}
          <p
            className="
              mt-5
              max-w-[690px]
             text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
            "
          >
            Tell us about your{" "}
            <strong className="font-medium text-[#526158]">
              space, goals and farming needs
            </strong>
            . Our team will help you explore the right agricultural solution
            for your requirements.
          </p>

          {/* READ MORE CONTENT */}
          <div
            className={`
              grid
              overflow-hidden
              transition-[grid-template-rows,opacity]
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className="
                  max-w-[700px]
                  space-y-4
                  pt-5
                  text-[14px]
                  leading-[1.7]
                  text-[#617067]
                  sm:text-[15px]
                  md:text-[16px]
                "
              >
                <p>
                  Every farming project begins with a different objective. You
                  may want to transform a backyard into a productive growing
                  space, establish a hydroponic system, develop a greenhouse,
                  or explore a larger commercial agriculture project.
                </p>

                <p>
                  By understanding your available space, intended use, project
                  scale and goals, Mazra Care can help you explore suitable{" "}
                  <strong className="font-semibold text-[#27352D]">
                    sustainable farming systems and agricultural technologies.
                  </strong>
                </p>

                <p>
                  Our broader approach combines agriculture with innovation and
                  technology, including{" "}
                  <strong className="font-semibold text-[#27352D]">
                    hydroponics, aquaponics, AI-driven crop management and smart
                    farming systems.
                  </strong>
                </p>

                <p>
                  Share your project requirements with us and our team can begin
                  the conversation around the possibilities, requirements and
                  next steps.
                </p>
              </div>
            </div>
          </div>

          {/* READ MORE BUTTON */}
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="
              group
              mt-5
              inline-flex
              w-fit
              items-center
              gap-2
              text-[14px]
              font-semibold
              text-[#18231D]
              transition-colors
              duration-300
              hover:text-[#6B9B68]
            "
          >
            {isExpanded ? "Read Less" : "Read More"}

            {isExpanded ? (
              <ChevronUp
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300"
              />
            ) : (
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            )}
          </button>

          {/* FORM */}
          <form className="mt-10 w-full sm:mt-12">
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-[14px]
                    font-semibold
                    text-[#26332B]
                  "
                >
                  Name
                </label>

                <div
                  className="
                    flex
                    h-[54px]
                    items-center
                    rounded-[14px]
                    bg-[#F2F3ED]
                    px-5
                    transition-all
                    duration-300
                    focus-within:bg-[#ECEDE7]
                    focus-within:ring-1
                    focus-within:ring-[#D4D8D0]
                  "
                >
                  <User
                    size={18}
                    strokeWidth={1.6}
                    className="mr-3 shrink-0 text-[#7A8A80]"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      bg-transparent
                      text-[15px]
                      text-[#26332B]
                      outline-none
                      placeholder:text-[#91A097]
                    "
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[14px]
                    font-semibold
                    text-[#26332B]
                  "
                >
                  Email
                </label>

                <div
                  className="
                    flex
                    h-[54px]
                    items-center
                    rounded-[14px]
                    bg-[#F2F3ED]
                    px-5
                    transition-all
                    duration-300
                    focus-within:bg-[#ECEDE7]
                    focus-within:ring-1
                    focus-within:ring-[#D4D8D0]
                  "
                >
                  <Mail
                    size={18}
                    strokeWidth={1.6}
                    className="mr-3 shrink-0 text-[#7A8A80]"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    className="
                      w-full
                      bg-transparent
                      text-[15px]
                      text-[#26332B]
                      outline-none
                      placeholder:text-[#91A097]
                    "
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="
                    mb-2
                    block
                    text-[14px]
                    font-semibold
                    text-[#26332B]
                  "
                >
                  Phone
                </label>

                <div
                  className="
                    flex
                    h-[54px]
                    items-center
                    rounded-[14px]
                    bg-[#F2F3ED]
                    px-5
                    transition-all
                    duration-300
                    focus-within:bg-[#ECEDE7]
                    focus-within:ring-1
                    focus-within:ring-[#D4D8D0]
                  "
                >
                  <Phone
                    size={18}
                    strokeWidth={1.6}
                    className="mr-3 shrink-0 text-[#7A8A80]"
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="
                      w-full
                      bg-transparent
                      text-[15px]
                      text-[#26332B]
                      outline-none
                      placeholder:text-[#91A097]
                    "
                  />
                </div>
              </div>

              {/* PROJECT TYPE */}
              <div className="relative">
                <label
                  htmlFor="projectType"
                  className="
                    mb-2
                    block
                    text-[14px]
                    font-semibold
                    text-[#26332B]
                  "
                >
                  Project Type
                </label>

                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="
                    flex
                    h-[54px]
                    w-full
                    items-center
                    justify-between
                    rounded-[14px]
                    bg-[#F2F3ED]
                    px-5
                    text-left
                    transition-all
                    duration-300
                    hover:bg-[#ECEDE7]
                    focus:outline-none
                    focus:ring-1
                    focus:ring-[#D4D8D0]
                  "
                >
                  <span
                    className={`
                      text-[15px]
                      ${
                        projectType
                          ? "text-[#26332B]"
                          : "text-[#26332B]"
                      }
                    `}
                  >
                    {projectType || "Select project type"}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.8}
                    className={`
                      text-[#26332B]
                      transition-transform
                      duration-300
                      ${isDropdownOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-[82px]
                      z-30
                      max-h-[260px]
                      overflow-y-auto
                      rounded-[14px]
                      border
                      border-[#E3E6E0]
                      bg-white
                      p-2
                      shadow-[0_12px_35px_rgba(20,30,24,0.10)]
                    "
                  >
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setProjectType(type);
                          setIsDropdownOpen(false);
                        }}
                        className="
                          w-full
                          rounded-[9px]
                          px-3
                          py-2.5
                          text-left
                          text-[14px]
                          text-[#26332B]
                          transition-colors
                          duration-200
                          hover:bg-[#F2F3ED]
                        "
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[14px]
                    font-semibold
                    text-[#26332B]
                  "
                >
                  Message
                </label>

                <div
                  className="
                    flex
                    min-h-[116px]
                    items-start
                    rounded-[14px]
                    bg-[#F2F3ED]
                    px-5
                    py-4
                    transition-all
                    duration-300
                    focus-within:bg-[#ECEDE7]
                    focus-within:ring-1
                    focus-within:ring-[#D4D8D0]
                  "
                >
                  <FileText
                    size={18}
                    strokeWidth={1.6}
                    className="mr-3 mt-0.5 shrink-0 text-[#7A8A80]"
                  />

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="
                      w-full
                      resize-none
                      bg-transparent
                      text-[15px]
                      leading-[1.5]
                      text-[#26332B]
                      outline-none
                      placeholder:text-[#91A097]
                    "
                  />
                </div>
              </div>
            </div>

       
                        {/* Learn More */}
                        <Link
                            href='/contact'
                            className="
                  group mt-7 inline-flex items-center gap-3
                rounded-full border border-[#D0D5DA]
                bg-white px-5 py-3
                text-[14px] font-semibold text-[#111827]
                transition-all duration-300
                hover:border-[#111827]
                hover:bg-[#111827]
                hover:text-white
              "
                        >
                            <span>Send Message</span>

                            <span
                                className="
                 flex h-7 w-7 items-center justify-center
                  rounded-full bg-[#111827] text-white
                  transition-all duration-300
                  group-hover:bg-white group-hover:text-[#111827]
                "
                            >
                                <ArrowRight
                                    size={14}
                                    strokeWidth={2}
                                />
                            </span>
                        </Link>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            order-2
            h-[420px]
            w-full
            overflow-hidden
            rounded-[28px]
            bg-[#EAF2EB]
            sm:h-[500px]
            sm:rounded-[32px]
            md:h-[560px]
            lg:h-[740px]
            lg:rounded-[42px]
            xl:h-[740px]
          "
        >
          <Image
            src="/contact/StartYourFarming.png"
            alt="Hydroponic farming system"
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
      </div>
    </section>
  );
}