import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { sortOffers } from '../utils';

const getCurrentCity = (state: State) => state.city;

const getOffers = (state: State) => state.offers;

const getSortParam = (state: State) => state.sortParam;

const getOffersByCity = createSelector(
  [getCurrentCity, getOffers],
  (currentCity, offers) => offers.filter((offer) => offer.city.name === currentCity)
);

const getSortedOffers = createSelector(
  [getOffersByCity, getSortParam],
  (offersByCity, sortParam) => sortOffers(offersByCity, sortParam)
);

const getError = (state: State) => state.error;

const getLoadingStatus = (state: State) => state.isLoading;

const getAuthorizationStatus = (state: State) => state.authorizationStatus;



export {
  getCurrentCity,
  getOffers,
  getSortParam,
  getOffersByCity,
  getSortedOffers,
  getError,
  getLoadingStatus,
  getAuthorizationStatus
};
