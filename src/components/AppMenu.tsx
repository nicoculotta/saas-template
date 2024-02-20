"use client";
import { Castle, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import UserAvatar from "./UserAvatar";

const AppMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <header className="sticky top-0 z-0 flex w-full bg-white drop-shadow md:hidden">
        <div className="flex flex-grow items-center justify-between md:justify-end px-4 py-4 md:px-6 2xl:px-11">
          <div className="block md:hidden">
            <Button size={"icon"} variant="ghost" onClick={onClick}>
              <Menu />
            </Button>
          </div>
          <Link href="/" className="block md:hidden">
            <span className="flex gap-2 text-lg">
              <Castle /> Saas Template
            </span>
          </Link>
          <Link href="/profile">
            <UserAvatar />
          </Link>
        </div>
      </header>
    </>
  );
};

export default AppMenu;
