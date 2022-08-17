import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHero } from 'models/home';

const initialState: IHero = {
  logo: '',
  items: [],
};

const heroSlice = createSlice({
  name: 'home/hero',
  initialState,
  reducers: {
    setHeroContent: (_state, action: PayloadAction<IHero>) => action.payload,
  },
});

export const { setHeroContent } = heroSlice.actions;

export default heroSlice.reducer;
