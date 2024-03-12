import { Castle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <span className="flex gap-2 text-lg">
        <Castle /> Saas Template
      </span>
    </Link>
  );
};

export default Logo;
