import { combineReducers } from '@reduxjs/toolkit';
import layoutSlice from './layoutSlice';
import message from './messageSlice';

const reducer = combineReducers({
  message,
  layoutSlice,
});

export default reducer;
