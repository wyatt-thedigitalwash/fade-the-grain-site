import FadeIn from "@/components/FadeIn";

const BOOKING_URL =
  "https://booksy.com/en-us/1716033_fade-the-grain-barbershop_hair-salon_31201_arcanum";

interface CTABannerProps {
  heading: string;
  bookLabel?: string;
  showPhone?: boolean;
  showCall?: boolean;
}

export default function CTABanner({
  heading,
  bookLabel = "Book Your Appointment",
  showPhone = true,
  showCall = false,
}: CTABannerProps) {
  return (
    <section className="bg-accent px-6 py-16 text-center">
      <FadeIn>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-primary md:text-4xl">
            {heading}
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-secondary"
            >
              {bookLabel}
            </a>
            {showCall && (
              <a
                href="tel:+19374672236"
                className="rounded border-2 border-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                Call Now
              </a>
            )}
          </div>
          {showPhone && (
            <p className="mt-4 text-sm font-medium text-primary/80">
              Or call us at{" "}
              <a href="tel:+19374672236" className="underline">
                (937) 467-2236
              </a>
            </p>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
