import type { Metadata } from "next";
import { Shield } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTABanner from "@/components/CTABanner";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

export const metadata: Metadata = {
  title: "Services & Pricing | Fade The Grain Barbershop",
  description:
    "Haircuts, beard trims, straight razor shaves, and more. View our full service menu and pricing. Veteran and senior discounts available.",
};

interface Service {
  name: string;
  price: string;
  duration: string;
}

const haircuts: Service[] = [
  { name: "Men's Haircut", price: "$20", duration: "30 min" },
  { name: "Haircut & Beard Trim", price: "$35", duration: "45 min" },
];

const beardShave: Service[] = [
  { name: "Beard Trim", price: "$15", duration: "20 min" },
  {
    name: "Straight Razor Shave w/ Hot Towel",
    price: "$20",
    duration: "30 min",
  },
];

const discounts: Service[] = [
  { name: "Veteran / 1st Responders", price: "$16", duration: "30 min" },
  { name: "Age 65+ Haircut", price: "$16", duration: "30 min" },
];

const barbers = ["Aaron", "Preston", "Lauren"];

function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="flex items-center justify-between border-b border-text-dark/10 py-4 last:border-0">
      <div>
        <p className="font-heading text-lg font-semibold uppercase">
          {service.name}
        </p>
        <p className="text-sm text-text-dark/60">{service.duration}</p>
      </div>
      <p className="font-heading text-xl font-bold text-accent">
        {service.price}
      </p>
    </div>
  );
}

function ServiceGroup({
  title,
  services,
  badge,
}: {
  title: string;
  services: Service[];
  badge?: boolean;
}) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <h3 className="font-heading text-xl font-bold uppercase text-text-dark">
          {title}
        </h3>
        {badge && (
          <span className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            <Shield size={14} />
            Discount
          </span>
        )}
      </div>
      <div className="mt-4">
        {services.map((s) => (
          <ServiceRow key={s.name} service={s} />
        ))}
      </div>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded bg-accent px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-accent-hover"
      >
        Book Now
      </a>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-secondary px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
            Services
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase text-text-primary md:text-5xl">
            Services &amp; Pricing
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Quality grooming at honest prices.
          </p>
        </div>
      </section>

      {/* Service Menu */}
      <section className="bg-background-light px-6 py-20 text-text-dark">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <ServiceGroup title="Haircuts" services={haircuts} />
          <ServiceGroup title="Beard & Shave" services={beardShave} />
          <div className="md:col-span-2">
            <ServiceGroup title="Discounts" services={discounts} badge />
          </div>
        </div>
      </section>

      {/* Book by Barber */}
      <section className="bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-heading text-sm uppercase tracking-[0.25em] text-accent">
            Choose Your Barber
          </p>
          <h2 className="mt-2 text-center font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
            Book by Barber
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
                  <p className="mt-1 text-sm text-text-secondary">
                    $20 &middot; 30 min
                  </p>
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

      {/* CTA */}
      <CTABanner heading="Ready to Book?" bookLabel="Book Now" />
    </main>
  );
}
