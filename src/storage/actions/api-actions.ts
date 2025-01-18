import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { OfferType } from '../../types/offer-types';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { checkLoading, loadOffers, requireAuthorization, setError } from './actions';
import { AuthDataType, User } from '../../types/user-type';
import { dropToken, saveToken } from '../../services/token';
import { store } from '../index-redux';


/* Получение списка предложений */
export const fetchOffersAction = createAsyncThunk<void, undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadOffers',
  async (_arg, {dispatch, extra: api}) => {

    dispatch(checkLoading(true));

    const {data} = await api.get<OfferType[]>(APIRoute.Offers);

    dispatch(checkLoading(false));
    dispatch(loadOffers(data));
  },
);

/* Проверка авторизации пользователя */
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthStatus',
  async (_arg, {dispatch, extra: api}) => {
    try{
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

/* Пользователь вошел */
/* Первый параметр дженерика - тип возвращаемого значения
   Второй параметр дженерика - тип значения, попадающего в диспатч
   Третий парамтр дженерика - объект настроек параметров, попадающих в функцию
   созданную createAsyncThunk по умолчанию (dispatch, state, extraArgument) */
export const loginAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(APIRoute.Login, {email, password});

    saveToken(data.token);

    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

/* Пользователь вышел */
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);

    dropToken();

    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);


/* Очистка свойства State.error */
export const clearError = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'app/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  }
);

