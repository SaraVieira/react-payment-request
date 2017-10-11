class PaymentRequestMock {
  show() {
    Promise.resolve();
  }
}

global.PaymentRequest = PaymentRequestMock; // eslint-disable-line
