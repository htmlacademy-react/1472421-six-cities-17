import { OfferType } from '../../types/offer-types';
import FavoritesCardList from './favorites-card-list';

type FavoritesLocationItemProps = {
  offers: OfferType[];
}

function FavoritesLocationItem({offers}: FavoritesLocationItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritesCardList offers={offers} />
      </div>
    </li>
  )
}


export default FavoritesLocationItem;
