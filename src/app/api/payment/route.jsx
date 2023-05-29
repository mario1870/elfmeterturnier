



import Stripe from 'stripe';
import { NextResponse, NextRequest } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {

  const priceId = 'price_1NBeNKCI8cvk3GBMi4RtSVD4';

  const url = 'http://localhost:3000'; //process.env.WEBAPP_URL;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${url}/success`,
    cancel_url: `${url}`,
    });

  return NextResponse.json(session.url);
}
