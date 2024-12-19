import { OfferType } from '../../types/offer-types';
import { NameCard } from '../../const';
import Card from './card';

type CardsListProps = {
  offers: OfferType[];
  nameCard: NameCard;
  onOverOffer?: ((offerId: string) => void);
}


function CardsList({offers, nameCard, onOverOffer}: CardsListProps): JSX.Element[] {

  /*Деструктуризируем хук useState, первая переменная хранит в себе id карточки предложения, на которую
    наведен курсор, вторая фунцию-установщик нового состояни(т.е. изменение id, который
    храниться в currentOffer). Начальное стостояние переданное в useState - пустая строка*/

  /* eslint-disable */
  /* const [currentOffer, setCurrentOffer] = useState<string>(''); */
  /* eslint-enable */

  /*Описываем обработчик события аведения курсора на карточку.
    Функция-обработчик принимает аргуметом offer.id типа string
    и возвращает тип void(спец. тип, обозначающий, что функция не вернет ничего.) */

  const onMouseOverHandler = (offerId: string): void => {
    onOverOffer?.(offerId);
  };


  /* Передаем обработчик события в каждую карточку карточки предложения */

  return offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      onMouseOverHandler={onMouseOverHandler}
      currentClass={nameCard}
    />)
  );
}

export default CardsList;
