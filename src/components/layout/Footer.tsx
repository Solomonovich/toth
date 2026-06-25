import { HeartHandshake, MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import { NewsletterForm } from "@/components/forms/NewsletterForm"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const { contact, hours, name, tagline, description } = siteConfig

  return (
    <footer className="bg-card/50 border-t border-border mt-24 py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter band */}
        <div className="max-w-2xl mx-auto text-center mb-14 pb-12 border-b border-border">
          <h3 className="font-bold text-xl md:text-2xl mb-2">Stay in the Loop</h3>
          <p className="text-sm text-foreground/70 mb-5">
            Get our monthly newsletter with upcoming events, activities, and announcements.
          </p>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

          {/* Brand */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-sapphire-600 p-2 rounded-lg text-white">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-bold text-lg leading-none">{siteConfig.shortName}</span>
                <span className="text-xs text-sapphire-700 dark:text-sapphire-300">{tagline}</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-lg text-gold-700 dark:text-gold-400">Quick Links</h3>
            <ul className="flex flex-col items-center gap-2">
              <li><Link href="/#about" className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">About Us</Link></li>
              <li><Link href="/#activities" className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Activities &amp; Programs</Link></li>
              <li><Link href="/calendar" className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Events Calendar</Link></li>
              <li><Link href="/#gallery" className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Photo Gallery</Link></li>
              <li><Link href="/#membership" className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Become a Member</Link></li>
              <li><Link href="/rentals" className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Facility Rentals</Link></li>
              <li><Link href="/#contact" className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-lg text-gold-700 dark:text-gold-400">Contact Us</h3>
            <ul className="flex flex-col items-center gap-3">
              <li className="flex flex-col items-center gap-1">
                <MapPin className="w-5 h-5 text-sapphire-600 dark:text-sapphire-400" />
                <span className="text-sm text-foreground/70">{contact.addressLine}<br />{contact.city}, {contact.state} {contact.zip}</span>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Phone className="w-5 h-5 text-sapphire-600 dark:text-sapphire-400" />
                <a href={contact.phoneHref} className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">{contact.phone}</a>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Mail className="w-5 h-5 text-sapphire-600 dark:text-sapphire-400" />
                <a href={`mailto:${contact.email}`} className="text-sm text-foreground/70 hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors break-all">{contact.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-lg text-gold-700 dark:text-gold-400">Hours of Operation</h3>
            <ul className="flex flex-col items-center gap-3">
              <li className="flex flex-col items-center gap-1">
                <Clock className="w-5 h-5 text-sapphire-600 dark:text-sapphire-400" />
                <div className="flex flex-col text-sm text-foreground/70 text-center">
                  <span className="font-medium text-foreground/90">{hours.weekdays.label}</span>
                  <span>{hours.weekdays.value}</span>
                </div>
              </li>
              <li className="flex flex-col items-center gap-1 opacity-60 mt-2">
                <Clock className="w-5 h-5 text-foreground/50" />
                <div className="flex flex-col text-sm text-foreground/70 text-center">
                  <span className="font-medium">{hours.weekend.label}</span>
                  <span>{hours.weekend.value}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center justify-center gap-4">
          <p className="text-xs text-foreground/50 text-center">
            © {new Date().getFullYear()} {name} {tagline}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-foreground/50">
            <Link href="/#contact" className="hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Contact</Link>
            <Link href="/rentals" className="hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Rentals</Link>
            <Link href="/privacy" className="hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Terms of Use</Link>
            <Link href="/accessibility" className="hover:text-sapphire-700 dark:hover:text-sapphire-300 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
