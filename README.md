<p align="center">
  <img src="https://user-images.githubusercontent.com/1051509/31487062-5b8174ee-af31-11e7-868c-2949572e72d1.png"/>
  <h1>React Payment Request</h1>
</p>
<br/>
<br/>

[![Build Status](https://travis-ci.org/SaraVieira/react-payment-request.svg?branch=master)](https://travis-ci.org/SaraVieira/react-payment-request)
[![Greenkeeper badge](https://badges.greenkeeper.io/SaraVieira/react-payment-request.svg)](https://greenkeeper.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A React component wrapper for the awesome Payment Request API.

## Install

```
yarn add react-payment-request
```

```js
import PaymentRequest from 'react-payment-request'

const Pay = () =>
  <button>
    <PaymentRequest
      total="50"
      displayItems={[
        {
          label: "Promo code",
          amount: {
            currency: 'USD',
            value: 32,
          }
        },
        {
          label: "Taxes",
          amount: {
            currency: 'USD',
            value: 18
          }
        }
      ]}
      onSuccess={(data) => console.log(data)}>
      Push Me
     </PaymentRequest>
  <button>
```

## Resources

* [alligator.io](https://alligator.io/js/payment-request-api-intro/)
* [W3](https://www.w3.org/TR/payment-request/)
* [Google Developers](https://developers.google.com/web/fundamentals/payments/deep-dive-into-payment-request)


## Run

```
yarn

yarn start
```

License: MIT
Logo Edited from: payment by Eucalyp from the Noun Project
