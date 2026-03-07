import Image from "next/image"

const images = [
  { src: "/images/gallery-1.jpg", alt: "Wild leopard portrait in Jawai", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Jawai Dam aerial landscape", span: "" },
  { src: "/images/gallery-3.jpeg", alt: "Safari jeep on Jawai terrain", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Leopard prowling through grassland", span: "md:col-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Luxury safari camp at twilight", span: "" },
  { src: "/images/gallery-6.jpg", alt: "Mother leopard with cubs on rocks", span: "" },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6914] uppercase">
            Gallery
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Captured Moments
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A glimpse into the extraordinary world of Jawai&apos;s leopards and the
            stunning landscapes that make this destination truly magical.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[250px]">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2C1810]/0 transition-all duration-500 group-hover:bg-[#2C1810]/30" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-sm font-medium text-[#FAF6F1]">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
