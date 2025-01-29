import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../../types/state';
import { sortOffers } from '../../../utils';

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

const getNearbyOffers = (state: State) => state.nearbyOffers.slice(0,3);

const getOfferById = (state: State) => state.offerById;

const getComments = (state: State) => state.comments;

const getLoadingOffersStatus = (state: State) => state.isLoadingOffers;

const getLoadingOfferByIdStatus = (state: State) => state.isLoadingOfferById;

const getLoadingCommentsStatus = (state: State) => state.isLoadingComments;

const getLoadingNearbyOffersStatus = (state: State) => state.isLoadingNearbyOffers;

const isPostCommentPending = (state: State) => state.postCommentPending;

const isPostCommentError = (state: State) => state.postCommentError;

export {
  getCurrentCity,
  getOffers,
  getSortParam,
  getOffersByCity,
  getSortedOffers,
  getNearbyOffers,
  getOfferById,
  getComments,
  getLoadingOffersStatus,
  getLoadingOfferByIdStatus,
  getLoadingCommentsStatus,
  getLoadingNearbyOffersStatus,
  isPostCommentPending,
  isPostCommentError
}
