import Loader from "@/components/Loader";
import LoginForm from "@/components/LoginForm";
import useAuth from "@/hooks/useAuth";
import { Helmet } from "react-helmet-async";
export default function Login() {
  const { loading } = useAuth();
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="bg-[#F3F3F3] min-h-[calc(100vh-70px)]">
        <div className="max-w-6xl mx-auto">
          <div className="pt-20">
            <section className="text-gray-600 body-font relative">
              <div className="px-5 py-6 flex justify-center ">
                {loading ? (
                  <div className="flex justify-center mt-20">
                    <Loader />
                  </div>
                ) : (
                  <LoginForm />
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
