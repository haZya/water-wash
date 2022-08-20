import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILayout } from 'models/shared';

interface IInitialState {
  layout: ILayout;
  navDrawerOpen: boolean;
}

const initialState: IInitialState = {
  layout: {
    logo: null,
    nav: {
      links: [],
    },
    socials: [],
  },
  navDrawerOpen: false,
};

const layoutSlice = createSlice({
  name: 'shared/layout',
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<Partial<IInitialState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
