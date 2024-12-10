import { useState } from 'react';
import { OfferType } from '../../types/offer-types';
import CitiesCard from './cities-card';

type CitiesCardsListProps = {
  offers: OfferType[];
}


function CitiesCardsList({offers}: CitiesCardsListProps): JSX.Element[] {

  /*Деструктуризируем хук useState, первая переменная хранит в себе id карточки предложения, на которую
    наведен курсор, вторая фунцию-установщик нового состояни(т.е. изменение id, который
    храниться в currentOffer). Начальное стостояние переданное в useState - пустая строка*/

  const [currentOffer, setCurrentOffer] = useState<string>('');

  /*Описываем обработчик события аведения курсора на карточку.
    Функция-обработчик принимает аргуметом offer.id типа string
    и возвращает тип void(спец. тип, обозначающий, что функция не вернет ничего.) */

  const onMouseOverHandler = (offerId: string): void => setCurrentOffer(offerId);

  /* Передаем обработчик события в каждую карточку карточки предложения */

  return offers.map((offer) => <CitiesCard key={offer.id} offer={offer} onMouseOverHandler={onMouseOverHandler}/>)
}

export default CitiesCardsList;
