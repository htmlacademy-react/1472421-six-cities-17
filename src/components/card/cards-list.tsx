import { OfferType } from '../../types/offer-types';
import { NameCard } from '../../const';
import Card from './card';
import { memo } from 'react';

type CardsListProps = {
  offers: OfferType[];
  nameCard: NameCard;
  setCurrentOfferId?: (offerId: string | undefined) => void;
}


function CardsList({offers, nameCard, setCurrentOfferId}: CardsListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          setCurrentOfferId={setCurrentOfferId}
          currentClass={nameCard}
        />)
      )}
    </div>
  );
}


/* Благодаря оборачиванию компонента в React.memo компонент не перерендеривается
при каждом наведении на карточку offer`а(при каждом срабатывании
setCurrentOfferId.

React.memo перерендеривает компонент только в том случае, если меняется props.
Props меняется при изменении offers, nameCard, setCurrentOfferId
offers - меняется при изменении состава offers в state
nameCard - при переходе на страницу offers или favorietes
setCurrentOfferId - функция и меняется только при перерендере offers-section*/

const CardListMemo = memo(CardsList);
export default CardListMemo;
