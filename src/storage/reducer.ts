import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortParam, loadOffers } from './actions';
import { CityName, OfferType } from '../types/offer-types';
import { SortingParams } from '../const';


const initialState = {
  city: 'Paris' as CityName,
  offers: [] as OfferType[],
  sortParam: SortingParams.popular,
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
    });
});

export {reducer};
