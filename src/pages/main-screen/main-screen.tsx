import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import MapComponent from '../../components/map/map';
import { AuthorizationStatus, NameCard } from '../../const';
import { CityType, OfferType } from '../../types/offer-types';
import CardsList from '../../components/card/cards-list';
import { getOffersLocation } from '../../utils';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/state/state-hooks';
import CitiesList from './city-name-list';

type MainScreenProps = {
  cities: CityType[];
  authorizationStatus: AuthorizationStatus;
}

function MainScreen({cities, authorizationStatus}: MainScreenProps): JSX.Element {

  const [currentOffer, setCurrentOffer] = useState<OfferType | undefined>(undefined);

  const currentCity = useAppSelector((state) => state.city);

  const offers = useAppSelector((state) => state.offers);

  const offersByCity = offers.filter((offer) => offer.city.name === currentCity);

  const onOverOffer = (offerId: string | null): void => setCurrentOffer(offers.find((offer) => offer.id === offerId));

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
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardsList offers={offersByCity} nameCard={NameCard.Cities} onOverOffer={onOverOffer}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" >
                <MapComponent
                  offersLocation={getOffersLocation(offersByCity)}
                  selectedOffer={currentOffer}
                  currentCity={currentCity}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
