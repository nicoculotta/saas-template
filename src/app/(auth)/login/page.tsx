import { Metadata } from "next";
import LoginPageWrapper from "@/components/LoginPageWrapper";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return <LoginPageWrapper />;
}
