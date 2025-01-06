import CardsList from '../../components/card/cards-list';
import MapComponent from '../../components/map/map';
import { NameCard } from '../../const';
import { CityName, OfferType } from '../../types/offer-types';
import { getOffersLocation } from '../../utils';
import SortOffersForm from './sort-offers-form';

type OfferSectionProps = {
  offers: OfferType[];
  currentCity: CityName;
  onOverOffer: (offerId: string) => void;
  onOutOffer: () => void;
  currentOffer: OfferType | undefined;
}


function OfferSection({offers, currentCity, onOverOffer, onOutOffer, currentOffer}: OfferSectionProps): JSX.Element {
  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {currentCity}</b>
        <SortOffersForm />
        <div className="cities__places-list places__list tabs__content">
          <CardsList
            offers={offers}
            nameCard={NameCard.Cities}
            onOverOffer={onOverOffer}
            onOutOffer={onOutOffer}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map" >
          <MapComponent
            offersLocation={getOffersLocation(offers)}
            selectedOffer={currentOffer}
            currentCity={currentCity}
          />
        </section>
      </div>
    </div>
  );
}

export default OfferSection;
