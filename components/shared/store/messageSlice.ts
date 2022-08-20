import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface IInitialState {
  show: boolean;
  options: {
    anchorOrigin?: {
      vertical: 'top' | 'bottom';
      horizontal: 'left' | 'center' | 'right';
    };
    autoHideDuration?: number;
    message: ReactNode;
    variant: AlertColor;
    actions?: { name: string; onClick: any }[];
  };
}

const initialState: IInitialState = {
  show: false,
  options: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    autoHideDuration: 6000,
    message: '',
    variant: 'info',
    actions: [],
  },
};

const messageSlice = createSlice({
  name: 'shared/message',
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<IInitialState['options']>) => {
      state.show = true;
      state.options = {
        ...initialState.options,
        ...action.payload,
      };
    },
    hideMessage: (state) => {
      state.show = false;
    },
  },
});

export const { hideMessage, showMessage } = messageSlice.actions;

export default messageSlice.reducer;
