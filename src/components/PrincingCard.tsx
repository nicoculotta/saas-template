"use client";
import { useAuth } from "@/context/authContext";
import { Check } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const PrincingCard = ({
  productId,
  name,
  features,
  price,
  currency,
  isFree = true,
}: {
  productId: string;
  name: string;
  features: { name: string }[];
  price: number;
  currency: string;
  isFree?: boolean;
}) => {
  const { user } = useAuth();
  const priceFormatted = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  });

  const handleSuscription = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        productId,
        userId: user.uid,
      }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
      <div className="grid gap-6">
        <h3 className="text-xl font-bold sm:text-2xl">{name}</h3>
        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {features &&
            features.map((item, i) => (
              <li key={item.name + i} className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                {item.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <div>
          <h4 className="text-6xl font-bold mb-2">
            {`${priceFormatted.format(price)}`}
          </h4>
          <p className="text-sm font-medium text-muted-foreground">
            suscripción mensual
          </p>
        </div>
        {isFree ? (
          <Button onClick={handleSuscription}>Suscribirme</Button>
        ) : (
          <Button disabled>Ya eres premium</Button>
        )}
      </div>
    </div>
  );
};

export default PrincingCard;
