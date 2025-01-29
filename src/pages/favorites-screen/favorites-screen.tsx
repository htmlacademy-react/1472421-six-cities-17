import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FavoritesLocationList from './favorites-location-list';
import { useAppSelector } from '../../hooks/state/state-hooks';
import { getOffers } from '../../storage/slice/offers-slice-catalog/offers-selectors';


function FavoritesScreen(): JSX.Element {

  const offers = useAppSelector(getOffers);

  return (
    <div className="page">

      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>

      <Header />
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
