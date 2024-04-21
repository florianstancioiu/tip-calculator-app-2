import { configureStore } from '@reduxjs/toolkit';

import calculatorSlice from './calculator';

const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
