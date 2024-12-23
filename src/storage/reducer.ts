import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './actions';

const initialState = {
  city: 'Amsterdam',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
})
export {reducer}
