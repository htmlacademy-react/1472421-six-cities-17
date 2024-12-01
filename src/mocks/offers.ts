type offerCityType = {
  name: string;
  location: {
    latitude: number;
    longitude:number;
    zoom: number;
  };
}

type locationCityType = {
  latitude: number;
  longitude: number;
  zoom: number;
}


type offerType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: offerCityType;
  location: locationCityType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type offersType = offerType[];


const offersMock: offersType = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': 'gew-23-4121-f82cfd-e0b462a27f00',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'New-York',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4,
    'previewImage': '../markup/img/apartment-01.jpg'
  },
  {
    'id': '214sq-23-4121-f82cfd-e0b462a27f00',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'New-York',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4,
    'previewImage': '../markup/img/apartment-01.jpg'
  },
  {
    'id': 'ye-23-4122d1-f82cfd-e0b462a27f00',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'New-York',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4,
    'previewImage': '../markup/img/apartment-01.jpg'
  }
];

export default offersMock;
