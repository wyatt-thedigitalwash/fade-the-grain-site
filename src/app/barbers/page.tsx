import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Divider from "@/components/Divider";
import { BreadcrumbSchema } from "@/components/Schema";
import CTABanner from "@/components/CTABanner";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

export const metadata: Metadata = {
  title: "Our Barbers | Fade The Grain Barbershop — Arcanum, OH",
  description:
    "Meet the barbers at Fade The Grain in Arcanum, OH — Aaron, Preston, Lauren, and Barney. Book online or walk in today.",
  openGraph: {
    title: "Our Barbers | Fade The Grain Barbershop — Arcanum, OH",
    description:
      "Meet the barbers at Fade The Grain in Arcanum, OH — Aaron, Preston, Lauren, and Barney. Book online or walk in today.",
    url: "https://DOMAIN.com/barbers",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    title: "Our Barbers | Fade The Grain Barbershop — Arcanum, OH",
    description:
      "Meet the barbers at Fade The Grain in Arcanum, OH — Aaron, Preston, Lauren, and Barney. Book online or walk in today.",
  },
  alternates: { canonical: "https://DOMAIN.com/barbers" },
};

const barbers = [
  {
    name: "Aaron",
    role: "Barber / Owner",
    image: "/assets/barber-giving-boy-haircut.webp",
    walkIn: false,
    description:
      "Veteran and founder of Fade The Grain. Aaron built this shop on pride, precision, and a genuine love for the craft. Whether it's a classic cut or a sharp fade, he brings the same attention to detail to every client.",
  },
  {
    name: "Preston",
    role: "Barber",
    image: "/assets/precision-clipper-cut-action.webp",
    walkIn: false,
    description:
      "Known for his friendly demeanor and clean work, Preston makes every visit feel easy. He's got a knack for delivering exactly what you're looking for — and making sure you leave with a cut you're proud of.",
  },
  {
    name: "Lauren",
    role: "Barber",
    image: "/assets/lauren-barber.webp",
    walkIn: false,
    description:
      "Lauren brings a fresh perspective and steady hand to the chair. From traditional cuts to modern styles, she's dedicated to making every client look and feel their best.",
  },
  {
    name: "Barney",
    role: "Master Barber",
    image: "/assets/barbers-at-work-full-shop.webp",
    walkIn: true,
    description:
      "Barney is a true southern gentleman, bringing over 30 years of barbering experience to the chair. With a steady hand and a storyteller's charm, he delivers more than just a haircut — he delivers an experience. If you've got time for a quality cut and maybe a good story or two, walk in and have a seat. Barney will take care of you.",
    hours: "Mon 12–5 · Wed 9–6 · Fri 9–6",
  },
];

export default function BarbersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Barbers", href: "/barbers" }]} />
      <section className="bg-secondary flex min-h-[45vh] items-center justify-center px-6 pt-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold uppercase text-text-primary md:text-5xl">
            Our Barbers
          </h1>
          <Divider variant="ornament" />
          <p className="text-lg text-text-primary/80">
            Four barbers. One standard — precision.
          </p>
        </div>
      </section>

      <section className="bg-parchment px-6 py-20 text-text-dark">
        <div className="relative mx-auto max-w-5xl space-y-16">
          {barbers.map((barber, i) => (
            <FadeIn key={barber.name} delay={i * 100}>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded">
                    <Image
                      src={barber.image}
                      alt={`${barber.name} — Barber at Fade The Grain`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="font-accent text-base italic tracking-wider text-accent">
                    {barber.role}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-bold uppercase md:text-4xl">
                    {barber.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-dark/80">
                    {barber.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {barber.walkIn ? (
                      <>
                        <span className="rounded border border-accent px-5 py-3 text-center font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                          Walk-In Only
                        </span>
                        {"hours" in barber && (
                          <p className="text-sm text-text-dark/75">
                            {barber.hours}
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded bg-accent px-6 py-3 text-center font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover"
                        >
                          Book with {barber.name}<span className="sr-only"> (opens in new tab)</span>
                        </a>
                        <p className="text-sm text-text-dark/75">
                          $20 &middot; 30 min
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-primary bg-parchment-dark px-6 py-20">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
              Choose Your Barber
            </h2>
            <Divider variant="stars" />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {barbers.map((barber, i) => (
              <FadeIn key={barber.name} delay={i * 100}>
                {barber.walkIn ? (
                  <div className="rounded-lg bg-secondary p-8 text-center">
                    <h3 className="font-heading text-xl font-semibold uppercase text-text-primary">
                      {barber.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-primary/70">
                      {barber.role}
                    </p>
                    <p className="mt-1 text-sm text-text-primary/70">
                      {"hours" in barber ? barber.hours : "Walk-In"}
                    </p>
                    <span className="mt-4 inline-block rounded border border-accent px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                      Walk-In Only
                    </span>
                  </div>
                ) : (
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-secondary p-8 text-center transition-colors duration-300 hover:bg-secondary/80"
                  >
                    <h3 className="font-heading text-xl font-semibold uppercase text-text-primary">
                      {barber.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-primary/70">
                      {barber.role}
                    </p>
                    <p className="mt-1 text-sm text-text-primary/70">
                      $20 &middot; 30 min
                    </p>
                    <span className="mt-4 inline-block rounded bg-accent px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover">
                      Book Now<span className="sr-only"> (opens in new tab)</span>
                    </span>
                  </a>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Walk-Ins Always Welcome" showCall />
    </>
  );
}
