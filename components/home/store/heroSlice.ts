import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHome } from 'models/home';

const initialState: IHome['hero'] = {
  items: [],
};

const heroSlice = createSlice({
  name: 'home/hero',
  initialState,
  reducers: {
    setHero: (_state, action: PayloadAction<typeof initialState>) => action.payload,
  },
});

export const { setHero } = heroSlice.actions;

export default heroSlice.reducer;
