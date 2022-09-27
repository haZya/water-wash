import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAbout } from 'models/about';

const initialState: Omit<IAbout, 'banner' | 'seo'> = {
  title: '',
  slug: '',
  missionSection: {
    title: '',
    content: '',
    image: {
      src: '',
      alt: '',
    },
  },
  valueSection: {
    items: [],
  },
};

const contentSlice = createSlice({
  name: 'about/content',
  initialState,
  reducers: {
    setAboutContent: (_state, action: PayloadAction<typeof initialState>) => action.payload,
  },
});

export const { setAboutContent } = contentSlice.actions;

export default contentSlice.reducer;
