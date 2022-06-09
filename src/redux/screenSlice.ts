import { createSlice } from '@reduxjs/toolkit';
import { ScreenState } from '../types/types';

const initialState: ScreenState = {
  displayedNumber: 0,
};

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {},
});

export const {} = screenSlice.actions;
export default screenSlice.reducer;
