/*
 *
 * ThankYouPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, GET_QR_CODE_SUCCESS } from './constants';

export const initialState = fromJS({
  qrcode: '',
});

function thankYouPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_QR_CODE_SUCCESS:
      return state.set('qrcode', action.payload.data);
    default:
      return state;
  }
}

export default thankYouPageReducer;
