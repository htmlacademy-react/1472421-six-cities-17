type OfferCityType = {
  name: string;
  location: {
    latitude: number;
    longitude:number;
    zoom: number;
  };
}

type LocationCityType = {
  latitude: number;
  longitude: number;
  zoom: number;
}


type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCityType;
  location: LocationCityType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type OffersType = OfferType[];
