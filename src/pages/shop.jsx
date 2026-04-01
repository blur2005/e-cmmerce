import { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = ["All", "Fruits", "Vegetables", "Dairy & Eggs", "Bakery"];

const PRODUCTS = [
  {
    id: 0,
    name: "Heirloom Tomatoes",
    sub: "Farm fresh, per kg",
    price: 3.49,
    emoji: "🍅",
    tag: "organic",
    label: "Vegetables",
  },
  {
    id: 1,
    name: "Avocados",
    sub: "Ready to eat, pack of 4",
    price: 4.99,
    emoji: "🥑",
    tag: "new",
    label: "Fruits",
  },
  {
    id: 2,
    name: "Free Range Eggs",
    sub: "12 large eggs",
    price: 5.29,
    emoji: "🥚",
    tag: "organic",
    label: "Dairy & Eggs",
  },
  {
    id: 3,
    name: "Sourdough Loaf",
    sub: "Stone-baked, whole loaf",
    price: 4.25,
    emoji: "🍞",
    tag: null,
    label: "Bakery",
  },
  {
    id: 4,
    name: "Whole Milk",
    sub: "Organic, 2L bottle",
    price: 2.89,
    emoji: "🥛",
    tag: "organic",
    label: "Dairy & Eggs",
  },
  {
    id: 5,
    name: "Baby Spinach",
    sub: "Washed & ready, 250g",
    price: 2.49,
    emoji: "🥬",
    tag: "organic",
    label: "Vegetables",
  },
  {
    id: 6,
    name: "Blueberries",
    sub: "Scottish grown, 300g",
    price: 3.75,
    emoji: "🫐",
    tag: "sale",
    label: "Fruits",
  },
  {
    id: 7,
    name: "Greek Yoghurt",
    sub: "Full-fat, 500g tub",
    price: 2.99,
    emoji: "🫙",
    tag: null,
    label: "Dairy & Eggs",
  },
  {
    id: 8,
    name: "Broccoli",
    sub: "Tenderstem, per head",
    price: 1.89,
    emoji: "🥦",
    tag: "organic",
    label: "Vegetables",
  },
  {
    id: 9,
    name: "Croissants",
    sub: "Butter, pack of 4",
    price: 3.5,
    emoji: "🥐",
    tag: "new",
    label: "Bakery",
  },
  {
    id: 10,
    name: "Lemons",
    sub: "Unwaxed, bag of 6",
    price: 1.99,
    emoji: "🍋",
    tag: null,
    label: "Fruits",
  },
  {
    id: 11,
    name: "Cheddar Cheese",
    sub: "Mature, 400g block",
    price: 4.49,
    emoji: "🧀",
    tag: null,
    label: "Dairy & Eggs",
  },
  {
    id: 12,
    name: "Bananas",
    sub: "Fairtrade, per bunch",
    price: 1.29,
    emoji: "🍌",
    tag: null,
    label: "Fruits",
  },
  {
    id: 13,
    name: "Carrots",
    sub: "Organic, 500g bag",
    price: 1.49,
    emoji: "🥕",
    tag: "organic",
    label: "Vegetables",
  },
  {
    id: 14,
    name: "Bagels",
    sub: "Sesame, pack of 4",
    price: 2.75,
    emoji: "🥯",
    tag: "new",
    label: "Bakery",
  },
  {
    id: 15,
    name: "Butter",
    sub: "Salted, 250g block",
    price: 2.49,
    emoji: "🧈",
    tag: null,
    label: "Dairy & Eggs",
  },
];

const Shop = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(
    (p) => active === "All" || p.label === active,
  ).filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-widest uppercase text-green-700 font-medium mb-2">
            Our products
          </p>
          <h1 className="text-4xl font-semibold">All Products</h1>
          <p className="text-sm text-stone-400 mt-2">{filtered.length} items</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-stone-200 rounded-full px-5 py-2 text-sm bg-white focus:outline-none focus:border-green-600 w-full sm:w-72"
          />
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                  active === cat
                    ? "bg-stone-900 text-white border-stone-900"
                    : "border-stone-300 text-stone-500 hover:border-green-600 hover:text-green-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-stone-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-sm">No products found for "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p) => (
              <Link
                to={`/product/${p.id}`}
                key={p.id}
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
                  <span className="text-xs text-stone-400 font-light">
                    {p.label}
                  </span>
                  <p className="text-sm font-medium text-stone-900 mt-0.5">
                    {p.name}
                  </p>
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
        )}
      </div>
    </div>
  );
};

export default Shop;
