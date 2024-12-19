import { createReducer } from "@reduxjs/toolkit";
import { fetchPropertyByIdResponse, getPropertiesResponse } from "./actions";

const initState = {
  properties: [],
  property: null,
  loading: false,
};

const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(getPropertiesResponse, (state, action) => {
      state.properties = action.payload;
    })
    .addCase(fetchPropertyByIdResponse, (state, action) => {
      state.property = action.payload;
    });
});

export default reducer;
