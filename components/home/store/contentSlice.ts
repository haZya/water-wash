import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGallerySectionItem, IHome } from 'models/home';

const initialState: IHome = {
  hero: { items: [] },
  descriptiveSection: {
    title: '',
    subtitle: '',
    items: [],
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
  reqFormSection: {
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
    setGallerySectionItemState: (
      state,
      action: PayloadAction<
        Pick<IGallerySectionItem, 'inView' | 'animationStarted' | 'animationEnded'> & {
          index: number;
        }
      >
    ) => {
      const { index, inView, animationStarted, animationEnded } = action.payload;
      const item = state.gallerySection.items[index];
      item.inView = inView;
      item.animationStarted = animationStarted;
      item.animationEnded = animationEnded;
    },
  },
});

export const { setHomeContent, setGallerySectionItemState } = contentSlice.actions;

export default contentSlice.reducer;
