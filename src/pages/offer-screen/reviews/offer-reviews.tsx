import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks/state/state-hooks';
import { getAuthorizationStatus } from '../../../storage/selectors';
import OfferReviewsForm from './offer-reviews-form';
import OfferReviewsList from './offer-reviews-list';

type OfferReviewsProps = {
  offerId: string;
}


function OfferReviews({offerId}: OfferReviewsProps): JSX.Element {

  const userComments = useAppSelector((state) => state.usersComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    <section className="offer__reviews reviews">
      <OfferReviewsList userComments={userComments}/>
      {authorizationStatus === AuthorizationStatus.Auth && <OfferReviewsForm offerId={offerId}/>}
    </section>
  );
}

export default OfferReviews;
