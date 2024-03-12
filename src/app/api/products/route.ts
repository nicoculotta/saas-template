import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const GET = async () => {
  if (!stripeSecretKey) {
    throw new Error("Need Stripe Secret Key");
  }

  const stripe = new Stripe(stripeSecretKey);
  const prices = await stripe.prices.list();
  const products = await stripe.products.list();

  const response = products.data.map((product, index) => ({
    ...product,
    ...prices.data[index],
  }));

  return NextResponse.json(response);
};
