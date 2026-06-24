import { siteConfig, fullAddress } from "@/lib/site-config";

/**
 * Emits LocalBusiness structured data (JSON-LD) so search engines can show a
 * rich local listing — name, address, phone, hours, and map pin. Strong signal
 * for "senior center near me" style local search.
 */
export function SeoJsonLd() {
  const { contact, hours, name, url, description } = siteConfig;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    url,
    telephone: contact.phone,
    email: contact.email,
    image: `${url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLine,
      addressLocality: contact.city,
      addressRegion: contact.state,
      postalCode: contact.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.latitude,
      longitude: contact.geo.longitude,
    },
    openingHours: hours.opening,
    areaServed: `${contact.city}, ${contact.state}`,
    slogan: "Your Community for Connection & Growth",
    knowsAbout: ["Senior activities", "Community center", "Facility rentals"],
    hasMap: siteConfig.map.directions,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram].filter(Boolean),
  };

  // Drop empty values so the markup stays clean.
  if (jsonLd.sameAs.length === 0) {
    delete (jsonLd as { sameAs?: string[] }).sameAs;
  }

  return (
    <script
      type="application/ld+json"
      // Structured data is built from our own config — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      data-address={fullAddress}
    />
  );
}
