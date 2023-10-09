var stripe = Stripe('YOUR-PUBLISHABLE-KEY');
var elements = stripe.elements();
var card = elements.create('card');
card.mount('#card-element');

const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('YOUR-SECRET-KEY');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-response', async (req, res) => {
    let aiReason = req.body.ai_reason;

    // TODO: Store the user's reason in your database

    // Process payment
    let {status} = await stripe.charges.create({
        amount: 136.63,  // e.g., $10.00, but you'll specify the amount
        currency: 'cad',
        description: 'Payment for AI service',
        source: req.body.stripeToken
    });

    res.json({status});
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

