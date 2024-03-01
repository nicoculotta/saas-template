"use client";
import { useAuth } from "@/context/authContext";
import React from "react";

const DashboardPage = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">
        Bienvenido, {user.name}
      </h2>
    </div>
  );
};

export default DashboardPage;
