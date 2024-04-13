import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { HiOutlineEye } from "react-icons/hi2";
import { RiEyeOffLine } from "react-icons/ri";
import { passwordValidator } from "@/utils/passwordValidator";
import toast from "react-hot-toast";
export default function RegisterForm() {
  const { signup, firebaseError } = useAuth();
  const [isAgree, setIsAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const { username, email, password, confirmPassword, photo_url } = data;
    const validPassword = passwordValidator(password);
    if (!validPassword) {
      return toast.error(
        "password must be A Uppercase and A lowercase min length six!"
      );
    }
    if (password !== confirmPassword) {
      return toast.error("password and confirm password not match!");
    }
    if (isAgree) {
      signup(email, password, username, photo_url);
      reset();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full relative shadow-md"
    >
      <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
        Register your account
      </h2>
      {firebaseError && (
        <div>
          <p className=" text-red-500 py-3">{firebaseError}</p>
        </div>
      )}
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
        {errors.username && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>
      <div className="relative mb-4">
        <label htmlFor="photo_url" className="leading-7 text-sm text-gray-600">
          Photo URL
        </label>
        <input
          {...register("photo_url", { required: true })}
          type="url"
          id="photo_url"
          name="photo_url"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        {errors.photo_url && (
          <span className="text-red-600">This field is required</span>
        )}
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
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <div className="relative">
          <input
            {...register("password", { required: true })}
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
        {errors.password && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="confirmPassword"
          className="leading-7 text-sm text-gray-600"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            {...register("confirmPassword", { required: true })}
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {showConfirmPassword ? (
            <RiEyeOffLine
              className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
              onClick={() => setShowConfirmPassword(false)}
            />
          ) : (
            <HiOutlineEye
              className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
              onClick={() => setShowConfirmPassword(true)}
            />
          )}
        </div>
        {errors.confirmPassword && (
          <span className="text-red-600">This field is required</span>
        )}
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
        Already have an account ?
        <Link className=" text-primary font-medium" to="/login">
          login
        </Link>
      </p>
    </form>
  );
}
