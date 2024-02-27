"use client";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LandingPage() {
  const { user } = useAuth();
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Saas Template
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I build this Saas template for speed up development process.
            Next.js, Shadcn, Firebase, Stripe
          </p>
          <div>
            {user ? (
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" })
                )}
              >
                Acceder como {user.name}
              </Link>
            ) : (
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Entrar
              </Link>
            )}
          </div>
        </div>
      </section>
      <section
        id="features"
        className="space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is created to speed up the development experience, and
            create saas products.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[140px] flex-col justify-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 14</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[140px] flex-col justify-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Firebase Auth</h3>
                <p className="text-sm">
                  Firebase Auth, login, register, recover and validate user.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[140px] flex-col justify-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Firestore</h3>
                <p className="text-sm text-muted-foreground">
                  Database from Firebase to handler users.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[140px] flex-col justify-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Shadcn UI</h3>
                <p className="text-sm text-muted-foreground">
                  UI components built using Radix UI and styled with Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[140px] flex-col justify-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Stripe</h3>
                <p className="text-sm text-muted-foreground">
                  Free and paid subscriptions using Stripe.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[140px] flex-col justify-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Another Feature</h3>
                <p className="text-sm text-muted-foreground">....</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
