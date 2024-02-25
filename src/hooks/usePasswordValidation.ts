import { useState, ChangeEvent, FocusEvent } from "react";

export default function usePasswordValidation() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value.trim());
  }

  function handlePasswordValidation(event: FocusEvent<HTMLInputElement>) {
    const isEmpty = event.target.value.trim().length === 0;
    setPasswordError(isEmpty ? "Debes indicar tu password" : "");
  }

  return {
    password,
    passwordError,
    handlePasswordChange,
    handlePasswordValidation,
  };
}
