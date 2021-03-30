import { AuthType, LoginData, RegisterData } from './auth.types';

const LOGIN_ACTION = {
  onLoginRequest: (data: LoginData, callback: () => {}) => ({ type: AuthType.LOGIN_REQUEST, data, callback }),
  onLoginSucces: (data: LoginData, callback: () => {}) => ({ type: AuthType.LOGIN_SUCCESS, data, callback }),
  onLoginFailure: (data: LoginData, callback: () => {}) => ({ type: AuthType.LOGIN_FAILURE, data, callback }),
};

const LOGOUT_ACTION = {
  onLogoutRequest: (data: {}, callback: () => {}) => ({ type: AuthType.LOGOUT_REQUEST, data, callback }),
  onLogoutSucces: (data: {}, callback: () => {}) => ({ type: AuthType.LOGOUT_SUCCESS, data, callback }),
  onLogoutFailure: (data: {}, callback: () => {}) => ({ type: AuthType.LOGOUT_FAILURE, data, callback }),
};

const REGISTER_ACTION = {
  onRegisterRequest: (data: RegisterData) => ({ type: AuthType.REGISTER_REQUEST, data }),
  onRegisterSuccess: (data: RegisterData) => ({ type: AuthType.REGISTER_SUCCESS, data }),
  onRegisterFailure: (data: RegisterData) => ({ type: AuthType.REGISTER_FAILURE, data }),
};

export { LOGIN_ACTION, LOGOUT_ACTION, REGISTER_ACTION };
