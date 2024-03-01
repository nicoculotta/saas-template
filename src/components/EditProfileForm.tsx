"use client";
import { useAuth } from "@/context/authContext";
import useNameValidation from "@/hooks/useNameValidation";
import { auth } from "@/lib/firebase";
import { createUser, getUser, updateUser } from "@/lib/firestore.utils";
import { updateProfile } from "firebase/auth";
import { Loader, XCircle } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "./ui/use-toast";

const EditProfileForm = () => {
  const { loading, user, setUser } = useAuth();
  const { name, setName, nameError, handleNameChange, handleNameValidation } =
    useNameValidation();

  useEffect(() => {
    setName(user.name);
  }, []);

  const updateUserInfo = async () => {
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, { displayName: name });
        await updateUser(user.uid, { name });
        await getUser(user.uid).then((data) => setUser(data));
        toast({
          title: "Información actualizada",
          description: "Actualización con éxito",
        });
      } catch (error) {
        console.log("error al guardar tus datos");
        toast({
          title: "Ha ocurrido un error",
          description: "Intentelo nuevamente",
        });
      }
    }
  };

  return (
    <form className="my-8 max-w-md">
      <div className="grid gap-2">
        <Label>Nombre</Label>
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
        <Button
          className="md:w-24"
          type="button"
          disabled={loading}
          onClick={updateUserInfo}
        >
          {loading ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Guardar"
          )}
        </Button>
      </div>
    </form>
  );
};

export default EditProfileForm;
