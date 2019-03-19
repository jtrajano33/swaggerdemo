/*
 *
 * Checkout actions
 *
 */

import {
  TRANSACTION_CURRENCY,
  CONFIRM_TRANSACTION,
  DEFAULT_ACTION,
  MODE_OF_PAYMENT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function transactionCurrency(currency, queuedId) {
  return {
    type: TRANSACTION_CURRENCY,
    payload: {
      currency,
      queuedId,
    },
  };
}

export function confirmTransaction() {
  return {
    type: CONFIRM_TRANSACTION,
  };
}

export function modeOfPayment(payload) {
  return {
    type: MODE_OF_PAYMENT,
    payload,
  };
}
