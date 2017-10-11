import React from "react";
import PropTypes from "prop-types";

const Button = ({
  supportedNetworks,
  supportedMethods,
  onClick,
  children,
  requestPayerName,
  requestPayerEmail,
  onSuccess,
  onError,
  currency,
  totalLabel,
  total,
  displayItems
}) => {
  const paymentMethods = [
    {
      supportedMethods: supportedMethods,
      supportedNetworks: supportedNetworks
    }
  ];

  const paymentDetails = {
    total: {
      label: totalLabel,
      amount: {
        currency: currency,
        value: total
      }
    },
    displayItems
  };

  const options = {
    requestPayerName,
    requestPayerEmail
  };

  const paymentRequest = new PaymentRequest(
    paymentMethods,
    paymentDetails,
    options
  );

  const showUI = () =>
    paymentRequest
      .show()
      .then(paymentResponse => {
        return paymentResponse.complete().then(() => {
          onSuccess(paymentResponse);
        });
      })
      .catch(err => {
        onError(err);
      });

  if (window.PaymentRequest) {
    return (
      <span role="button" onClick={showUI}>
        {children}
      </span>
    );
  } else {
    // No support. Proceed the old school way
  }
};

export default Button;

Button.propTypes = {
  /** Button label */
  children: PropTypes.string.isRequired,
  /** The size of the button */
  supportedMethods: PropTypes.array,
  methodData: PropTypes.object,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  requestPayerName: PropTypes.bool,
  requestPayerEmail: PropTypes.bool
};

Button.defaultProps = {
  supportedMethods: ["basic-card"],
  supportedNetworks: ["visa", "mastercard"],
  requestPayerName: false,
  requestPayerEmail: false,
  onSuccess: () => {},
  onError: () => {},
  currency: "USD",
  totalLabel: "",
  total: 0,
  /* eslint-disable no-console */
  onClick: event => {
    console.log("You have clicked me!", event.target);
  }
  /* eslint-enable no-console */
};
