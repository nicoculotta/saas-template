// TODO: Still in progress. Figure out how to webhook works and save data into db

import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const POST = async (request: NextRequest) => {
  if (!stripeSecretKey) {
    throw new Error("Need Stripe Secret Key");
  }

  const stripe = new Stripe(stripeSecretKey);

  const stripeSignature = headers().get("stripe-signature") as string;
  const body = await request.text();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      stripeSignature,
      webhookSecret
    );
  } catch (err) {
    return NextResponse.error();
  }

  switch (event.type) {
    case "checkout.session.async_payment_failed":
      break;
    case "checkout.session.async_payment_succeeded":
      break;
    case "checkout.session.completed":
      //guardo en db
      /*       const checkoutSessionCompleted: any = event.data.object;
      const response1 = await db
        .insert(OrderTable)
        .values({
          userId: checkoutSessionCompleted?.metadata.userId,
          itemCount: 1,
          total: checkoutSessionCompleted?.amount_total as any,
          isComplete: true,
        })
        .returning(); */
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return new Response("RESPONSE EXECUTE", {
    status: 200,
  });
};
