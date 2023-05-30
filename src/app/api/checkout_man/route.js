

import { Readable } from 'stream';
import Stripe from 'stripe';
import { NextResponse, NextRequest } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {

  const priceId = 'price_1NBeNKCI8cvk3GBMi4RtSVD4';
  const url = 'http://localhost:3000'; 

  const chunks = [];
  for await (const chunk of request.body) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString('utf-8');
  const data = JSON.parse(body);


  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata: {
        teamname: data.teamname,
        emailadresse: data.emailadresse,
        kontaktperson: data.kontaktperson,
        gender: "m"
      },
    mode: 'payment',
    success_url: `${url}/success`,
    cancel_url: `${url}`,
    });

  return NextResponse.json(session.url);
}
