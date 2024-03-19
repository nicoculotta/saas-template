import React from "react";
import PrincingCard from "./PrincingCard";

interface iProduct {
  id: string;
  name: string;
  features: { name: string }[];
  unit_amount: number;
  currency: string;
}

const Princing = () => {
  const products = [
    {
      id: "price_1OriopB0cDYjZtIqKNWkY7pk",
      name: "Plan Premium",
      features: [
        {
          name: "Bueno aa",
        },
        {
          name: "Bonito",
        },
        {
          name: "Barato",
        },
      ],
      unit_amount: 100,
      currency: "EUR",
    },
  ];

  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-1 sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      {products.map((item) => (
        <PrincingCard
          key={item.id}
          name={item.name}
          features={item.features}
          price={item.unit_amount / 100}
          currency={item.currency}
          productId={item.id}
        />
      ))}
    </section>
  );
};

export default Princing;
