import { OfferType } from '../../types/offer-types';
import { getOffersGroup } from '../../utils';
import FavoritesLocationItem from './favorites-location-item';

type FavoritesLocationListProps = {
  offers: OfferType[];
}

function FavoritesLocationList({offers}: FavoritesLocationListProps): JSX.Element {

  const offersGroup = getOffersGroup(offers);

  return (
    <ul className="favorites__list">
      {Object.keys(offersGroup).map((city) => {
        const groupByCity: OfferType[] = offersGroup[city];

        return <FavoritesLocationItem key={city} offers={groupByCity} city={city}/>;
      })}
    </ul>
  );
}


export default FavoritesLocationList;
