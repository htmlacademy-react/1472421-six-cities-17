import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { OfferType } from '../../types/offer-types';
import { APIRoute } from '../../const';
import { checkLoading, loadOffers } from './actions';

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
