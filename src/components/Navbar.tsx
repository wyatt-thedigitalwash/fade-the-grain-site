"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-xl font-bold uppercase tracking-wider text-accent"
        >
          Fade The Grain
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-sm uppercase tracking-wide transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-accent px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-accent-hover"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="text-text-primary md:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-primary px-6 pt-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-heading text-xl font-bold uppercase tracking-wider text-accent"
            >
              Fade The Grain
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-text-primary"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-2xl uppercase tracking-wide transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded bg-accent px-8 py-3 font-heading text-lg font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-accent-hover"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
