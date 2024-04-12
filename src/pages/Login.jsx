// import Loader from "@/components/Loader";

import LoginForm from "@/components/LoginForm";

// import useAuth from "@/hooks/useAuth";
export default function Login() {
  //   const { loading } = useAuth();
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-6 mx-auto flex ">
              {/* {loading ? (
                <div className="w-full min-h-screen flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <LoginForm />
              )} */}
              <LoginForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
