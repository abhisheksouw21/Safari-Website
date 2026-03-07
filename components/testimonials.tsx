import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Arjun Mehta",
    location: "Mumbai, India",
    text: "An absolutely magical experience. We spotted three leopards on our very first morning drive. The guides are incredibly knowledgeable and the luxury camp exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Sarah & James Thompson",
    location: "London, UK",
    text: "We have been on safaris across Africa, but Jawai offers something truly unique. The intimate setting, the ancient granite hills, and the close encounters with leopards were unforgettable.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    text: "The photography tour was exceptional. Our guide knew exactly where to position us for the best shots. I came home with award-worthy wildlife photographs. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6914] uppercase">
            Testimonials
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#8B6914] text-[#8B6914]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-sans text-base font-bold text-card-foreground">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
