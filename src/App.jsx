import Category from "./components/Category";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/shop"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/offers",
        element: <div>This is our offer page</div>,
      },
      {
        path: "/recipes",
        element: <div>This is our recipes page</div>,
      },
      {
        path: "/about",
        element: <div>This is our about page</div>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

// export default function GroceryStore() {
//   return (
//     <div className="min-h-screen bg-stone-50 text-stone-900">
//       <Header />

//       <Hero />

//       <Category />
//     </div>
//   );
// }
