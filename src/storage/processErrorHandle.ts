import { setError } from './actions/actions';
import { clearError } from './actions/api-actions';
import { store } from './index-redux';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};
