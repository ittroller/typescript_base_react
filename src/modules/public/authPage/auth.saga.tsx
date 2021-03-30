import * as Effects from 'redux-saga/effects';

import { AuthType, LoginData } from './auth.types';
import AUTH_API from './auth.api';
import { USER_ACTION } from '../../../store/global';
import { Functional } from '../../../utils';

interface ActionLogin {
  data: LoginData;
  callback: Function;
}

interface UserResponse {
  token: string;
  refresh_token: string;
}

interface UserError {
  message: string;
}

const takeLatest: any = Effects.takeLatest;
const put: any = Effects.put;
const call: any = Effects.call;

function* loginFunc(action: ActionLogin) {
  try {
    const { data, callback } = action;
    const user: UserResponse = yield call(AUTH_API.loginAPI, data);

    if (user) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('refresh_token', user.refresh_token);
      yield put(USER_ACTION.getUserSuccess(user));
      callback();
    }
  } catch (error) {
    const newError: UserError = yield call(Functional.generateMessage, error);
    console.log(newError);
  }
}

function* logoutFunc() {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    yield console.log('logout');
  } catch (error) {
    console.log(error);
  }
}

function* registerFunc() {
  //   try {
  //     const { email, password, redirectTo } = action.data;
  //     yield call([firebase.auth(), firebase.auth().createUserWithEmailAndPassword], email, password);
  //     redirectTo();
  //   } catch (error) {
  //     console.log(error);
  //   }
}

export function* authSaga() {
  yield takeLatest(AuthType.LOGIN_REQUEST, loginFunc);
  yield takeLatest(AuthType.LOGOUT_REQUEST, logoutFunc);
  yield takeLatest(AuthType.REGISTER_REQUEST, registerFunc);
}
