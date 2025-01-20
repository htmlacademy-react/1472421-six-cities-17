import { createAction } from '@reduxjs/toolkit';
import { CityName, OfferType, OfferTypeById } from '../../types/offer-types';
import { AuthorizationStatus, SortingParams } from '../../const';
import { UserComments } from '../../types/user-type';

/* Создаст функцию, возвращающую объект действия {type: anyType, payload: anyPayload} */
export const changeCity = createAction<CityName>('offers/changeCity');

export const loadOffers = createAction<OfferType[]>('offers/loadOffers');

export const changeSortParam = createAction<SortingParams>('offers/changeSortParam');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const checkLoading = createAction<boolean>('user/checkLoading');

export const checkLoadingOffer = createAction<boolean>('user/checkLoadingOffer');

export const loadOfferById = createAction<OfferTypeById | null>('offers/loadOffer');

export const loadUsersComments = createAction<UserComments[]>('offers/loadUsersComments');

export const loadNearbyOffers = createAction<OfferType[]>('offers/loadNearbyOffers');
