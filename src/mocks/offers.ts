import { OfferType } from '../types/offer-types';

export const offersMock: OfferType[] = [
  {
    'id': '6af6fdw711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.377956,
        'longitude':  4.897070,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': '../markup/img/apartment-01.jpg',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      {
        id: 1,
        name: 'Kitchen',
      },
      {
        id: 2,
        name: 'Wi-Fi',
      },
      {
        id: 3,
        name: 'Washing machine'
      }
    ],
    'host': {
      'name': 'Angelina',
      'avatarUrl': '../markup/img/avatar-angelina.jpg',
      'isPro': false
    },
    'images': [
      '../markup/img/apartment-03.jpg',
      '../markup/img/apartment-03.jpg',
      '../markup/img/apartment-03.jpg',
      '../markup/img/apartment-03.jpg',
      '../markup/img/apartment-03.jpg',
      '../markup/img/apartment-03.jpg',
    ],
    'maxAdults': 4
  },
  {
    'id': 'gew-23-4121q-f82cfd-e0b462a27f00',
    'title': 'Beautiful & luxurious room at great location',
    'type': 'room',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.377956,
        'longitude':  4.897070,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 5,
    'previewImage': '../markup/img/apartment-02.jpg',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      {
        id: 1,
        name: 'Baby seat',
      },
      {
        id: 2,
        name: 'Heating',
      },
      {
        id: 3,
        name: 'Towels'
      }
    ],
    'host': {
      'name': 'Angelina',
      'avatarUrl': '../markup/img/avatar-angelina.jpg',
      'isPro': false
    },
    'images': [
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
    ],
    'maxAdults': 4
  },
  {
    'id': '214sq-23-4121-ff82cfd-e0b462a27f00',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 99,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 52.377956,
        'longitude':  4.897070,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 48.477956,
      'longitude':  2.297070,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2,
    'previewImage': '../markup/img/apartment-03.jpg',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      {
        id: 1,
        name: 'Cabel TV'
      },
      {
        id: 2,
        name: 'Fridge'
      },
      {
        id: 3,
        name: 'Coffee machine'
      }
    ],
    'host': {
      'name': 'Max',
      'avatarUrl': '../markup/img/avatar-max.jpg',
      'isPro': false
    },
    'images': [
      '../markup/img/apartment-01.jpg',
      '../markup/img/apartment-01.jpg',
      '../markup/img/apartment-01.jpg',
      '../markup/img/apartment-01.jpg',
      '../markup/img/apartment-01.jpg',
      '../markup/img/apartment-01.jpg',
    ],
    'maxAdults': 4
  },
  {
    'id': 'gew-23-4121-fqf82cfd-e0b462a27f00',
    'title': 'Beautiful & luxurious room at great location',
    'type': 'room',
    'price': 1200,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.377956,
        'longitude':  4.897070,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.313945508,
      'longitude': 4.8325528,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 5,
    'previewImage': '../markup/img/apartment-02.jpg',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      {
        id: 1,
        name: 'Baby seat',
      },
      {
        id: 2,
        name: 'Heating',
      },
      {
        id: 3,
        name: 'Towels'
      }
    ],
    'host': {
      'name': 'Angelina',
      'avatarUrl': '../markup/img/avatar-angelina.jpg',
      'isPro': false
    },
    'images': [
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
      '../markup/img/apartment-02.jpg',
    ],
    'maxAdults': 4
  },
];
