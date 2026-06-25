'use client';

import { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Calendar, Clock, 
  MapPin, Users, HeartHandshake, Briefcase, FileText 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlassCard } from './GlassCard';
import rawEvents from '@/data/calendar-events.json';

const formatSelectedDate = (date: Date): string => {
  try {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  } catch {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  }
};

const formatEventDate = (date: Date): string => {
  try {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } catch {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  }
};

export interface BusinessEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  category: 'board' | 'committee' | 'volunteer' | 'public';
}

interface RecurrenceRule {
  type: 'nthWeekday' | 'dayOfMonth';
  nth?: number;
  weekday?: number;
  day?: number;
}

interface RawEvent {
  id: string;
  title: string;
  time: string;
  location: string;
  description: string;
  category: 'board' | 'committee' | 'volunteer' | 'public';
  recurrence: RecurrenceRule;
}

const CATEGORY_STYLES = {
  board: {
    label: 'Board Meeting',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    dot: 'bg-blue-500',
    icon: Briefcase
  },
  committee: {
    label: 'Committee',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-500',
    icon: FileText
  },
  volunteer: {
    label: 'Volunteer Session',
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    dot: 'bg-amber-500',
    icon: HeartHandshake
  },
  public: {
    label: 'Public Forum',
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    dot: 'bg-purple-500',
    icon: Users
  }
};

function getEventsForMonth(year: number, monthIndex: number): BusinessEvent[] {
  const events: BusinessEvent[] = [];

  const getNthWeekday = (nth: number, weekday: number) => {
    const date = new Date(year, monthIndex, 1);
    let count = 0;
    while (date.getMonth() === monthIndex) {
      if (date.getDay() === weekday) {
        count++;
        if (count === nth) {
          return new Date(date);
        }
      }
      date.setDate(date.getDate() + 1);
    }
    return null;
  };

  (rawEvents as RawEvent[]).forEach((evt) => {
    if (evt.recurrence.type === 'nthWeekday') {
      const date = getNthWeekday(evt.recurrence.nth!, evt.recurrence.weekday!);
      if (date) {
        events.push({
          id: `${year}-${monthIndex}-${evt.id}`,
          title: evt.title,
          date,
          time: evt.time,
          location: evt.location,
          description: evt.description,
          category: evt.category
        });
      }
    } else if (evt.recurrence.type === 'dayOfMonth') {
      const date = new Date(year, monthIndex, evt.recurrence.day!);
      events.push({
        id: `${year}-${monthIndex}-${evt.id}`,
        title: evt.title,
        date,
        time: evt.time,
        location: evt.location,
        description: evt.description,
        category: evt.category
      });
    }
  });

  return events.sort((a, b) => a.date.getTime() - b.date.getTime());
}

