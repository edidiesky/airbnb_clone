// This is your test secret API key.
import dotenv from "dotenv";
dotenv.config();
import stripe from "stripe";
const stripeClient = stripe(process.env.STRIPE_KEY);
// console.log(process.env.STRIPE_KEY);
// console.log(process.env.PRICE_ID);

const stripeCheckout = async (req, res) => {
  const session = await stripeClient.checkout.sessions.create({
    line_items: req.body.map((items) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: items.title,
            images: items.image,
          },
          unit_amount: items.price,
        },
        quantity: items.quantity,
      };
    }),
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `http://localhost:5173/profile`,
    cancel_url: `http://localhost:5173/order`,
  });

  res.json({ url: session.url });
  // console.log(req.body);
};

export default stripeCheckout;
