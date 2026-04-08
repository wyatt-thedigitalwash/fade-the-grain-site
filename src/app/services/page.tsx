import type { Metadata } from "next";
import Image from "next/image";
import { Shield } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Divider from "@/components/Divider";
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
  { name: "Straight Razor Shave w/ Hot Towel", price: "$20", duration: "30 min" },
];

const discounts: Service[] = [
  { name: "Veteran / 1st Responders", price: "$16", duration: "30 min" },
  { name: "Age 65+ Haircut", price: "$16", duration: "30 min" },
];

const barbers = ["Aaron", "Preston", "Lauren"];

const barberImages: Record<string, string> = {
  Aaron: "/assets/barber-giving-boy-haircut.webp",
  Preston: "/assets/precision-clipper-cut-action.webp",
  Lauren: "/assets/lauren-barber.webp",
};

function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="border-b border-text-dark/10 py-4 last:border-0">
      <div className="flex items-baseline">
        <p className="service-leader font-heading text-lg font-semibold uppercase">
          {service.name}
        </p>
        <p className="ml-2 shrink-0 font-heading text-xl font-bold text-accent">
          {service.price}
        </p>
      </div>
      <p className="mt-1 text-sm text-text-dark/60">{service.duration}</p>
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
          <span className="flex items-center gap-1 rounded-full bg-accent-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-red">
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
        className="mt-6 inline-block rounded bg-accent px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover"
      >
        Book Now
      </a>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-secondary px-6 pt-36 pb-24 md:pb-32 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold uppercase text-text-primary md:text-5xl">
            Services &amp; Pricing
          </h1>
          <Divider variant="line" />
          <p className="text-lg text-text-primary/80">
            Quality grooming at honest prices.
          </p>
        </div>
      </section>

      <section className="bg-parchment px-6 py-20 text-text-dark">
        <div className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <FadeIn>
            <ServiceGroup title="Haircuts" services={haircuts} />
          </FadeIn>
          <FadeIn delay={100}>
            <ServiceGroup title="Beard & Shave" services={beardShave} />
          </FadeIn>
          <FadeIn delay={200} className="md:col-span-2">
            <ServiceGroup title="Discounts" services={discounts} badge />
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary bg-parchment-dark px-6 py-20">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
              Book by Barber
            </h2>
            <Divider variant="ornament" />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {barbers.map((name, i) => (
              <FadeIn key={name} delay={i * 100}>
                <div className="overflow-hidden rounded-lg bg-secondary text-center">
                  {barberImages[name] ? (
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={barberImages[name]}
                        alt={`${name} — Barber at Fade The Grain`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={`Portrait — ${name}`}
                      className="aspect-[3/4] w-full rounded-none"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold uppercase text-text-primary">
                      {name}
                    </h3>
                    <p className="mt-1 text-sm text-text-primary/60">
                      $20 &middot; 30 min
                    </p>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded bg-accent px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover"
                    >
                      Book with {name}
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Book?" bookLabel="Book Now" />
    </main>
  );
}
