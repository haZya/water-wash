import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from 'models/contact';

const initialState: Omit<IContact, 'banner' | 'seo'> = {
  formSection: {
    title: '',
    subtitle: '',
    form: {
      fields: [],
    },
  },
  contactSection: {
    title: '',
    subtitle: '',
    contactMethods: [],
  },
  mapSection: {
    url: '',
  },
};

const contentSlice = createSlice({
  name: 'contact/content',
  initialState,
  reducers: {
    setContactContent: (_state, action: PayloadAction<typeof initialState>) => action.payload,
  },
});

export const { setContactContent } = contentSlice.actions;

export default contentSlice.reducer;
