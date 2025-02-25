import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './pages/main-screen/main-screen';
import { AppRoute } from './consts/const';
import LoginScreen from './pages/login-screen/login-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import ErrorScreen from './pages/error-page/error-screen';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './private-route';
import Preloader from './components/preloader/preloader';
import { useAppSelector } from './hooks/state/state-hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLoadingOffersStatus } from './storage/slice/offers-slice-catalog/offers-selectors';


function App(): JSX.Element {

  const isLoading = useAppSelector(getLoadingOffersStatus);

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
            element = {<MainScreen />}
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
  - добавить отображение добавленных в избранное
  - отрефакторить названия полей в state
  - показывать прелоадер при загрузке оффера, при ошибке запроса показывать 404,
    сделать это в слайсах, обработава состояния reject и fullfield
  - browserHistory ?
*/
