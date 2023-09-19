import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../pages/Layout.jsx";
import Home from "../presentation/screen/Home.jsx";
import Products from "../presentation/screen/Products.jsx";
import Qommunity from "../presentation/screen/Qommunity.jsx";
import AboutUs from "../presentation/screen/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage Component={Home} />,
  },
  {
    path: "/home",
    element: <LayoutPage Component={Home} />,
  },
  {
    path: "/product",
    element: <LayoutPage Component={Products} />,
  },
  {
    path: "/qo-ommunity",
    element: <LayoutPage Component={Qommunity} />,
  },
  {
    path: "/about-us",
    element: <LayoutPage Component={AboutUs} />,
  },
]);



export default router;