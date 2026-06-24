import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that govern your use of the ${siteConfig.name} ${siteConfig.tagline} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Use"
      lastUpdated="June 24, 2026"
      intro={
        <p>
          Welcome to the {siteConfig.name} {siteConfig.tagline} website. By using this site, you
          agree to these Terms of Use. Please read them carefully.
        </p>
      }
    >
      <h2 id="acceptance">Acceptance of these terms</h2>
      <p>
        By accessing or using this website, you agree to be bound by these Terms of Use and our{" "}
        Privacy Policy. If you do not agree, please do not use the site.
      </p>

      <h2 id="purpose">About this website</h2>
      <p>
        This website provides general information about {siteConfig.name} {siteConfig.tagline} — our
        activities, programs, events, membership, and facility rentals. We work to keep the
        information accurate and current, but details such as schedules, fees, hours, and event
        listings can change without notice. Nothing on this site is a binding offer or a guarantee.
      </p>

      <h2 id="membership">Membership and program participation</h2>
      <p>
        Submitting a membership inquiry through this site is a request for information — it is not a
        completed membership, and it does not create a contract. Membership, activities, and event
        participation are subject to our current policies, fees, and any separate agreements or
        waivers we may ask you to complete.
      </p>

      <h2 id="rentals">Facility rentals</h2>
      <p>
        Submitting a rental request through this site does not reserve a date or guarantee
        availability. A rental is confirmed only after we accept your request and you complete our
        rental agreement and any required payment or deposit. The terms of that rental agreement
        govern your use of our facilities.
      </p>

      <h2 id="acceptable-use">Acceptable use</h2>
      <p>When using this website, you agree not to:</p>
      <ul>
        <li>Submit false, misleading, or fraudulent information through our forms.</li>
        <li>Use the site for any unlawful purpose or in violation of these terms.</li>
        <li>
          Attempt to disrupt, damage, or gain unauthorized access to the site or its underlying
          systems.
        </li>
        <li>Use automated means to harvest information or send spam through our forms.</li>
      </ul>

      <h2 id="intellectual-property">Intellectual property</h2>
      <p>
        The content on this site — including text, graphics, logos, and images — is owned by or
        licensed to {siteConfig.name} {siteConfig.tagline} and is protected by applicable laws. You
        may view and share the content for personal, non-commercial purposes. You may not reproduce,
        distribute, or use it commercially without our permission.
      </p>

      <h2 id="third-party">Third-party links and services</h2>
      <p>
        This site may link to or embed third-party websites and services (for example, an embedded
        map). We do not control those services and are not responsible for their content,
        availability, or practices. Your use of them is at your own risk and subject to their terms.
      </p>

      <h2 id="disclaimer">Disclaimer</h2>
      <p>
        This website and its content are provided &ldquo;as is&rdquo; and &ldquo;as
        available,&rdquo; without warranties of any kind, whether express or implied, including
        warranties of accuracy, merchantability, or fitness for a particular purpose. We do not
        warrant that the site will be uninterrupted, error-free, or free of harmful components.
      </p>

      <h2 id="liability">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {siteConfig.name} {siteConfig.tagline} and its
        directors, staff, and volunteers will not be liable for any indirect, incidental, or
        consequential damages arising from your use of, or inability to use, this website.
      </p>

      <h2 id="governing-law">Governing law</h2>
      <p>
        These Terms of Use are governed by the laws of the State of Texas, without regard to its
        conflict-of-law rules. Any dispute relating to this website will be handled in the courts
        located in Texas.
      </p>

      <h2 id="changes">Changes to these terms</h2>
      <p>
        We may update these Terms of Use from time to time. Changes take effect when posted, and we
        will update the &ldquo;Last updated&rdquo; date above. Your continued use of the site means
        you accept the updated terms.
      </p>
    </LegalShell>
  );
}
