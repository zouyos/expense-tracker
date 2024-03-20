import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { loggerMiddleWare } from "./middlewares/logger-middleware";

const persistConfig = {
  key: "root",
  verison: 1,
  storage,
  // mettre ici les slices qui ne doivent pas être persistées
  blacklist: [""],
};

const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      // si on veut un custom middleware
    }).prepend(loggerMiddleWare.middleware),
});

const persitstor = persistStore(store);

export { store, persitstor };
