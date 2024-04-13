import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_header.png";
export default function Nav() {
  const navRoutes = [
    {
      path: "/",
      level: "Home",
    },
    {
      path: "/contact",
      level: "Contact",
    },
  ];
  const navItem = navRoutes.map((route) => {
    return (
      <li key={route.level} className="font-medium">
        <NavLink to={route.path}>{route.level}</NavLink>
      </li>
    );
  });
  return (
    <div className=" bg-white border-b sticky top-0 z-10">
      <div className="navbar max-w-[1120px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <img src={logo} className="w-32" alt="the-ramim-real-estate" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-1">
            <Link
              to="login"
              className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base"
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <div className="border-r h-4"></div>
            <Link
              to="/register"
              className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base "
            >
              Register
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
