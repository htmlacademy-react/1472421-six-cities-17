import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CitiesList from './cities-list';
import OfferSection from './offer-section';
import { useAppSelector } from '../../hooks/state/state-hooks';
import { getLoadingOffersError, getOffersByCityLength } from '../../storage/slice/offers-slice-catalog/offers-selectors';
import OffersSectionEmpty from './offers-section-empty';


function MainScreen(): JSX.Element {

  const offersLength = useAppSelector(getOffersByCityLength);
  const isLoadingOffersError = useAppSelector(getLoadingOffersError);

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
          {(offersLength !== 0 && !isLoadingOffersError) ? <OfferSection /> : <OffersSectionEmpty />}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
