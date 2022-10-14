import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommercial } from 'models/commercial';

const initialState: Omit<ICommercial, 'seo'> = {
  title: '',
  slug: '',
  bannerSection: {
    lottie: {
      src: '',
    },
  },
  specializeSection: {
    title: '',
    specializations: [],
  },
  enquireSection: {
    title: '',
    content: '',
    buttons: [],
    backgroundImage: {
      src: '',
      alt: '',
    },
  },
  testimonialSection: {
    title: '',
    items: [],
  },
  formSection: {
    title: '',
    subtitle: '',
    form: {
      title: '',
      subtitle: '',
      sections: [],
    },
  },
  missionSection: {
    title: '',
    mission: {
      title: '',
      content: '',
    },
    content: {
      title: '',
      content: '',
      image: {
        src: '',
        alt: '',
      },
      badge: {
        src: '',
        alt: '',
      },
    },
  },
};

const contentSlice = createSlice({
  name: 'commercial/content',
  initialState,
  reducers: {
    setCommercialContent: (_state, action: PayloadAction<typeof initialState>) => action.payload,
  },
});

export const { setCommercialContent } = contentSlice.actions;

export default contentSlice.reducer;
