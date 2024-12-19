import OfferReviewsForm from './offer-reviews-form';
import OfferReviewsList from './offer-reviews-list';

function OfferReviews(): JSX.Element {
  return(
    <section className="offer__reviews reviews">
      <OfferReviewsList />
      <OfferReviewsForm />
    </section>
  );
}

export default OfferReviews;
