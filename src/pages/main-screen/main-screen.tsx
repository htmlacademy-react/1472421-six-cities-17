import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { CityType } from '../../types/offer-types';
import CitiesList from './city-name-list';
import OfferSection from './offer-section';


type MainScreenProps = {
  cities: CityType[];
}

function MainScreen({cities}: MainScreenProps): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Choose a city!</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <OfferSection />
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
