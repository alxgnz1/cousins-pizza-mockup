import { useState, useEffect } from "react";

import heroImage from "../assets/images/hero/dining.png";

//const images = [hero1, hero2, hero3];

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[position:center_35%]"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          {/* Header */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
            Order the Neighborhood's
            <br />
            Best Pizza Today!
          </h1>

          {/* Tagline */}
          <p className="mt-4 italic text-lg md:text-2xl text-cream/90">
            "Great Food, Friendly Service, Fun Times!"
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 border border-[#E8DFC8] text-[#E8DFC8] hover:bg-[#E8DFC8] hover:text-black transition">
              VIEW MENU
            </button>

            <button className="px-8 py-3 border border-[#E8DFC8] text-[#E8DFC8] hover:bg-[#E8DFC8] hover:text-black transition">
              EVENTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
