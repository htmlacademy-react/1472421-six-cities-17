import { CityName, OfferType } from './types/offer-types';

type OffersGroupType = Record<CityName, OfferType[]>;

const getOffersGroup = (offers : OfferType[]): OffersGroupType => {
  const result: OffersGroupType = {};

  offers.forEach((offer) => {
    const city: CityName = offer.city.name;

    if(result[city]){
      result[city].push(offer);
    }else {
      result[city] = [offer];
    }
  })

  return result;
}

export {getOffersGroup};
