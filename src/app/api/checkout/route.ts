import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const POST = async (request: NextRequest) => {
  const { productId, userId } = await request.json();

  if (!stripeSecretKey) {
    throw new Error("Need Stripe Secret Key");
  }

  const stripe = new Stripe(stripeSecretKey);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: productId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_HOST}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_HOST}`,
    client_reference_id: userId,
  });

  return NextResponse.json({ url: session.url });
};
