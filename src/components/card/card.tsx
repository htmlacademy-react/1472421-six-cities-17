import { Link, useNavigate } from 'react-router-dom';
import { OfferType } from '../../types/offer-types';
import { getClassSet } from '../../utils';
import { AppRoute, AuthorizationStatus, NameCard } from '../../consts/const';
import { useAppDispatch, useAppSelector } from '../../hooks/state/state-hooks';
import { updateFavoriteOfferStatusAction } from '../../storage/actions/api-actions-slice';
import { getFavoriteStatus } from '../../storage/slice/offers-slice-catalog/offers-selectors';
import { getAuthorizationStatus } from '../../storage/slice/user-slice-catalog/user-selectors';

type CardProps = {
  offer: OfferType;
  setCurrentOfferId?: (offerId: string | undefined) => void;
  currentClass: NameCard;
}


function Card({offer, setCurrentOfferId, currentClass}: CardProps): JSX.Element {

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const cardOfferURL = `/offer/${offer.id}`;

  const classSet = getClassSet(currentClass);

  const favoriteStatus = useAppSelector((state) => getFavoriteStatus(state, offer.id));

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleOnMouseOver = (): void => setCurrentOfferId?.(offer.id);
  const handleOnMouseOut = (): void => setCurrentOfferId?.(undefined);

  const handleFavoriteButtonClick = (): void => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      dispatch(updateFavoriteOfferStatusAction({id: offer.id, status: !favoriteStatus}));
    }else {
      navigate(AppRoute.Login);
    }
  };

  return(
    <article
      className={`${classSet.card} place-card`}
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${classSet.image} place-card__image-wrapper`}>
        <Link to={cardOfferURL}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={classSet.info}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${favoriteStatus && 'place-card__bookmark-button--active'} button`}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={cardOfferURL}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
