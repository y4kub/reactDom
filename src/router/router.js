import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Root from "../pages/rootLayout";
export const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/about", element: <About /> },
]);
