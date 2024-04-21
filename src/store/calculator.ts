import { createSlice } from '@reduxjs/toolkit';

export interface initialState {
  tipAmount: number;
  total: number;
  bill: number;
  tipPercentage: number;
  numberOfPeople: number;
}

const initialState = {
  tipAmount: 0,
  total: 0,
  bill: 0,
  tipPercentage: 0,
  numberOfPeople: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    setBill(state, action) {
      const newBill = parseInt(action.payload.bill);

      if (newBill > 0) {
        state.bill = newBill;
      }
    },
    setNumberOfPeople(state, action) {
      const newNumberOfPeople = parseInt(action.payload.numberOfPeople);

      if (newNumberOfPeople > 0) {
        state.numberOfPeople = newNumberOfPeople;
      }
    },
    setTipPercentage(state, action) {
      const newTipPercentage = parseInt(action.payload.tipPercentage);

      if (newTipPercentage >= 0) {
        state.tipPercentage = newTipPercentage;
      }
    },
    resetState(state) {
      state.tipAmount = initialState.tipAmount;
      state.total = initialState.total;
      state.bill = initialState.bill;
      state.tipPercentage = initialState.tipPercentage;
      state.numberOfPeople = initialState.numberOfPeople;
    },
    calculateTipAmountAndTotal(state) {
      if (
        state.bill > 0 &&
        state.numberOfPeople > 0 &&
        state.tipPercentage >= 0
      ) {
        // TODO: implement logic
      }
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

export default calculatorSlice;
