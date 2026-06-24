import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, fullAddress } from "@/lib/site-config";

/**
 * Shared layout for the legal pages (Privacy, Terms, Accessibility).
 *
 * Renders a consistent, high-contrast, readable long-form layout. Body copy is
 * authored as plain semantic HTML inside `<article className="legal-prose">`,
 * which is styled in globals.css. Each page passes its own `title`, `eyebrow`,
 * `lastUpdated`, optional `intro`, and the document body as `children`.
 */
export function LegalShell({
  eyebrow,
  title,
  lastUpdated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  const { contact, name, tagline } = siteConfig;

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-sapphire-700 dark:text-sapphire-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-foreground/60">Last updated: {lastUpdated}</p>

          {intro && (
            <div className="mt-6 text-lg text-foreground/80 leading-relaxed">{intro}</div>
          )}

          <hr className="my-8 border-border" />

          <article className="legal-prose text-foreground/80">{children}</article>

          {/* Contact / cross-links */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-xl font-bold">Questions about this page?</h2>
            <p className="mt-2 text-foreground/70">
              Get in touch with {name} {tagline}:
            </p>
            <ul className="mt-4 space-y-2.5 text-foreground/80">
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 shrink-0 text-sapphire-600 dark:text-sapphire-400" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors break-all"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 shrink-0 text-sapphire-600 dark:text-sapphire-400" />
                <a
                  href={contact.phoneHref}
                  className="hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 shrink-0 text-sapphire-600 dark:text-sapphire-400" />
                <span>{fullAddress}</span>
              </li>
            </ul>
            <p className="mt-5 text-sm text-foreground/60">
              See also our{" "}
              <Link href="/privacy" className="underline hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              ,{" "}
              <Link href="/terms" className="underline hover:text-foreground transition-colors">
                Terms of Use
              </Link>
              , and{" "}
              <Link
                href="/accessibility"
                className="underline hover:text-foreground transition-colors"
              >
                Accessibility Statement
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
