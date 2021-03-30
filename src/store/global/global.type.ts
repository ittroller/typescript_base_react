const enum GlobalType {
  GET_USER_REQUEST = 'GET_USER_REQUEST',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FALURE = 'GET_USER_FALURE',
}

export interface GlobalAction<T> {
  type: GlobalType;
  payload: T;
}

export interface GlobalData {
  id?: string | undefined;
  email?: string | undefined;
  name?: string | undefined;
  token?: string | undefined;
  refresh_token?: string | undefined;
}

export { GlobalType };
