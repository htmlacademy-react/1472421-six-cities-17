import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersSlice } from './slice/offers-slice-catalog/offers-slice';
import { userSlice } from './slice/user-slice-catalog/user-slice';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
