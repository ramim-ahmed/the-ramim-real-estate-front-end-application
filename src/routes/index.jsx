import RootLayout from "@/layouts/RootLayout";
import { fetchProperties, fetchPropertyDetailsById } from "@/lib/query";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import OurAgents from "@/pages/OurAgents";
import PropertyDetails from "@/pages/PropertyDetails";
import Register from "@/pages/Register";
import UpdateProfile from "@/pages/UpdateProfile";
import PrivateRoute from "@/privateRoute/PrivateRoute";
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
        path: "/agents",
        element: (
          <PrivateRoute>
            <OurAgents />
          </PrivateRoute>
        ),
      },
      {
        path: "/property-details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => fetchPropertyDetailsById(params?.id),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
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
