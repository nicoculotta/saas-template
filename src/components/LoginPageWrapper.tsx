"use client";
import { useAuth } from "@/context/authContext";
import useEmailValidation from "@/hooks/useEmailValidation";
import { cn } from "@/lib/utils";
import { ChevronLeft, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { LoginForm } from "./LoginForm";
import { Button, buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LoginPageWrapper = () => {
  const router = useRouter();
  const { user, loading, recoverPassword } = useAuth();
  const { email, emailError, handleEmailChange, handleEmailValidation } =
    useEmailValidation();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="px-8 text-center text-sm text-muted-foreground"
            >
              ¿Olvidaste tu contraseña?
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Recuperar Contraseña</DialogTitle>
              <DialogDescription>
                Pon tu email para recuperar tu contraseña
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={loading}
                onChange={handleEmailChange}
                onBlur={handleEmailValidation}
                value={email}
              />
              {emailError && (
                <p className="text-destructive text-xs flex items-center gap-1 mb-2">
                  <XCircle size={16} /> {emailError}
                </p>
              )}
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() => recoverPassword(email)}
                  disabled={emailError.length > 1}
                >
                  Enviar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
