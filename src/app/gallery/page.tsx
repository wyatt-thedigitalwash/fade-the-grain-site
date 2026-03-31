import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Gallery | Fade The Grain Barbershop",
  description:
    "See our barbershop, our work, and the Fade The Grain experience. Before and afters, fresh cuts, and shop vibes.",
};

const shopImages = [
  "Shop Interior 1",
  "Shop Interior 2",
  "Barber Station",
  "Waiting Area",
  "Shop Detail",
  "Shop Exterior",
];

const workImages = [
  "Fade Cut 1",
  "Beard Trim Result",
  "Classic Cut",
  "Before & After 1",
  "Before & After 2",
  "Straight Razor Finish",
];

export default function GalleryPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-secondary px-6 py-20 text-center">
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
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
            The Shop
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase md:text-4xl">
            Inside Fade The Grain
          </h2>
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {shopImages.map((label) => (
              <ImagePlaceholder
                key={label}
                label={label}
                className="aspect-square w-full shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
            Our Work
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase text-text-primary md:text-4xl">
            Fresh Cuts &amp; Clean Fades
          </h2>
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {workImages.map((label) => (
              <ImagePlaceholder
                key={label}
                label={label}
                className="aspect-square w-full shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Like What You See?" bookLabel="Book Now" />
    </main>
  );
}
