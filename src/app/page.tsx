import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { PhotoGallery } from "@/components/ui/PhotoGallery";
import { MembershipForm } from "@/components/forms/MembershipForm";
import { Hero } from "@/components/sections/Hero";
import { CountUp } from "@/components/ui/CountUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { BackToTop } from "@/components/ui/BackToTop";
import {
  Users, CalendarDays, MapPin, Phone, Mail, Sparkles, CheckCircle2, Navigation,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  activities, membershipTiers, membershipBenefits, siteConfig, fullAddress,
} from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative overflow-x-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden hidden md:block">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sapphire-900/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold-900/20 blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-sapphire-800/20 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AnimatedSection id="about" className="bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Our Center</h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Since our founding, Treasure of the Hills (TOTH) has been a vital resource for seniors in Cedar Park and surrounding areas. We provide a welcoming, safe environment where adults 50 and older can socialize, learn, and stay active.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Operated primarily by dedicated volunteers, our center offers a wide variety of programs designed to promote physical health, mental stimulation, and emotional well-being.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 w-full">
                <div className="flex flex-col gap-1 p-4 rounded-xl bg-card/50 border border-border/50">
                  <CountUp end={50} suffix="+" className="text-4xl font-bold text-sapphire-400" />
                  <span className="text-sm text-foreground/70 font-medium">Years Old to Join</span>
                </div>
                <div className="flex flex-col gap-1 p-4 rounded-xl bg-card/50 border border-border/50">
                  <CountUp end={100} suffix="%" className="text-4xl font-bold text-gold-400" />
                  <span className="text-sm text-foreground/70 font-medium">Volunteer Driven</span>
                </div>
              </div>

              <GlassCard className="p-6 mt-4 relative overflow-hidden w-full border-l-4 border-l-sapphire-500">
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  To provide a facility and programs that will enhance the quality of life for senior citizens in the Cedar Park area, offering opportunities for social interaction, recreation, education, and health maintenance.
                </p>
              </GlassCard>
            </div>

            {/* About Images Showcase */}
            <div className="relative flex flex-col gap-6 w-full px-4 sm:px-0">
              <div className="rounded-2xl overflow-hidden border border-border/60 shadow-2xl relative group bg-card/40 p-2 backdrop-blur-sm">
                <div className="rounded-xl overflow-hidden relative h-[280px] sm:h-[320px]">
                  <Image
                    src="/images/reception.jpg"
                    alt="TOTH Reception Area"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <span className="text-white font-semibold text-lg drop-shadow-md">Welcoming Reception Area</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border/60 shadow-2xl relative group bg-card/40 p-2 backdrop-blur-sm sm:w-4/5 sm:self-end sm:-mt-20 z-10">
                <div className="rounded-xl overflow-hidden relative h-[200px] sm:h-[240px]">
                  <Image
                    src="/images/food-bank.jpg"
                    alt="Food Bank Donation Drive"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <span className="text-white font-semibold text-base drop-shadow-md">Community Support &amp; Food Drives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Activities Section */}
      <AnimatedSection id="activities" direction="none">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Activities &amp; Programs</h2>
            <p className="text-foreground/70 text-lg">
              Stay active, learn something new, and make lasting friendships with our diverse range of weekly activities.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity) => (
              <StaggerItem key={activity.title}>
                <GlassCard variant="hover" className="p-0 overflow-hidden flex flex-col h-full text-center group border-border/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <div className="w-full h-52 relative overflow-hidden bg-card/50">
                    <Image
                      src={activity.img}
                      alt={activity.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-sapphire-600 text-white flex items-center justify-center shadow-lg group-hover:bg-sapphire-500 transition-colors z-10">
                      <activity.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6 pt-4 flex flex-col items-center gap-3 flex-grow bg-card/10">
                    <h3 className="text-xl font-bold">{activity.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{activity.desc}</p>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Business & Board Events Calendar Teaser */}
          <div className="mt-20 p-8 rounded-3xl bg-card/40 border border-border/60 backdrop-blur-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/20 text-sapphire-400">
                <CalendarDays className="w-4 h-4 text-sapphire-500" />
                <span className="text-sm font-medium">Business Calendar</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Business &amp; Board Meetings</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Stay informed on our internal operations. View the full, interactive events schedule for upcoming board meetings, committee sessions, volunteer training, and town halls.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/calendar"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg w-full md:w-auto"
              >
                View Interactive Calendar
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection id="gallery" className="bg-card/20 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/20 text-sapphire-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Visual Tour</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Photo Gallery</h2>
            <p className="text-foreground/70 text-lg">
              Explore moments of joy, creativity, and community at Treasure of the Hills Senior Center.
            </p>
          </div>
          <PhotoGallery />
        </div>
      </AnimatedSection>

      {/* Membership Section */}
      <AnimatedSection id="membership" className="bg-card/30 border-y border-border/50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

            {/* Details & Pricing Column */}
            <div className="lg:col-span-7 space-y-5 flex flex-col items-start text-left">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Become a Member</h2>
                <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                  Membership is open to anyone 50 years of age or older. Join our vibrant community to enjoy full access to our facility, activities, and special events.
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                {membershipTiers.map((tier) => (
                  <div key={tier.name} className="flex items-center gap-3.5 bg-card/45 p-3.5 rounded-xl border border-border/60 shadow-sm">
                    <div
                      className={cn(
                        "w-11 h-11 rounded-lg flex items-center justify-center shrink-0",
                        tier.accent === "sapphire"
                          ? "bg-sapphire-500/15 text-sapphire-500 dark:text-sapphire-400"
                          : "bg-gold-500/15 text-gold-500 dark:text-gold-400",
                      )}
                    >
                      <span className="font-bold text-base">{tier.price}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{tier.name}</h4>
                      <p className="text-foreground/60 text-xs">{tier.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="w-full space-y-2.5">
                <h4 className="font-bold text-sm uppercase tracking-wider text-sapphire-500 dark:text-sapphire-400">Membership Benefits</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full text-left">
                  {membershipBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-foreground/80 bg-card/20 p-2.5 rounded-xl border border-border/40">
                      <CheckCircle2 className="w-4 h-4 text-sapphire-500 shrink-0" />
                      <span className="text-xs font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Request Membership Info Form Card */}
            <div className="lg:col-span-5 w-full">
              <GlassCard className="p-6 md:p-8 text-center border-border/60 shadow-xl">
                <h3 className="text-lg font-bold mb-4 text-foreground">Request Membership Info</h3>
                <MembershipForm />
              </GlassCard>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="bg-card/30 border-t border-border/50" direction="none">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Visit Us</h2>
            <p className="text-foreground/70 text-lg">
              We&apos;d love to show you around. Stop by during our operating hours for a personal tour of the facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <GlassCard className="p-6 flex flex-col items-center text-center gap-3 border-border/60 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-sapphire-500/20 text-sapphire-500 flex items-center justify-center mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Location</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {siteConfig.contact.addressLine}<br />
                {siteConfig.contact.city}, {siteConfig.contact.state} {siteConfig.contact.zip}
              </p>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center gap-3 border-border/60 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-sapphire-500/20 text-sapphire-500 flex items-center justify-center mb-2">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                <a href={siteConfig.contact.phoneHref} className="hover:text-sapphire-400 transition-colors">{siteConfig.contact.phone}</a>
                <br />Call during business hours
              </p>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center gap-3 border-border/60 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-sapphire-500/20 text-sapphire-500 flex items-center justify-center mb-2">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-sapphire-400 transition-colors break-all">{siteConfig.contact.email}</a>
                <br />We reply within 24 hours
              </p>
            </GlassCard>
          </div>

          {/* Map */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-lg">
              <iframe
                title={`Map showing the location of ${siteConfig.name}`}
                src={siteConfig.map.embed}
                className="w-full h-[300px] md:h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex justify-center mt-6">
              <a
                href={siteConfig.map.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                Get Directions to {fullAddress}
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <BackToTop />
    </div>
  );
}
