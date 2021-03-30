import { combineReducers } from 'redux';

import { loadingReducer } from './global/loadingStore';
import { authReducer } from '../modules/public/authPage';
import { globalReducer } from './global';

const rootReducer = () =>
  combineReducers({
    auth: authReducer,
    global: globalReducer,
    loading: loadingReducer,
  });

export default rootReducer;
