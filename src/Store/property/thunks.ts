import { createAsyncThunk } from "@reduxjs/toolkit";
import { Property } from "../types";
import {
  editProperty,
  fetchPropertyById,
  getProperties,
  removeProperty,
} from "./service";

export const fetchProperties = createAsyncThunk<Property[]>(
  "property/fetchProperties",
  async (_, { rejectWithValue }) => {
    try {
      const properties = await getProperties();
      return properties;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An error occurred");
    }
  }
);

export const fetchPropertyByIdThunk = createAsyncThunk<Property | null, string>(
  "property/fetchPropertyById",
  async (id, { rejectWithValue }) => {
    try {
      const property = await fetchPropertyById(id);
      return property;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An error occurred");
    }
  }
);

export const removePropertyThunk = createAsyncThunk<string, string>(
  "property/removeProperty",
  async (id, { rejectWithValue }) => {
    try {
      await removeProperty(id);
      return id;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An error occurred");
    }
  }
);

export const editPropertyThunk = createAsyncThunk<Property, Property>(
  "property/editProperty",
  async (property, { rejectWithValue }) => {
    try {
      const updatedProperty = await editProperty(property);
      return updatedProperty;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An error occurred");
    }
  }
);
