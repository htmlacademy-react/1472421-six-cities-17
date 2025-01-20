import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OfferDetails from './offer-details';
import OfferGallery from './offer-gallery';
import { NameCard } from '../../const';
import { OfferType, OfferTypeById } from '../../types/offer-types';
import {useParams } from 'react-router-dom';
import OfferReviews from './offer-reviews';
import MapComponent from '../../components/map/map';
import { getOffersLocation } from '../../utils';
import { useEffect } from 'react';
import CardsList from '../../components/card/cards-list';
import { useAppDispatch, useAppSelector } from '../../hooks/state/state-hooks';
import { getCurrentCity } from '../../storage/selectors';
import { loadOfferById } from '../../storage/actions/actions';
import { fetchNearbyCommentAction, fetchOfferByIdAction, fetchUsersCommentsAction } from '../../storage/actions/api-actions';
import ErrorScreen from '../error-page/error-screen';


function OfferScreen(): JSX.Element {

  /* Вернет параметр адреса адресной строки для offer/:id (:id - параметр
  который будет генерироваться автоматически при клике на карточку предложения
  на главном экране, т.к. при клике на карточу с помощью
  служебного компонента Link приложение перенаправит пользователя на вновь сформированный
  адрес offer/id - где id - соответствует полю id конкретного предложения) */
  const {id} = useParams();
  const dispatch = useAppDispatch();


  const currentCity = useAppSelector(getCurrentCity);

  /* При каждом изменении id или dispatch
  будет срабатывать useEffect и если id есть,
  тогда диспатчиться действие, которое вызовет асинх. функцию
  получения offer`а gпо id, а при успехе
  диспатчится действие получения коментариев и offer`ов
  неподалеку */
  useEffect(() => {
    if(id) {
      dispatch(fetchOfferByIdAction(id))
        .then((response) => {
          if(response.meta.requestStatus = 'fulfilled'){
            dispatch(fetchUsersCommentsAction(id));
            dispatch(fetchNearbyCommentAction(id));
          }
        });
    }
    return () => {
      dispatch(loadOfferById(null));
    };
  }, [dispatch, id]);

  const currentOffer: OfferTypeById | null = useAppSelector((state) => state.offerById);
  const nearbyOffers: OfferType[] = useAppSelector((state) => state.nearbyOffers.slice(0, 3));

  if(currentOffer === null){
    return <ErrorScreen />
  }

  return (
    <div className="page">

      <Helmet>
        <title>6 cities. Offers</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">

          {currentOffer !== null && <OfferGallery offer={currentOffer}/>}

          <div className="offer__container container">
            <div className="offer__wrapper">

              {currentOffer !== null && <OfferDetails offer={currentOffer}/>}

              <OfferReviews />

            </div>
          </div>
          <section className="offer__map map">
            {nearbyOffers.length !== 0 ?
              <MapComponent
                offersLocation={getOffersLocation(nearbyOffers)}
                currentCity={currentCity}
              /> : null}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardsList offers={nearbyOffers} nameCard={NameCard.Offers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
