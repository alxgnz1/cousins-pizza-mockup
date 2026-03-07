import heroImage from "../assets/images/hero/cousins-outdoor-img.jpg";
import logo from "../assets/images/hero/cousins-pizza-logo.png"

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] w-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[position:center_35%]"
      //style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full w-full items-center justify-center pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-cream">
            Welcome to
          </h1>

          <div className="mt-3 flex justify-center">
            <img
              src={logo}
              alt="Cousins Pizza Pub"
              className="h-52 md:h-54 lg:h-52 w-auto"

            />
          </div>

          <p className="mt-4 text-lg md:text-xl text-cream/80">
            A neighborhood pub serving classic pizza, cold beer,
            and familiar faces — just the way it’s always been.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a className="bg-pubRed text-cream px-8 py-4 uppercase tracking-wide">
              View Menu
            </a>
            <a className="border border-cream/40 text-cream px-8 py-4 uppercase tracking-wide">
              Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

