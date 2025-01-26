import { useState } from 'react';
import CardsList from '../../components/card/cards-list';
import MapComponent from '../../components/map/map';
import { NameCard } from '../../const';
import { OfferType } from '../../types/offer-types';
import { getOffersLocation } from '../../utils';
import SortOffersForm from './sort-offers-form';
import { useAppSelector } from '../../hooks/state/state-hooks';
import { getCurrentCity, getSortedOffers } from '../../storage/selectors';


function OfferSection(): JSX.Element {

  const [currentOffer, setCurrentOffer] = useState<OfferType | undefined>(undefined);

  const sortedOffers = useAppSelector(getSortedOffers);

  const currentCity = useAppSelector(getCurrentCity);

  const onOverOffer = (offerId: string | null): void => setCurrentOffer(sortedOffers.find((offer) => offer.id === offerId));

  /* При убирании курсора с карточки offer текущий offer
  становиться undefinedб для того, что бы убрать выделение маркера на карте */
  const onOutOffer = (): void => setCurrentOffer(undefined);

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} places to stay in {currentCity}</b>
        <SortOffersForm />
        <div className="cities__places-list places__list tabs__content">
          <CardsList
            offers={sortedOffers}
            nameCard={NameCard.Cities}
            onOverOffer={onOverOffer}
            onOutOffer={onOutOffer}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map" >
          <MapComponent
            offersLocation={getOffersLocation(sortedOffers)}
            selectedOffer={currentOffer}
          />
        </section>
      </div>
    </div>
  );
}

export default OfferSection;
