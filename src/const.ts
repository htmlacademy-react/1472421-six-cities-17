enum Settings {
  CitiesCount = 5,
}

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

enum NameCard {
  Cities = 'cities',
  Favorites = 'favorites',
}

export {Settings, AppRoute, AuthorizationStatus, FAVORITES_CLASS, CITIES_CLASS, NameCard};
