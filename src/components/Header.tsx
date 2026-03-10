import logo from "../assets/images/hero/cousins-logo.png";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#5A1E1E]/90 border-b border-black/10">

            <div className="max-w-[1200px] mx-auto px-14 h-24 grid grid-cols-3 items-start">

                {/* Left Navigation */}
                <nav className="flex items-center gap-14 justify-self-center text-lg uppercase tracking-[0.25em] text-[#E8DFC8] mt-10">
                    <a href="#menu" className="nav-link hover:text-pubRed">Menu</a>
                    <a href="#events" className="nav-link hover:text-pubRed">Events</a>
                </nav>

                <div className="flex justify-center">
                    <img
                        src={logo}
                        alt="Cousins Pizza Pub"
                        className="h-48 w-auto -mt-8 drop-shadow-xl"
                    />
                </div>

                 {/* Right Navigation */}
                <nav className="flex items-center gap-14 justify-self-center text-lg uppercase tracking-[0.25em] text-[#E8DFC8] mt-10">
                    <a href="#gallery" className="nav-link hover:text-pubRed">About</a>
                    <a href="#contact" className="nav-link hover:text-pubRed">Contact</a>
                </nav>
            </div>
        </header>
    );
}
