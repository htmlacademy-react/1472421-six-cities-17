import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

const getUserLogin = (state: State) => state[NameSpace.User].userLogin;

const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;

const getIsLoginError = (state: State) => state[NameSpace.User].isLoginError;

export {
  getUserLogin,
  getAuthorizationStatus,
  getIsLoginError
};
