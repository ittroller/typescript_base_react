import lodash from 'lodash';
import { isFunction } from 'lodash';

const Functional = {
  generateMessage: async error => {
    if (error && isFunction(error.text)) {
      const objMessage = await error.text();
      return JSON.parse(objMessage);
    }
    return { message: error.message, data: '' };
  },
  getQueryString: params => {
    const parts = [];

    lodash.forEach(params, (value, key) => {
      const values = lodash.isArray(value) ? value : [value];
      const operator = lodash.isArray(value) ? '=' : '=';

      lodash.forEach(values, v => {
        parts.push(key + operator + encodeURIComponent(v));
      });
    });

    const queryString = parts.join('&');

    return queryString ? `?${queryString}` : '';
  },
};

export default Functional;
