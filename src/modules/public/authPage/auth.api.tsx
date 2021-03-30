import { get } from 'lodash';
import Service from '../../../services';

import { LoginData } from './auth.types';

interface AUTH_API_IF {
  loginAPI: Function;
}

const AUTH_API: AUTH_API_IF = {
  loginAPI: async (params: LoginData) => {
    const response = await Service.post(`/api/user/login`, params);
    const data = get(response, 'data', null);
    return data;
  },
};

export default AUTH_API;
