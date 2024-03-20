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
  },
});

const { addExpense, setIncome, incrementCountActionsPerformed } =
  expenseSlice.actions;

export { addExpense, setIncome, incrementCountActionsPerformed };
