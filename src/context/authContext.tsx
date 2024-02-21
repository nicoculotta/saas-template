"use client";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface iUser {
  name: string;
  email: string;
}

interface useProvideAuthProps {
  user: iUser | null;
  loading: boolean;
  signUpEmailAndPassword: (email: string, password: string) => Promise<void>;
  signInEmailAndPassword: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<any>(null);

function useProvideAuth(): useProvideAuthProps {
  const [user, setUser] = useState<iUser | null>({
    name: "Nicolas",
    email: "nico@gmail.com",
  });
  const [loading, setLoading] = useState(true);

  const signUpEmailAndPassword = async (email: string, password: string) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser, {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInEmailAndPassword = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => console.log(user));

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signUpEmailAndPassword,
    signInEmailAndPassword,
    signOut,
  };
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
