import heroImage from "../assets/images/hero/cousins-outdoor-img.jpg";


export default function Hero() {
    return (
        <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-[position:center_35%]"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Dark warm overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight max-w-3xl">
                        Old-School Pizza.<br />
                        Cold Drinks.<br />
                        Good Company.
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-xl">
                        A neighborhood pub serving classic pizza, cold beer,
                        and familiar faces — just the way it’s always been.
                    </p>

                    <div className="mt-10 flex gap-6">
                        <a
                            href="#menu"
                            className="inline-block bg-pubRed text-cream px-8 py-4 text-sm uppercase tracking-widest hover:bg-pubGold hover:text-charcoal transition"
                        >
                            View Menu
                        </a>

                        <a
                            href="#events"
                            className="inline-block border border-cream/40 text-cream px-8 py-4 text-sm uppercase tracking-widest hover:bg-cream hover:text-charcoal transition"
                        >
                            Events
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
