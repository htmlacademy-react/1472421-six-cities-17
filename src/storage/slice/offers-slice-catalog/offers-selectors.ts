import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../../types/state';
import { getOffersGroup, sortOffers } from '../../../utils';
import { NameSpace } from '../../../consts/const';

const getCurrentCity = (state: State) => state[NameSpace.Offers].city;

const getOffers = (state: State) => state[NameSpace.Offers].offers;

const getSortParam = (state: State) => state[NameSpace.Offers].sortParam;

const getFavoriteOffers = (state: State) => state[NameSpace.Offers].favoriteOffers;

const getFavoriteOffersByGroup = createSelector(
  getFavoriteOffers,
  (favoriteOffers) => getOffersGroup(favoriteOffers)
);

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
);

const getFavoriteStatus = (state: State, id: string) => state[NameSpace.Offers].favoriteOffers.findIndex((offer) => offer.id === id) !== -1;

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

const getFavoriteOffersCount = (state: State) => state[NameSpace.Offers].favoriteOffers.length;

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
  getLoadingOffersError,
  getFavoriteOffersByGroup,
  getFavoriteOffers,
  getFavoriteStatus,
  getFavoriteOffersCount
};
