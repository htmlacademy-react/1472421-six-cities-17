import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CitiesList from './cities-list';
import OfferSection from './offer-section';


function MainScreen(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Choose a city!</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <OfferSection />
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
