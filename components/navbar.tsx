"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2C1810]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="font-sans text-xl font-bold tracking-wide text-[#FAF6F1] lg:text-2xl">
            Jawai Leopard Safari
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest text-[#FAF6F1]/80 uppercase transition-colors hover:text-[#C4956A]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919351829337?text=Hi%2C%20I%20am%20interested%20in%20Jawai%20Leopard%20Safari"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#8B6914] px-6 py-2.5 text-sm font-semibold tracking-wider text-[#FAF6F1] uppercase transition-all hover:bg-[#A67C52] hover:shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#FAF6F1] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#FAF6F1]/10 bg-[#2C1810]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium tracking-widest text-[#FAF6F1]/80 uppercase transition-colors hover:bg-[#FAF6F1]/5 hover:text-[#C4956A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919351829337?text=Hi%2C%20I%20am%20interested%20in%20Jawai%20Leopard%20Safari"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-[#8B6914] px-6 py-3 text-center text-sm font-semibold tracking-wider text-[#FAF6F1] uppercase"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
