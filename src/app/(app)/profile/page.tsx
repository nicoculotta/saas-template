import EditProfileForm from "@/components/EditProfileForm";
import { Button } from "@/components/ui/button";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <section>
        <h2 className="text-2xl font-bold tracking-tight">Mi Cuenta</h2>
        <p className="text-muted-foreground">
          Administra los datos de tu cuenta
        </p>
        <div className="bg-border h-[1px] w-full my-6"></div>
      </section>
      <section className="max-w-md">
        <div>
          <h3 className="text-lg font-medium">Perfil</h3>
          <p className="text-sm text-muted-foreground">
            Aquí puedes editar tu perfil
          </p>
          <EditProfileForm />
        </div>
        <div>
          <h3 className="text-lg font-medium">Suscripción</h3>
          <p className="text-sm text-muted-foreground">
            Aquí puedes administrar tu suscripción.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center rounded-md border p-4 my-4 space-y-3 sm:space-y-0">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Plan Free</p>
              <p className="text-sm text-muted-foreground">
                Tienes el plan gratuito
              </p>
            </div>
            <Button>Manejar subscription</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
