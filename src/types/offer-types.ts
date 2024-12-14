export type CityName = string;

type OfferCityType = {
  name: CityName;
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

type HostType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}


export type OfferType = {
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
  description: string;
  bedrooms: number;
  goods: {
    id: number;
    name: string;
  }[];
  host: HostType;
  images: string[];
  maxAdults: number;
}

