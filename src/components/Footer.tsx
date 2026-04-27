import Image from "next/image";
import Link from "next/link";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

const hours = [
  { day: "Monday", time: "12 PM – 5 PM" },
  { day: "Tuesday", time: "9 AM – 6 PM" },
  { day: "Wednesday", time: "9 AM – 6 PM" },
  { day: "Thursday", time: "10 AM – 7 PM" },
  { day: "Friday", time: "9 AM – 6 PM" },
  { day: "Saturday", time: "8 AM – 2 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent bg-primary">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Column 1 - Brand */}
        <div>
          <Link href="/" aria-label="Fade The Grain Barbershop - Home" className="block">
            <Image
              src="/branding/fade-the-grain-logo-white.webp"
              alt="Fade The Grain Barbershop logo"
              width={80}
              height={80}
              className="h-16 w-16"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-text-primary/70">
            Proudly veteran-owned and community-driven, Fade the Grain brings a
            modern edge to a timeless craft.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded border border-accent px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            <span>&#9733;</span> Veteran-Owned
          </span>
        </div>

        {/* Column 2 - Hours */}
        <div>
          <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-text-primary">
            Hours
          </h3>
          <ul className="mt-4 space-y-1 text-sm text-text-primary/70">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-text-primary">
            Contact
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-text-primary/70">
            <p>7 N Sycamore St, Arcanum, OH 45304</p>
            <p>
              <a
                href="tel:+19374672236"
                className="transition-colors duration-300 hover:text-accent"
              >
                (937) 467-2236
              </a>
            </p>
          </address>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded bg-accent px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover"
          >
            Book Appointment
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-text-primary/70 md:flex-row">
          <p>&copy; 2025 Fade The Grain Barbershop. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://thedigitalwash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors duration-300 hover:text-accent-hover"
            >
              The Digital Wash
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
