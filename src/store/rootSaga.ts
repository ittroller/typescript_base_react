import { all } from 'redux-saga/effects';

import { loadingSaga } from './global/loadingStore';
import { authSaga } from '../modules/public/authPage';
import { globalSaga } from './global';

export default function* rootSaga() {
  yield all([loadingSaga(), authSaga(), globalSaga()]);
}
