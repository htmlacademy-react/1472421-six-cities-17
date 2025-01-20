import { useAppSelector } from '../../hooks/state/state-hooks';
import OfferReviewsForm from './offer-reviews-form';
import OfferReviewsList from './offer-reviews-list';


function OfferReviews(): JSX.Element {

  const userComments = useAppSelector((state) => state.usersComments);

  return(
    <section className="offer__reviews reviews">
      <OfferReviewsList userComments={userComments}/>
      <OfferReviewsForm />
    </section>
  );
}

export default OfferReviews;
