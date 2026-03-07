import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-safari.jpg"
        alt="Jawai leopard safari landscape at golden hour"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#2C1810]/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#C4956A] uppercase md:text-base">
          Rajasthan&apos;s Premier Wildlife Experience
        </p>
        <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight text-[#FAF6F1] text-balance md:text-6xl lg:text-7xl">
          Witness the Majestic Leopards of Jawai
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#FAF6F1]/80 md:text-xl">
          Embark on an unforgettable journey through the ancient granite hills
          of Jawai, where wild leopards roam freely against the backdrop of
          Rajasthan&apos;s breathtaking landscapes.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#packages"
            className="rounded-full bg-[#8B6914] px-10 py-4 text-base font-semibold tracking-wider text-[#FAF6F1] uppercase shadow-xl transition-all hover:bg-[#A67C52] hover:shadow-2xl"
          >
            Explore Packages
          </a>
          <a
            href="#gallery"
            className="rounded-full border-2 border-[#FAF6F1]/30 px-10 py-4 text-base font-semibold tracking-wider text-[#FAF6F1] uppercase transition-all hover:border-[#FAF6F1]/60 hover:bg-[#FAF6F1]/10"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-[#FAF6F1]/40">
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-[#FAF6F1]/60" />
        </div>
      </div>
    </section>
  )
}
