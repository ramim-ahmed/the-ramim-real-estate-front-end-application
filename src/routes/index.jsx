import RootLayout from "@/layouts/RootLayout";
import About from "@/pages/About";
import Agent from "@/pages/Agent";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Property from "@/pages/Property";
import Service from "@/pages/Service";
import { createBrowserRouter } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/property",
        element: <Property />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/agent",
        element: <Agent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
