import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StaggerItem = {
  index: number;
  when: boolean;
  animationStarted?: boolean;
  animationEnded?: boolean;
};

interface IInitialState {
  containers: {
    name: string;
    items: StaggerItem[];
  }[];
}

const initialState: IInitialState = {
  containers: [],
};

const staggerItemSlice = createSlice({
  name: 'shared/staggerItem',
  initialState,
  reducers: {
    setStaggerItem: (state, action: PayloadAction<StaggerItem & { containerName: string }>) => {
      const { containerName, index, when, animationStarted, animationEnded } = action.payload;
      const container = state.containers.find((c) => c.name === containerName);
      const item = container?.items[index];

      if (!container) {
        state.containers.push({ name: containerName, items: [] });
      }

      if (item) {
        item.when = when;
        item.animationStarted = animationStarted;
        item.animationEnded = !when ? false : animationEnded;
      } else {
        container?.items.push({ index, when, animationStarted, animationEnded });
      }
    },
  },
});

export const { setStaggerItem } = staggerItemSlice.actions;

export default staggerItemSlice.reducer;
