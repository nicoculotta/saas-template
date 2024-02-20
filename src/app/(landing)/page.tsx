import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Saas Template
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I build this Saas template for speed up development process. Next.js,
          Shadcn, Firebase, Stripe
        </p>
        <div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Entrar
          </Link>
        </div>
      </div>
    </section>
  );
}
