import { UserComments } from '../../../types/user-type';
import OfferReviewsItem from './offer-reviews-item';

type OfferReviewsListProps = {
  userComments: UserComments[];
}


function OfferReviewsList({userComments}: OfferReviewsListProps): JSX.Element {
  return(
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{userComments.length}</span>
      </h2>
      <ul className="reviews__list">
        {userComments.map((comment) => <OfferReviewsItem key={comment.id} comment={comment}/>)}
      </ul>
    </>
  );
}

export default OfferReviewsList;
