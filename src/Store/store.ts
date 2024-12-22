import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./property/slice";

const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
