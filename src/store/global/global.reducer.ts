import { GlobalType } from './global.type';

const initialState = {
  user: null,
};

interface globalReducerIF {
  data: Object;
  type: GlobalType;
  user: Object;
}

const globalReducer = (state = initialState, action: globalReducerIF) => {
  switch (action.type) {
    case GlobalType.GET_USER_SUCCESS:
      return { ...state, user: action.user, isLogin: true };
    default:
      return state;
  }
};

export default globalReducer;
