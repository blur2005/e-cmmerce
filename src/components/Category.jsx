import React from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-16 pb-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl font-semibold">Browse the market</h2>
        <span className="text-sm text-stone-500 underline underline-offset-4 cursor-pointer">
          View all →
        </span>
      </div>

      <div className="flex gap-2 flex-wrap mb-9">
        {["All", "Fruits", "Vegetables", "Dairy & Eggs", "Bakery"].map(
          (cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                i === 0
                  ? "bg-stone-900 text-white border-stone-900"
                  : "border-stone-300 text-stone-500 hover:border-green-600 hover:text-green-700"
              }`}
            >
              {cat}
            </button>
          ),
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          {
            name: "Heirloom Tomatoes",
            sub: "Farm fresh, per kg",
            price: 3.49,
            emoji: "🍅",
            tag: "organic",
          },
          {
            name: "Avocados",
            sub: "Ready to eat, pack of 4",
            price: 4.99,
            emoji: "🥑",
            tag: "new",
          },
          {
            name: "Free Range Eggs",
            sub: "12 large eggs",
            price: 5.29,
            emoji: "🥚",
            tag: "organic",
          },
          {
            name: "Sourdough Loaf",
            sub: "Stone-baked, whole loaf",
            price: 4.25,
            emoji: "🍞",
            tag: null,
          },
          {
            name: "Whole Milk",
            sub: "Organic, 2L bottle",
            price: 2.89,
            emoji: "🥛",
            tag: "organic",
          },
          {
            name: "Baby Spinach",
            sub: "Washed & ready, 250g",
            price: 2.49,
            emoji: "🥬",
            tag: "organic",
          },
          {
            name: "Blueberries",
            sub: "Scottish grown, 300g",
            price: 3.75,
            emoji: "🫐",
            tag: "sale",
          },
          {
            name: "Greek Yoghurt",
            sub: "Full-fat, 500g tub",
            price: 2.99,
            emoji: "🫙",
            tag: null,
          },
        ].map((p, i) => (
          <Link
            to={`/product/${i}`}
            key={p.name}
            className="bg-white rounded-2xl border border-stone-100 overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          >
            <div className="bg-stone-50 h-36 flex items-center justify-center text-5xl relative">
              {p.tag && (
                <span
                  className={`absolute top-2.5 left-2.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                    p.tag === "organic"
                      ? "bg-green-100 text-green-700"
                      : p.tag === "sale"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {p.tag === "organic"
                    ? "Organic"
                    : p.tag === "sale"
                      ? "On Sale"
                      : "New"}
                </span>
              )}
              {p.emoji}
            </div>
            <div className="p-3.5">
              <p className="text-sm font-medium text-stone-900">{p.name}</p>
              <p className="text-xs text-stone-400 font-light mt-0.5 mb-3">
                {p.sub}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  £{p.price.toFixed(2)}
                </span>
                <button className="w-8 h-8 rounded-full bg-stone-900 hover:bg-green-700 flex items-center justify-center text-white text-lg transition-colors">
                  +
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category