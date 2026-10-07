import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[100svh] overflow-hidden text-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        {/* =========================
            BACKGROUND IMAGE
        ========================== */}
        <div
          className="
            absolute inset-0
            bg-cover bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/home/Hero.png')",
          }}
        />

        {/* =========================
            DARK OVERLAY
        ========================== */}
        <div className="absolute inset-0 bg-black/45" />

        {/* =========================
            BOTTOM GRADIENT
        ========================== */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/20
            via-transparent
            to-black/70
          "
        />

        {/* =========================
            CONTENT CONTAINER
        ========================== */}
        <div
          className="
            relative z-10
            mx-auto flex min-h-[100svh]
            w-full max-w-[1440px]
            flex-col
            px-5
            sm:px-7
            md:px-10
            lg:px-12
            xl:px-14
          "
        >
          {/* =========================
              HERO CONTENT
          ========================== */}
          <div
            className="
              flex flex-1
              items-center
              pt-24
              pb-12
              sm:pt-28
              sm:pb-16
              md:pt-28
              md:pb-20
              lg:pt-24
              lg:pb-24
            "
          >
            <div
              className="
                w-full
                max-w-[650px]
              "
            >
              {/* =========================
                  EYEBROW
              ========================== */}
              <p
                className="
                  mb-4
                  max-w-[520px]
                  text-[11px]
                  font-medium
                  leading-relaxed
                  tracking-[0.02em]
                  text-white/80

                  sm:text-[12px]

                  md:mb-5
                  md:text-[13px]

                  lg:text-[15px]
                "
              >
                Sustainable farming powered by innovation and technology.
              </p>

              {/* =========================
                  MAIN HEADING
              ========================== */}
              <h1
                className="
                  font-bold
                  leading-[0.95]
                  tracking-[-0.045em]

                  text-[clamp(42px,12vw,58px)]

                  sm:text-[clamp(52px,9vw,68px)]

                  md:text-[clamp(60px,8vw,76px)]

                  lg:text-[76px]

                  xl:text-[82px]
                "
              >
                Growing a
                <br />

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    sm:gap-3
                  "
                >
                  Smarter

                  {/* =========================
                      GREEN LEAF BADGE
                  ========================== */}
                  <span
                    className="
                      relative
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#9BE85B]

                      h-8
                      w-8

                      sm:h-9
                      sm:w-9

                      md:h-10
                      md:w-10

                      lg:h-[42px]
                      lg:w-[42px]

                      translate-y-[-2px]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="
                        h-4
                        w-4

                        sm:h-[18px]
                        sm:w-[18px]

                        md:h-5
                        md:w-5
                      "
                    >
                      <path
                        d="M19.5 3.5C12.5 3.7 7.6 5.8 5.2 9.4C3.4 12.1 4.1 15.3 6.4 17.1C8.8 19 12.2 18.7 14.5 16.3C17.7 13 19.1 8.5 19.5 3.5Z"
                        fill="currentColor"
                        className="text-black"
                      />

                      <path
                        d="M4.5 20C7.1 15.5 10.3 12.3 15.8 9"
                        stroke="#9BE85B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>

                <br />

                Greener Future
              </h1>

              {/* =========================
                  DESCRIPTION
              ========================== */}
              <p
                className="
                  mt-5
                  max-w-[500px]
                  text-[11px]
                  leading-[1.6]
                  text-white/85

                  sm:mt-6
                  sm:text-[12px]

                  md:text-[13px]

                  lg:mt-6
                  lg:text-[18px]
                "
              >
                From hydroponics and aquaponics to smart farming systems,
                Mazra Care creates efficient solutions for a greener future.
              </p>

              {/* =========================
                  BUTTONS
              ========================== */}
              <div
                className="
                  mt-6
                  flex
                  flex-col
                  items-stretch
                  gap-3

                  xs:flex-row

                  sm:mt-7
                  sm:flex-row
                  sm:items-center
                  sm:gap-3

                  md:mt-7
                "
              >
                {/* Explore Solutions */}
                <Link
                  href="/solutions"
                  className="
                    inline-flex
                    min-h-[44px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/40
                    bg-white/5
                    px-5
                    py-3
                    text-[11px]
                    font-medium
                    backdrop-blur-sm
                    transition-all
                    duration-300

                    hover:bg-white
                    hover:text-black

                    sm:min-h-[42px]
                    sm:px-5
                    sm:text-[12px]

                    md:px-6
                  "
                >
                  Explore Solutions
                </Link>

                {/* Start Your Farm */}
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    min-h-[44px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E7F5D8]
                    px-5
                    py-3
                    text-[11px]
                    font-semibold
                    text-black
                    transition-all
                    duration-300

                    hover:bg-white

                    sm:min-h-[42px]
                    sm:px-5
                    sm:text-[12px]

                    md:px-6
                  "
                >
                  Start Your Farm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}