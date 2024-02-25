"use client";
import AppMenu from "@/components/AppMenu";
import AsideMenu from "@/components/AsideMenu";
import { useAuth } from "@/context/authContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();
  const { user } = useAuth();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (!user) {
    return null;
  } else {
    return (
      <div className="min-h-screen">
        <div className="flex">
          <AsideMenu isOpen={isMenuOpen} setIsMenuOpen={handleMenu} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <AppMenu onClick={handleMenu} />
            <div className="flex-1 p-6 md:p-8 md:pt-6">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}