export function BusinessCalendar() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Initialize the calendar to "today" only on the client. `new Date()` would
  // give the server's clock during SSR and cause a hydration mismatch, so we
  // render a skeleton until this runs. This is an intentional, one-time sync.
  useEffect(() => {
    const today = new Date();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only init, see above
    setCurrentDate(today);
    setSelectedDate(today);
  }, []);

  if (!currentDate || !selectedDate) {
    return (
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 animate-pulse">
        {/* Controls skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-zinc-100 dark:bg-card p-5 border border-zinc-200 dark:border-border/50 rounded-2xl">
          <div className="w-48 h-10 bg-foreground/10 rounded-xl" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-24 h-9 bg-foreground/10 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Main Grid skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Grid Section */}
          <div className="lg:col-span-2">
            <div className="p-5 border border-zinc-200 dark:border-border/50 rounded-xl bg-white dark:bg-card">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                  <div key={i} className="h-6 bg-foreground/10 rounded" />
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className="h-20 bg-foreground/5 rounded-xl border border-zinc-200 dark:border-border/10" />
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar Section */}
          <div className="flex flex-col gap-4">
            <div className="p-6 border border-zinc-200 dark:border-border/50 rounded-xl bg-white dark:bg-card h-full min-h-[350px]">
              <div className="w-3/4 h-6 bg-foreground/10 rounded mb-4" />
              <div className="w-1/2 h-4 bg-foreground/5 rounded mb-8" />
              <div className="flex flex-col gap-4">
                <div className="h-24 bg-foreground/5 rounded-xl border border-zinc-200 dark:border-border/10" />
                <div className="h-24 bg-foreground/5 rounded-xl border border-zinc-200 dark:border-border/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Month arithmetic
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const events = getEventsForMonth(currentYear, currentMonth);

  // Generate calendar grid
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const prevDaysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  const calendarDays = [];

  // Previous month filler days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const date = new Date(currentYear, currentMonth - 1, prevDaysInMonth - i);
    calendarDays.push({
      date,
      isCurrentMonth: false,
      isToday: false,
      dayNumber: prevDaysInMonth - i
    });
  }

  // Current month days
  const today = new Date();
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const isToday = 
      date.getDate() === today.getDate() && 
      date.getMonth() === today.getMonth() && 
      date.getFullYear() === today.getFullYear();

    calendarDays.push({
      date,
      isCurrentMonth: true,
      isToday,
      dayNumber: i
    });
  }

  // Next month filler days
  const totalSlots = 42; // 6 rows * 7 days
  const nextMonthFillerCount = totalSlots - calendarDays.length;
  for (let i = 1; i <= nextMonthFillerCount; i++) {
    const date = new Date(currentYear, currentMonth + 1, i);
    calendarDays.push({
      date,
      isCurrentMonth: false,
      isToday: false,
      dayNumber: i
    });
  }

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() && 
           date1.getMonth() === date2.getMonth() && 
           date1.getFullYear() === date2.getFullYear();
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(e => isSameDay(e.date, date) && (activeCategory === 'all' || e.category === activeCategory));
  };

  const allEventsForSelectedDate = events.filter(e => isSameDay(e.date, selectedDate));
  const filteredEventsForMonth = events.filter(e => activeCategory === 'all' || e.category === activeCategory);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      
      {/* Calendar controls & filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-zinc-100 dark:bg-card p-3 md:p-4 border border-zinc-300 dark:border-border rounded-2xl">
        
        {/* Month Selector */}
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrevMonth}
            className="p-2 md:p-2.5 rounded-xl border border-zinc-300 dark:border-border bg-white dark:bg-card hover:bg-zinc-100 dark:hover:bg-card/80 text-foreground/80 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-sapphire-500 focus-visible:outline-none cursor-pointer"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <div className="flex flex-col items-center sm:items-start min-w-[120px] md:min-w-[140px] text-center sm:text-left">
            <span className="text-lg md:text-xl font-bold text-foreground">
              {monthNames[currentMonth]}
            </span>
            <span className="text-[10px] md:text-xs text-foreground/60 font-medium">
              {currentYear}
            </span>
          </div>

          <button 
            onClick={handleNextMonth}
            className="p-2 md:p-2.5 rounded-xl border border-zinc-300 dark:border-border bg-white dark:bg-card hover:bg-zinc-100 dark:hover:bg-card/80 text-foreground/80 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-sapphire-500 focus-visible:outline-none cursor-pointer"
            aria-label="Next month"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
          {[
            { id: 'all', label: 'All Events' },
            { id: 'board', label: 'Board Meetings' },
            { id: 'committee', label: 'Committees' },
            { id: 'volunteer', label: 'Volunteer' },
            { id: 'public', label: 'Public Forums' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-xs font-semibold border transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-sapphire-500 focus-visible:outline-none cursor-pointer",
                activeCategory === cat.id
                  ? "bg-sapphire-600 border-sapphire-600 text-white shadow-md"
                  : "bg-white dark:bg-card border-zinc-300 dark:border-border text-foreground/80 hover:bg-zinc-100 dark:hover:bg-card/80"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Calendar Grid Section */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <GlassCard className="p-2.5 md:p-5 border-zinc-300 dark:border-border/60 shadow-lg">
            
            {/* Day headings */}
            <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs md:text-sm text-foreground/60 mb-1 md:mb-2 uppercase tracking-wider py-1 md:py-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="py-1">{day}</div>
              ))}
            </div>

            {/* Monthly Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 md:gap-2">
              {calendarDays.map((daySlot, index) => {
                const dayEvents = getEventsForDate(daySlot.date);
                const isSelected = isSameDay(daySlot.date, selectedDate);
                
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(daySlot.date)}
                    className={cn(
                      "min-h-[46px] md:min-h-[85px] p-1 md:p-2 flex flex-col justify-between items-start border rounded-xl transition-all cursor-pointer relative focus-visible:ring-2 focus-visible:ring-sapphire-500 focus-visible:outline-none",
                      daySlot.isCurrentMonth
                        ? "bg-white dark:bg-card border-zinc-300 dark:border-border/40 text-foreground"
                        : "bg-zinc-50 dark:bg-card/40 border-zinc-200 dark:border-border/10 text-foreground/30 hover:bg-zinc-100 dark:hover:bg-card/60",
                      daySlot.isToday && "ring-2 ring-gold-500/50 border-gold-500/40 bg-gold-500/[0.03]",
                      isSelected
                        ? "bg-sapphire-500/10 border-sapphire-500/70 ring-1 ring-sapphire-500/30"
                        : "hover:border-zinc-400 dark:hover:border-border hover:bg-zinc-100 dark:hover:bg-card/80"
                    )}
                  >
                    <div className="flex justify-between items-center w-full mb-0.5 md:mb-1">
                      <span className={cn(
                        "text-[10px] md:text-sm font-bold w-4 h-4 md:w-6 md:h-6 flex items-center justify-center rounded-full",
                        daySlot.isToday && "bg-gold-500 text-white font-black",
                        isSelected && !daySlot.isToday && "bg-sapphire-600 text-white"
                      )}>
                        {daySlot.dayNumber}
                      </span>
                    </div>

                    {/* Day Events Indicators */}
                    <div className="mt-auto flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-0.5 md:gap-1 w-full overflow-hidden justify-center md:justify-start">
                      {dayEvents.map(evt => (
                        <div 
                          key={evt.id} 
                          className="flex items-center gap-1 md:gap-1.5 w-auto md:w-full text-[10px] leading-tight font-semibold p-0 md:px-1.5 md:py-0.5 rounded md:border overflow-hidden text-ellipsis whitespace-nowrap bg-transparent md:bg-zinc-100 dark:md:bg-card border-none md:border-zinc-300 dark:md:border-border/60"
                        >
                          <span className={cn("w-1 md:w-1.5 h-1 md:h-1.5 rounded-full shrink-0", CATEGORY_STYLES[evt.category].dot)} />
                          <span className="hidden sm:inline text-foreground/80">{evt.title}</span>
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </GlassCard>
        </div>

        {/* Selected Day Event Details Sidebar */}
        <div className="flex flex-col gap-4">
          <GlassCard className="p-6 border-zinc-300 dark:border-border/60 shadow-lg flex flex-col h-full">
            
            {/* Header info */}
            <div className="flex items-center gap-3 border-b border-zinc-300 dark:border-border/60 pb-4 mb-4">
              <Calendar className="w-5 h-5 text-sapphire-700 dark:text-sapphire-300" />
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  {formatSelectedDate(selectedDate)}
                </h3>
                <p className="text-xs text-foreground/60 font-semibold">Events Schedule</p>
              </div>
            </div>

            {/* List of events on selected date */}
            <div className="flex-grow flex flex-col gap-4 overflow-y-auto max-h-[360px] lg:max-h-none pr-1">
              {allEventsForSelectedDate.length > 0 ? (
                allEventsForSelectedDate.map(evt => {
                  const styles = CATEGORY_STYLES[evt.category];
                  const Icon = styles.icon;
                  return (
                    <div 
                      key={evt.id} 
                      className="p-4 rounded-xl border border-zinc-300 dark:border-border/60 bg-white dark:bg-card flex flex-col gap-3 hover:border-zinc-400 dark:hover:border-border transition-all"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border", styles.color)}>
                          {styles.label}
                        </span>
                        <div className="bg-zinc-100 dark:bg-card p-1.5 rounded-lg border border-zinc-300 dark:border-border/40 text-foreground/70 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-bold text-base text-foreground">{evt.title}</h4>

                      <div className="flex flex-col gap-1.5 text-xs text-foreground/75 font-medium">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-sapphire-700 dark:text-sapphire-300 shrink-0" />
                          <span>{evt.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-sapphire-700 dark:text-sapphire-300 shrink-0" />
                          <span className="truncate">{evt.location}</span>
                        </div>
                      </div>

                      <p className="text-xs text-foreground/75 leading-relaxed bg-zinc-100 dark:bg-card p-2.5 border border-zinc-200 dark:border-border/30 rounded-lg">
                        {evt.description}
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-card flex items-center justify-center border border-zinc-300 dark:border-border/60 text-foreground/40">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground/80">No events on this day</h4>
                    <p className="text-xs text-foreground/50 max-w-[200px] mt-1 mx-auto leading-relaxed">
                      Select another day in the calendar grid to view business meetings.
                    </p>
                  </div>
                </div>
              )}

              {/* Show Upcoming list below if no events on selected day */}
              {allEventsForSelectedDate.length === 0 && filteredEventsForMonth.length > 0 && (
                <div className="mt-4 pt-4 border-t border-zinc-300 dark:border-border/40">
                  <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-3">
                    Upcoming this Month
                  </h4>
                  <div className="flex flex-col gap-2">
                    {filteredEventsForMonth.slice(0, 3).map(evt => {
                      const styles = CATEGORY_STYLES[evt.category];
                      return (
                        <button
                          key={evt.id}
                          onClick={() => setSelectedDate(evt.date)}
                          className="flex items-center justify-between p-3 rounded-xl border border-zinc-300 dark:border-border/40 bg-white dark:bg-card hover:bg-zinc-100 dark:hover:bg-card/80 hover:border-zinc-400 dark:hover:border-border/80 transition-all text-left w-full focus-visible:ring-2 focus-visible:ring-sapphire-500 focus-visible:outline-none cursor-pointer"
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <span className={cn("w-2 h-2 rounded-full shrink-0", styles.dot)} />
                            <div className="flex flex-col overflow-hidden">
                              <span className="text-xs font-bold truncate text-foreground/90">{evt.title}</span>
                              <span className="text-[10px] text-foreground/50 font-semibold">
                                {formatEventDate(evt.date)} at {evt.time.split(' - ')[0]}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-foreground/45 shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-zinc-300 dark:border-border/60 flex flex-wrap gap-x-4 gap-y-2 justify-center">
              {Object.entries(CATEGORY_STYLES).map(([key, style]) => (
                <div key={key} className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                  <span className={cn("w-2.5 h-2.5 rounded-full border border-black/10 dark:border-white/10 shadow-sm", style.dot)} />
                  <span>{style.label}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  );
}
