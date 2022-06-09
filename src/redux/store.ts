import { configureStore } from '@reduxjs/toolkit';
import keyboardSlice from './keyboardSlice';

const store = configureStore({
  reducer: {
    keyboard: keyboardSlice,
  },
});

export default store;

declare const window: any;
window.store = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
