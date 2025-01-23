import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortParam, checkLoading, checkLoadingOffer, loadNearbyOffers, loadOfferById, loadOffers, loadUsersComments, pushComment, requireAuthorization, setUserLogin } from './actions/actions';
import { CityName, OfferType, OfferTypeById } from '../types/offer-types';
import { AuthorizationStatus, SortingParams } from '../const';
import { UserComments } from '../types/user-type';


const initialState = {
  city: 'Paris' as CityName,
  offers: [] as OfferType[],
  sortParam: SortingParams.popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoading: false,
  isLoadingOffer: false,
  offerById: null as OfferTypeById | null,
  usersComments: [] as UserComments[],
  nearbyOffers: [] as OfferType[],
  userLogin: ''
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
    })
    .addCase(checkLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(checkLoadingOffer, (state, action) => {
      state.isLoadingOffer = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.offerById = action.payload;
    })
    .addCase(loadUsersComments, (state, action) => {
      state.usersComments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(pushComment, (state, action) => {
      state.usersComments.push(action.payload);
    })
    .addCase(setUserLogin,(state, action) => {
      state.userLogin = action.payload;
    });
});

export {reducer};
