import {
  Users,
  HeartHandshake,
  BookOpen,
  Coffee,
  Music,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

/**
 * Central site configuration for Treasure of the Hills (TOTH) Senior Center.
 *
 * This is the single source of truth for editable content — organization
 * details, contact info, navigation, activities, membership tiers, and the
 * map embed. To update copy, hours, phone numbers, or links, edit this file;
 * the components read from here. (Keeps ongoing client changes to one place.)
 */

export const siteConfig = {
  name: "Treasure of the Hills",
  shortName: "TOTH",
  tagline: "Senior Center",
  /**
   * Public production URL. Used for SEO canonical/OG tags and the sitemap.
   * Override at deploy time with the NEXT_PUBLIC_SITE_URL environment variable.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.toth-seniors.com",
  description:
    "Enhancing the quality of life for seniors in Cedar Park and surrounding areas through engaging activities, lifelong education, and meaningful social connection.",
  shortDescription:
    "A welcoming senior center for adults 50+ in Cedar Park, TX — activities, education, and community.",

  contact: {
    addressLine: "408 Discovery Blvd",
    city: "Cedar Park",
    state: "TX",
    zip: "78613",
    phone: "(512) 331-6000",
    phoneHref: "tel:+15123316000",
    email: "info@toth-seniors.com",
    /** Approximate coordinates for the LocalBusiness schema. Refine if needed. */
    geo: { latitude: 30.5083, longitude: -97.8203 },
  },

  hours: {
    weekdays: { label: "Monday – Friday", value: "9:00 AM – 3:00 PM" },
    weekend: { label: "Saturday – Sunday", value: "Closed" },
    /** Schema.org openingHours format. */
    opening: "Mo-Fr 09:00-15:00",
  },

  /**
   * No-API-key Google Maps assets for the Contact section.
   * `mapEmbed` powers the iframe; `directions` opens turn-by-turn navigation.
   */
  map: {
    embed:
      "https://maps.google.com/maps?q=408%20Discovery%20Blvd%2C%20Cedar%20Park%2C%20TX%2078613&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=408+Discovery+Blvd,+Cedar+Park,+TX+78613",
  },

  /** Social profiles. Leave href empty to hide the icon. */
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Activities", href: "/#activities" },
  { name: "Calendar", href: "/calendar" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Rentals", href: "/rentals" },
  { name: "Contact", href: "/#contact" },
] as const;

export interface Activity {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
}

export const activities: Activity[] = [
  {
    icon: Users,
    title: "Social Games",
    desc: "Bridge, Bingo, Dominoes, and Mahjong sessions running throughout the week.",
    img: "/images/card-games.jpg",
  },
  {
    icon: HeartHandshake,
    title: "Health & Fitness",
    desc: "Gentle yoga, line dancing, and senior-focused exercise classes.",
    img: "/images/sit-fit.jpg",
  },
  {
    icon: BookOpen,
    title: "Education",
    desc: "Computer classes, book clubs, and guest speaker presentations.",
    img: "/images/jan-luncheon.jpeg",
  },
  {
    icon: Coffee,
    title: "Social Gatherings",
    desc: "Weekly coffee hours, potlucks, and special holiday celebrations.",
    img: "/images/val-dinner.jpg",
  },
  {
    icon: Music,
    title: "Arts & Crafts",
    desc: "Painting, quilting, and crafting workshops for all skill levels.",
    img: "/images/art-painting.jpg",
  },
  {
    icon: CalendarDays,
    title: "Special Events",
    desc: "Monthly day trips, casino nights, and community outreach programs.",
    img: "/images/val-entertainment.jpg",
  },
];

export interface MembershipTier {
  price: string;
  name: string;
  note: string;
  accent: "sapphire" | "gold";
}

export const membershipTiers: MembershipTier[] = [
  { price: "$30", name: "Annual Individual", note: "For one calendar year.", accent: "sapphire" },
  { price: "$50", name: "Annual Couples", note: "Two at the same address.", accent: "gold" },
];

export const membershipBenefits = [
  "Access to 40+ weekly activities",
  "Discounted event & trip rates",
  "Monthly newsletter subscription",
  "Voting rights at annual meetings",
];

/** Convenience: full single-line address. */
export const fullAddress = `${siteConfig.contact.addressLine}, ${siteConfig.contact.city}, ${siteConfig.contact.state} ${siteConfig.contact.zip}`;
