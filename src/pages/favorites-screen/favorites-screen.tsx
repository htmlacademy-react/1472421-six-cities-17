import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AuthorizationStatus } from '../../const';
import FavoritesLocationList from './favorites-location-list';
import { OfferType } from '../../types/offer-types';

type FavoritesScreenProps = {
  authorizationStatus: AuthorizationStatus;
  offers: OfferType[];
}

function FavoritesScreen({authorizationStatus, offers}: FavoritesScreenProps): JSX.Element {
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
