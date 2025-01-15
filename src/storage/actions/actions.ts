import { createAction } from '@reduxjs/toolkit';
import { CityName, OfferType } from '../../types/offer-types';
import { AuthorizationStatus, SortingParams } from '../../const';

/* Создаст функцию, возвращающую объект действия {type: anyType, payload: anyPayload} */
export const changeCity = createAction<CityName>('changeCity');

export const loadOffers = createAction<OfferType[]>('loadOffers');

export const changeSortParam = createAction<SortingParams>('changeSortParam');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const checkLoading = createAction<boolean>('checkLoading');
