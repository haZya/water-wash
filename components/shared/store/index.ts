import { combineReducers } from '@reduxjs/toolkit';
import layout from './layoutSlice';
import message from './messageSlice';

const reducer = combineReducers({
  message,
  layout,
});

export default reducer;
