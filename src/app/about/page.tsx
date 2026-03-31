import type { Metadata } from "next";
import { Target, Clock, Users } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTABanner from "@/components/CTABanner";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

export const metadata: Metadata = {
  title: "About Us | Fade The Grain Barbershop",
  description:
    "Learn about Fade The Grain — a veteran-owned barbershop in Arcanum, OH. Meet our barbers and discover our story.",
};

const barbers = ["Aaron", "Preston", "Lauren"];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every cut is intentional.",
  },
  {
    icon: Clock,
    title: "Tradition",
    description: "Timeless craft, modern approach.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Your neighborhood barbershop.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-secondary px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
            About Us
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase text-text-primary md:text-5xl">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Proudly serving the Arcanum community with precision and pride.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background-light px-6 py-20 text-text-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <ImagePlaceholder
            label="About Image — Barbershop Interior"
            className="aspect-[4/3] w-full"
          />
          <div>
            <p className="leading-relaxed text-text-dark/80">
              Fade The Grain started with a simple idea: bring a real barbershop
              experience back to Arcanum. Not a chain. Not a quick-clip spot. A
              place where you sit down, relax, and walk out looking and feeling
              your best.
            </p>
            <p className="mt-4 leading-relaxed text-text-dark/80">
              As a veteran-owned business, we bring the same discipline and
              attention to detail that was drilled into us from day one. Every
              fade is clean. Every lineup is sharp. Every visit is personal. We
              take pride in our craft because we take pride in everything we do.
            </p>
            <p className="mt-4 leading-relaxed text-text-dark/80">
              With Aaron, Preston, and Lauren behind the chair, we&apos;ve built
              a team that shares the same values — precision, respect, and a
              genuine love for what we do. Whether it&apos;s your first visit or
              your fiftieth, you&apos;re family here.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Barbers */}
      <section className="bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-heading text-sm uppercase tracking-[0.25em] text-accent">
            The Team
          </p>
          <h2 className="mt-2 text-center font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
            Meet Your Barbers
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {barbers.map((name) => (
              <div
                key={name}
                className="overflow-hidden rounded-lg bg-secondary text-center"
              >
                <ImagePlaceholder
                  label={`Portrait — ${name}`}
                  className="aspect-[3/4] w-full rounded-none"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold uppercase text-text-primary">
                    {name}
                  </h3>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded bg-accent px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-accent-hover"
                  >
                    Book with {name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <value.icon size={40} className="mx-auto text-accent" />
              <h3 className="mt-4 font-heading text-lg font-semibold uppercase text-text-primary">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Ready to Experience the Difference?" bookLabel="Book Now" />
    </main>
  );
}
