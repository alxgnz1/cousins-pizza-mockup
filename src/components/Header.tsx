import logo from "../assets/images/hero/cousins_logo3.png";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#5A1E1E] border-b border-black/10">

            <div className="max-w-[1800px] mx-auto px-12 h-20 flex items-center justify-between">
                <img
                    src={logo}
                    alt="Cousins Pizza Pub"
                    className="h-28 md:h-32 w-auto"
                />

                <nav className="hidden md:flex gap-12 text-sm uppercase tracking-widest text-[#E8DFC8]">
                    <a href="#menu" className="hover:text-pubRed">Menu</a>
                    <a href="#events" className="hover:text-pubRed">Events</a>
                    <a href="#gallery" className="hover:text-pubRed">Gallery</a>
                    <a href="#contact" className="hover:text-pubRed">Contact</a>
                </nav>
            </div>
        </header>
    );
}
