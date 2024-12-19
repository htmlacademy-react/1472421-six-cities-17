import { UserComments } from '../../types/user-comments-type';
import OfferReviewsForm from './offer-reviews-form';
import OfferReviewsList from './offer-reviews-list';

type OfferReviewsProps = {
  userComments: UserComments[];
}

function OfferReviews({userComments}: OfferReviewsProps): JSX.Element {
  return(
    <section className="offer__reviews reviews">
      <OfferReviewsList userComments={userComments}/>
      <OfferReviewsForm />
    </section>
  );
}

export default OfferReviews;
