import { useState } from 'react';
import CardsList from '../../components/card/cards-list';
import MapComponent from '../../components/map/map';
import { NameCard } from '../../const';
import { getOffersLocation } from '../../utils';
import SortOffersForm from './sort-offers-form';
import { useAppSelector } from '../../hooks/state/state-hooks';
import { getCurrentCity, getSortedOffers } from '../../storage/selectors';


function OfferSection(): JSX.Element {

  const [currentOfferId, setCurrentOfferId] = useState<string | undefined>(undefined);

  const sortedOffers = useAppSelector(getSortedOffers);

  const currentCity = useAppSelector(getCurrentCity);


  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} places to stay in {currentCity}</b>
        <SortOffersForm />
        <CardsList
          offers={sortedOffers}
          nameCard={NameCard.Cities}
          setCurrentOfferId={setCurrentOfferId}
        />
      </section>
      <div className="cities__right-section">
        <MapComponent
          className='cities'
          offersLocation={getOffersLocation(sortedOffers)}
          selectedOfferId={currentOfferId}
        />
      </div>
    </div>
  );
}

export default OfferSection;
