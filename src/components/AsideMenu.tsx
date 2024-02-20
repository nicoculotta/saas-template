"use client";
import { cn } from "@/lib/utils";
import { Castle } from "lucide-react";
import Link from "next/link";
import React from "react";
import UserAvatar from "./UserAvatar";

interface MenuLinkProps {
  text: string;
  href: string;
  active: boolean;
}

const MenuLink = ({ text, href, active }: MenuLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out",
        active ? "font-bold bg-background" : ""
      )}
    >
      <li>
        <span className={cn("text-md tracking-tight")}>{text}</span>
      </li>
    </Link>
  );
};

const AsideMenu = ({
  isOpen,
  setIsMenuOpen,
}: {
  isOpen: boolean;
  setIsMenuOpen: () => void;
}) => {
  const links = [
    {
      text: "Dashboard",
      href: "/",
      active: true,
    },
    {
      text: "Teams",
      href: "/",
      active: false,
    },
    {
      text: "Attendance",
      href: "/",
      active: false,
    },
  ];

  return (
    <>
      <aside
        className={cn(
          "absolute left-0 top-0 z-20 flex h-screen w-72 flex-col overflow-y-hidden duration-200 ease-out md:static md:translate-x-0  bg-secondary",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5 md:py-6">
          <Link href="/">
            <span className="flex gap-2 text-lg">
              <Castle /> Saas Template
            </span>
          </Link>
        </div>
        <nav className="mt-5 px-4 py-4 md:mt-9 md:px-6 h-full">
          <ul className="mb-6 flex flex-col gap-1.5">
            {links.map(({ text, href, active }, i) => (
              <MenuLink key={i} text={text} active={active} href={href} />
            ))}
          </ul>
        </nav>
        <Link href="/profile" className="flex gap-4 items-center px-6 py-6">
          <UserAvatar className="w-8 h-8" />
          <span>User Name</span>
        </Link>
      </aside>
      <div
        onClick={setIsMenuOpen}
        className={cn(
          isOpen ? "block" : "hidden",
          "absolute w-full h-full backdrop-blur-sm duration-200 ease-in z-10 bg-black/50"
        )}
      ></div>
    </>
  );
};

export default AsideMenu;