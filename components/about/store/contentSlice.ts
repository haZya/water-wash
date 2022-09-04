import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAbout } from 'models/about';

const initialState: IAbout = {
  valueSection: {
    items: [],
  },
};

const contentSlice = createSlice({
  name: 'about/content',
  initialState,
  reducers: {
    setAboutContent: (_state, action: PayloadAction<IAbout>) => action.payload,
  },
});

export const { setAboutContent } = contentSlice.actions;

export default contentSlice.reducer;
