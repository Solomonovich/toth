"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Shared submission logic for every inquiry form (membership, rental, contact,
 * newsletter). Posts to `/api/contact` and tracks loading / success / error
 * state so the individual form components only deal with their own fields.
 */
export function useContactForm(formType: "membership" | "rental" | "contact" | "newsletter") {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(payload: Record<string, unknown>): Promise<boolean> {
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, ...payload }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return false;
      }

      setStatus("success");
      return true;
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setError(null);
  }

  return {
    status,
    error,
    submit,
    reset,
    isSubmitting: status === "submitting",
    isSuccess: status === "success",
  };
}
