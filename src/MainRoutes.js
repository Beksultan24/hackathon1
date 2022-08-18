import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MayBach from "./pages/MayBach";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminPage from "./pages/AdminPage";
import EditProductPage from "./pages/EditProductPage";
import PayPage from "./pages/PayPage";
import Amg from "./pages/Amg";
import PurchasePage from "./pages/PurchasePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 4,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 5,
    },
    {
      link: "/products/:id",
      element: <ProductDetails />,
      id: 6,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 7,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 8,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 9,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 10,
    },
    {
      link: "/maybach",
      element: <MayBach />,
      id: 11,
    },
    {
      link: "/paypage",
      element: <PayPage />,
      id: 12,
    },
    {
      link: "/amg",
      element: <Amg />,
      id: 13,
    },
    {
      link: "/purchase",
      element: <PurchasePage />,
      id: 14,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
