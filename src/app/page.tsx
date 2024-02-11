"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";

export default function Home() {
  const { user } = useAuth();
  return (
    <main>
      <h2>Template</h2>
      <p>username: {user.name}</p>
      <p>email: {user.email}</p>
      <Button> Button Shadcn</Button>
    </main>
  );
}
