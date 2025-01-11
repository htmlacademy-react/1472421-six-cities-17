import { CITIES_CLASS, FAVORITES_CLASS, NameCard, OFFERS_CLASS, SortingParams } from './const';
import { CITIES } from './mocks/city-location';
import { CityName, CityType, OfferLocation, OfferType } from './types/offer-types';
import { ClassSetType, OffersGroupType } from './types/utils-type';


const getOffersGroup = (offers : OfferType[]): OffersGroupType => {
  const result: OffersGroupType = {} as OffersGroupType;

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

const getOffersByCity = (offers : OfferType[], cityName: CityName): OfferType[] => getOffersGroup(offers)[cityName];


const getClassSet = (nameCard: NameCard) => {
  switch(nameCard) {
    case NameCard.Cities: {
      const {card, image, info}: ClassSetType = CITIES_CLASS;
      return {card, image, info};
    }
    case NameCard.Favorites: {
      const {card, image, info}: ClassSetType = FAVORITES_CLASS;
      return {card, image, info};
    }
    case NameCard.Offers: {
      const {card, image, info}: ClassSetType = OFFERS_CLASS;
      return {card, image, info};
    }
  }
};

/* Удалить, когда будет не нужно */
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

const getOffersLocation = (offers : OfferType[]): OfferLocation[] => offers.map((offer) => ({
  id: offer.id,
  location: offer.location
}));

const getFormattedDate = (date: string): string => {
  const format = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
  const formattedDate = format.format(new Date(date));

  return formattedDate;
};

const getLocationByCityName = (cityName: CityName): CityType | undefined => CITIES.find((city) => city.name === cityName);


const sortOffers = (offers: OfferType[], sortParam: string): OfferType[] => {

  const sortedOffers = [...offers];

  switch(sortParam){
    case SortingParams.popular:
      return offers;
    case SortingParams.expensively:
      return sortedOffers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortingParams.cheaper:
      return sortedOffers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortingParams.byRating:
      return sortedOffers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};

export {
  getOffersGroup,
  getClassSet,
  getOffersLocationByCity,
  getFormattedDate,
  getLocationByCityName,
  getOffersByCity,
  getOffersLocation,
  sortOffers
};
