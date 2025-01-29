import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FavoritesLocationList from './favorites-location-list';
import { useAppSelector } from '../../hooks/state/state-hooks';
import { getAuthorizationStatus } from '../../storage/slice/user-slice-catalog/user-selectors';
import { AppRoute, AuthorizationStatus } from '../../consts/const';
import { useNavigate } from 'react-router-dom';


function FavoritesScreen(): JSX.Element {

  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if(authorizationStatus !== AuthorizationStatus.Auth){
    navigate(AppRoute.Login);
  }


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
            <FavoritesLocationList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
