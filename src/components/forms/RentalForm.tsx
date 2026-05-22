"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Calendar } from "lucide-react"

export function RentalForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 text-center space-y-4"
      >
        <div className="w-16 h-16 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Request Received!</h3>
        <p className="text-foreground/70">
          We&apos;ve received your facility rental request. A representative will reach out within 1-2 business days to discuss availability and pricing.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-gold-400 hover:text-gold-300 font-medium transition-colors"
        >
          Submit another request
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="contactName" className="text-sm font-medium text-foreground/90">Full Name</label>
            <input 
              required 
              id="contactName" 
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="orgName" className="text-sm font-medium text-foreground/90">Organization (Optional)</label>
            <input 
              id="orgName" 
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
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
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="rentalPhone" className="text-sm font-medium text-foreground/90">Phone Number</label>
            <input 
              required 
              type="tel" 
              id="rentalPhone" 
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
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
                className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground"
              />
              <Calendar className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="guestCount" className="text-sm font-medium text-foreground/90">Estimated Guests</label>
            <select 
              id="guestCount" 
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground appearance-none"
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
            rows={4}
            className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all text-foreground resize-none"
            placeholder="Please describe the type of event you are planning..."
          />
        </div>
      </div>

      <button 
        disabled={isSubmitting}
        type="submit" 
        className="w-full py-4 bg-gold-600 hover:bg-gold-500 disabled:bg-gold-600/50 text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(202,138,4,0.2)] hover:shadow-[0_0_30px_rgba(202,138,4,0.4)] disabled:shadow-none flex items-center justify-center gap-2"
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
