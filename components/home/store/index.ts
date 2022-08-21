import { combineReducers } from '@reduxjs/toolkit';
import content from './contentSlice';

const reducer = combineReducers({
  content,
});

export default reducer;
