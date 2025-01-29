import { memo, useState } from 'react';
import { SortingParams } from '../../consts/const';
import { useAppDispatch, useAppSelector } from '../../hooks/state/state-hooks';
import { changeSortParam } from '../../storage/slice/offers-slice-catalog/offers-slice';
import { getSortParam } from '../../storage/slice/offers-slice-catalog/offers-selectors';


function SortOffersForm(): JSX.Element {

  const [optionsState, setOptionsState] = useState<string>('close');

  const currentSortParam: SortingParams = useAppSelector(getSortParam);

  const dispatch = useAppDispatch();

  const onClickOptions = ():void => {
    if(optionsState === 'close'){
      setOptionsState('opened');
      return;
    }
    setOptionsState('close');
  };

  const clickSortChangeHandler = (param: SortingParams) => {
    dispatch(changeSortParam(param));
    setOptionsState('close');
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onClickOptions}>
        {currentSortParam}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${optionsState}`}>
        {Object.values(SortingParams).map((param) => (
          <li
            key={param}
            className={`places__option ${param === currentSortParam ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => clickSortChangeHandler(param)}
          >
            {param}
          </li>))}
      </ul>
    </form>
  );
}

const SortOffersFormMemo = memo(SortOffersForm);
export default SortOffersFormMemo;

