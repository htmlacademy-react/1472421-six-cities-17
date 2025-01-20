import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../pages/main-screen/main-screen';
import { AppRoute } from '../const';
import LoginScreen from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import ErrorScreen from '../pages/error-page/error-screen';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route';
import { CityType } from '../types/offer-types';
import { UserComments } from '../types/user-type';
import Preloader from './preloader/preloader';
import { useAppSelector } from '../hooks/state/state-hooks';
import { getLoadingStatus } from '../storage/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AppProps = {
  cities: CityType[];
  userComments: UserComments[];
}

function App({cities, userComments}: AppProps): JSX.Element {

  const isLoading = useAppSelector(getLoadingStatus);

  if(isLoading) {
    return <Preloader />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {
            <MainScreen
              cities={cities}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element = {
            <LoginScreen />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element = {
            <PrivateRoute >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element = {
            <OfferScreen
              userComments={userComments}
            />
          }
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

/*
  - настроить переход в offer-screen из offer-screen для другого offer(под картой)
  - завести домены для всех названий action
  - добавить подгрузку коментариев и информации оffer
  - перейти на createSlice
  - отрефакторить карту, добавив еще 1 маркер - маркер активного оффера
  оранжевый, лишнюю функциональность убрать
  - добавить поля для каждой ошибки в state
*/
