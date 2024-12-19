import OfferReviewsItem from './offer-reviews-item';

function OfferReviewsList(): JSX.Element {
  return(
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        <OfferReviewsItem />
      </ul>
    </>
  );
}

export default OfferReviewsList;
