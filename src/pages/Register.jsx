// import Loader from "@/components/Loader";
import RegisterForm from "@/components/RegisterForm";
// import useAuth from "@/hooks/useAuth";

export default function Register() {
  //   const { loading } = useAuth();

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-6 mx-auto flex">
              {/* {loading ? (
                <div className="w-full min-h-screen flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <RegisterForm />
              )} */}
              <RegisterForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
