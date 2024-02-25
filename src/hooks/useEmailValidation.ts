import { useState, ChangeEvent, FocusEvent } from "react";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isValidEmail = (email: string) => emailRegex.test(email);

export default function useEmailValidation() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value.trim());
  }

  function handleEmailValidation(event: FocusEvent<HTMLInputElement>) {
    setEmailError(
      isValidEmail(event.target.value.trim())
        ? ""
        : "Debes colocar un email valido"
    );
  }

  return { email, emailError, handleEmailChange, handleEmailValidation };
}
