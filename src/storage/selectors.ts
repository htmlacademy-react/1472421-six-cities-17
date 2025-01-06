import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';

const getCurrentCity = (state: State) => state.city;

const getOffers = (state: State) => state.offers;

const getSortParam = (state: State) => state.sortParam;

const getOffersByCity = createSelector(
  [getCurrentCity, getOffers],
  (currentCity, offers) => offers.filter((offer) => offer.city.name === currentCity)
);


export {
  getCurrentCity,
  getOffers,
  getSortParam,
  getOffersByCity
};
