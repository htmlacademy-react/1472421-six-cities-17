import { CITIES_CLASS, FAVORITES_CLASS, NameCard, OFFERS_CLASS } from './const';
import { CITIES } from './mocks/city-location';
import { CityName, CityType, OfferLocation, OfferType } from './types/offer-types';
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

const getFormattedDate = (date: string): string => {
  const format = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
  const formattedDate = format.format(new Date(date));

  return formattedDate;
};

const getLocationByCityName = (cityName: CityName): CityType | undefined => CITIES.find((city) => city.name === cityName);

export {getOffersGroup, getClassSet, getOffersLocationByCity, getFormattedDate, getLocationByCityName};
