import { OfferType } from '../../types/offer-types';
import OfferImage from './offer-picture';

type OfferGalleryProps = {
  offer: OfferType;
}

function OfferGallery({offer}: OfferGalleryProps): JSX.Element {


  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offer.images.map((image) => <OfferImage key={`${image}`} image={image}/>)}
      </div>
    </div>
  );
}

export default OfferGallery;
