import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BusinessCalendar } from "@/components/ui/BusinessCalendar";
import { CalendarDays } from "lucide-react";

export const metadata = {
  title: "Business & Board Calendar | Treasure of the Hills Senior Center",
  description: "View the TOTH interactive events schedule, including board meetings, committee sessions, volunteer trainings, town halls, and activities in Cedar Park, TX.",
};

export default function CalendarPage() {
  return (
    <div className="flex flex-col w-full relative overflow-x-hidden pt-6 md:pt-10">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden hidden md:block">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sapphire-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold-900/15 blur-[120px]" />
      </div>

      <AnimatedSection id="calendar-header" className="py-6 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-2 md:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/20 text-sapphire-400 mb-1 md:mb-2">
              <CalendarDays className="w-4 h-4 text-sapphire-500" />
              <span className="text-sm font-medium">Interactive Schedule</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight">{"Business & Board Events"}</h1>
            <p className="text-foreground/70 text-sm md:text-xl leading-relaxed">
              View upcoming board meetings, committee sessions, volunteer trainings, and town halls. Select a day in the calendar below to view more details.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="calendar-widget" className="py-6 md:py-12 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-10 max-w-6xl mx-auto">
            <BusinessCalendar />
          </div>

          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-sapphire-500/30 text-sapphire-500 hover:text-white hover:bg-sapphire-600 transition-all font-semibold shadow-sm hover:shadow-md cursor-pointer"
            >
              Download Monthly Calendar (PDF)
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
