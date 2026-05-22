import { HeartHandshake, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border mt-24 py-12 md:py-16 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sapphire-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          
          {/* Brand */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-sapphire-600 p-2 rounded-lg text-white">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-bold text-lg leading-none">TOTH</span>
                <span className="text-xs text-sapphire-400">Senior Center</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              Enhancing the quality of life for seniors in Cedar Park and surrounding areas through activities, education, and social connection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-lg text-gold-400">Quick Links</h3>
            <ul className="flex flex-col items-center gap-2">
              <li><a href="/#about" className="text-sm text-foreground/70 hover:text-sapphire-400 transition-colors">About Us</a></li>
              <li><a href="/#activities" className="text-sm text-foreground/70 hover:text-sapphire-400 transition-colors">Activities & Programs</a></li>
              <li><a href="/calendar" className="text-sm text-foreground/70 hover:text-sapphire-400 transition-colors">Events Calendar</a></li>
              <li><a href="/#gallery" className="text-sm text-foreground/70 hover:text-sapphire-400 transition-colors">Photo Gallery</a></li>
              <li><a href="/#membership" className="text-sm text-foreground/70 hover:text-sapphire-400 transition-colors">Become a Member</a></li>
              <li><a href="/rentals" className="text-sm text-foreground/70 hover:text-sapphire-400 transition-colors">Facility Rentals</a></li>
              <li><a href="/#contact" className="text-sm text-foreground/70 hover:text-sapphire-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-lg text-gold-400">Contact Us</h3>
            <ul className="flex flex-col items-center gap-3">
              <li className="flex flex-col items-center gap-1">
                <MapPin className="w-5 h-5 text-sapphire-400" />
                <span className="text-sm text-foreground/70">408 Discovery Blvd<br/>Cedar Park, TX 78613</span>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Phone className="w-5 h-5 text-sapphire-400" />
                <span className="text-sm text-foreground/70">(512) 331-6000</span>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Mail className="w-5 h-5 text-sapphire-400" />
                <span className="text-sm text-foreground/70">info@toth-seniors.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-lg text-gold-400">Hours of Operation</h3>
            <ul className="flex flex-col items-center gap-3">
              <li className="flex flex-col items-center gap-1">
                <Clock className="w-5 h-5 text-sapphire-400" />
                <div className="flex flex-col text-sm text-foreground/70 text-center">
                  <span className="font-medium text-foreground/90">Monday - Friday</span>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
              </li>
              <li className="flex flex-col items-center gap-1 opacity-60 mt-2">
                <Clock className="w-5 h-5 text-foreground/50" />
                <div className="flex flex-col text-sm text-foreground/70 text-center">
                  <span className="font-medium">Saturday - Sunday</span>
                  <span>Closed</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center justify-center gap-4">
          <p className="text-xs text-foreground/50 text-center">
            © {new Date().getFullYear()} Treasure of the Hills Senior Center. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-foreground/50">
            <a href="#" className="hover:text-sapphire-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sapphire-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
