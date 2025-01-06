import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { AuthorizationStatus } from '../../const';
import { CityType, OfferType } from '../../types/offer-types';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/state/state-hooks';
import CitiesList from './city-name-list';
import OfferSection from './offer-section';
import { getCurrentCity, getOffersByCity } from '../../storage/selectors';
import { sortOffers } from '../../utils';

type MainScreenProps = {
  cities: CityType[];
  authorizationStatus: AuthorizationStatus;
}

function MainScreen({cities, authorizationStatus}: MainScreenProps): JSX.Element {

  const [currentOffer, setCurrentOffer] = useState<OfferType | undefined>(undefined);

  const currentCity = useAppSelector(getCurrentCity);

  const offersByCity = useAppSelector(getOffersByCity);

  const sortParams = useAppSelector((state) => state.sortParam);

  const sortedOffers = sortOffers(offersByCity, sortParams);

  const onOverOffer = (offerId: string | null): void => setCurrentOffer(offersByCity.find((offer) => offer.id === offerId));

  /* При убирании курсора с карточки offer текущий offer
  становиться undefinedб для того, что бы убрать выделение маркера на карте */
  const onOutOffer = (): void => setCurrentOffer(undefined);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Choose a city!</title>
      </Helmet>

      <Header authorizationStatus = {authorizationStatus}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <OfferSection
            offers={sortedOffers}
            currentCity={currentCity}
            onOverOffer={onOverOffer}
            onOutOffer={onOutOffer}
            currentOffer={currentOffer}
          />
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
