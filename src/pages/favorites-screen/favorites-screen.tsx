import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AuthorizationStatus } from '../../const';
import FavoritesLocationList from './favorites-location-list';
import { useAppSelector } from '../../hooks/state/state-hooks';

type FavoritesScreenProps = {
  authorizationStatus: AuthorizationStatus;
}

function FavoritesScreen({authorizationStatus}: FavoritesScreenProps): JSX.Element {

  const offers = useAppSelector((state) => state.offers);

  return (
    <div className="page">

      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>

      <Header authorizationStatus = {authorizationStatus}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesLocationList offers={offers}/>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
