import { OfferType } from '../../types/offer-types';
import FavoritesCard from './favorites-card';

type FavoritesCardListProps = {
  offers: OfferType[];
}

function FavoritesCardList({offers}: FavoritesCardListProps): JSX.Element[] {
  return offers.map((offer) => <FavoritesCard key={offer.id} offer={offer}/>)
}


export default FavoritesCardList;
