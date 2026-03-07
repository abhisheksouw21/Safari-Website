import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-[#2C1810] pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-sans text-xl font-bold text-[#FAF6F1]">
              Jawai Leopard Safari
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#FAF6F1]/60">
              Rajasthan&apos;s premier luxury wildlife safari, offering
              unforgettable encounters with the majestic leopards of Jawai since
              2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-[#C4956A] uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {["Home", "Packages", "Gallery", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-[#FAF6F1]/60 transition-colors hover:text-[#C4956A]"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-[#C4956A] uppercase">
              Contact Us
            </h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-[#FAF6F1]/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C4956A]" />
                Jawai Bandh, Pali District, Rajasthan 306306, India
              </li>
              <li className="flex items-center gap-3 text-sm text-[#FAF6F1]/60">
                <Phone className="h-4 w-4 shrink-0 text-[#C4956A]" />
                +91 9351829337
              </li>
              <li className="flex items-center gap-3 text-sm text-[#FAF6F1]/60">
                <Mail className="h-4 w-4 shrink-0 text-[#C4956A]" />
                info@jawaileopardsafari.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-[#C4956A] uppercase">
              Follow Us
            </h4>
            <div className="mt-4 flex gap-4">
              {["Instagram", "Facebook", "YouTube", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`Follow us on ${social}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF6F1]/10 text-xs font-bold text-[#FAF6F1]/60 transition-all hover:border-[#C4956A]/40 hover:text-[#C4956A]"
                >
                  {social[0]}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#FAF6F1]/60">
              Follow us for daily wildlife updates and safari stories.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#FAF6F1]/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-[#FAF6F1]/40">
              &copy; {new Date().getFullYear()} Jawai Leopard Safari. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-[#FAF6F1]/40 transition-colors hover:text-[#C4956A]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-[#FAF6F1]/40 transition-colors hover:text-[#C4956A]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
