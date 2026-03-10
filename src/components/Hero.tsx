import { useState, useEffect } from "react";

import heroCenter from "../assets/images/hero/dining.png";
import heroLeft from "../assets/images/hero/sandwich.jpg";
import heroRight from "../assets/images/hero/dartboard.jpg";

//const images = [hero1, hero2, hero3];

export default function Hero() {
  

  return (
    <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] w-screen overflow-hidden">
      
      
  {/* Hero image grid */}
  <div className="absolute inset-0 grid grid-cols-[1fr_2fr_1fr]">

    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${heroLeft})` }}
    />

    <div
      className="bg-cover bg-[position:center_35%]"
      style={{ backgroundImage: `url(${heroCenter})` }}
    />

    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${heroRight})` }}
    />

  </div>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Hero content */}
  <div className="relative z-10 flex h-full w-full items-center justify-center pt-10 md:pt-14">
    <div className="mx-auto max-w-3xl px-6 text-center space-y-1">

      <h2 className="text-3xl md:text-4xl font-serif text-cream">
        Order the Neighborhood's Best Pizza Today!
      </h2>

      <h3 className="text-2xl md:text-3xl font-serif text-cream">
        <i>"Great Food, Friendly Service, Fun Times!"</i>
      </h3>

      <div className="pt-8 flex justify-center gap-6">
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

