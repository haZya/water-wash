import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResidential } from 'models/residential';

const initialState: Omit<IResidential, 'seo'> = {
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
  quoteSection: {
    title: '',
    content: '',
    buttons: [],
    backgroundImage: {
      src: '',
      alt: '',
    },
  },
  planSection: {
    title: '',
    plans: [],
  },
  serviceSection: {
    items: [],
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
  name: 'residential/content',
  initialState,
  reducers: {
    setResidentialContent: (_state, action: PayloadAction<typeof initialState>) => action.payload,
  },
});

export const { setResidentialContent } = contentSlice.actions;

export default contentSlice.reducer;
