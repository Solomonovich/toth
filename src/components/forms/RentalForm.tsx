"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Calendar } from "lucide-react"
import { useContactForm } from "@/lib/useContactForm"

export function RentalForm() {
  const { isSubmitting, isSuccess, error, submit, reset } = useContactForm("rental")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    await submit({
      contactName: fd.get("contactName"),
      orgName: fd.get("orgName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      eventDate: fd.get("eventDate"),
      guestCount: fd.get("guestCount"),
      eventDetails: fd.get("eventDetails"),
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
        <div className="w-16 h-16 bg-gold-500/20 text-gold-700 dark:text-gold-400 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Request Received!</h3>
        <p className="text-foreground/70">
          We&apos;ve received your facility rental request. A representative will reach out within 1-2 business days to discuss availability and pricing.
        </p>
        <button
          onClick={reset}
          className="mt-6 text-gold-700 dark:text-gold-400 hover:text-gold-800 dark:hover:text-gold-300 font-medium transition-colors"
        >
          Submit another request
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot: hidden from people, tempting to bots. Leave empty. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="contactName" className="text-sm font-medium text-foreground/90">Full Name</label>
            <input
              required
              id="contactName"
              name="contactName"
              autoComplete="name"
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="orgName" className="text-sm font-medium text-foreground/90">Organization (Optional)</label>
            <input
              id="orgName"
              name="orgName"
              autoComplete="organization"
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
              placeholder="e.g. Cedar Park Club"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="rentalEmail" className="text-sm font-medium text-foreground/90">Email Address</label>
            <input
              required
              type="email"
              id="rentalEmail"
              name="email"
              autoComplete="email"
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="rentalPhone" className="text-sm font-medium text-foreground/90">Phone Number</label>
            <input
              required
              type="tel"
              id="rentalPhone"
              name="phone"
              autoComplete="tel"
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="eventDate" className="text-sm font-medium text-foreground/90">Preferred Date</label>
            <div className="relative">
              <input
                required
                type="date"
                id="eventDate"
                name="eventDate"
                className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
              />
              <Calendar className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="guestCount" className="text-sm font-medium text-foreground/90">Estimated Guests</label>
            <select
              id="guestCount"
              name="guestCount"
              defaultValue="1-50"
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground appearance-none"
            >
              <option value="1-50">1 - 50 people</option>
              <option value="51-100">51 - 100 people</option>
              <option value="100+">More than 100 people</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="eventDetails" className="text-sm font-medium text-foreground/90">Event Details</label>
          <textarea
            required
            id="eventDetails"
            name="eventDetails"
            rows={4}
            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground resize-none"
            placeholder="Please describe the type of event you are planning..."
          />
        </div>
      </div>

      {error && (
        <p className="text-sm text-center text-red-500" role="alert">
          {error}
        </p>
      )}

      <button 
        disabled={isSubmitting}
        type="submit" 
        className="w-full py-4 bg-gold-600 hover:bg-gold-700 disabled:bg-gold-600/50 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:shadow-none flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending Request...
          </>
        ) : (
          "Submit Rental Inquiry"
        )}
      </button>
    </form>
  )
}
