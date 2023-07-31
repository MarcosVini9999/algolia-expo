import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./features/ratingSlicer";

const store = configureStore({
  reducer: {
    rateNewspaper: ratingReducer,
  },
});

export default store;
