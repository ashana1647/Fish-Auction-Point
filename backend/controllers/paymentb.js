// const braintree = require("braintree");

// var gateway = braintree.connect({
//   environment: braintree.Environment.Sandbox,
//   merchantId: "useYourMerchantId",
//   publicKey: "useYourPublicKey",
//   privateKey: "useYourPrivateKey"
// });

const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "d5h5g6tspv73wmhx",
  publicKey: "v3smry99qm65q7h8",
  privateKey: "c1d156fdb70d80bc729eaf813fa9be5e"
});

exports.getToken=(req,res)=>{
    gateway.clientToken.generate({}, function(err, response) {
        if(err){
            res.status(500).send(err);
        }else{
            res.send(response);
        }
      });
};

exports.processPayment=()=>{
    let nonceFromTheClient=req.body.paymentMethodNonce

    let amountFromTheClient=req.body.amount
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, (err, result) => {
          if(err){
                res.status(500).json(error);
          }else{
              res.json(result);
          }
      });
}