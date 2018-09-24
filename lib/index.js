const Adyen = require('./adyen');

// ************************ EXAMPLE ****************************
//
//  const config = {
//      url: 'BASE_URL_FOR_ADYEN_API',
//      login: 'YOUR_WS_LOGIN',
//      password: 'YOUR_PASSWORD',
//      versions: {
//          payment: 'v30',
//          recurring: 'v25',
//          payouts: 'v30',
//      }
//  };
//
//  const AdyenNode = require('AdyenNode')(config);
//
//
//  // Authorise a card payment
//  const parameters = {
//      "card": {
//          "number": "4111111111111111",
//          "expiryMonth": "8",
//          "expiryYear": "2018",
//          "cvc": "737",
//          "holderName": "John Smith"
//      },
//      "amount": {
//          "value": 1500,
//          "currency": "EUR"
//      },
//      "reference": "YOUR_REFERENCE",
//      "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
//  }
//
//  AdyenNode.payment.authorise(parameters).then(response => { ... })
// ************************ EXAMPLE ENDS ****************************

/**
 * @description initiates Adyen client
 * @param { Object } config
 * @returns { Object }
 */
module.exports = function createClient(config) {
    return new Adyen(config);
};
