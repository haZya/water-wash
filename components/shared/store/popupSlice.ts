import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface IInitialState {
  el: Element | null;
  open: boolean;
  rect: DOMRect | undefined;
  animationEnded: boolean;
  children: ReactNode;
}

const initialState: IInitialState = {
  el: null,
  open: false,
  children: null,
  rect: undefined,
  animationEnded: true,
};

const popupSlice = createSlice({
  name: 'shared/popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<Pick<IInitialState, 'el' | 'children'>>) => ({
      ...state,
      ...action.payload,
      open: true,
      rect: action.payload.el?.getBoundingClientRect(),
      animationEnded: false,
    }),
    closePopup: (state) => ({
      ...state,
      open: false,
      rect: state.el?.getBoundingClientRect(),
      animationEnded: false,
    }),
    setAnimationEnd: (state) => ({
      ...state,
      animationEnded: true,
    }),
  },
});

export const { openPopup, closePopup, setAnimationEnd } = popupSlice.actions;

export default popupSlice.reducer;
