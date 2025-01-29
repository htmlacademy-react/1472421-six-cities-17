import { State } from '../../../types/state';

const getUserLogin = (state: State) => state.userLogin;

const getAuthorizationStatus = (state: State) => state.authorizationStatus;

const getIsLoginError = (state: State) => state.isLoginError;

export {
  getUserLogin,
  getAuthorizationStatus,
  getIsLoginError
}
