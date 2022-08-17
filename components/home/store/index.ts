import { combineReducers } from '@reduxjs/toolkit';
import hero from './heroSlice';

const reducer = combineReducers({
  hero,
});

export default reducer;
