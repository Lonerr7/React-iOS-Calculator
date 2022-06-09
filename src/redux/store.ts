import { configureStore } from '@reduxjs/toolkit';
import keyboardSlice from './keyboardSlice';
import screenSlice from './screenSlice';

const store = configureStore({
  reducer: {
    screen: screenSlice,
    keyboard: keyboardSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
