import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OfferDetails from './offer-details';
import OfferGallery from './offer-gallery';
import { AuthorizationStatus, NameCard } from '../../const';
import { OfferType } from '../../types/offer-types';
import {useParams } from 'react-router-dom';
import OfferReviews from './offer-reviews';
import MapComponent from '../../components/map/map';
import { getOffersLocationByCity } from '../../utils';
import { useState } from 'react';
import CardsList from '../../components/card/cards-list';
import { UserComments } from '../../types/user-comments-type';

type OfferProps = {
  authorizationStatus: AuthorizationStatus;
  offers: OfferType[];
  userComments: UserComments[];
}

function OfferScreen({authorizationStatus, offers, userComments}: OfferProps): JSX.Element {

  /* Вернет параметр адреса адресной строки для offer/:id (:id - параметр
  который будет генерироваться автоматически при клике на карточку предложения
  на главном экране, т.к. при клике на карточу с помощью
  служебного компонента Link приложение перенаправит пользователя на вновь сформированный
  адрес offer/id - где id - соответствует полю id конкретного предложения) */
  const {id} = useParams();

  const [selectedOfferForMap, setSelectedOfferForMap] = useState<OfferType | undefined>(undefined);

  const onOverOffer = (offerId: string | null): void => setSelectedOfferForMap(offers.find((offer) => offer.id === offerId));

  const currentOffer = offers.find((offer) => offer.id === id) as OfferType;

  return (
    <div className="page">

      <Helmet>
        <title>6 cities. Offers</title>
      </Helmet>

      <Header authorizationStatus = {authorizationStatus}/>

      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferGallery offer={currentOffer}/>

          <div className="offer__container container">
            <div className="offer__wrapper">

              <OfferDetails offer={currentOffer}/>

              <OfferReviews userComments={userComments}/>

            </div>
          </div>
          <section className="offer__map map">
            <MapComponent offersLocation={getOffersLocationByCity(offers.slice(0, 3), 'Amsterdam')} selectedOffer={selectedOfferForMap}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardsList offers={offers.slice(0, 3)} nameCard={NameCard.Offers} onOverOffer={onOverOffer}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
