import * as Effects from 'redux-saga/effects'; // put
import { GlobalType, GlobalData } from './global.type';
import { USER_ACTION } from './global.action';
import GLOBAL_API from './global.api';
import { Functional } from '../../utils';

interface globalError {
  message: string;
}

interface globalAction {
  user: {
    id: number;
  };
  callback: Function;
}

const takeEvery: any = Effects.takeEvery;
const put: any = Effects.put;
const call: any = Effects.call;

function* onGetUser(params: globalAction) {
  try {
    const { user, callback } = params;
    const userData: GlobalData = yield GLOBAL_API.getUserAPI(user);
    if (userData) {
      yield put(USER_ACTION.getUserSuccess(userData));
      callback(userData);
    }
    //  else {
    //   callback('/login');
    // }
  } catch (error) {
    const newError: globalError = yield call(Functional.generateMessage, error);
    console.log(newError);
  }
}

export function* globalSaga() {
  yield takeEvery(GlobalType.GET_USER_REQUEST, onGetUser);
}
