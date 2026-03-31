import Link from "next/link";
import { Scissors, User, SprayCan, Sparkles, Shield, DoorOpen, Heart } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTABanner from "@/components/CTABanner";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

const services = [
  {
    icon: Scissors,
    name: "Men's Haircut",
    price: "$20",
    description: "Precision cuts tailored to your style.",
  },
  {
    icon: User,
    name: "Haircut & Beard Trim",
    price: "$35",
    description: "The full package — fresh cut and clean lines.",
  },
  {
    icon: SprayCan,
    name: "Straight Razor Shave",
    price: "$20",
    description: "Hot towel straight razor shave experience.",
  },
  {
    icon: Sparkles,
    name: "Beard Trim",
    price: "$15",
    description: "Shape up and detail your beard.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Veteran-Owned",
    description:
      "Built on pride, discipline, and attention to detail. We bring the same commitment to every cut.",
  },
  {
    icon: DoorOpen,
    title: "Walk-Ins Welcome",
    description:
      "No appointment? No problem. Stop by anytime during business hours and we'll get you in the chair.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Small-town values in every visit. We know your name, your cut, and how you like it.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center bg-secondary">
        <ImagePlaceholder
          label="Hero Image — Barbershop Interior"
          className="absolute inset-0 h-full w-full rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative z-10 px-6 text-center">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
            Veteran-Owned &bull; Arcanum, OH
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold uppercase leading-tight text-text-primary md:text-7xl">
            Precision Cuts.
            <br />
            Timeless Tradition.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary">
            Proudly veteran-owned and community-driven, Fade the Grain brings a
            modern edge to a timeless craft.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-accent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-accent-hover"
            >
              Book Now
            </a>
            <Link
              href="/services"
              className="rounded border-2 border-accent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-primary"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
            What We Do
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
            Our Services
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-lg bg-secondary p-6"
              >
                <service.icon size={32} className="text-accent" />
                <h3 className="mt-4 font-heading text-lg font-semibold uppercase text-text-primary">
                  {service.name}
                </h3>
                <p className="mt-1 font-heading text-2xl font-bold text-accent">
                  {service.price}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="font-heading text-sm uppercase tracking-wide text-accent transition-colors hover:text-accent-hover"
            >
              View All Services &amp; Pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-background-light px-6 py-20 text-text-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <ImagePlaceholder
            label="About Image — Barbershop Interior / Team Photo"
            className="aspect-[4/3] w-full"
          />
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
              Who We Are
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase md:text-4xl">
              More Than Just a Haircut
            </h2>
            <p className="mt-6 leading-relaxed text-text-dark/80">
              Fade The Grain is a veteran-owned barbershop rooted in the heart
              of Arcanum, Ohio. With three skilled barbers on staff — Aaron,
              Preston, and Lauren — we combine modern techniques with timeless
              tradition to deliver cuts you can be proud of.
            </p>
            <p className="mt-4 leading-relaxed text-text-dark/80">
              This isn&apos;t just a place to get a haircut. It&apos;s your
              neighborhood shop — where small-town pride meets precision
              craftsmanship.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-heading text-sm uppercase tracking-wide text-accent transition-colors hover:text-accent-hover"
            >
              Learn More About Us &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-heading text-sm uppercase tracking-[0.25em] text-accent">
            Why Fade The Grain
          </p>
          <h2 className="mt-2 text-center font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
            Built Different
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon
                  size={40}
                  className="mx-auto text-accent"
                />
                <h3 className="mt-4 font-heading text-lg font-semibold uppercase text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Ready for a Fresh Cut?" />
    </main>
  );
}
