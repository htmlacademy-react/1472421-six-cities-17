import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { OfferType, OfferTypeById } from '../../types/offer-types';
import { APIRoute, AuthorizationStatus } from '../../const';
import { checkLoading, checkLoadingOffer, loadNearbyOffers, loadOfferById, loadOffers, loadUsersComments, pushComment, requireAuthorization } from './actions';
import { AuthDataType, PostUserCommentType, User, UserComments } from '../../types/user-type';
import { dropToken, saveToken } from '../../services/token';


/* Получение списка предложений */
export const fetchOffersAction = createAsyncThunk<void, undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadOffers',
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


/* Получение предложения по ID */
export const fetchOfferByIdAction = createAsyncThunk<void, string,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadOfferById',
  async (id, {dispatch, extra: api}) => {

    dispatch(checkLoadingOffer(true));

    const {data} = await api.get<OfferTypeById>(`${APIRoute.Offers}/${id}`);

    dispatch(checkLoadingOffer(false));
    dispatch(loadOfferById(data));
  },
);


export const fetchUsersCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadUsersComments',
  async (id, {dispatch, extra: api}) => {

    const {data} = await api.get<UserComments[]>(`${APIRoute.Comments}/${id}`);

    dispatch(loadUsersComments(data));
  }
);


export const fetchNearbyCommentAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadNearbyOffers',
  async (id, {dispatch, extra: api}) => {

    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/${APIRoute.Nearby}`);

    dispatch(loadNearbyOffers(data));
  }
);


export const postComment = createAsyncThunk<void, PostUserCommentType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/postComment',
  async ({id, rating, comment}, {dispatch, extra: api}) => {


    const {data} = await api.post<UserComments>(`${APIRoute.Comments}/${id}`, {rating, comment});

    dispatch(pushComment(data));
  },
);
