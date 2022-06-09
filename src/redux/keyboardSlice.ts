import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeyboardState } from '../types/types';

const initialState: KeyboardState = {
  topKeys: ['AC', '±', '%'],
  displayedNumber: '0',
  bottomKeys: ['7', '8', '9', '4', '5', '6', '1', '2', '3'],
  rightKeys: ['÷', 'x', '-', '+', '='],
  lastRowKeys: [{ title: '0', classNameProp: 'special' }, { title: '.' }],
};

const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    changeDisplayedNumber(state, action: PayloadAction<string>) {
      if (state.displayedNumber === '0') {
        state.displayedNumber = action.payload.toString();
      } else if (state.displayedNumber.length < 15) {
        if (
          state.displayedNumber.length === 3 ||
          state.displayedNumber.length === 7 ||
          state.displayedNumber.length === 11
        ) {
          state.displayedNumber += ` ${action.payload.toString()}`;
        } else {
          state.displayedNumber += action.payload.toString();
        }
      }
    },
    operateTopRowButtons(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case 'AC':
          state.displayedNumber = '0';
          break;
        case '±':
          if (!state.displayedNumber.startsWith('-')) {
            state.displayedNumber = `-${state.displayedNumber}`
          } else {
            state.displayedNumber = state.displayedNumber.slice(1);
          }
      }
    },
  },
});

export const { changeDisplayedNumber, operateTopRowButtons } =
  keyboardSlice.actions;
export default keyboardSlice.reducer;
