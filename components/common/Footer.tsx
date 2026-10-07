"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your newsletter API here.
    console.log("Email submitted:", email);
  };

  return (
    <footer className="relative isolate w-full overflow-hidden bg-[#E8F5DF] px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[452px] lg:px-12 lg:py-20">
      {/* Decorative outline */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          top-[-30px]
          z-[-1]
          h-[390px]
          w-[390px]
          opacity-70
          sm:right-[-35px]
          sm:top-[-20px]
          sm:h-[430px]
          sm:w-[430px]
          lg:right-[7%]
          lg:top-[-22px]
          lg:h-[450px]
          lg:w-[450px]
        "
      >
        <svg
          viewBox="0 0 450 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M133 42C179 56 225 46 269 47C334 48 391 77 416 128C444 186 411 245 384 297C356 350 313 393 252 407C191 420 126 401 85 363C40 321 24 267 37 211C50 155 91 91 133 42Z"
            stroke="#54C99C"
            strokeWidth="1.1"
            strokeDasharray="2.5 4"
          />

          <path
            d="M178 88C218 100 251 93 290 96C340 98 369 118 379 156C392 207 367 251 339 292C312 331 274 354 229 360C180 366 134 350 104 319C75 289 78 246 92 205C107 163 146 116 178 88Z"
            stroke="#54C99C"
            strokeWidth="1.2"
          />

          <path
            d="M205 143C235 148 257 142 285 144C319 146 340 164 350 192C362 229 343 256 319 281C294 307 265 319 231 315C197 311 169 293 159 267C147 236 166 204 181 183C190 169 197 155 205 143Z"
            stroke="#54C99C"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#111827] sm:text-[48px] md:text-[56px] lg:text-[60px]">
          Join the community!
        </h2>

        <p className="mt-2 text-[15px] font-medium text-[#344054] sm:text-[17px]">
          and shape the future of farming with us.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="
            mt-9
            flex
            h-[58px]
            w-full
            max-w-[540px]
            items-center
            rounded-full
            bg-white
            p-[6px]
            pl-6
            shadow-[0_3px_6px_rgba(0,0,0,0.12)]
            transition-shadow
            duration-300
            focus-within:shadow-[0_5px_14px_rgba(0,0,0,0.13)]
            sm:mt-10
            sm:h-[60px]
          "
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email here..."
            aria-label="Email address"
            className="
              min-w-0
              flex-1
              bg-transparent
              text-[15px]
              text-[#111827]
              outline-none
              placeholder:text-[#9CA3AF]
              sm:text-[16px]
            "
          />

          <button
            type="submit"
            aria-label="Subscribe"
            className="
              flex
              h-[44px]
              w-[44px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
              transition-all
              duration-300
              ease-out
              hover:scale-105
              hover:bg-[#006B55]
              active:scale-95
              sm:h-[46px]
              sm:w-[46px]
            "
          >
            <ArrowRight size={21} strokeWidth={1.8} />
          </button>
        </form>

        {/* Copyright */}
        <p className="mt-14 text-center text-[12px] leading-relaxed text-[#718096] sm:mt-[58px] sm:text-[13px]">
          © 2026 Mazra Care Inc. All rights reserved. Pioneering sustainable
          ecosystems.
        </p>
      </div>
    </footer>
  );
}