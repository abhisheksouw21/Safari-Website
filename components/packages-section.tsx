import { TourCard } from "./tour-card"

const packages = [
  {
    title: "Sunrise Leopard Safari",
    description:
      "Begin your day with a magical sunrise drive through Jawai's granite hills. Our expert trackers will guide you to the best leopard sighting spots for an intimate wildlife experience.",
    image: "/images/package-1.jpg",
    duration: "3 Hours",
    groupSize: "Max 6 guests",
    price: "\u20B95000",
    rating: 5,
    featured: false,
  },
  {
    title: "Sunset Leopard Safari",
    description:
      "The ultimate Jawai experience combining leopard safaris with luxury glamping under the stars. Enjoy curated dining, private guides, and exclusive access to pristine wildlife territory.",
    image: "/images/package-2.jpg",
    duration: "3 Hours",
    groupSize: "Max 6 guests",
    price: "\u20B95000",
    rating: 5,
    featured: true,
  },
  {
    title: "Sunsrise and Sunset Safari",
    description:
      "A specialized safari designed for photography enthusiasts. Guided by professional wildlife photographers with optimal positioning for capturing breathtaking leopard portraits.",
    image: "/images/package-3.jpg",
    duration: "6 Hours",
    groupSize: "Max 6 guests",
    price: "\u20B990000",
    rating: 4,
    featured: false,
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6914] uppercase">
            Safari Packages
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Curated Wilderness Experiences
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Choose from our handcrafted safari packages, each designed to offer
            an exclusive and unforgettable encounter with Jawai&apos;s magnificent leopards.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <TourCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
