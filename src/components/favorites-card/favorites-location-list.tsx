import { OfferType } from '../../types/offer-types';
import FavoritesLocationItem from './favorites-location-item';

type FavoritesLocationListProps = {
  offers: OfferType[];
}

function FavoritesLocationList({offers}: FavoritesLocationListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesLocationItem offers={offers}/>
    </ul>
  )
}


export default FavoritesLocationList;
