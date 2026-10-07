
import Image from "next/image";
import Link from "next/link";

const commitments = [
  "COMMITMENT TO SUSTAINABILITY",
  "COMMITMENT TO SUSTAINABILITY",
  "COMMITMENT TO SUSTAINABILITY",
];

export default function OurProjects() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        {/* HEADER */}
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <h2
            className="
              text-[clamp(30px,5vw,52px)]
              font-semibold
              leading-[1.03]
              tracking-[-0.045em]
              text-[#111827]
            "
          >
            Our Projects.
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
        </div>

        {/* PROJECT IMAGES */}
        <div
          className="
            mt-7 grid grid-cols-1 gap-4
            sm:mt-8 sm:grid-cols-[0.78fr_1.55fr_0.78fr]
            sm:items-center sm:gap-3
            md:gap-4
            lg:mt-9 lg:grid-cols-[0.78fr_1.6fr_0.78fr]
            lg:gap-[18px]
          "
        >
          {/* LEFT IMAGE */}
          <ProjectImage
            src="/home/GoldenHour.png"
            alt="Glass greenhouse surrounded by a garden"
            className="
              aspect-[1.5/1] w-full
              sm:aspect-[1.12/1]
              sm:translate-y-1
            "
          />

          {/* MAIN IMAGE */}
          <ProjectImage
            src="/home/GreenhouseTomato.png"
            alt="Farmer working inside a modern greenhouse"
            className="
              aspect-[1.5/1] w-full
              sm:aspect-[1.55/1]
            "
          />

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-3 md:gap-[14px]">
            <ProjectImage
              src="/home/SunlitHands.png"
              alt="Hands planting a young seedling"
              className="aspect-[1.3/1] w-full sm:aspect-[2.05/1]"
            />

            <ProjectImage
              src="/home/HighTech.png"
              alt="Indoor vertical farming system"
              className="aspect-[1.3/1] w-full sm:aspect-[2.05/1]"
            />
          </div>
        </div>

        {/* BOTTOM COMMITMENTS */}
        <div
          className="
            hidden mt-8 grid grid-cols-1
            border-t border-[#E9ECEF] sm:grid pt-4
            sm:mt-10 sm:grid-cols-3 sm:gap-4 sm:pt-5
            md:mt-12 
          "
        >
          {commitments.map((text, index) => (
            <p
              key={index}
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
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* REUSABLE PROJECT IMAGE */
function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
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
          transition-transform duration-700 ease-out
          group-hover:scale-[1.035]
        "
        sizes="
          (max-width: 639px) 100vw,
          (max-width: 1023px) 50vw,
          40vw
        "
      />
    </div>
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
  return (
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
  );
}
