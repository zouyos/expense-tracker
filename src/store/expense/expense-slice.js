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
      });
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    incrementCountActionsPerformed: (currentSlice) => {
      currentSlice.countActionsPerformed++;
    },
    setExpenseList: (currentSlice, action) => {
      currentSlice.expenseList = action.payload;
    },
    deleteAll: (currentSlice) => {
      currentSlice.expenseList = [];
    },
  },
});

const {
  addExpense,
  setIncome,
  setExpenseList,
  deleteAll,
  incrementCountActionsPerformed,
} = expenseSlice.actions;

export {
  addExpense,
  setIncome,
  setExpenseList,
  deleteAll,
  incrementCountActionsPerformed,
};
