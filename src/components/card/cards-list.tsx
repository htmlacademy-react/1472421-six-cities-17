import { OfferType } from '../../types/offer-types';
import { NameCard } from '../../const';
import Card from './card';
import { memo } from 'react';

type CardsListProps = {
  offers: OfferType[];
  nameCard: NameCard;
  onOverOffer?: (offerId: string) => void;
  onOutOffer?: () => void;
}


function CardsList({offers, nameCard, onOverOffer, onOutOffer}: CardsListProps): JSX.Element[] {

  /*Описываем обработчик события наведения курсора на карточку.
    Функция-обработчик принимает аргуметом offer.id типа string
    и возвращает тип void(спец. тип, обозначающий, что функция не вернет ничего.) */

  const mouseOverHandler = (offerId: string): void => {
    onOverOffer?.(offerId);
  };

  const mouseOutHandler = (): void => onOutOffer?.();

  console.log('RERENDER!!')
  /* Передаем обработчик события в каждую карточку карточки предложения */

  return offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      onMouseOverHandler={mouseOverHandler}
      currentClass={nameCard}
      onMouseOutHandler={mouseOutHandler}
    />)
  );
}

export default memo(CardsList);
