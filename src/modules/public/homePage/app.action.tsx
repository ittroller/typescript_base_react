import { COUNT_UP, COUNT_DOWN } from './app.types';

const onCountUp = () => ({ type: COUNT_UP });
const onCountDown = () => ({ type: COUNT_DOWN });

export { onCountUp, onCountDown };
