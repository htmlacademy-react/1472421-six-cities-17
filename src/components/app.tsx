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
import Preloader from './preloader/preloader';
import { useAppSelector } from '../hooks/state/state-hooks';
import { getLoadingStatus } from '../storage/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AppProps = {
  cities: CityType[];
}

function App({cities}: AppProps): JSX.Element {

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
            <OfferScreen />
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
  - перейти на createSlice
  - добавить поля для каждой ошибки в state
  - отредактировать страницу оффера в соответствии с ТЗ!!!
  - сделать прелоадер коментов и предложений неподалеку(почему ингда 404)
  - отрефакторить возможность отправлять коментарии в соответствии с ТЗ!!
  - добавить функции для всех селекторов
  - добавить отображение почты пользователя при логировании
*/
