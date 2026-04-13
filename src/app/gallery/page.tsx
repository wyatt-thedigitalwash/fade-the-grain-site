import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Divider from "@/components/Divider";
import { BreadcrumbSchema } from "@/components/Schema";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Gallery | Fade The Grain Barbershop — Arcanum, OH",
  description:
    "See our barbershop, our work, and the Fade The Grain experience in Arcanum, OH. Fresh cuts, clean fades, and shop vibes.",
  openGraph: {
    title: "Gallery | Fade The Grain Barbershop — Arcanum, OH",
    description:
      "See our barbershop, our work, and the Fade The Grain experience in Arcanum, OH. Fresh cuts, clean fades, and shop vibes.",
    url: "https://fadethegrainbarbershop.com/gallery",
    images: [{ url: "/preview-banner.png" }],
  },
  twitter: {
    title: "Gallery | Fade The Grain Barbershop — Arcanum, OH",
    description:
      "See our barbershop, our work, and the Fade The Grain experience in Arcanum, OH. Fresh cuts, clean fades, and shop vibes.",
  },
  alternates: { canonical: "https://fadethegrainbarbershop.com/gallery" },
};

const shopImages = [
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
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Gallery", href: "/gallery" }]} />
      <section className="bg-secondary flex min-h-[45vh] items-center justify-center px-6 pt-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold uppercase text-text-primary md:text-5xl">
            Our Work &amp; Our Shop
          </h1>
          <Divider variant="stars" />
          <p className="text-lg text-text-primary/80">
            See what we&apos;re all about.
          </p>
        </div>
      </section>

      <section className="bg-parchment px-6 py-20 text-text-dark">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold uppercase md:text-4xl">
              Inside Fade The Grain
            </h2>
            <Divider variant="ornament" className="justify-start py-2" />
          </FadeIn>
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {shopImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 75}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded shadow-md">
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

      <section className="bg-primary bg-parchment-dark px-6 py-20">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
              Fresh Cuts &amp; Clean Fades
            </h2>
            <Divider variant="ornament" className="justify-start py-2" />
          </FadeIn>
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {workImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 75}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded shadow-md">
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

      <CTABanner heading="Like What You See?" bookLabel="Book Now" />
    </>
  );
}
