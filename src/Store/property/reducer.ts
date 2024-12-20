import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Property, PropertyState } from "../types";
import {
  editPropertyFailure,
  editPropertyRequest,
  editPropertyResponse,
  fetchPropertyByIdFailure,
  fetchPropertyByIdRequest,
  fetchPropertyByIdResponse,
  getPropertiesFailure,
  getPropertiesRequest,
  getPropertiesResponse,
  removePropertyFailure,
  removePropertyRequest,
  removePropertyResponse,
} from "./actions";
import { savePropertiesToLocalStorage } from "./service";

const initialState: PropertyState = {
  properties: [],
  property: null,
  loading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPropertiesRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      getPropertiesResponse,
      (state, action: PayloadAction<Property[]>) => {
        state.properties = action.payload;
        state.loading = false;
      }
    )
    .addCase(getPropertiesFailure, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(fetchPropertyByIdRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      fetchPropertyByIdResponse,
      (state, action: PayloadAction<Property | null>) => {
        state.property = action.payload;
        state.loading = false;
      }
    )
    .addCase(
      fetchPropertyByIdFailure,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      }
    )
    .addCase(removePropertyRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(removePropertyResponse, (state, action: PayloadAction<string>) => {
      state.properties = state.properties.filter(
        (property: Property) => property.id !== action.payload
      );
      state.loading = false;
      savePropertiesToLocalStorage(state.properties);
    })
    .addCase(removePropertyFailure, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(editPropertyRequest, (state) => {
      state.loading = true;
      state.error = null;
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
      state.loading = false;
      savePropertiesToLocalStorage(state.properties);
    })
    .addCase(editPropertyFailure, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default reducer;
