class StripeSignatureVerificationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'StripeSignatureVerificationError';
    }
  }
  