import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { RentalForm } from "@/components/forms/RentalForm";
import { Home, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Facility Rentals | Treasure of the Hills Senior Center",
  description: "Affordable, accessible rental spaces in Cedar Park, TX. Rent our Main Hall (Great Room) or meeting rooms for parties, gatherings, meetings, and classes.",
};

export default function RentalsPage() {
  return (
    <div className="flex flex-col w-full relative overflow-x-hidden pt-6 md:pt-10">
      <AnimatedSection id="rentals-header" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 dark:text-gold-400 mb-2">
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Rental Spaces</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Facility Rentals</h1>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Looking for the perfect space for your next event? Our center offers affordable, accessible rental spaces ideal for meetings, parties, classes, and social gatherings.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="rentals-options" className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-0 overflow-hidden flex flex-col text-center group border-border shadow-lg">
              <div className="w-full h-64 relative overflow-hidden bg-card">
                <Image
                  src="/images/great-room.jpg"
                  alt="Main Hall Great Room" 
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gold-500 text-white flex items-center justify-center shadow-lg group-hover:bg-gold-600 transition-colors z-10">
                  <Home className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6 pt-4 flex flex-col items-center flex-grow bg-card">
                <h2 className="font-bold text-2xl mb-1">Main Hall (Great Room)</h2>
                <p className="text-sm text-sapphire-700 dark:text-sapphire-300 font-bold uppercase tracking-wider mb-3">Capacity: 120 people</p>
                <p className="text-base text-foreground/80 leading-relaxed max-w-sm">
                  Spacious hall with hardwood floors, dance floor, kitchen access, and flexible seating configurations. Perfect for large gatherings, receptions, parties, and club events.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-0 overflow-hidden flex flex-col text-center group border-border shadow-lg">
              <div className="w-full h-64 relative overflow-hidden bg-card">
                <Image
                  src="/images/windows-flag.jpg"
                  alt="Meeting Rooms & Grounds" 
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gold-500 text-white flex items-center justify-center shadow-lg group-hover:bg-gold-600 transition-colors z-10">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6 pt-4 flex flex-col items-center flex-grow bg-card">
                <h2 className="font-bold text-2xl mb-1">Meeting Rooms & Grounds</h2>
                <p className="text-sm text-sapphire-700 dark:text-sapphire-300 font-bold uppercase tracking-wider mb-3">Capacity: 15-30 people</p>
                <p className="text-base text-foreground/80 leading-relaxed max-w-sm">
                  Cozy rooms ideal for classes, discussion groups, board meetings, or intimate gatherings. Offers direct access to our quiet outdoor patio and memorial garden.
                </p>
              </div>
            </GlassCard>
          </div>

          <div className="max-w-4xl mx-auto bg-card p-6 md:p-8 rounded-2xl border border-border mt-12">
            <h3 className="font-bold text-lg mb-4 text-center">Amenities Included with Rentals</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {[
                "Full commercial kitchen access",
                "Tables & comfortable chairs",
                "Ample free lighted parking",
                "ADA compliant accessible facilities",
                "Free high-speed Wi-Fi",
                "Large flat screen TV for presentation"
              ].map((amenity, i) => (
                <li key={i} className="flex items-center gap-2.5 text-foreground/80 bg-card p-3 rounded-xl border border-border">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 dark:text-gold-400 shrink-0" />
                  <span className="text-sm font-medium">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="rentals-form" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="w-full max-w-2xl mx-auto">
            <GlassCard className="p-8 md:p-10 border-gold-500/30 shadow-md text-center">
              <h3 className="text-3xl font-bold mb-4 text-gold-700 dark:text-gold-400">Submit a Rental Inquiry</h3>
              <p className="text-foreground/75 text-sm mb-8">Please fill out the form below with your event details, and our rental coordinator will get back to you within 24 hours.</p>
              <RentalForm />
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
