import { GlobalType, GlobalData } from './global.type';

const USER_ACTION = {
  getUserRequest: (user: GlobalData, callback: Function) => ({
    type: GlobalType.GET_USER_REQUEST,
    user,
    callback,
  }),
  getUserSuccess: (user: GlobalData) => ({ type: GlobalType.GET_USER_SUCCESS, user }),
  getUserFailure: () => ({ type: GlobalType.GET_USER_FALURE }),
};

export { USER_ACTION };
