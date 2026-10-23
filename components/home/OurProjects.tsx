"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const commitments = [
  "COMMITMENT TO SUSTAINABILITY",
  "COMMITMENT TO SUSTAINABILITY",
  "COMMITMENT TO SUSTAINABILITY",
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function OurProjects() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 2.2,
        ease: smoothEase,
      },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
      scale: shouldReduceMotion ? 1 : 0.995,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 2.4,
        delay: shouldReduceMotion ? 0 : index * 0.3,
        ease: smoothEase,
      },
    }),
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        {/* HEADER */}
        <motion.div
          className="flex items-center justify-between gap-3 sm:gap-4"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: "0px 0px -40px 0px" }}
        >
          <h2
            className="
              text-[clamp(30px,5vw,52px)]
              font-semibold
              leading-[1.03]
              tracking-[-0.045em]
              text-[#111827]
            "
          >
            Our Projects & Possibilities.
          </h2>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <span className="hidden text-[10px] font-semibold tracking-[0.08em] text-[#4B5563] sm:inline">
              LET&apos;S CONNECT
            </span>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <SocialLink href="#" label="Facebook">
                f
              </SocialLink>

              <SocialLink href="#" label="Instagram">
                ◎
              </SocialLink>

              <SocialLink href="#" label="LinkedIn">
                in
              </SocialLink>
            </div>
          </div>
        </motion.div>

        {/* PROJECT IMAGES */}
        <motion.div
          className="
            mt-7 grid grid-cols-1 gap-4
            sm:mt-8 sm:grid-cols-[0.78fr_1.55fr_0.78fr]
            sm:items-center sm:gap-3
            md:gap-4
            lg:mt-9 lg:grid-cols-[0.78fr_1.6fr_0.78fr]
            lg:gap-[18px]
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.08, margin: "0px 0px -20px 0px" }}
        >
          {/* LEFT IMAGE */}
          <ProjectImage
            src="/home/project1.png"
            alt="Glass greenhouse surrounded by a garden"
            className="
              aspect-[1.5/1] w-full
              sm:aspect-[1.12/1]
              sm:translate-y-1
            "
            index={0}
            variants={imageReveal}
            shouldReduceMotion={shouldReduceMotion}
          />

          {/* MAIN IMAGE */}
          <ProjectImage
          src="/home/GoldenHours.png"
            alt="Farmer working inside a modern greenhouse"
            className="
              aspect-[1.5/1] w-full
              sm:aspect-[1.55/1]
            "
            index={1}
            variants={imageReveal}
            shouldReduceMotion={shouldReduceMotion}
          />

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-3 md:gap-[14px]">
            <ProjectImage
              src="/home/project2.png"
              alt="Hands planting a young seedling"
              className="aspect-[1.3/1] w-full sm:aspect-[2.05/1]"
              index={2}
              variants={imageReveal}
              shouldReduceMotion={shouldReduceMotion}
            />

            <ProjectImage
              src="/home/project3.png"
              alt="Indoor vertical farming system"
              className="aspect-[1.3/1] w-full sm:aspect-[2.05/1]"
              index={3}
              variants={imageReveal}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </motion.div>

        {/* BOTTOM COMMITMENTS */}
        <motion.div
          className="
            hidden mt-8 grid grid-cols-1
            border-t border-[#E9ECEF] sm:grid pt-4
            sm:mt-10 sm:grid-cols-3 sm:gap-4 sm:pt-5
            md:mt-12
          "
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15, margin: "0px 0px -30px 0px" }}
        >
          {commitments.map((text, index) => (
            <motion.p
              key={index}
              variants={reveal}
              className={`
                text-center text-[9px]
                font-semibold tracking-[0.015em]
                text-[#374151]
                sm:text-[10px]
                ${index === 1 ? "sm:text-center" : ""}
                ${index === 2 ? "sm:text-right" : ""}
              `}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* REUSABLE PROJECT IMAGE */
function ProjectImage({
  src,
  alt,
  className,
  index,
  variants,
  shouldReduceMotion,
}: {
  src: string;
  alt: string;
  className?: string;
  index: number;
  variants: {
    hidden: { opacity: number; y: number; scale?: number };
    visible: (index: number) => {
      opacity: number;
      y: number;
      scale: number;
      transition: {
        duration: number;
        delay: number;
        ease: typeof smoothEase;
      };
    };
  };
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      custom={index}
      variants={variants}
      className={`
        group relative w-full overflow-hidden
        rounded-[16px] bg-[#EAF2EB]
        shadow-[0_2px_4px_rgba(0,0,0,0.12)]
        sm:rounded-[18px]
        md:rounded-[20px]
        ${className ?? ""}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="
          object-cover
          transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:scale-[1.035]
        "
        sizes="
          (max-width: 639px) 100vw,
          (max-width: 1023px) 50vw,
          40vw
        "
      />
    </motion.div>
  );
}

/* REUSABLE SOCIAL LINK */
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.06 }}
      transition={{ duration: 0.9, ease: smoothEase }}
    >
      <Link
        href={href}
        aria-label={label}
        className="
          flex h-6 w-6 shrink-0 items-center justify-center
          rounded-full bg-black
          text-[10px] font-semibold text-white
          transition-transform duration-300
          hover:scale-110
          sm:h-[21px] sm:w-[21px]
        "
      >
        {children}
      </Link>
    </motion.div>
  );
}
