import  { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = ["All", "Fruits", "Vegetables", "Dairy & Eggs", "Bakery"];

const PRODUCTS = [
  {
    name: "Heirloom Tomatoes",
    sub: "Farm fresh, per kg",
    price: 3.49,
    emoji: "🍅",
    tag: "organic",
    label: "Vegetables",
  },
  {
    name: "Avocados",
    sub: "Ready to eat, pack of 4",
    price: 4.99,
    emoji: "🥑",
    tag: "new",
    label: "Fruits",
  },
  {
    name: "Free Range Eggs",
    sub: "12 large eggs",
    price: 5.29,
    emoji: "🥚",
    tag: "organic",
    label: "Dairy & Eggs",
  },
  {
    name: "Sourdough Loaf",
    sub: "Stone-baked, whole loaf",
    price: 4.25,
    emoji: "🍞",
    tag: null,
    label: "Bakery",
  },
  {
    name: "Whole Milk",
    sub: "Organic, 2L bottle",
    price: 2.89,
    emoji: "🥛",
    tag: "organic",
    label: "Dairy & Eggs",
  },
  {
    name: "Baby Spinach",
    sub: "Washed & ready, 250g",
    price: 2.49,
    emoji: "🥬",
    tag: "organic",
    label: "Vegetables",
  },
  {
    name: "Blueberries",
    sub: "Scottish grown, 300g",
    price: 3.75,
    emoji: "🫐",
    tag: "sale",
    label: "Fruits",
  },
  {
    name: "Greek Yoghurt",
    sub: "Full-fat, 500g tub",
    price: 2.99,
    emoji: "🫙",
    tag: null,
    label: "Dairy & Eggs",
  },
  {
    name: "Broccoli",
    sub: "Tenderstem, per head",
    price: 1.89,
    emoji: "🥦",
    tag: "organic",
    label: "Vegetables",
  },
  {
    name: "Croissants",
    sub: "Butter, pack of 4",
    price: 3.5,
    emoji: "🥐",
    tag: "new",
    label: "Bakery",
  },
  {
    name: "Lemons",
    sub: "Unwaxed, bag of 6",
    price: 1.99,
    emoji: "🍋",
    tag: null,
    label: "Fruits",
  },
  {
    name: "Cheddar Cheese",
    sub: "Mature, 400g block",
    price: 4.49,
    emoji: "🧀",
    tag: null,
    label: "Dairy & Eggs",
  },
];


const Category = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.label === active);

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-16 pb-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl font-semibold">Browse the market</h2>
        <Link
          to="/shop"
          className="text-sm text-stone-500 underline underline-offset-4 hover:text-green-700 transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="flex gap-2 flex-wrap mb-9">
        {CATEGORIES.map((cate) => (
          <button
            key={cate}
            onClick={() => setActive(cate)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
              active === cate
                ? "bg-stone-900 text-white border-stone-900"
                : "border-stone-300 text-stone-500 hover:border-green-600 hover:text-green-700"
            }`}
          >
            {cate}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p, i) => (
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
};

export default Category;
