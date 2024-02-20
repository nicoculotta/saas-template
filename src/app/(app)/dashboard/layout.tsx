"use client";
import AppMenu from "@/components/AppMenu";
import AsideMenu from "@/components/AsideMenu";
import { useState } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen">
      <div className="flex">
        <AsideMenu isOpen={isMenuOpen} setIsMenuOpen={handleMenu} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <AppMenu onClick={handleMenu} />
          {children}
        </div>
      </div>
    </div>
  );
}
