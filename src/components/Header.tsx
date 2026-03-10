import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/hero/cousins-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#5A1E1E]/90 border-b border-black/10">
      {/* ------------- DESKTOP NAV ------------ */}
      <nav className="hidden md:flex items-center justify-center gap-16 h-28 text-cream font-medium tracking-wider">
        <a className="hover:text-[#E8DFC8] transition">MENU</a>
        <a className="hover:text-[#E8DFC8] transition">EVENTS</a>

        <img
          src={logo}
          alt="Cousins Pizza Pub"
          className="h-44 w-auto md:mt-4"
        />

        <a className="hover:text-[#E8DFC8] transition">ABOUT</a>
        <a className="hover:text-[#E8DFC8] transition">CONTACT</a>
      </nav>

      {/* ------------- MOBILE NAV------------ */}
      <nav className="flex md:hidden items-center justify-between px-6 h-24">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-cream">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <img src={logo} alt="Cousins Pizza Pub" className="h-28" />

        {/* spacer to balance hamburger */}
        <div className="w-7"></div>
      </nav>

      {/* Mobile Menu Button */}
      {menuOpen && (
        <div className="md:hidden bg-[#E8DFC8]-900 border-t border-black/30">
          <ul className="flex flex-col text-center text-cream text-lg">
            <li className="py-4 border-b border-black/20">MENU</li>
            <li className="py-4 border-b border-black/20">EVENTS</li>
            <li className="py-4">ABOUT</li>
            <li className="py-4">CONTACT</li>
          </ul>
        </div>
      )}
    </header>
  );
}
