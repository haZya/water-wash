import { combineReducers } from '@reduxjs/toolkit';
import layout from './layoutSlice';
import message from './messageSlice';
import popup from './popupSlice';
import staggerItem from './staggerItemSlice';

const reducer = combineReducers({
  message,
  layout,
  staggerItem,
  popup,
});

export default reducer;
