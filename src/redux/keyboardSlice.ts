import { createSlice } from '@reduxjs/toolkit';
import { KeyboardState } from '../types/types';

const initialState: KeyboardState = {
  topKeys: ['AC', '±', '%'],
  bottomKeys: [7, 8, 9, 4, 5, 6, 1, 2, 3],
  rightKeys: ['÷', 'x', '-', '+', '='],
  lastRowKeys: [{ title: 0, classNameProp: 'special' }, { title: '.' }],
};

const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {},
});

export const {} = keyboardSlice.actions;
export default keyboardSlice.reducer;
