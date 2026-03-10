export default function Footer() {
  return (
    <footer className="bg-[#1F2A24] text-[#E8DFC8] border-t border-white/10 mt-24">

      <div className="max-w-[1400px] mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-serif mb-4">Cousins Pizza Pub</h3>
          <p className="text-sm text-cream/70">
            A neighborhood pub serving classic pizza, cold beer,
            and familiar faces — just the way it's always been.
          </p>
        </div>

        {/* Hours */}
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Mon – Sat: 11am – 11pm</li>
            <li>Sunday: 11am – 10pm</li>
          </ul>
          <br />
          <ul className="space-y-2 text-sm text-cream/80">
            <li> * Kitchen closes 1 hour before closing time.</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>(630) 980-8181</li>
            <li>966 W Lake St</li>
            <li>Roselle, IL</li>
          </ul>
        </div>

        {/* Order / Delivery */}
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-4">Order Online</h4>

          <div className="flex flex-col gap-3">

            <a
              href="#"
              className="border border-cream/40 px-4 py-2 text-sm hover:bg-[#E8DFC8] hover:text-black transition"
            >
              DoorDash
            </a>

            <a
              href="#"
              className="border border-cream/40 px-4 py-2 text-sm hover:bg-[#E8DFC8] hover:text-black transition"
            >
              Uber Eats
            </a>

            <a
              href="#"
              className="border border-cream/40 px-4 py-2 text-sm hover:bg-[#E8DFC8] hover:text-black transition"
            >
              GrubHub
            </a>

          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 text-center text-xs text-cream/60 py-6">
        © {new Date().getFullYear()} Cousins Pizza Pub <br/> Site created by Web Luser Inc.
      </div>

    </footer>
  );
}