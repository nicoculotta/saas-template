import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Thanks for register",
};

export default function WelcomePage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Bienvenido</h1>
          <p className="text-sm text-muted-foreground">
            Te hemos enviado un email para que valides tu cuenta. Lo puedes
            hacer ahora o más tarde.
          </p>
          <Link href="/dashboard">
            <Button>Ir a la app</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
