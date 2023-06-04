// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys

const dotenv = require("dotenv");
dotenv.config();

//????????

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

console.log(stripePublishableKey);
console.log(stripeSecretKey);
console.log(stripeWebhookSecret);


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;


// Using Express
const app = require('express')();
  
// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser');

//import Prisma Client
const { PrismaClient } = require('@prisma/client');

const fulfillOrder = async (metadata) => {

    //destruct the object metadata
    const {emailadresse, kontaktperson, teamname, gender} = metadata

    // insert into prisma
    const prisma = new PrismaClient()

    try {
    // Team in der Datenbank erstellen
    const createdTeam = await prisma.teams.create({
        data: {
          teamname: teamname,
          email: emailadresse,
          kontaktperson: kontaktperson,
          gender: gender,
        },
      });
  
      console.log("FINE!")

    } catch (error) {
      console.error(error);
      console.log("ERR")
    }
}

app.post('/api/webhook', bodyParser.raw({type: 'application/json'}), async (request, response) => {
  const payload = request.body;
  const sig = request.headers['stripe-signature'];

  console.log(payload)

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }



  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {

    console.log("NICE SESSION COMPLETED 'LULZ")
    // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ['line_items'],
      }
    );
    const lineItems = sessionWithLineItems.line_items;
    const metadata = sessionWithLineItems.metadata;

    console.log(lineItems)

    // Fulfill the purchase...
    fulfillOrder(metadata);
  }

  response.status(200).end();
});

app.listen(8000, () => console.log('Running on port 8000'));
