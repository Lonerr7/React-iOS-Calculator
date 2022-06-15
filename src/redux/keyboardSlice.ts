import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeyboardState, TopKeysOperations } from '../types/types';

const initialState: KeyboardState = {
  topKeys: ['AC', '±', '%'],
  bottomKeys: ['7', '8', '9', '4', '5', '6', '1', '2', '3'],
  rightKeys: ['÷', 'x', '-', '+', '='],
  lastRowKeys: [{ title: '0', classNameProp: 'special' }, { title: ',' }],
  displayedNumber: '0',
  prevNumber: 0,
  mathOperation: '',
  prevMathOperation: '',
  result: 0,
};

const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    changeDisplayedNumber(state, action: PayloadAction<string>) {
      if (state.displayedNumber === '0' && action.payload !== ',') {
        state.displayedNumber = action.payload.toString();
      } else if (action.payload === ',') {
        if (state.displayedNumber === '0') {
          state.displayedNumber = `${state.displayedNumber}${action.payload}`;
        } else if (state.displayedNumber.indexOf(',') === -1) {
          state.displayedNumber = `${state.displayedNumber}${action.payload}`;
        }
      } else if (
        state.displayedNumber.length < 15 &&
        state.displayedNumber.indexOf(',') === -1
      ) {
        if (
          state.displayedNumber.length === 3 ||
          state.displayedNumber.length === 7 ||
          state.displayedNumber.length === 11
        ) {
          state.displayedNumber += ` ${action.payload.toString()}`;
        } else {
          state.displayedNumber += action.payload.toString();
        }
      } else if (
        state.displayedNumber.length < 15 &&
        state.displayedNumber.indexOf(',')
      ) {
        state.displayedNumber = `${state.displayedNumber}${action.payload}`;
      }
    },
    operateTopRowButtons(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case TopKeysOperations.AC:
          state.displayedNumber = '0';
          state.mathOperation = '';
          state.prevNumber = 0;
          state.result = 0;
          state.prevMathOperation = '';
          break;
        case TopKeysOperations.PlusMinus:
          if (!state.displayedNumber.startsWith('-')) {
            state.displayedNumber = `-${state.displayedNumber}`;
            state.prevNumber = parseFloat(state.displayedNumber);
          } else {
            state.displayedNumber = state.displayedNumber.slice(1);
            state.prevNumber = +state.displayedNumber;
          }
          break;
        case TopKeysOperations.Percentage:
          state.displayedNumber = (+state.displayedNumber / 100).toString();
      }
    },
    setPlusOperation(state, action: PayloadAction<string>) {
      state.mathOperation = action.payload;
      if (!state.prevMathOperation) {
        state.prevNumber = parseFloat(state.displayedNumber);
        state.displayedNumber = '0';
      } else if (state.prevMathOperation === '-') {
        state.prevNumber -= parseFloat(state.displayedNumber);
        state.displayedNumber = '0';
      } else {
        state.prevNumber += parseFloat(state.displayedNumber);
        state.displayedNumber = '0';
      }
      state.prevMathOperation = action.payload;
    },
    setMinusOperation(state, action: PayloadAction<string>) {
      state.mathOperation = action.payload;
      if (!state.prevMathOperation) {
        state.prevNumber = parseFloat(state.displayedNumber);
        state.displayedNumber = '0';
      } else if (state.prevMathOperation === '+') {
        state.prevNumber += parseFloat(state.displayedNumber);
        state.displayedNumber = '0';
      } else {
        state.prevNumber -= parseFloat(state.displayedNumber);
        state.displayedNumber = '0';
      }
      state.prevMathOperation = action.payload;
    },
    setEqualOperation(state) {
      if (state.prevMathOperation === '+') {
        state.displayedNumber = (
          +state.displayedNumber + state.prevNumber
        ).toString();
      } else if (state.prevMathOperation === '-') {
        state.displayedNumber = (
          state.prevNumber - +state.displayedNumber
        ).toString();
      }
      state.prevNumber = 0;
    },
  },
});

export const {
  changeDisplayedNumber,
  operateTopRowButtons,
  setPlusOperation,
  setEqualOperation,
  setMinusOperation,
} = keyboardSlice.actions;
export default keyboardSlice.reducer;
