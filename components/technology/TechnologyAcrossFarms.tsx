"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

const farmTypes = [
  {
    title: "Residential Farms",
    image: "/tech/ResidentialFarms.png",
    description:
      "Smart systems for home-based and small-space agricultural environments.",
  },
  {
    title: "Hydroponics",
    image: "/tech/Hydroponics.png",
    description:
      "Technology-enabled soilless cultivation designed around efficient management of water, nutrients and growing conditions.",
  },
  {
    title: "Aquaponics",
    image: "/tech/Aquaponics.png",
    description:
      "Connected systems combining fish and plant production within an integrated growing environment.",
  },
  {
    title: "Greenhouses",
    image: "/tech/Greenhouses.png",
    description:
      "Controlled environments supported by monitoring, automation and smart agricultural technology.",
  },
  {
    title: "Commercial Farms",
    image: "/tech/CommercialFarms.png",
    description:
      "Scalable technology solutions designed for business-oriented agricultural production.",
  },
  {
    title: "Industrial Farms",
    image: "/tech/IndustrialFarms.png",
    description:
      "Larger agricultural environments where connected monitoring, automation and data systems can support complex operations.",
  },
];

export default function TechnologyAcrossFarms() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-[58px]">
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
        {/* HEADER */}
        <div>
          <span
            className="
              text-[12px]
              font-medium
              tracking-[0.02em]
              text-[#68756E]
              sm:text-[13px]
              md:text-[14px]
            "
          >
            Technology Across Every Farm
          </span>

          <h2
            className="
              mt-3
text-[36px] font-semibold
              leading-[1.03] tracking-[-0.045em] text-[#111827]
              sm:text-[42px] md:text-[46px] lg:text-[36px] xl:text-[52px]
            "
          >
            From Small Spaces to Large Farms
          </h2>

          <p
            className="
              mt-3
              max-w-[900px]
        text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
            "
          >
            Smart technology can be integrated across different agricultural
            environments—from{" "}
            <strong className="font-semibold text-[#111827]">
              residential farms and hydroponic systems to greenhouses,
              commercial farms and industrial agriculture
            </strong>
            .
          </p>


  <p
              className="
              mt-4  max-w-[900px]
             text-[14px] leading-[1.55] text-[#4B5563] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
              "
            >
              Mazra Care&apos;s technology-driven approach is designed to work
              across different scales and types of farming.
            </p>
        </div>

        {/* FARM CARDS */}
        <div
          className="
            mt-11
            grid
            grid-cols-1
            gap-x-6
            gap-y-10
            sm:grid-cols-2
            lg:mt-12
            lg:grid-cols-3
            lg:gap-x-8
            lg:gap-y-12
            xl:gap-x-10
            xl:gap-y-14
          "
        >
          {farmTypes.map((farm) => (
            <div key={farm.title} className="group min-w-0">
              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[1.48/1]
                  w-full
                  overflow-hidden
                  rounded-[12px]
                  bg-[#EAF2EB]
                  sm:rounded-[14px]
                  lg:rounded-[16px]
                "
              >
                <Image
                  src={farm.image}
                  alt={farm.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.035]
                  "
                />
              </div>

              {/* CARD TITLE */}
              <h3
                className="
                  mt-4
           text-[19px] font-semibold leading-[1.35]
              tracking-[-0.02em] text-[#111827]
             
                   sm:text-[20px]
                        md:text-[21px]
                        xl:text-[22px]
                "
              >
                {farm.title}
              </h3>

              {/* CARD DESCRIPTION - ALWAYS VISIBLE */}
              <p
                className="
                  mt-2
                  max-w-[430px]
                   text-[14px] leading-[1.6]
              text-[#817D77]
           
                sm:text-[14px]
                        md:text-[15px]
                "
              >
                {farm.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}