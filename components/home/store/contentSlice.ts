import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHome, ISection2Item } from 'models/home';

const initialState: IHome = {
  hero: { items: [] },
  section1: {
    title: '',
    subtitle: '',
    items: [],
  },
  section2: {
    title: '',
    items: [],
  },
  section3: {
    title: '',
    script: {
      url: '',
      className: '',
    },
  },
  section4: {
    title: '',
    subtitle: '',
    form: {
      title: '',
      sections: [],
    },
  },
};

const contentSlice = createSlice({
  name: 'home/content',
  initialState,
  reducers: {
    setHomeContent: (_state, action: PayloadAction<IHome>) => action.payload,
    setSection2ItemState: (
      state,
      action: PayloadAction<
        Pick<ISection2Item, 'inView' | 'animationStarted' | 'animationEnded'> & { index: number }
      >
    ) => {
      const { index, inView, animationStarted, animationEnded } = action.payload;
      const item = state.section2.items[index];
      item.inView = inView;
      item.animationStarted = animationStarted;
      item.animationEnded = animationEnded;
    },
  },
});

export const { setHomeContent, setSection2ItemState } = contentSlice.actions;

export default contentSlice.reducer;
