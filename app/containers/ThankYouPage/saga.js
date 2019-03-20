import { takeEvery, call, put } from 'redux-saga/effects';
import { post } from 'utils/api';
import { toast } from 'react-toastify';
import { GET_QR_CODE } from './constants';
import { getQrCodeSuccess } from './actions';

function* getQRCode(qrcode) {
  const payload = {
    key: qrcode.payload,
  };

  try {
    const data = yield call(
      post,
      'https://dev-api.intimate.partners/wallet/qrcode',
      payload,
    );
    yield put(getQrCodeSuccess(data));
  } catch (e) {
    toast.error('Error');
  }
}

// Individual exports for testing
export default function* thankYouPageSaga() {
  yield takeEvery(GET_QR_CODE, getQRCode);
}
