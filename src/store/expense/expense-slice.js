import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
    income: 1000,
    // osef de ça c'est pour le middleware
    countActionsPerformed: 0,
  },
  reducers: {
    addExpense: (currentSlice, action) => {
      currentSlice.expenseList.push({
        ...action.payload,
        price: parseFloat(action.payload.price),
      });
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = parseFloat(action.payload);
    },
    incrementCountActionsPerformed: (currentSlice) => {
      currentSlice.countActionsPerformed++;
    },
    deleteExpense: (currentSlice, action) => {
      currentSlice.expenseList = currentSlice.expenseList.filter(
        (expense) => expense.id !== action.payload
      );
    },
    deleteAll: (currentSlice) => {
      currentSlice.expenseList = [];
    },
  },
});

const {
  addExpense,
  setIncome,
  deleteExpense,
  deleteAll,
  incrementCountActionsPerformed,
} = expenseSlice.actions;

export {
  addExpense,
  setIncome,
  deleteExpense,
  deleteAll,
  incrementCountActionsPerformed,
};
