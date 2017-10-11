"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Button = function Button(_ref) {
  var supportedNetworks = _ref.supportedNetworks,
    supportedMethods = _ref.supportedMethods,
    onClick = _ref.onClick,
    children = _ref.children,
    requestPayerName = _ref.requestPayerName,
    requestPayerEmail = _ref.requestPayerEmail,
    onSuccess = _ref.onSuccess,
    onError = _ref.onError,
    currency = _ref.currency,
    totalLabel = _ref.totalLabel,
    total = _ref.total,
    displayItems = _ref.displayItems;

  var paymentMethods = [
    {
      supportedMethods: supportedMethods,
      supportedNetworks: supportedNetworks
    }
  ];

  var paymentDetails = {
    total: {
      label: totalLabel,
      amount: {
        currency: currency,
        value: total
      }
    },
    displayItems: displayItems
  };

  var options = {
    requestPayerName: requestPayerName,
    requestPayerEmail: requestPayerEmail
  };

  var paymentRequest = new PaymentRequest(
    paymentMethods,
    paymentDetails,
    options
  );

  var showUI = function showUI() {
    return paymentRequest
      .show()
      .then(function(paymentResponse) {
        return paymentResponse.complete().then(function() {
          onSuccess(paymentResponse);
        });
      })
      .catch(function(err) {
        onError(err);
      });
  };

  if (window.PaymentRequest) {
    return _react2.default.createElement(
      "span",
      { role: "button", onClick: showUI },
      children
    );
  } else {
    // No support. Proceed the old school way
  }
};

exports.default = Button;

Button.propTypes = {
  /** Button label */
  children: _propTypes2.default.string.isRequired,
  /** The size of the button */
  supportedMethods: _propTypes2.default.array,
  methodData: _propTypes2.default.object,
  /** Gets called when the user clicks on the button */
  onClick: _propTypes2.default.func,
  onSuccess: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  requestPayerName: _propTypes2.default.bool,
  requestPayerEmail: _propTypes2.default.bool
};

Button.defaultProps = {
  supportedMethods: ["basic-card"],
  supportedNetworks: ["visa", "mastercard"],
  requestPayerName: false,
  requestPayerEmail: false,
  onSuccess: function onSuccess() {},
  onError: function onError() {},
  currency: "USD",
  totalLabel: "",
  total: 0,
  /* eslint-disable no-console */
  onClick: function onClick(event) {
    console.log("You have clicked me!", event.target);
  }
  /* eslint-enable no-console */
};
