import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './actions';
import { OfferType } from '../types/offer-types';


const initialState = {
  city: 'Paris',
  offers: [] as OfferType[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
