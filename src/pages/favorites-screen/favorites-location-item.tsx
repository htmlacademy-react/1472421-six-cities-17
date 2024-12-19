import { NameCard } from '../../const';
import { CityName, OfferType } from '../../types/offer-types';
import CardsList from '../../components/card/cards-list';


type FavoritesLocationItemProps = {
  offers: OfferType[];
  city: CityName;
}

function FavoritesLocationItem({offers, city}: FavoritesLocationItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CardsList offers={offers} nameCard={NameCard.Favorites} />
      </div>
    </li>
  );
}


export default FavoritesLocationItem;
