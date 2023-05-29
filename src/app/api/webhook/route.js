import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15"
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;





export async function POST(request, response) {

    const signature = await request.headers["stripe-signature"]
    const text = await request.text();
    
    console.log("sig: ", signature)
    console.log(text)

  let event;

  try {
    event = stripe.webhooks.constructEvent(text, signature, webhookSecret);

  } catch (error) {
    console.error('Webhook error:', error.message);
    return NextResponse.error();
  }

  // Handle the event based on its type
  if (event.type === 'checkout.session.completed') {
    // Handle checkout session completed event
    // ...
    console.log("CHECK")
  } else {
    // Handle payment intent created event
    // ...
    console.log("LOLZZ")
  }

  return NextResponse.json('Webhook received');
}
