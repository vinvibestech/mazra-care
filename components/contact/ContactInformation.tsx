"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

export default function ContactInformation() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      content: (
        <div className="flex flex-col gap-1">
          <a
            href="mailto:growth@mazracare.com"
            className="transition-colors duration-300 hover:text-[#315B3D]"
          >
            growth@mazracare.com
          </a>

          <a
            href="mailto:mazracareoffice@gmail.com"
            className="transition-colors duration-300 hover:text-[#315B3D]"
          >
            mazracareoffice@gmail.com
          </a>
        </div>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <a
          href="tel:+971552988055"
          className="transition-colors duration-300 hover:text-[#315B3D]"
        >
          +971 552988055
        </a>
      ),
    },
    {
      icon: MapPin,
      title: "Location",
      content: <>Dubai, United Arab Emirates</>,
    },
    {
      icon: Clock3,
      title: "Working Hours",
      content: (
        <>
          <span className="block">Monday – Saturday</span>
          <span className="block">9:00 AM – 6:00 PM</span>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-[76px]">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
     {/* HEADER */}
<div className="max-w-[900px] text-left">
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
 Contact Information
  </span>

  <h2
    className="
      mt-4
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
    We’re Here to Help
  </h2>

  {/* VISIBLE CONTENT */}
  <p
    className="
      mt-4
      max-w-[850px]
            text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
    "
  >
    Have a question about our{" "}
    <strong className="font-medium text-[#526158]">
      farming solutions, agricultural projects or sustainable
      development initiatives
    </strong>
    ? Reach out to the Mazra Care team.
  </p>

  {/* EXPANDED CONTENT */}
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
          max-w-[850px]
          space-y-4
          pt-5
             text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
        "
      >
        <p>
          Our team welcomes enquiries from individuals, families,
          businesses, institutions and organisations interested in
          exploring sustainable agriculture and related solutions.
        </p>

        <p>
          Whether you are looking for information about{" "}
          <strong className="font-semibold text-[#27352D]">
            hydroponic farming, aquaponics, aeroponics, greenhouse
            systems, smart agriculture or a larger-scale farming
            project
          </strong>
          , you can contact us to discuss your requirements.
        </p>

        <p>
          Mazra Care's broader vision connects agriculture with
          education, renewable energy, technology and sustainable
          community development, creating opportunities for different
          types of projects and partnerships.
        </p>

        <p>
          We aim to understand your requirements and direct your enquiry
          towards the appropriate team or project area.
        </p>
      </div>
    </div>
  </div>

  {/* READ MORE */}
  <button
    type="button"
    onClick={() => setIsExpanded((prev) => !prev)}
    aria-expanded={isExpanded}
    className="
      group
      mt-5
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
</div>

        {/* CONTACT CARDS */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:mt-14
            sm:grid-cols-2
            sm:gap-5
            lg:mt-16
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  min-h-[220px]
                  rounded-[22px]
                   bg-[#EAF4E6]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  sm:min-h-[225px]
                  sm:p-8
                  lg:min-h-[220px]
                  xl:min-h-[225px]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DCE9DD]
                    text-[#285438]
                  "
                >
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-7
                    text-[17px]
                    font-semibold
                    leading-[1.2]
                    text-[#1F2B23]
                    sm:text-[18px]
                  "
                >
                  {item.title}
                </h3>

                {/* CONTENT */}
                <div
                  className="
                    mt-2
                    text-[15px]
                    leading-[1.7]
                    text-[#5F6D64]
                    sm:text-[16px]
                  "
                >
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}