import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../../types/state';
import { sortOffers } from '../../../utils';
import { NameSpace } from '../../../const';

const getCurrentCity = (state: State) => state[NameSpace.Offers].city;

const getOffers = (state: State) => state[NameSpace.Offers].offers;

const getSortParam = (state: State) => state[NameSpace.Offers].sortParam;

const getOffersByCity = createSelector(
  [getCurrentCity, getOffers],
  (currentCity, offers) => offers.filter((offer) => offer.city.name === currentCity)
);

const getSortedOffers = createSelector(
  [getOffersByCity, getSortParam],
  (offersByCity, sortParam) => sortOffers(offersByCity, sortParam)
);

const getOffersByCityLength = createSelector(
  getOffersByCity,
  (offersByCity) => offersByCity.length
)

const getNearbyOffers = (state: State) => state[NameSpace.Offers].nearbyOffers;

const getOfferById = (state: State) => state[NameSpace.Offers].offerById;

const getComments = (state: State) => state[NameSpace.Offers].comments;

const getLoadingOffersStatus = (state: State) => state[NameSpace.Offers].isLoadingOffers;

const getLoadingOffersError = (state: State) => state[NameSpace.Offers].isLoadingOffersError;

const getLoadingOfferByIdStatus = (state: State) => state[NameSpace.Offers].isLoadingOfferById;

const getLoadingOfferByIdError = (state: State) => state[NameSpace.Offers].isLoadingOfferByIdError;

const getLoadingCommentsStatus = (state: State) => state[NameSpace.Offers].isLoadingComments;

const isPostCommentPending = (state: State) => state[NameSpace.Offers].postCommentPending;

const isPostCommentError = (state: State) => state[NameSpace.Offers].postCommentError;

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
  isPostCommentPending,
  isPostCommentError,
  getLoadingOfferByIdError,
  getOffersByCityLength,
  getLoadingOffersError
};
