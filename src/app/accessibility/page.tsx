import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `${siteConfig.name} ${siteConfig.tagline} is committed to making this website and our facility usable for everyone, including older adults and people with disabilities.`,
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Accessibility Statement"
      lastUpdated="June 24, 2026"
      intro={
        <p>
          {siteConfig.name} {siteConfig.tagline} is committed to making our website and our center
          welcoming and usable for everyone — including older adults, people with low vision, and
          people with disabilities.
        </p>
      }
    >
      <h2 id="commitment">Our commitment</h2>
      <p>
        We believe everyone in our community should be able to access the information and services we
        offer. We work to make this website easy to read, easy to navigate, and accessible to people
        using a wide range of devices and assistive technologies.
      </p>

      <h2 id="standards">Standards we aim for</h2>
      <p>
        We aim to conform to the{" "}
        <a
          href="https://www.w3.org/WAI/WCAG21/quickref/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
        </a>
        . These internationally recognized guidelines help make web content more accessible to
        people with a wide range of abilities.
      </p>

      <h2 id="features">What we&rsquo;ve done</h2>
      <p>This website includes a number of features designed with accessibility in mind:</p>
      <ul>
        <li>
          <strong>Adjustable text size</strong> — a built-in control lets you increase the text size
          without breaking the layout.
        </li>
        <li>
          <strong>Pinch-to-zoom is always allowed</strong> — we never block zooming, so you can
          magnify any page on your phone or tablet.
        </li>
        <li>
          <strong>Light and dark modes</strong> — choose the contrast that is most comfortable for
          your eyes.
        </li>
        <li>
          <strong>Clear focus indicators</strong> — a visible outline shows where you are when
          navigating with a keyboard.
        </li>
        <li>
          <strong>Keyboard navigation</strong> — the site can be used without a mouse.
        </li>
        <li>
          <strong>Reduced-motion support</strong> — if your device is set to reduce motion,
          animations are minimized automatically.
        </li>
        <li>
          <strong>Readable structure</strong> — meaningful headings, descriptive links, and
          alternative text for images help screen-reader users.
        </li>
        <li>
          <strong>Strong color contrast</strong> — text and backgrounds are chosen for legibility.
        </li>
      </ul>

      <h2 id="in-person">Accessibility at our center</h2>
      <p>
        Our facility is ADA-compliant, with accessible entrances, restrooms, and ample free,
        lighted, accessible parking. If you need a specific accommodation to participate in an
        activity or event, please let us know in advance and we will do our best to help.
      </p>

      <h2 id="limitations">Ongoing work and known limitations</h2>
      <p>
        Accessibility is an ongoing effort. Some content provided by third parties — such as the
        embedded map — may not be fully under our control. We continue to review and improve the
        site, and we welcome your feedback to help us find and fix any barriers.
      </p>

      <h2 id="feedback">Tell us about a barrier or request an accommodation</h2>
      <p>
        If you have trouble accessing any part of this website, or you need information in a
        different format, please contact us — we&rsquo;re happy to help and to provide the
        information you need another way:
      </p>
      <ul>
        <li>
          Call us at{" "}
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
        </li>
        <li>
          Email us at <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </li>
      </ul>
      <p>
        Please tell us the page or feature you were using and the problem you ran into, so we can
        respond as quickly as possible.
      </p>
    </LegalShell>
  );
}
