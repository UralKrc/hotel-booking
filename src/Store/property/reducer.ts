import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { savePropertiesToLocalStorage } from "./service";
import {
  editPropertyThunk,
  fetchProperties,
  fetchPropertyByIdThunk,
  removePropertyThunk,
} from "./thunks";
import { Property, PropertyState } from "../../Types/types";

const initialState: PropertyState = {
  properties: [],
  property: null,
  loading: false,
  error: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProperties.fulfilled,
        (state, action: PayloadAction<Property[]>) => {
          state.properties = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        fetchProperties.rejected,
        (state, action: PayloadAction<unknown>) => {
          const error = action.payload as SerializedError;
          state.loading = false;
          state.error = error.message || "An error occurred";
        }
      )
      .addCase(fetchPropertyByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPropertyByIdThunk.fulfilled,
        (state, action: PayloadAction<Property | null>) => {
          state.property = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        fetchPropertyByIdThunk.rejected,
        (state, action: PayloadAction<unknown>) => {
          const error = action.payload as SerializedError;
          state.loading = false;
          state.error = error.message || "An error occurred";
        }
      )
      .addCase(removePropertyThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removePropertyThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.properties = state.properties.filter(
            (property: Property) => property.id !== action.payload
          );
          state.loading = false;
          savePropertiesToLocalStorage(state.properties);
        }
      )
      .addCase(
        removePropertyThunk.rejected,
        (state, action: PayloadAction<unknown>) => {
          const error = action.payload as SerializedError;
          state.loading = false;
          state.error = error.message || "An error occurred";
        }
      )
      .addCase(editPropertyThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        editPropertyThunk.fulfilled,
        (state, action: PayloadAction<Property>) => {
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
        }
      )
      .addCase(
        editPropertyThunk.rejected,
        (state, action: PayloadAction<unknown>) => {
          const error = action.payload as SerializedError;
          state.loading = false;
          state.error = error.message || "An error occurred";
        }
      );
  },
});

export default propertySlice.reducer;
