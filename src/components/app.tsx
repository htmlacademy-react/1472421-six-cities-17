import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../const';
import LoginScreen from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import ErrorScreen from '../pages/error-page/error-screen';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route';

type AppProps = {
  citiesCount: number;
}

function App({citiesCount}: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element = {<MainScreen citiesCount={citiesCount} authorizationStatus = {AuthorizationStatus.NoAuth}/>}
          />
          <Route
            path={AppRoute.Login}
            element = {<LoginScreen authorizationStatus = {AuthorizationStatus.NoAuth}/>}
          />
          <Route
            path={AppRoute.Favorites}
            element = {
              <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
                <FavoritesScreen authorizationStatus = {AuthorizationStatus.NoAuth}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element = {<OfferScreen authorizationStatus = {AuthorizationStatus.NoAuth}/>}
          />
          <Route
            path={AppRoute.Error}
            element = {<ErrorScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

