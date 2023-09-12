import React from "react"
import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../pages/Layout.tsx";
import Home from "../presentation/screen/Home.jsx";
import Products from "../presentation/screen/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <LayoutPage Component={Home} />,
  },
  {
    path: "/product",
    element: <LayoutPage Component={Products} />,
  },
]);



export default router;