"use client";
import { useAuth } from "@/context/authContext";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { LoginForm } from "./LoginForm";
import { buttonVariants } from "./ui/button";

const LoginPageWrapper = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Bienvenido</h1>
          <p className="text-sm text-muted-foreground">
            Pon tu email para entrar a tu cuenta
          </p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            ¿No tienes una cuenta? Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPageWrapper;
