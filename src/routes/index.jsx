import RootLayout from "@/layouts/RootLayout";
import { fetchProperties } from "@/lib/query";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import PropertyDetails from "@/pages/PropertyDetails";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => fetchProperties(),
      },
      {
        path: "/property-details/:id",
        element: <PropertyDetails />,
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
