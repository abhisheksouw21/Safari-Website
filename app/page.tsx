import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PackagesSection } from "@/components/packages-section"
import { WhyChoose } from "@/components/why-choose"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PackagesSection />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
