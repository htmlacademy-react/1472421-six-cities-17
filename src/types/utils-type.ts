import { CityName, OfferType } from './offer-types';

export type OffersGroupType = Record<CityName, OfferType[]>;

export type ClassName = 'card' | 'image' | 'info';

export type ClassSetType = Record<ClassName, string>;

