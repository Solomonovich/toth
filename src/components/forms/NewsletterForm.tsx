"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useContactForm } from "@/lib/useContactForm";

/**
 * Footer newsletter sign-up. Posts the email to the shared `/api/contact`
 * endpoint with `formType: "newsletter"`.
 */
export function NewsletterForm() {
  const { isSubmitting, isSuccess, error, submit } = useContactForm("newsletter");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await submit({ email: fd.get("email"), company: fd.get("company") });
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center gap-2 text-green-500 text-sm font-medium" role="status">
        <CheckCircle2 className="w-5 h-5" />
        You&apos;re subscribed! Watch your inbox for our monthly newsletter.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="newsletter-company">Company</label>
        <input id="newsletter-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sapphire-500/50 transition-all text-foreground text-sm"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-700 disabled:bg-sapphire-600/50 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 shrink-0"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Joining…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Subscribe
            </>
          )}
        </button>
      </div>
      {error && (
        <p className="text-xs text-center text-red-500 mt-2" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
