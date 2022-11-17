import { configureStore } from "@reduxjs/toolkit";
import { burguerReducer } from "../reducers/burguerReducer";

const reducer = {
  burguerReducer: burguerReducer,
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
});

export default store;
