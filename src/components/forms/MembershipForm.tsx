"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useContactForm } from "@/lib/useContactForm"

export function MembershipForm() {
  const { isSubmitting, isSuccess, error, submit, reset } = useContactForm("membership")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    await submit({
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      company: fd.get("company"), // honeypot
    })
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 text-center space-y-4"
      >
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Thank you for your interest!</h3>
        <p className="text-foreground/70">
          We&apos;ve received your membership inquiry. One of our volunteers will contact you shortly to complete your registration.
        </p>
        <button
          onClick={reset}
          className="mt-6 text-sapphire-700 dark:text-sapphire-300 hover:text-sapphire-800 dark:hover:text-sapphire-200 font-medium transition-colors"
        >
          Submit another inquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot: hidden from people, tempting to bots. Leave empty. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label htmlFor="firstName" className="text-xs font-semibold text-foreground/80">First Name</label>
            <input 
              required 
              id="firstName" 
              name="firstName"
              autoComplete="given-name"
              className="w-full px-3 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sapphire-500/50 transition-all text-foreground text-sm"
              placeholder="Enter first name"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="lastName" className="text-xs font-semibold text-foreground/80">Last Name</label>
            <input 
              required 
              id="lastName" 
              name="lastName"
              autoComplete="family-name"
              className="w-full px-3 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sapphire-500/50 transition-all text-foreground text-sm"
              placeholder="Enter last name"
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-semibold text-foreground/80">Email Address</label>
          <input 
            required 
            type="email" 
            id="email" 
            name="email"
            autoComplete="email"
            className="w-full px-3 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sapphire-500/50 transition-all text-foreground text-sm"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="text-xs font-semibold text-foreground/80">Phone Number</label>
          <input 
            required 
            type="tel" 
            id="phone" 
            name="phone"
            autoComplete="tel"
            className="w-full px-3 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sapphire-500/50 transition-all text-foreground text-sm"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {error && (
        <p className="text-xs text-center text-red-500" role="alert">
          {error}
        </p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full py-2.5 bg-sapphire-600 hover:bg-sapphire-700 disabled:bg-sapphire-600/50 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:shadow-none flex items-center justify-center gap-2 text-sm"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          "Request Membership Info"
        )}
      </button>
      <p className="text-[10px] text-center text-foreground/50">
        By submitting this form, you agree to be contacted by our team. Your information is kept strictly confidential.
      </p>
    </form>
  )
}
