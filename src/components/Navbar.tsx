"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/barbers", label: "Barbers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-primary shadow-sm shadow-black/20";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ease-out ${navBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="block">
          <Image
            src="/branding/fade-the-grain-logo-gold.webp"
            alt="Fade The Grain Barbershop"
            width={84}
            height={84}
            className="transition-[width,height] duration-300 ease-out"
            style={{
              width: isHome && !scrolled ? 84 : 50,
              height: isHome && !scrolled ? 84 : 50,
            }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-heading text-sm uppercase tracking-wide transition-colors duration-300 hover:text-accent ${
                  isActive ? "text-accent" : "text-text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-accent px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="text-text-primary transition-colors duration-300 md:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-primary px-6 pt-4 transition-opacity duration-200 md:pointer-events-none md:hidden ${
          mobileOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block">
            <Image
              src="/branding/fade-the-grain-logo-gold.webp"
              alt="Fade The Grain Barbershop"
              width={48}
              height={48}
              className="h-10 w-10"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-text-primary"
            aria-label="Close menu"
          >
            <X size={28} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-heading text-2xl uppercase tracking-wide transition-all duration-300 hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-text-primary"
              }`}
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded bg-accent px-8 py-3 font-heading text-lg font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transitionDelay: mobileOpen ? `${links.length * 50}ms` : "0ms",
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
