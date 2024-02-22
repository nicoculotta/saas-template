"use client";
import { auth } from "@/lib/firebase";
import { createUser } from "@/lib/firestore.utils";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface iUser {
  uid: string;
  email: string;
  name: string;
  provider: string;
  photoUrl: string;
  plan: "free" | "basic" | "confort" | "full";
  admin: boolean;
  emailVerified: boolean;
  createdAt: string;
}

interface useProvideAuthProps {
  user: iUser | null;
  loading: boolean;
  registerWithEmailAndPassword: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<any>(null);

function useProvideAuth(): useProvideAuthProps {
  const router = useRouter();
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);

  const handleUser = (rawUser: any) => {
    console.log({ rawUser });

    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setLoading(false);
      setUser(user);
    } else {
      setLoading(false);
      setUser(null);
      return false;
    }
  };

  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
    name: string
  ) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      handleUser(userCredential.user);
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser, {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error al registrar usuario:", error);
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    return auth
      .signOut()
      .then(() => handleUser(false))
      .then(() => router.push("/"));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logOut,
  };
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const formatUser = (user: any): iUser => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    plan: "free",
    admin: false,
    emailVerified: user.emailVerified,
    createdAt: user.reloadUserInfo.createdAt,
  };
};
