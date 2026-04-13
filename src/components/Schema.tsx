const BASE_URL = "https://DOMAIN.com";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "@id": `${BASE_URL}/#barbershop`,
  name: "Fade The Grain Barbershop",
  description:
    "Veteran-owned barbershop in Arcanum, OH specializing in precision fades, classic cuts, beard trims, and straight razor shaves.",
  url: BASE_URL,
  telephone: "+19374672236",
  priceRange: "$15–$35",
  image: `${BASE_URL}/branding/fade-the-grain-logo-gold.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 N Sycamore St",
    addressLocality: "Arcanum",
    addressRegion: "OH",
    postalCode: "45304",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9903,
    longitude: -84.5564,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 39.9903, longitude: -84.5564 },
    geoRadius: "25000",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
  sameAs: [],
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}

export function ServiceSchema({
  services,
}: {
  services: { name: string; description: string; price: string }[];
}) {
  const schema = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    provider: { "@id": `${BASE_URL}/#barbershop` },
    offers: {
      "@type": "Offer",
      price: s.price.replace("$", ""),
      priceCurrency: "USD",
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
