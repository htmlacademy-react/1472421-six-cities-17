import { OfferType } from '../../types/offer-types';
import FavoritesLocationItem from './favorites-location-item';
import { OffersGroupType } from '../../types/utils-type';

type FavoritesLocationListProps = {
  favoriteOffers: OffersGroupType;
}

function FavoritesLocationList({favoriteOffers}: FavoritesLocationListProps): JSX.Element {


  return (
    <ul className="favorites__list">
      {Object.keys(favoriteOffers).map((city) => {
        const groupByCity: OfferType[] = favoriteOffers[city];

        return <FavoritesLocationItem key={city} offers={groupByCity} city={city}/>;
      })}
    </ul>
  );
}


export default FavoritesLocationList;
