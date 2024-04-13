import Loader from "@/components/Loader";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
export default function UpdateProfile() {
  const [editable, setEditable] = useState(false);
  const { authUser, updateUserProfile, loading } = useAuth();
  const { displayName, photoURL, email } = authUser || {};
  const { register, handleSubmit } = useForm();
  const handleUpdateProfile = async (data) => {
    const { username, photo_url } = data;
    await updateUserProfile(username, photo_url);
    setEditable(false);
  };
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-130px)] flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="bg-[#F6F6FE] min-h-screen">
      <div className="max-w-[1120px] mx-auto pt-16 ">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 bg-white flex justify-center p-6 rounded-xl">
            <div className="flex flex-col items-center">
              <img
                className="w-32 h-32 object-cover rounded-full border-4 p-1 border-blue-600"
                src={photoURL}
                alt=""
              />
              <div>
                <h1 className="text-2xl text-primary font-medium mt-3 text-center">
                  {displayName}
                </h1>
                <p className="text-center">{email || "N/A"}</p>
              </div>
            </div>
          </div>
          <div className="col-span-8 bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center border-b py-2">
              <h1 className="text-xl font-medium">My Profile</h1>
              {editable ? (
                <p className="font-medium">Editable Field</p>
              ) : (
                <button onClick={() => setEditable(true)}>
                  <FiEdit className="w-6 h-6 text-blue-600" />
                </button>
              )}
            </div>
            <div className="mt-3">
              <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className="relative mb-4">
                  <label
                    htmlFor="username"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Username
                  </label>
                  <input
                    {...register("username")}
                    defaultValue={displayName || "N/A"}
                    type="text"
                    readOnly={editable ? false : true}
                    id="username"
                    name="username"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="photo_url"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Photo URL
                  </label>
                  <input
                    {...register("photo_url")}
                    defaultValue={photoURL || "N/A"}
                    type="text"
                    readOnly={editable ? false : true}
                    id="photo_url"
                    name="photo_url"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    defaultValue={email || "N/A"}
                    type="email"
                    readOnly
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <button
                  disabled={editable ? false : true}
                  type="submit"
                  className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-slate-500 w-full"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
