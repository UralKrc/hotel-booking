import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Property, PropertyState } from "../types";
import {
  editPropertyResponse,
  fetchPropertyByIdResponse,
  getPropertiesResponse,
  removePropertyResponse,
} from "./actions";
import { savePropertiesToLocalStorage } from "./service";

const initState: PropertyState = {
  properties: [],
  property: null,
  loading: false,
  addPropertyStatus: null,
};

const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(
      getPropertiesResponse,
      (state, action: PayloadAction<Property[]>) => {
        state.properties = action.payload;
      }
    )
    .addCase(
      fetchPropertyByIdResponse,
      (state, action: PayloadAction<Property | null>) => {
        state.property = action.payload;
      }
    )
    .addCase(removePropertyResponse, (state, action: PayloadAction<string>) => {
      state.properties = state.properties.filter(
        (property: Property) => property.id !== action.payload
      );
      savePropertiesToLocalStorage(state.properties);
    })
    .addCase(editPropertyResponse, (state, action: PayloadAction<Property>) => {
      const index = state.properties.findIndex(
        (property) => property.id === action.payload.id
      );
      if (index !== -1) {
        state.properties[index] = action.payload;
      } else {
        state.properties.push(action.payload);
      }
      // Update the currently viewed property if it matches the edited property
      if (state.property && state.property.id === action.payload.id) {
        state.property = action.payload;
      }
      savePropertiesToLocalStorage(state.properties);
    });
});

export default reducer;
