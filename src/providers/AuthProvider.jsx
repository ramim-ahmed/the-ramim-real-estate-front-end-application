/* eslint-disable react/prop-types */
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../firebase";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [firebaseError, setFirebaseError] = useState("");
  // signup
  const signup = async (email, password, username, photo_url = "") => {
    const auth = getAuth();
    setLoading(true);
    setFirebaseError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: photo_url,
      });
      const user = auth.currentUser;
      setAuthUser({
        ...user,
      });
      setLoading(false);
      toast.success("Account created successfully!");
    } catch (error) {
      setLoading(false);
      setFirebaseError(error.message);
      toast.error(error?.message);
    }
  };
  // login
  const login = async (email, password) => {
    const auth = getAuth();
    setLoading(true);
    setFirebaseError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      toast.success("Login successfully!");
    } catch (error) {
      setLoading(false);
      setFirebaseError(error.message);
      toast.error(error?.message);
    }
  };
  // logout
  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };
  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authValue = {
    signup,
    login,
    logout,
    authUser,
    loading,
    firebaseError,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
