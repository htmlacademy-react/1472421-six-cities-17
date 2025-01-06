import { OfferType } from '../../types/offer-types';
import { NameCard } from '../../const';
import Card from './card';

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

  const onMouseOverHandler = (offerId: string): void => {
    onOverOffer?.(offerId);
  };

  const onMouseOutHandler = (): void => onOutOffer?.();


  /* Передаем обработчик события в каждую карточку карточки предложения */

  return offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      onMouseOverHandler={onMouseOverHandler}
      currentClass={nameCard}
      onMouseOutHandler={onMouseOutHandler}
    />)
  );
}

export default CardsList;
