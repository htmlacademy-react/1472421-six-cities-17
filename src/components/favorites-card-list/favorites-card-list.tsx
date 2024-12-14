import { useState } from 'react';
import { OfferType } from '../../types/offer-types';
import { NameCard } from '../../const';
import Card from '../card/card';


type FavoritesCardListProps = {
  offers: OfferType[];
}

function FavoritesCardList({offers}: FavoritesCardListProps): JSX.Element[] {

  /* eslint-disable */
  const [currentOffer, setCurrentOffer] = useState<string>('');
  /* eslint-enable */

  const onMouseOverHandler = (offerId: string): void => setCurrentOffer(offerId);

  return offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      onMouseOverHandler={onMouseOverHandler}
      currentClass={NameCard.Favorites}
    />)
  );
}


export default FavoritesCardList;
