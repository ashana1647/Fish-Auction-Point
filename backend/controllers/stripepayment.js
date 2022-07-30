const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const uuid = require('uuid/v4');

exports.makePayment = async (req, res) => {
    const { products, token } = req.body;
    console.log("Products: ",products);

    let total = 0;
    products.map(p => {
        total += p.price;
    });
    console.log("Total: ",total);

    const idempotencyKey = uuid(); //this is responsible for making a payment unique so that we are not charging the user again

    return stripe.customers.create({ //creating a customer
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({//charging a customer
            amount: total * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `${products[0].name}`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
            }
        }, { idempotencyKey });
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));
}