import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
export default function SocialAuth() {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const handleGoogleAuth = () => {
    signInWithGoogle();
  };
  const handleGithubAuth = () => {
    signInWithGithub();
  };
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={handleGoogleAuth}
        className="border border-primary w-full text-primary font-medium py-1 px-4 rounded-3xl mt-2 flex justify-between items-center"
      >
        <FcGoogle className="h-6 w-6" />
        <p>Google</p>
      </button>
      <button
        onClick={handleGithubAuth}
        className="border border-primary w-full text-primary font-medium py-1 px-4 rounded-3xl mt-2 flex justify-between items-center"
      >
        <FaGithub className="h-6 w-6" />
        <p>Github</p>
      </button>
    </div>
  );
}
