import { get } from 'lodash';
import Service from '../../services';

interface Param {
  id: number;
}

const GLOBAL_API = {
  getUserAPI: async (params: Param) => {
    const response = await Service.get(`/api/users/profile`, params);
    const data = get(response, 'data', null);
    return data;
  },
};

export default GLOBAL_API;
