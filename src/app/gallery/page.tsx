import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Gallery | Fade The Grain Barbershop",
  description:
    "See our barbershop, our work, and the Fade The Grain experience. Before and afters, fresh cuts, and shop vibes.",
};

const shopImages = [
  { src: "/assets/shop-interior-wide-angle.webp", alt: "Fade The Grain Barbershop interior wide angle view" },
  { src: "/assets/shop-interior-barber-chairs.webp", alt: "Classic barber chairs lined up at Fade The Grain" },
  { src: "/assets/wall-mural-barbershop-sign.webp", alt: "Gold wall mural reading Fade The Grain Barber Shop" },
  { src: "/assets/waiting-area-lounge.webp", alt: "Comfortable lounge and waiting area with leather couches" },
  { src: "/assets/pool-table-lounge-mural.webp", alt: "Pool table in the lounge area with wall mural" },
  { src: "/assets/arcade-games-waiting-area.webp", alt: "Pac-Man and Street Fighter arcade games in waiting area" },
  { src: "/assets/storefront-exterior-sign.webp", alt: "Fade The Grain Barbershop storefront exterior with sign" },
  { src: "/assets/vintage-barber-chair-logo-sign.webp", alt: "Vintage barber chair with Fade The Grain logo sign" },
  { src: "/assets/beard-styles-poster-decor.webp", alt: "Beard styles poster and pool cue rack wall decor" },
];

const workImages = [
  { src: "/assets/barber-cutting-hair-station.webp", alt: "Barber giving a precision haircut at the station" },
  { src: "/assets/barber-giving-boy-haircut.webp", alt: "Barber giving a young boy a haircut" },
  { src: "/assets/precision-clipper-cut-action.webp", alt: "Barber using clippers for a precision cut" },
  { src: "/assets/barber-hot-towel-service.webp", alt: "Barber applying hot towel during a shave service" },
  { src: "/assets/busy-shop-multiple-barbers.webp", alt: "Multiple barbers working with clients in the shop" },
  { src: "/assets/classic-taper-haircut-result.webp", alt: "Classic taper haircut finished result" },
  { src: "/assets/textured-crop-haircut-result.webp", alt: "Textured crop haircut finished result" },
  { src: "/assets/boys-textured-cut-back-view.webp", alt: "Textured haircut back view result" },
  { src: "/assets/barbers-at-work-full-shop.webp", alt: "Full shop view with barbers at work" },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Page Hero — no FadeIn */}
      <section className="bg-secondary px-6 pt-28 pb-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
            Gallery
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase text-text-primary md:text-5xl">
            Our Work &amp; Our Shop
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            See what we&apos;re all about.
          </p>
        </div>
      </section>

      {/* The Shop */}
      <section className="bg-background-light px-6 py-20 text-text-dark">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
              The Shop
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase md:text-4xl">
              Inside Fade The Grain
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {shopImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 75}>
                <div className="relative aspect-square w-full overflow-hidden rounded shadow-md">
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
        </div>
      </section>

      {/* Our Work */}
      <section className="bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
              Our Work
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
              Fresh Cuts &amp; Clean Fades
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {workImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 75}>
                <div className="relative aspect-square w-full overflow-hidden rounded shadow-md">
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
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Like What You See?" bookLabel="Book Now" />
    </main>
  );
}
