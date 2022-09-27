import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILayout } from 'models/shared';

interface IInitialState {
  layoutContent: ILayout;
  hasBanner: boolean;
  navDrawerOpen: boolean;
  footerHeight: number;
}

const initialState: IInitialState = {
  layoutContent: {
    logo: {
      src: '',
      alt: '',
    },
    socials: [],
    contactDial: {
      icon: {
        src: '',
        alt: '',
      },
      color: 'primary',
      actions: [],
    },
    navTop: {
      contactMethods: [],
      links: [],
    },
    nav: {
      links: [],
    },
    footer: {
      copyrightText: '',
    },
  },
  hasBanner: false,
  navDrawerOpen: false,
  footerHeight: 0,
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
