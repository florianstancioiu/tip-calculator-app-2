import { createSlice } from '@reduxjs/toolkit';

export interface initialState {
  tipAmount: number | string;
  total: number | string;
  bill: number;
  tipPercentage: number;
  numberOfPeople: number;
}

const initialState = {
  tipAmount: 0,
  total: 0,
  bill: 0,
  tipPercentage: 10,
  numberOfPeople: 1,
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
        const { bill, numberOfPeople, tipPercentage } = state;
        const tipAmount = ((tipPercentage / 100) * bill) / numberOfPeople;
        const total = bill / numberOfPeople + tipAmount;

        state.tipAmount = +parseFloat(tipAmount.toString()).toFixed(2);
        state.total = +parseFloat(total.toString()).toFixed(2);
      }
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

export default calculatorSlice;
