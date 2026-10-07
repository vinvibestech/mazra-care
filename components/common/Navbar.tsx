"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Technology", href: "/technology" },
  { name: "Sustainability", href: "/sustainability" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = pathname === "/";
  const isWhiteNavbar = !isHomePage || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          isWhiteNavbar
            ? "bg-white/95 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          mx-auto flex max-w-[1440px]
          items-center justify-between
          px-7 md:px-10 lg:px-12
          h-[88px]
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className={`
            text-[14px] font-bold tracking-[0.12em]
            transition-colors duration-500
            ${isWhiteNavbar ? "text-black" : "text-white"}
          `}
        >
          MAZRA CARE
        </Link>

        {/* DESKTOP NAVIGATION */}
    {/* DESKTOP NAVIGATION */}
<nav className="hidden items-center gap-8 lg:flex">
  {navItems.map((item) => {
    const isActive =
      item.href === "/"
        ? pathname === "/"
        : pathname === item.href || pathname.startsWith(`${item.href}/`);

    return (
      <Link
        key={item.name}
        href={item.href}
        className={`
          group relative py-1
          text-[15px] font-semibold
          transition-colors duration-500
          ${
            isWhiteNavbar
              ? isActive
                ? "text-black"
                : "text-black/55 hover:text-black"
              : isActive
                ? "text-white"
                : "text-white/65 hover:text-white"
          }
        `}
      >
        {item.name}

        <span
          className={`
            absolute -bottom-1 left-0
            h-[1px]
            transition-all duration-500
            ${
              isActive
                ? "w-full"
                : "w-0 group-hover:w-full"
            }
            ${isWhiteNavbar ? "bg-black" : "bg-white"}
          `}
        />
      </Link>
    );
  })}
</nav>

        {/* GET STARTED - DESKTOP */}
        <Link
          href="/contact"
          className={`
            group hidden items-center gap-3
            rounded-full px-5 py-[9px]
            text-[14px] font-medium
            transition-all duration-500
            lg:flex
            ${
              isWhiteNavbar
                ? "bg-black text-white hover:bg-[#222]"
                : "bg-black text-white hover:bg-white hover:text-black"
            }
          `}
        >
          <span>Get Started</span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
            className="
              transition-transform duration-500 ease-out
              group-hover:translate-x-[3px]
              group-hover:-translate-y-[3px]
            "
          />
        </Link>

        {/* MOBILE + TABLET MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`
            flex h-10 w-10
            items-center justify-center
            rounded-full
            transition-all duration-300
            hover:scale-105
            lg:hidden
            ${
              isWhiteNavbar
                ? "bg-black text-white"
                : "bg-black text-white"
            }
          `}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* MOBILE + TABLET MENU */}
      <div
        className={`
          absolute left-4 right-4 top-[68px]
          overflow-hidden rounded-2xl
          bg-black/95 backdrop-blur-xl
          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          lg:hidden
          ${
            menuOpen
              ? "visible max-h-[500px] translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-3 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col px-6 py-5">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                border-b border-white/10
                py-4 text-sm
                transition-colors duration-300
                ${
                  pathname === item.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-4 flex items-center
              justify-center gap-2
              rounded-full bg-white
              px-5 py-3
              text-sm font-medium text-black
              transition-transform duration-300
              hover:scale-[1.02]
            "
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}