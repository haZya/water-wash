import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommercial } from 'models/commercial';

const initialState: ICommercial = {
  bannerSection: {
    lottie: '',
  },
  specializationSection: {
    title: '',
    specializations: [],
  },
  enquireSection: {
    title: '',
    content: '',
    background: '',
  },
  formSection: {
    title: '',
    subtitle: '',
    form: {
      title: '',
      sections: [],
    },
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
  name: 'commercial/content',
  initialState,
  reducers: {
    setCommercialContent: (_state, action: PayloadAction<ICommercial>) => action.payload,
  },
});

export const { setCommercialContent } = contentSlice.actions;

export default contentSlice.reducer;
