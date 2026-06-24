import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} ${siteConfig.tagline} collects, uses, and protects the information you share on this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="June 24, 2026"
      intro={
        <p>
          {siteConfig.name} {siteConfig.tagline} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) respects your privacy. This policy explains what information we
          collect through this website, how we use it, and the choices you have.
        </p>
      }
    >
      <h2 id="information-we-collect">Information we collect</h2>
      <p>
        We only collect the information you choose to give us. We do not sell your information, and
        we do not run advertising trackers on this site.
      </p>

      <h3>Information you provide through forms</h3>
      <p>
        When you submit one of the forms on this site, we collect the details you enter so we can
        respond to you:
      </p>
      <ul>
        <li>
          <strong>Contact / inquiry form:</strong> your name, email address, and the message you
          write.
        </li>
        <li>
          <strong>Membership inquiry form:</strong> your first and last name, email address, and
          phone number.
        </li>
        <li>
          <strong>Facility rental request:</strong> your name, organization name (optional), email
          address, phone number, preferred event date, estimated guest count, and event details.
        </li>
        <li>
          <strong>Newsletter sign-up:</strong> your email address.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider automatically records basic technical information
        when you visit — such as your browser type, device type, approximate region, and the pages
        you view. This information is used to keep the site secure and running well. We do not use
        it to personally identify you.
      </p>

      <h2 id="how-we-use">How we use your information</h2>
      <ul>
        <li>To respond to your questions, membership inquiries, and rental requests.</li>
        <li>To send you our newsletter and announcements, if you signed up for them.</li>
        <li>To operate, maintain, secure, and improve our website.</li>
        <li>To comply with the law and protect the rights and safety of our community.</li>
      </ul>

      <h2 id="how-we-share">How your information is shared</h2>
      <p>
        We do not sell or rent your personal information. We share it only with the service
        providers that help us operate this website, and only as needed to provide their service:
      </p>
      <ul>
        <li>
          <strong>Email delivery:</strong> form submissions are delivered to our staff by email
          through our email provider so we can read and respond to them.
        </li>
        <li>
          <strong>Website hosting:</strong> our hosting provider stores and serves the website and
          processes the basic technical information described above.
        </li>
        <li>
          <strong>Maps:</strong> our Contact section embeds a Google Map so you can find and
          navigate to us. Interacting with the map is subject to Google&rsquo;s own privacy policy.
        </li>
      </ul>
      <p>
        We may also disclose information if required by law, or to protect the rights, property, or
        safety of our organization, our members, or others.
      </p>

      <h2 id="cookies">Cookies and local storage</h2>
      <p>
        We do not use advertising or cross-site tracking cookies. This site stores a small amount of
        information in your browser to remember your display preferences — specifically your{" "}
        <strong>light/dark theme</strong> and your <strong>text-size</strong> choice. This stays on
        your device and is not used to identify you. You can clear it at any time through your
        browser settings. Our fonts are served directly from our own website, so loading this site
        does not send a request to any outside font service.
      </p>

      <h2 id="retention">How long we keep your information</h2>
      <p>
        Form submissions arrive as email to our staff and are kept in our email account for as long
        as needed to respond to you and maintain our records, then deleted in the ordinary course of
        business. Newsletter sign-ups are kept until you unsubscribe. You may ask us to remove your
        information sooner using the contact details below.
      </p>

      <h2 id="your-choices">Your choices and rights</h2>
      <ul>
        <li>
          <strong>Newsletter:</strong> every newsletter email includes a way to unsubscribe, or you
          can email us to be removed.
        </li>
        <li>
          <strong>Access, correction, or deletion:</strong> you may ask us what information we hold
          about you, ask us to correct it, or ask us to delete it. Texas residents may have
          additional rights under the Texas Data Privacy and Security Act.
        </li>
      </ul>
      <p>To make any of these requests, contact us using the details at the bottom of this page.</p>

      <h2 id="security">Security</h2>
      <p>
        We take reasonable measures to protect your information, including serving this site over a
        secure (HTTPS) connection. However, no method of transmission or storage is completely
        secure, so we cannot guarantee absolute security.
      </p>

      <h2 id="children">Children&rsquo;s privacy</h2>
      <p>
        This website is intended for adults and is not directed to children under 13. We do not
        knowingly collect personal information from children. If you believe a child has provided us
        information, please contact us and we will delete it.
      </p>

      <h2 id="third-party">Links to other websites</h2>
      <p>
        Our site may link to other websites we do not control. We are not responsible for the
        privacy practices of those sites, and we encourage you to read their privacy policies.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the
        &ldquo;Last updated&rdquo; date at the top of this page. Significant changes may be
        highlighted on the site.
      </p>
    </LegalShell>
  );
}
