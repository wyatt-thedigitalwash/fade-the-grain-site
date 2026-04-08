import Image from "next/image";
import Link from "next/link";
import { Scissors, User, SprayCan, Sparkles, Shield, DoorOpen, Heart, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Divider from "@/components/Divider";
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

const testimonials = [
  {
    name: "Leigha Brown",
    quote:
      "BEST barbershop in the area! My boys and I love coming to this barbershop. The atmosphere is awesome, the employees and owner are super friendly and welcoming. Pricing is super reasonable. They do a fantastic job on the haircuts.",
  },
  {
    name: "Tony Matamoros",
    quote:
      "Fade the Grain Barbershop is top-notch. The service is excellent, the attention to detail is on point, and the atmosphere is welcoming and professional. You can tell they take pride in their work and in making customers feel comfortable.",
  },
  {
    name: "John Filbrun",
    quote:
      "Whether you're looking for a traditional haircut or a fade this is a wonderful barber shop to get your haircut because they do all types of cuts!",
  },
  {
    name: "Jenson Miller",
    quote:
      "Hands down the best barber shop I have ever been to. The guys there were friendly and professional. I'll definitely be going back.",
  },
  {
    name: "David Bryson",
    quote:
      "Walked in for a beard trim without an appointment. Nice waiting area and good barbershop atmosphere. Barney did a phenomenal job trimming and shaping my beard. Will definitely be a repeat customer.",
  },
  {
    name: "Benjamin Thompson",
    quote:
      "Preston did a fantastic job with my haircut very friendly I will definitely be back if you're looking for a place to get your haircut this is definitely a great place to go.",
  },
];

const barbers = ["Aaron", "Preston", "Lauren"];

const barberImages: Record<string, string> = {
  Aaron: "/assets/barber-giving-boy-haircut.webp",
  Preston: "/assets/precision-clipper-cut-action.webp",
  Lauren: "/assets/lauren-barber.webp",
};

const showcaseImages = [
  { src: "/assets/classic-taper-haircut-result.webp", alt: "Classic taper haircut result at Fade The Grain" },
  { src: "/assets/textured-crop-haircut-result.webp", alt: "Textured crop haircut result" },
  { src: "/assets/precision-clipper-cut-action.webp", alt: "Precision clipper cut in action" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center bg-secondary">
        <Image
          src="/assets/shop-interior-wide-angle.webp"
          alt="Fade The Grain Barbershop interior with barber chairs and stations"
          fill
          className="hidden object-cover md:block"
          priority
        />
        <Image
          src="/assets/shop-interior-barber-chairs.webp"
          alt="Classic barber chairs at Fade The Grain Barbershop"
          fill
          className="object-cover md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative z-10 px-6 text-center">
          <p className="font-accent text-base italic tracking-wider text-accent">
            Veteran-Owned &bull; Arcanum, OH
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold uppercase leading-tight text-text-primary md:text-7xl">
            Precision Cuts.
            <br />
            Timeless Tradition.
          </h1>
          <Divider variant="line" />
          <p className="mx-auto max-w-xl text-lg text-text-primary/80">
            Proudly veteran-owned and community-driven, Fade the Grain brings a
            modern edge to a timeless craft.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-accent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover"
            >
              Book Now
            </a>
            <Link
              href="/services"
              className="rounded border-2 border-accent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-accent transition-colors duration-300 hover:bg-accent hover:text-primary"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-primary bg-parchment-dark px-6 py-20">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
              Our Services
            </h2>
            <Divider variant="ornament" className="justify-start py-2" />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <FadeIn key={service.name} delay={i * 100}>
                <div className="h-full rounded-lg bg-secondary p-6">
                  <service.icon size={32} className="text-accent" />
                  <h3 className="mt-4 font-heading text-lg font-semibold uppercase text-text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-1 font-heading text-2xl font-bold text-accent">
                    {service.price}
                  </p>
                  <p className="mt-2 text-sm text-text-primary/70">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="font-heading text-sm uppercase tracking-wide text-accent transition-colors duration-300 hover:text-accent-hover"
              >
                View All Services &amp; Pricing &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Meet the Barbers */}
      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
              Meet Your Barbers
            </h2>
            <Divider variant="line" />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {barbers.map((name, i) => (
              <FadeIn key={name} delay={i * 100}>
                <div className="overflow-hidden rounded-lg bg-primary text-center">
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
                    <div
                      className="flex aspect-[3/4] w-full items-center justify-center bg-[#3D2B1F] p-4 text-center text-sm text-text-secondary"
                      role="img"
                      aria-label={`Portrait — ${name}`}
                    >
                      Portrait — {name}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold uppercase text-text-primary">
                      {name}
                    </h3>
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
          <FadeIn>
            <div className="mt-10 text-center">
              <Link
                href="/barbers"
                className="font-heading text-sm uppercase tracking-wide text-accent transition-colors duration-300 hover:text-accent-hover"
              >
                View All Barbers &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-parchment px-6 py-20 text-text-dark">
        <FadeIn>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded">
              <Image
                src="/assets/barbers-at-work-full-shop.webp"
                alt="Barbers at work inside Fade The Grain Barbershop"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase md:text-4xl">
                More Than Just a Haircut
              </h2>
              <Divider variant="ornament" className="justify-start py-2" />
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
                className="mt-6 inline-block font-heading text-sm uppercase tracking-wide text-accent transition-colors duration-300 hover:text-accent-hover"
              >
                Learn More About Us &rarr;
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary bg-parchment-dark px-6 py-20">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
              Built Different
            </h2>
            <Divider variant="stars" />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100}>
                <div className="text-center">
                  <feature.icon size={40} className="mx-auto text-accent" />
                  <h3 className="mt-4 font-heading text-lg font-semibold uppercase text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-primary/70">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-parchment px-6 py-20 text-text-dark">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase md:text-4xl">
              Real Reviews
            </h2>
            <Divider variant="line" />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-dark/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-wide">
                    {t.name}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
              Fresh Out the Chair
            </h2>
            <Divider variant="ornament" />
          </FadeIn>
          <div className="mt-12 grid gap-4 grid-cols-3">
            {showcaseImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 100}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-[filter] duration-300 hover:brightness-110"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="font-heading text-sm uppercase tracking-wide text-accent transition-colors duration-300 hover:text-accent-hover"
              >
                View Full Gallery &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner heading="Ready for a Fresh Cut?" />
    </main>
  );
}
