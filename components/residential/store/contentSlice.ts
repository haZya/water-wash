import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResidential } from 'models/residential';

const initialState: IResidential = {
  bannerSection: {
    lottie: '',
  },
  specializationSection: {
    title: '',
    specializations: [],
  },
  quoteSection: {
    title: '',
    content: '',
    background: '',
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
      subtitle: '',
    },
    content: {
      title: '',
      content: '',
      image: '',
      badge: '',
    },
  },
};

const contentSlice = createSlice({
  name: 'residential/content',
  initialState,
  reducers: {
    setResidentialContent: (_state, action: PayloadAction<IResidential>) => action.payload,
  },
});

export const { setResidentialContent } = contentSlice.actions;

export default contentSlice.reducer;
