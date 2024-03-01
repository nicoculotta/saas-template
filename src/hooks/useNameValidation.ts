import { useState, ChangeEvent, FocusEvent } from "react";

export default function useNameValidation() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleNameValidation(event: FocusEvent<HTMLInputElement>) {
    const isEmpty = event.target.value.trim().length === 0;
    setNameError(isEmpty ? "Debes indicar tu nombre" : "");
  }

  return { name, setName, nameError, handleNameChange, handleNameValidation };
}
