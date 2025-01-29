import { OfferType } from '../../types/offer-types';
import FavoritesLocationItem from './favorites-location-item';
import { useAppSelector } from '../../hooks/state/state-hooks';
import { getFavoriteOffersByGroup } from '../../storage/slice/offers-slice-catalog/offers-selectors';



function FavoritesLocationList(): JSX.Element {

  const favoriteOffersByGroup = useAppSelector(getFavoriteOffersByGroup);

  return (
    <ul className="favorites__list">
      {Object.keys(favoriteOffersByGroup).map((city) => {
        const groupByCity: OfferType[] = favoriteOffersByGroup[city];

        return <FavoritesLocationItem key={city} offers={groupByCity} city={city}/>;
      })}
    </ul>
  );
}


export default FavoritesLocationList;
