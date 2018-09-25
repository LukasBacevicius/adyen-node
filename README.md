# Adyen Node.js Library

Library provides access to the Adyen API with Node.js.

Library requires NodeJS 8 or later.

## API documentation 

See the [Adyen API explorer](https://docs.adyen.com/api-explorer) for endpoint documentation (parameters and etc)

## Instalation

Install the package with: 

    npm install [URL_TO_REPO] --save

## Usage

``` js
  const config = {
      url: 'BASE_URL_FOR_ADYEN_API',
      login: 'YOUR_WS_LOGIN',
      password: 'YOUR_PASSWORD',
      versions: {
          payment: 'v30', // Version of Adyen Payment Service of API 
          payouts: 'v30', // Version of Adyen Payouts Service of API
          recurring: 'v25', // Version of Adyen Recurring Service of API
      }
  };

  const AdyenNode = require('AdyenNode')(config);

  // EXAMPLE HOW TO MAKE A REQUEST TO THE ENDPOINT - Authorise a card payment
  const parameters = {
      "card": {
          "number": "4111111111111111",
          "expiryMonth": "8",
          "expiryYear": "2018",
          "cvc": "737",
          "holderName": "John Smith"
      },
      "amount": {
          "value": 1500,
          "currency": "EUR"
      },
      "reference": "YOUR_REFERENCE",
      "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  };

  AdyenNode.payment.authorise(parameters).then(response => { ... });
```

## Suported services and endpoints

For more information about each of endpoints (parameters, example response and etc.) see [Adyen API explorer](https://docs.adyen.com/api-explorer)

* payment:
    * authorise
    * authorise3d
    * capture
    * cancel
    * refund
    * cancelOrRefund
    * technicalCancel
    * adjustAuthorisation
*  payouts
    * storeDetailAndSubmitThirdParty
    * storeDetail
    * submitThirdParty
    * confirmThirdParty
    * declineThirdParty
    * payout
*  recurring
    * listRecurringDetails
    * disable


## Development

Install node_modules

```bash
$ npm i
```

Run tests

```bash
$ npm test
```