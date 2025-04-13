import { configureStore } from "@reduxjs/toolkit";
import markReducer from "./Markslice/Markslice"; // import the reducer (default export)

const store = configureStore({
  reducer: {
    marks: markReducer, // `marks` is the slice name/key in the global state
  },
});

export default store;
