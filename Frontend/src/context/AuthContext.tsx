import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
  signInWithPopup,
} from "firebase/auth";

type authStateType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const authState = createContext<authStateType>({
  user: null,
  loading: false,
  signUp: async () => {},
  signIn: async () => {},
  signWithGoogle: async () => {},
  signOut: async () => {},
});

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const signWithGoogle = async () => {
    console.log("signUpWithGoogle");
    setLoading(true);
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await auth.signOut();
      // setUser(null);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        console.log(user);
      } else {
        setUser(null);
        console.log("no user");
        setLoading(false);
      }
    });
  }, []);

  return (
    <authState.Provider
      value={{
        user,
        loading,
        signUp,
        signIn,
        signWithGoogle,
        signOut,
      }}
    >
      {children}
    </authState.Provider>
  );
}

export default AuthProvider;
