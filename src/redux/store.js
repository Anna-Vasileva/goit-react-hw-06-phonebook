// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactReducer from "./contactReducer";

// const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  //   middleware,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
