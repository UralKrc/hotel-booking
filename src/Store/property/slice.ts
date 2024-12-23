import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Policy,
  Property,
  PropertyDetails,
  PropertyState,
} from "../../Types/types";
import {
  editPolicyThunk,
  fetchProperties,
  fetchPropertyByIdThunk,
  initializeDataThunk,
} from "./thunks";

const initialState: PropertyState = {
  properties: [],
  loading: false,
  error: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperties(state, action: PayloadAction<Property[]>) {
      state.properties = action.payload;
    },
    addProperty(state, action: PayloadAction<Property>) {
      state.properties.push(action.payload);
    },
    updatePolicy(state, action: PayloadAction<Policy>) {
      state.properties.forEach((property) => {
        const policyIndex = property.policies.findIndex(
          (p) => p.id === action.payload.id
        );
        if (policyIndex !== -1) {
          property.policies[policyIndex] = action.payload;
        }
      });
    },
  },
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
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch properties.";
      })
      .addCase(fetchPropertyByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPropertyByIdThunk.fulfilled,
        (state, action: PayloadAction<Property | null>) => {
          if (action.payload) {
            const index = state.properties.findIndex(
              (p) => p.property.id === action.payload?.property.id
            );
            if (index !== -1) {
              state.properties[index] = action.payload;
            } else {
              state.properties.push(action.payload);
            }
          }
          state.loading = false;
        }
      )
      .addCase(fetchPropertyByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch the property.";
      })
      .addCase(editPolicyThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        editPolicyThunk.fulfilled,
        (state, action: PayloadAction<Policy>) => {
          state.properties.forEach((property) => {
            const policyIndex = property.policies.findIndex(
              (p) => p.id === action.payload.id
            );
            if (policyIndex !== -1) {
              property.policies[policyIndex] = action.payload;
            }
          });
          state.loading = false;
        }
      )
      .addCase(editPolicyThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Failed to edit policy.";
      })
      .addCase(initializeDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        initializeDataThunk.fulfilled,
        (
          state,
          action: PayloadAction<
            { property: PropertyDetails; policies: Policy[] }[]
          >
        ) => {
          state.loading = false;
          state.properties = action.payload;
        }
      )
      .addCase(initializeDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setProperties, addProperty, updatePolicy } =
  propertySlice.actions;
export default propertySlice.reducer;
