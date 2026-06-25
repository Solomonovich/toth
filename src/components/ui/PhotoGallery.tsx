"use client"

import { useState } from "react"
import { Maximize2, X, Filter, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Photo {
  id: string
  url: string
  title: string
  category: "activities" | "events" | "facility"
  aspect?: "landscape" | "portrait" | "square"
}

const GALLERY_PHOTOS: Photo[] = [
  {
    id: "expo-2024",
    url: "/images/expo-2024.jpg",
    title: "2024 Senior Community Expo",
    category: "events",
    aspect: "portrait"
  },
  {
    id: "reception",
    url: "/images/reception.jpg",
    title: "Welcoming Reception Area",
    category: "facility",
    aspect: "portrait"
  },
  {
    id: "memorial-garden",
    url: "/images/memorial-garden.jpg",
    title: "Memorial Garden Spring Bloom",
    category: "facility",
    aspect: "landscape"
  },
  {
    id: "table-tennis",
    url: "/images/table-tennis.jpg",
    title: "Active Table Tennis Match",
    category: "activities",
    aspect: "portrait"
  },
  {
    id: "val-dinner",
    url: "/images/val-dinner.jpg",
    title: "Valentine's Day Community Dinner",
    category: "events",
    aspect: "landscape"
  },
  {
    id: "billiards",
    url: "/images/billiards.jpg",
    title: "Billiards & Social Games",
    category: "activities",
    aspect: "portrait"
  },
  {
    id: "sit-fit",
    url: "/images/sit-fit.jpg",
    title: "Sit & Fit Exercise Class",
    category: "activities",
    aspect: "landscape"
  },
  {
    id: "card-games",
    url: "/images/card-games.jpg",
    title: "Social Dominoes & Board Games",
    category: "activities",
    aspect: "landscape"
  },
  {
    id: "jan-luncheon",
    url: "/images/jan-luncheon.jpeg",
    title: "January Luncheon Celebration",
    category: "events",
    aspect: "landscape"
  },
  {
    id: "quilting",
    url: "/images/quilting.jpg",
    title: "Quilting & Sewing Group",
    category: "activities",
    aspect: "landscape"
  },
  {
    id: "roses-bluebonnets",
    url: "/images/roses-bluebonnets.jpg",
    title: "Roses & Bluebonnets in the Garden",
    category: "facility",
    aspect: "landscape"
  },
  {
    id: "val-entertainment",
    url: "/images/val-entertainment.jpg",
    title: "Live Musical Entertainment",
    category: "events",
    aspect: "landscape"
  },
  {
    id: "jewelry-making",
    url: "/images/jewelry-making.jpg",
    title: "Jewelry Making Workshop",
    category: "activities",
    aspect: "landscape"
  },
  {
    id: "art-painting",
    url: "/images/art-painting.jpg",
    title: "Art & Painting Session",
    category: "activities",
    aspect: "landscape"
  },
  {
    id: "food-bank",
    url: "/images/food-bank.jpg",
    title: "Food Bank Donation Drive",
    category: "events",
    aspect: "landscape"
  },
  {
    id: "spring-garden",
    url: "/images/spring-garden.jpg",
    title: "Spring Garden Maintenance",
    category: "facility",
    aspect: "landscape"
  },
  {
    id: "great-room",
    url: "/images/great-room.jpg",
    title: "Main Hall (Great Room)",
    category: "facility",
    aspect: "landscape"
  },
  {
    id: "windows-flag",
    url: "/images/windows-flag.jpg",
    title: "Center Exterior & Flagpole",
    category: "facility",
    aspect: "landscape"
  }
]

const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "activities", label: "Daily Activities" },
  { id: "events", label: "Special Events" },
  { id: "facility", label: "Facility & Gardens" },
]

export function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const filteredPhotos = activeCategory === "all" 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory)

  return (
    <div className="w-full flex flex-col items-center">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 bg-card p-2 rounded-2xl border border-border shadow-sm">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-foreground/60 border-r border-border/50 mr-1">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter:</span>
        </div>
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                isActive
                  ? "text-white bg-sapphire-600 shadow-md"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className={cn(
              "group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg cursor-pointer flex flex-col transition-transform duration-300 hover:scale-[1.02]",
              photo.aspect === "portrait" ? "h-[380px]" : "h-[280px]"
            )}
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-card">
              <Image 
                src={photo.url} 
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sapphire-300 mb-1">
                {photo.category}
              </span>
              <h4 className="text-white font-bold text-lg leading-tight">
                {photo.title}
              </h4>
            </div>

            {/* Mobile: Always-visible title overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-sapphire-300 mb-0.5 block">
                {photo.category}
              </span>
              <h4 className="text-white font-bold text-sm leading-tight">
                {photo.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-[60vh] md:h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <Image 
                src={selectedPhoto.url} 
                alt={selectedPhoto.title} 
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-sapphire-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-sapphire-400">
                    {selectedPhoto.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-6 py-2.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-700 text-white font-medium text-sm transition-colors shadow-md"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
