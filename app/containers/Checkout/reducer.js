/*
 *
 * Checkout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TRANSACTION_CURRENCY,
  MODE_OF_PAYMENT,
} from './constants';

export const initialState = fromJS({
  transactionPayload: null,
  modeOfPayment: null,
});

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case TRANSACTION_CURRENCY:
      // console.log('REDUCER',action.payload);
      return state.set('transactionPayload', action.payload);
    case MODE_OF_PAYMENT:
      return state.set('modeOfPayment', action.payload);

    default:
      return state;
  }
}

export default checkoutReducer;
