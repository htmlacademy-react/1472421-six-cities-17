import { useAppSelector } from '../../hooks/state/state-hooks';
import { CityType } from '../../types/offer-types';
import CityCard from './city-name.tsx';

type CitiesListProps = {
  cities: CityType[];
}

function CitiesList({cities}: CitiesListProps): JSX.Element {

  const selectedCity = useAppSelector((state) => state.city);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityCard key={city.name} cityName={city.name} isSelected={selectedCity === city.name}/>)}
    </ul>
  );
}

export default CitiesList;
