import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OfferDetails from './offer-details';
import OfferGallery from './offer-gallery';
import { NEARBY_VIEW_VALUE, NameCard } from '../../consts/const';
import { OfferType, OfferTypeById } from '../../types/offer-types';
import {useParams } from 'react-router-dom';
import OfferReviews from './reviews/offer-reviews';
import MapComponent from '../../components/map/map';
import { getOffersLocation } from '../../utils';
import { useEffect } from 'react';
import CardsList from '../../components/card/cards-list';
import { useAppDispatch, useAppSelector } from '../../hooks/state/state-hooks';
import ErrorScreen from '../error-page/error-screen';
import Preloader from '../../components/preloader/preloader';
import {fetchNearbyOffersAction, fetchOfferByIdAction, fetchUsersCommentsAction } from '../../storage/actions/api-actions-slice';
import { getLoadingCommentsStatus, getLoadingOfferByIdError, getLoadingOfferByIdStatus, getNearbyOffers, getOfferById } from '../../storage/slice/offers-slice-catalog/offers-selectors';


function OfferScreen(): JSX.Element {

  /* Вернет параметр адреса адресной строки для offer/:id (:id - параметр
  который будет генерироваться автоматически при клике на карточку предложения
  на главном экране, т.к. при клике на карточу с помощью
  служебного компонента Link приложение перенаправит пользователя на вновь сформированный
  адрес offer/id - где id - соответствует полю id конкретного предложения) */
  const {id} = useParams();
  const dispatch = useAppDispatch();


  /* При каждом изменении id или dispatch
  будет срабатывать useEffect и если id есть,
  тогда диспатчиться действие, которое вызовет асинх. функцию
  получения offer`а по id, а при успехе
  диспатчится действие получения коментариев и offer`ов
  неподалеку */
  useEffect(() => {
    if(id) {
      dispatch(fetchOfferByIdAction(id))
        .then((response) => {
          if(response.meta.requestStatus === 'fulfilled'){
            dispatch(fetchUsersCommentsAction(id));
            dispatch(fetchNearbyOffersAction(id));
          }
        });
    }
  }, [dispatch, id]);

  const currentOffer: OfferTypeById = useAppSelector(getOfferById);
  const nearbyOffers: OfferType[] = useAppSelector(getNearbyOffers).slice(0,NEARBY_VIEW_VALUE);
  const isLoadingOfferById = useAppSelector(getLoadingOfferByIdStatus);
  const isLoadingOfferByIdError = useAppSelector(getLoadingOfferByIdError);
  const isLoadingComment = useAppSelector(getLoadingCommentsStatus);


  if(id === undefined || isLoadingOfferByIdError){
    return <ErrorScreen />;
  }

  if(isLoadingOfferById || isLoadingComment){
    return <Preloader />;
  }

  return (
    <div className="page">

      <Helmet>
        <title>6 cities. Offers</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferGallery offer={currentOffer}/>

          <div className="offer__container container">
            <div className="offer__wrapper">

              <OfferDetails offer={currentOffer}/>

              <OfferReviews offerId={id}/>

            </div>
          </div>
          {nearbyOffers.length !== 0 ?
            <MapComponent
              className='offer'
              offersLocation={getOffersLocation(nearbyOffers)}
              currentOfferLocation={{id: currentOffer.id, location: currentOffer.location}}
            /> : null}
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
