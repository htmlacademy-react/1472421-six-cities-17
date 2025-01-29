import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { OfferType, OfferTypeById } from '../../types/offer-types';
import { APIRoute, AuthorizationStatus } from '../../consts/const';
import { AuthDataType, PostUserCommentType, User, UserComments } from '../../types/user-type';
import { dropToken, saveToken } from '../../services/token';
import { requireAuthorization } from '../slice/user-slice-catalog/user-slice';


/* Получение списка предложений */
export const fetchOffersAction = createAsyncThunk<OfferType[], undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffersAction',
  async (_arg, {extra: api}) => {

    const {data} = await api.get<OfferType[]>(APIRoute.Offers);

    return data;
  },
);

/* Получение предложения по ID */
export const fetchOfferByIdAction = createAsyncThunk<OfferTypeById, string,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferByIdAction',
  async (id, {extra: api}) => {

    const {data} = await api.get<OfferTypeById>(`${APIRoute.Offers}/${id}`);

    return data;
  },
);

/* Получение избранных предложений */
export const fetchFavoriteOfferAction = createAsyncThunk<OfferType[], undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchFavoriteOfferAction',
  async (_arg, {extra: api}) => {

    const {data} = await api.get<OfferType[]>(APIRoute.Favorite);

    return data;
  },
);


export const fetchUsersCommentsAction = createAsyncThunk<UserComments[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadUsersComments',
  async (id, {extra: api}) => {

    const {data} = await api.get<UserComments[]>(`${APIRoute.Comments}/${id}`);

    return data;
  }
);


export const fetchNearbyOffersAction = createAsyncThunk<OfferType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadNearbyOffers',
  async (id, {extra: api}) => {

    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/${APIRoute.Nearby}`);

    return data;
  }
);


/* Проверка авторизации пользователя */
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthAction',
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
export const loginAction = createAsyncThunk<string, AuthDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/loginAction',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<User>(APIRoute.Login, {email, password});

    saveToken(data.token);

    return data.email;
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


export const postComment = createAsyncThunk<UserComments, PostUserCommentType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/postComment',
  async ({id, rating, comment}, {extra: api}) => {

    const {data} = await api.post<UserComments>(`${APIRoute.Comments}/${id}`, {rating, comment});

    return data;
  },
);
