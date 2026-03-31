import type { Metadata } from "next";
import { MapPin, Phone, Clock, Calendar } from "lucide-react";
import ContactForm from "./ContactForm";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

export const metadata: Metadata = {
  title: "Contact Us | Fade The Grain Barbershop",
  description:
    "Get in touch with Fade The Grain Barbershop in Arcanum, OH. Call, visit, or book online. Walk-ins always welcome.",
};

const hours = [
  { day: "Mon", time: "12 PM – 5 PM" },
  { day: "Tue", time: "9 AM – 6 PM" },
  { day: "Wed", time: "9 AM – 6 PM" },
  { day: "Thu", time: "10 AM – 7 PM" },
  { day: "Fri", time: "9 AM – 6 PM" },
  { day: "Sat", time: "8 AM – 2 PM" },
  { day: "Sun", time: "Closed" },
];

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-secondary px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase text-text-primary md:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Stop by, give us a call, or book online.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-background-light px-6 py-20 text-text-dark">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          {/* Left — Details */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin size={24} className="shrink-0 text-accent" />
              <div>
                <p className="font-heading font-semibold uppercase">Address</p>
                <a
                  href="https://maps.google.com/?q=7+N+Sycamore+St+Arcanum+OH+45304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-dark/80 underline transition-colors hover:text-accent"
                >
                  7 N Sycamore St, Arcanum, OH 45304
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={24} className="shrink-0 text-accent" />
              <div>
                <p className="font-heading font-semibold uppercase">Phone</p>
                <a
                  href="tel:+19374672236"
                  className="text-sm text-text-dark/80 transition-colors hover:text-accent"
                >
                  (937) 467-2236
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={24} className="shrink-0 text-accent" />
              <div>
                <p className="font-heading font-semibold uppercase">Hours</p>
                <ul className="mt-1 space-y-1 text-sm text-text-dark/80">
                  {hours.map((h) => (
                    <li key={h.day} className="flex gap-4">
                      <span className="w-10 font-medium">{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Calendar size={24} className="shrink-0 text-accent" />
              <div>
                <p className="font-heading font-semibold uppercase">
                  Book Online
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-dark/80 underline transition-colors hover:text-accent"
                >
                  Schedule on Booksy
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10">
          <iframe
            title="Fade The Grain Barbershop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.5!2d-84.5564!3d39.9903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7+N+Sycamore+St%2C+Arcanum%2C+OH+45304!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-primary md:text-4xl">
            Walk-Ins Always Welcome
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-secondary"
            >
              Book Online
            </a>
            <a
              href="tel:+19374672236"
              className="rounded border-2 border-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
