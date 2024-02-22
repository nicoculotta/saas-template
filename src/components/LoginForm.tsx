"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Brain, Loader } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useAuth } from "@/context/authContext";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const { loginWithEmailAndPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    loginWithEmailAndPassword(email, password);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
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
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Contraseña
            </Label>
            <Input
              id="password"
              placeholder="******"
              type="password"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading} type="submit">
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Entrar
          </Button>
          <p className="text-muted-foreground text-xs text-center">
            Te enviaremos un email para que puedas acceder
          </p>
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
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Loader className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Brain className="mr-2 h-4 w-4" />
        )}{" "}
        Cuenta de Google
      </Button>
    </div>
  );
}
