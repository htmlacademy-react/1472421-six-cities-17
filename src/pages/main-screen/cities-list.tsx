import { CITIES } from '../../consts/city-location.ts';
import { useAppSelector } from '../../hooks/state/state-hooks.ts';
import { getCurrentCity } from '../../storage/slice/offers-slice-catalog/offers-selectors.ts';
import CityCard from './city-name.tsx';


function CitiesList(): JSX.Element {

  const currentCity = useAppSelector(getCurrentCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => <CityCard key={city.name} cityName={city.name} isSelected={currentCity === city.name}/>)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
