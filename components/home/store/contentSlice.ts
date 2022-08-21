import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHome } from 'models/home';

const initialState: IHome = {
  hero: { items: [] },
  section1: {
    title: '',
    subtitle: '',
    items: [],
  },
};

const contentSlice = createSlice({
  name: 'home/content',
  initialState,
  reducers: {
    setHomeContent: (_state, action: PayloadAction<IHome>) => action.payload,
  },
});

export const { setHomeContent } = contentSlice.actions;

export default contentSlice.reducer;
