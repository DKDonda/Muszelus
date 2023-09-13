import { configureStore } from "@reduxjs/toolkit";
import navlinkReducer from "./navlink";

const store = configureStore({
  reducer: {
     navlink: navlinkReducer
  },
});

export default store;
