import Image from "next/image"
import { Clock, Users, Star } from "lucide-react"

interface TourCardProps {
  title: string
  description: string
  image: string
  duration: string
  groupSize: string
  price: string
  rating: number
  featured?: boolean
}

export function TourCard({
  title,
  description,
  image,
  duration,
  groupSize,
  price,
  rating,
  featured = false,
}: TourCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        featured ? "ring-2 ring-[#8B6914]" : ""
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 rounded-full bg-[#8B6914] px-4 py-1.5 text-xs font-bold tracking-wider text-[#FAF6F1] uppercase">
          Most Popular
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#2C1810]/20 transition-opacity duration-500 group-hover:opacity-0" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-[#8B6914] text-[#8B6914]" : "text-border"
              }`}
            />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">
            {rating}.0
          </span>
        </div>

        <h3 className="font-sans text-xl font-bold text-card-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            {groupSize}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="font-sans text-2xl font-bold text-[#8B6914]">{price}</p>
          </div>
          <a
            href="https://wa.me/919351829337?text=Hi%2C%20I%20am%20interested%20in%20Jawai%20Leopard%20Safari"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#2C1810] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#FAF6F1] uppercase transition-colors hover:bg-[#8B6914]"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
