/*
 *
 * ThankYouPage actions
 *
 */

import { DEFAULT_ACTION, GET_QR_CODE, GET_QR_CODE_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getQrCode(payload) {
  return {
    type: GET_QR_CODE,
    payload,
  };
}

export function getQrCodeSuccess(payload) {
  return {
    type: GET_QR_CODE_SUCCESS,
    payload,
  };
}
