import { OfferType } from '../../types/offer-types';
import OfferImage from './offer-picture';

type OfferGalleryProps = {
  offer: OfferType;
}

function OfferGallery({offer}: OfferGalleryProps): JSX.Element {

  let idImage = 0;

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offer.images.map((image) => {
          idImage++;
          return <OfferImage key={idImage} image={image}/>;
        })}
      </div>
    </div>
  );
}

export default OfferGallery;
