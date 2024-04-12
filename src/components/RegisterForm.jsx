import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import useAuth from "@/hooks/useAuth";
export default function RegisterForm() {
  //   const { signup, firebaseError } = useAuth();
  const [isAgree, setIsAgree] = useState(false);
  //   const [passwordMatchError, setPasswordMatchError] = useState("");
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  //   const handleRegister = (data) => {
  //     const { username, email, password, confirmPassword, photo_url } = data;
  //     setPasswordMatchError("");
  //     if (password.length < 6) {
  //       return setPasswordMatchError("password must be six character!");
  //     }
  //     if (password !== confirmPassword) {
  //       return setPasswordMatchError("Password not match!");
  //     }
  //     if (isAgree) {
  //       signup(email, password, username, photo_url);
  //     }
  //   };
  return (
    <form
      onSubmit={handleSubmit()}
      className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full relative shadow-md"
    >
      <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
        Register your account
      </h2>
      {/* {passwordMatchError && (
        <div>
          <p className=" text-red-500 py-3">{passwordMatchError}</p>
        </div>
      )}
      {firebaseError && (
        <div>
          <p className=" text-red-500 py-3">{firebaseError}</p>
        </div>
      )} */}
      <div className="relative mb-4">
        <label htmlFor="username" className="leading-7 text-sm text-gray-600">
          Username
        </label>
        <input
          {...register("username", { required: true })}
          type="text"
          id="username"
          name="username"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="photo_url" className="leading-7 text-sm text-gray-600">
          Photo URL
        </label>
        <input
          {...register("photo_url")}
          type="url"
          id="photo_url"
          name="photo_url"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          {...register("email", { required: true })}
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
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          name="password"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="confirmPassword"
          className="leading-7 text-sm text-gray-600"
        >
          Confirm Password
        </label>
        <input
          {...register("confirmPassword", { required: true })}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 flex items-center space-x-3">
        <input
          onChange={(e) => setIsAgree(e.target.checked)}
          type="checkbox"
          id="isAggree"
          name="isAggree"
          className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="isAggree" className="leading-7 text-sm text-gray-600">
          Accept Terms And Conditions.
        </label>
      </div>
      <button
        disabled={isAgree ? false : true}
        type="submit"
        className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-slate-500"
      >
        register
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Already have an account ?{" "}
        <Link className=" text-primary font-medium" to="/login">
          login
        </Link>
      </p>
    </form>
  );
}
