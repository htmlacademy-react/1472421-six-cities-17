import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { OfferType } from '../../types/offer-types';
import { APIRoute } from '../../const';
import { loadOffers } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadOffers',
  async (_arg, {dispatch, extra: api}) => {

    const {data} = await api.get<OfferType[]>(APIRoute.Offers);

    dispatch(loadOffers(data));
  },
);
