import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHome } from 'models/home';

const initialState: Omit<IHome, 'seo'> = {
  title: '',
  slug: '',
  hero: {
    items: [],
    backgroundImage: {
      src: '',
      alt: '',
    },
  },
  quoteSection: {
    title: '',
    content: '',
    buttons: [],
    backgroundImage: {
      src: '',
      alt: '',
    },
  },
  descriptiveSection: {
    title: '',
    subtitle: '',
    items: [],
    backgroundImage: {
      src: '',
      alt: '',
    },
  },
  gallerySection: {
    title: '',
    items: [],
  },
  reviewSection: {
    title: '',
    script: {
      url: '',
      className: '',
    },
  },
  formSection: {
    title: '',
    subtitle: '',
    form: {
      title: '',
      sections: [],
    },
    backgroundImage: {
      src: '',
      alt: '',
    },
  },
};

const contentSlice = createSlice({
  name: 'home/content',
  initialState,
  reducers: {
    setHomeContent: (_state, action: PayloadAction<typeof initialState>) => action.payload,
  },
});

export const { setHomeContent } = contentSlice.actions;

export default contentSlice.reducer;
