export type CityName = string;

export type CityType = {
  name: CityName;
  location: LocationCityType;
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

export type OfferLocation = {
  id: string;
  location: LocationCityType;
}


export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationCityType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type OfferTypeById = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationCityType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods:string[];
  host: HostType;
  images: string[];
  maxAdults: number;
}
