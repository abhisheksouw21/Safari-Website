import { Binoculars, Shield, Tent, MapPin, Camera, Heart } from "lucide-react"

const features = [
  {
    icon: Binoculars,
    title: "Expert Trackers",
    description:
      "Our local guides possess generations of tracking knowledge, ensuring the highest leopard sighting success rates in Jawai.",
  },
  {
    icon: Shield,
    title: "Safe & Ethical",
    description:
      "We follow strict wildlife ethics, maintaining safe distances and minimal environmental impact on every safari.",
  },
  {
    icon: Tent,
    title: "Luxury Stays",
    description:
      "Experience premium glamping with handcrafted tents, organic cuisine, and all modern comforts amidst the wilderness.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Strategically positioned near the best leopard habitats, our camps offer unmatched proximity to wildlife.",
  },
  {
    icon: Camera,
    title: "Photography Support",
    description:
      "Professional photography guidance and optimal vehicle positioning for the perfect wildlife shot.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Every safari is tailored to your preferences with bespoke itineraries and dedicated personal concierge.",
  },
]

export function WhyChoose() {
  return (
    <section id="about" className="bg-[#2C1810] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#C4956A] uppercase">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold text-[#FAF6F1] md:text-4xl lg:text-5xl text-balance">
            A Safari Beyond Compare
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#FAF6F1]/70">
            With years of expertise and deep respect for wildlife, we deliver
            the finest safari experience in all of Rajasthan.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-[#FAF6F1]/10 bg-[#FAF6F1]/5 p-8 transition-all duration-500 hover:border-[#C4956A]/30 hover:bg-[#FAF6F1]/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B6914]/20">
                <feature.icon className="h-6 w-6 text-[#C4956A]" />
              </div>
              <h3 className="mt-5 font-sans text-lg font-bold text-[#FAF6F1]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#FAF6F1]/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
