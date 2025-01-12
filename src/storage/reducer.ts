import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortParam, loadOffers, requireAuthorization } from './actions';
import { CityName, OfferType } from '../types/offer-types';
import { AuthorizationStatus, SortingParams } from '../const';


const initialState = {
  city: 'Paris' as CityName,
  offers: [] as OfferType[],
  sortParam: SortingParams.popular,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortParam, (state, action) => {
      state.sortParam = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
