export default function GroceryStore() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <nav className="sticky top-0 z-50 bg-stone-50 border-b border-stone-200 px-6 lg:px-16 h-16 flex items-center justify-between">
        <span className="text-xl font-semibold tracking-tight">
          Blur<span className="text-green-700">Mart</span>
        </span>
        <div className="hidden md:flex gap-8">
          {["Shop", "Offers", "Recipes", "About"].map((l) => (
            <a
              key={l}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            >
              {l}
            </a>
          ))}
        </div>
        <button className="flex items-center gap-2 bg-stone-900 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Basket
          <span className="bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
            3
          </span>
        </button>
      </nav>

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
            <span className="text-xs font-medium">
              24 new arrivals this week
            </span>
          </div>
        </div>
      </section>

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
          ].map((p) => (
            <div
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
