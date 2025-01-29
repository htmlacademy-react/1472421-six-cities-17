import { AuthorizationStatus } from '../../../consts/const';
import { useAppSelector } from '../../../hooks/state/state-hooks';
import { getComments } from '../../../storage/slice/offers-slice-catalog/offers-selectors';
import { getAuthorizationStatus } from '../../../storage/slice/user-slice-catalog/user-selectors';
import OfferReviewsForm from './offer-reviews-form';
import OfferReviewsList from './offer-reviews-list';

type OfferReviewsProps = {
  offerId: string;
}


function OfferReviews({offerId}: OfferReviewsProps): JSX.Element {

  const userComments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    <section className="offer__reviews reviews">
      <OfferReviewsList userComments={userComments}/>
      {authorizationStatus === AuthorizationStatus.Auth && <OfferReviewsForm offerId={offerId}/>}
    </section>
  );
}

export default OfferReviews;
