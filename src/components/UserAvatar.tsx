"use client";
import { useAuth } from "@/context/authContext";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserAvatar = ({ className }: { className?: string }) => {
  const { user } = useAuth();
  return (
    <Avatar className={className}>
      <AvatarImage src={user?.photoUrl} />
      <AvatarFallback className="border bg-primary/10">
        {user?.name?.substring(0, 2)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
