"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Brain, Loader, XCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useAuth } from "@/context/authContext";
import useEmailValidation from "@/hooks/useEmailValidation";
import usePasswordValidation from "@/hooks/usePasswordValidation";
import useNameValidation from "@/hooks/useNameValidation";
import Image from "next/image";
import googleIcon from "../assets/icon-google.svg";

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterForm({ className, ...props }: RegisterFormProps) {
  const {
    registerWithEmailAndPassword,
    loading,
    formRegisterError,
    signInWithGoogle,
  } = useAuth();
  const { name, nameError, handleNameChange, handleNameValidation } =
    useNameValidation();
  const { email, emailError, handleEmailChange, handleEmailValidation } =
    useEmailValidation();
  const {
    password,
    passwordError,
    handlePasswordChange,
    handlePasswordValidation,
  } = usePasswordValidation();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    registerWithEmailAndPassword(email, password, name);
  }

  function areFormFieldsValid() {
    return nameError === "" && emailError === "" && passwordError === ""
      ? true
      : false;
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Nombre y Apellido
            </Label>
            <Input
              id="name"
              placeholder="Nombre Completo"
              type="text"
              disabled={loading}
              onChange={handleNameChange}
              onBlur={handleNameValidation}
              value={name}
            />
            {nameError && (
              <p className="text-destructive text-xs flex items-center gap-1 mb-2">
                <XCircle size={16} /> {nameError}
              </p>
            )}
          </div>
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
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Contraseña
            </Label>
            <Input
              id="password"
              placeholder="******"
              type="password"
              disabled={loading}
              onChange={handlePasswordChange}
              onBlur={handlePasswordValidation}
            />
            {passwordError && (
              <p className="text-destructive text-xs flex items-center gap-1 mb -2">
                <XCircle size={16} /> {passwordError}
              </p>
            )}
          </div>
          <Button disabled={!areFormFieldsValid() || loading} type="submit">
            {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Entrar
          </Button>
          {formRegisterError && (
            <p className="text-destructive text-xs flex items-center gap-1 mt-1">
              <XCircle size={16} /> {formRegisterError}
            </p>
          )}
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            O acceder con
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={loading}
        onClick={() => signInWithGoogle()}
      >
        {loading ? (
          <Loader className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Image
            className="mr-2"
            src={googleIcon}
            width={20}
            height={20}
            alt="google icon"
          />
        )}{" "}
        Cuenta de Google
      </Button>
    </div>
  );
}
