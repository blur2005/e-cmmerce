import React from "react";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-xs tracking-widest uppercase text-green-700 font-medium mb-4">
          Farm to doorstep delivery
        </p>
        <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mb-5">
          Good food, <span className="italic text-green-700">honestly</span>{" "}
          sourced.
        </h1>
        <p className="text-base text-stone-500 leading-relaxed max-w-md mb-8 font-light">
          We partner with local farms and trusted suppliers to bring you
          seasonal produce and everyday essentials — fresh, fast, and fairly
          priced.
        </p>
        <div className="flex items-center gap-5">
          <button className="bg-stone-900 text-white text-sm px-7 py-3 rounded-full hover:bg-green-700 transition-colors">
            Shop now
          </button>
          <span className="text-sm text-stone-900 underline underline-offset-4 cursor-pointer">
            See weekly offers
          </span>
        </div>
        <div className="flex gap-10 mt-10 pt-8 border-t border-stone-200">
          {[
            ["340+", "Products available"],
            ["2hr", "Express delivery"],
            ["98%", "Organic certified"],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl font-semibold">{val}</div>
              <div className="text-xs text-stone-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bg-stone-100 rounded-3xl aspect-square flex items-center justify-center max-w-md justify-self-end w-full">
        <span className="text-8xl">🧺</span>
        <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
          <span className="text-xs font-medium">24 new arrivals this week</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
