import { CITIES_CLASS, FAVORITES_CLASS, NameCard } from './const';
import { CityName, OfferLocation, OfferType } from './types/offer-types';
import { ClassSetType, OffersGroupType } from './types/utils-type';


const getOffersGroup = (offers : OfferType[]): OffersGroupType => {
  const result: OffersGroupType = {};

  offers.forEach((offer) => {
    const city: CityName = offer.city.name;

    if(result[city]){
      result[city].push(offer);
    }else {
      result[city] = [offer];
    }
  });

  return result;
};


const getClassSet = (nameCard: NameCard) => {

  if(nameCard === NameCard.Cities) {
    const {card, image, info}: ClassSetType = CITIES_CLASS;
    return {card, image, info};
  }

  const {card, image, info}: ClassSetType = FAVORITES_CLASS;
  return {card, image, info};

};

const getOffersLocationByCity = (
  offers : OfferType[],
  city: CityName
): OfferLocation[] => {

  const offersByCity: OfferType[] = getOffersGroup(offers)[city];


  return offersByCity.map((offer) => ({
    id: offer.id,
    location: offer.location
  }));
};

export {getOffersGroup, getClassSet, getOffersLocationByCity};
