import { HiOutlineEye } from "react-icons/hi2";
import { RiEyeOffLine } from "react-icons/ri";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialAuth from "./SocialAuth";
export default function LoginForm() {
  const { login, firebaseError, authUser } = useAuth();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = async () => {
    await login(email, password);
  };
  useEffect(() => {
    if (authUser) {
      navigate(location?.state ? location?.state : "/");
    }
  }, [authUser, navigate, location]);
  return (
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative shadow-md">
      <form onSubmit={handleLogin}>
        <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
          Login your account
        </h2>
        {firebaseError && (
          <div>
            <p className=" text-red-500 py-3">{firebaseError}</p>
          </div>
        )}
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {showPassword ? (
              <RiEyeOffLine
                className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <HiOutlineEye
                className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>
        <button
          disabled={email.length && password.length ? false : true}
          type="submit"
          className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-gray-400 w-full"
        >
          login
        </button>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Don&rsquo;t have an account ?{" "}
          <Link className=" text-primary font-medium" to="/register">
            register
          </Link>
        </p>
      </form>
      <div className="mt-2">
        <p className="text-center">Or, Login With</p>
        <SocialAuth />
      </div>
    </div>
  );
}
