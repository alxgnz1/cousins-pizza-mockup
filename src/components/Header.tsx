export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-cream border-b border-black/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="font-serif text-xl tracking-wide">
                    Cousins Pizza Pub
                </div>

                <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
                    <a href="#menu" className="hover:text-pubRed">Menu</a>
                    <a href="#events" className="hover:text-pubRed">Events</a>
                    <a href="#gallery" className="hover:text-pubRed">Gallery</a>
                    <a href="#contact" className="hover:text-pubRed">Contact</a>
                </nav>
            </div>
        </header>
    );
}
