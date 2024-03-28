import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addExpense,
  deleteAll,
  incrementCountActionsPerformed,
  setExpenseList,
  setIncome,
} from "store/expense/expense-slice";
export const loggerMiddleWare = createListenerMiddleware();

loggerMiddleWare.startListening({
  // predicate: (action) => {
  //   // on est en écoute sur toutes les actions
  //   // return true;
  //   return (
  //     action.type === "expenseSlice/addExpense" ||
  //     action.type === "expenseSlice/setIncome"
  //   );
  // },
  matcher: isAnyOf(addExpense, setIncome, setExpenseList, deleteAll),
  effect: async (action, listenerAPI) => {
    console.log(action);
    // listenerAPI nous donne accès à dispatch
    listenerAPI.dispatch(incrementCountActionsPerformed());
    // affiche le nouvel état de tous le store
    console.log(listenerAPI.getState());
  },
});
