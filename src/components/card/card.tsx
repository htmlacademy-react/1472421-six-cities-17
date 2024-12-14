import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer-types';
import { getClassSet } from '../../utils';
import { NameCard } from '../../const';

type CardProps = {
  offer: OfferType;
  onMouseOverHandler: (offerId: string) => void;
  currentClass: NameCard;
}


function Card({offer, onMouseOverHandler, currentClass}: CardProps): JSX.Element {

  const cardOfferURL = `/offer/${offer.id}`;

  const classSet = getClassSet(currentClass);

  return(
    <article className={`${classSet.card} place-card`} onMouseOver={() => onMouseOverHandler(offer.id)}>
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
            className="place-card__bookmark-button button"
            type="button"
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
