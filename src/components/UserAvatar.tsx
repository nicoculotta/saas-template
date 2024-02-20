import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserAvatar = ({ className }: { className?: string }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>NC</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
