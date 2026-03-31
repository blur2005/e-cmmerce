import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-stone-50 border-b border-stone-200 px-6 lg:px-16 h-16 flex items-center justify-between">
      <Link to={"/"} className="text-xl font-semibold tracking-tight">
        Blur<span className="text-green-700">Mart</span>
      </Link>
      <div className="hidden md:flex gap-8">
        {["Shop", "Offers", "Recipes", "About"].map((l) => (
          <Link
          to={l.toLocaleLowerCase()}
            key={l}
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors cursor-grab"
          >
            {l}
          </Link>
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
  );
};

export default Header;
