"use client";

import { Check } from "lucide-react";

const impactItems = [
  {
    title: "Reduce water waste",
    description:
      "Encourage more responsible and efficient use of water in agricultural production.",
  },
  {
    title: "Make better use of limited spaces",
    description:
      "Enable productive cultivation in controlled environments and smaller available areas.",
  },
  {
    title: "Improve resource efficiency",
    description:
      "Use technology and modern cultivation methods to manage water, nutrients, energy and space more effectively.",
  },
  {
    title: "Reduce unnecessary inputs",
    description:
      "Apply controlled systems and intelligent resource delivery to support more targeted agricultural practices.",
  },
  {
    title: "Support local food production",
    description:
      "Create opportunities for fresh food production closer to communities and consumers.",
  },
  {
    title: "Encourage sustainable farming practices",
    description:
      "Promote awareness, education and practical adoption of modern sustainable agriculture.",
  },
];

export default function OurImpact() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-[72px]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-14
        "
      >
        {/* =========================================================
            CONTENT
        ========================================================= */}
        <div className="w-full">
          {/* EYEBROW */}
          <span
            className="
              text-[11px]
              font-medium
              tracking-[0.02em]
              text-[#77827D]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Our Impact
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-4
              max-w-[900px]
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
            Small Changes. Bigger Impact.
          </h2>

          {/* VISIBLE CONTENT */}
          <p
            className="
              mt-7
              max-w-[1050px]
               text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
            "
          >
            We work towards agricultural systems that{" "}
            <strong className="font-semibold text-[#26352D]">
              reduce resource waste, improve efficiency and support sustainable
              food production
            </strong>
            . Our focus is on practical changes that can create meaningful
            long-term impact.
          </p>

          {/* =========================================================
              SUSTAINABILITY CONTENT
          ========================================================= */}
          <div className="w-full pt-8">
            {/* INTRO */}
            <p
              className="
                max-w-[1050px]
                    text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              Mazra Care&apos;s sustainability approach focuses on measurable
              improvements in how agricultural resources are used and how
              communities participate in sustainable development.
            </p>

            {/* SUB HEADING */}
            <p
              className="
                mt-6
                text-[14px]
                font-medium
                leading-[1.6]
                text-[#536158]
                sm:text-[15px]
                md:text-[16px]
              "
            >
              Our work aims to support farming systems that:
            </p>

            {/* =======================================================
                IMPACT ITEMS
            ======================================================= */}
            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-x-12
                gap-y-7
                sm:grid-cols-2
                sm:gap-x-12
                lg:gap-x-20
                lg:gap-y-8
                xl:gap-x-28
              "
            >
              {impactItems.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  {/* CHECK ICON */}
                  <span
                    className="
                      mt-[2px]
                      flex
                      h-[30px]
                      w-[30px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E5EEE5]
                      text-[#31523F]
                    "
                  >
                    <Check
                      size={16}
                      strokeWidth={2}
                    />
                  </span>

                  {/* TEXT */}
                  <div className="max-w-[560px]">
                    <h3
                      className="
                         text-[18px]
                    font-semibold
             
                    text-[#111827]
           
                    sm:text-[19px]
                    md:text-[20px]
                    xl:text-[20px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
              
                        leading-[1.6]
              
                        sm:text-[14px]
                                    text-[13px]
               
                    text-[#817D77]
          
                    sm:text-[14px]
                    md:text-[15px]
                    md:leading-[1.6]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* =======================================================
                FINAL CONTENT
            ======================================================= */}
            <p
              className="
                mt-8
                max-w-[1050px]
           text-[14px]
                leading-[1.55]
                text-[#4B5563]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              The Word document also positions sustainable agriculture as a
              means of supporting{" "}
              <strong className="font-semibold text-[#26352D]">
                food access, sustainable lifestyles and economic development
              </strong>{" "}
              within communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}