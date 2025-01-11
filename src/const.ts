enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Error = '/*'
}

enum SortingParams {
  popular = 'Popular',
  cheaper = 'Price: low to high',
  expensively = 'Price: high to low',
  byRating = 'Top rated first'
}

const FAVORITES_CLASS = {
  card: 'favorites__card',
  image: 'favorites__image-wrapper',
  info: 'favorites__card-info place-card__info'
};

const CITIES_CLASS = {
  card: 'cities__card',
  image: 'cities__image-wrapper',
  info: 'place-card__info'
};

const OFFERS_CLASS = {
  card: 'near-places__card',
  image: 'near-places__image-wrapper',
  info: 'place-card__info'
};

enum NameCard {
  Cities = 'cities',
  Favorites = 'favorites',
  Offers = 'offers'
}

const URL_MARKER_DEFAULT = '../public/img/pin.svg';
const URL_MARKER_CURRENT = '../public/img/pin-active.svg';

export {
  AppRoute,
  AuthorizationStatus,
  FAVORITES_CLASS,
  CITIES_CLASS,
  NameCard,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  OFFERS_CLASS,
  SortingParams
};
