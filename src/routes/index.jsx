import RootLayout from "@/layouts/RootLayout";
import About from "@/pages/About";
import Agent from "@/pages/Agent";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Property from "@/pages/Property";
import Register from "@/pages/Register";
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
