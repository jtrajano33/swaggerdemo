import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkout state domain
 */

const selectCheckoutDomain = state => state.get('checkout', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Checkout
 */

const makeSelectCheckout = () =>
  createSelector(selectCheckoutDomain, substate => substate.toJS());

const makeSelectTransactionPut = () =>
  createSelector(selectCheckoutDomain, substate =>
    substate.get('transactionPayload'),
  );

const makeSelectModeOfPayment = () =>
  createSelector(selectCheckoutDomain, substate =>
    substate.get('modeOfPayment'),
  );

export default makeSelectCheckout;
export {
  selectCheckoutDomain,
  makeSelectTransactionPut,
  makeSelectModeOfPayment,
};
