import { configureStore } from "@reduxjs/toolkit";
import { autoLoginReducer } from "./features/autoLogin";
const store = configureStore({
  reducer: { autoLogin: autoLoginReducer },
});

export { store };
