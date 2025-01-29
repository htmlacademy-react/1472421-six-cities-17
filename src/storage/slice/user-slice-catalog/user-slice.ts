import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../consts/const';
import { checkAuthAction, loginAction, logoutAction } from '../../actions/api-actions-slice';
import { toast } from 'react-toastify';

const initialState = {
  userLogin: '',
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoginError: false,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      /* Проверка авторизации */
      .addCase(checkAuthAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        toast.warning('Не удалось определить пользователя');
      })
      /* Вход пользователя*/
      .addCase(loginAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(loginAction.fulfilled, (state, action: PayloadAction<string>) => {
        state.userLogin = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLoginError = true;
        toast.warning('Не удалось войти. Проверьте правильность введенных данных');
      })
      /* Выход пользователя */
      .addCase(logoutAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.rejected, () => {
        toast.warning('Не удалось выйти, попробуйте еще раз');
      });
  },
});

export const {requireAuthorization} = userSlice.actions;
