import LandingPage from "../pages/LandingPage";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";

const routeList = [
  {
    name: "Landing Page",
    path: "/",
    exact: true,
    component: <LandingPage />,
    permission: false,
  },
  {
    name: "Product Page",
    path: "/product_page",
    exact: true,
    component: <ProductPage />,
    permission: false,
  },
  {
    name: "Cart Page",
    path: "/my-cart",
    exact: true,
    component: Cart,
    permission: true,
  },
];

export default routeList;
