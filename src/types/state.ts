import { store } from '../storage/index-redux';

/* ReturnType позволяет определить тип значения, возвращаемого функцией */

/* Определит псевдоним типа для state */
export type State = ReturnType<typeof store.getState>;

/* Определит псевдоним типа для хука useDispatch,
равного типу метода store.dispatch. Это позволит TS явно указывать
какие значения в store при работе со store внутри useDispatch */
export type AppDispatch = typeof store.dispatch;
