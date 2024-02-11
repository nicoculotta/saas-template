"use client";
import { useContext, createContext, ReactNode, useState } from "react";

interface iUser {
  name: string;
  email: string;
}

interface useProvideAuthProps {
  user: iUser | null;
}

const AuthContext = createContext<any>(null);

function useProvideAuth(): useProvideAuthProps {
  const [user, setUser] = useState<iUser | null>({
    name: "Nicolas",
    email: "nico@gmail.com",
  });

  return {
    user,
  };
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
