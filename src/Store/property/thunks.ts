import { createAsyncThunk } from "@reduxjs/toolkit";
import { Property } from "../../Types/types";
import {
  editProperty,
  fetchPropertyById,
  getProperties,
  removeProperty,
} from "./service";

const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
};

export const fetchProperties = createAsyncThunk<
  Property[],
  void,
  { rejectValue: string }
>("property/fetchProperties", async (_, { rejectWithValue }) => {
  try {
    const properties = await getProperties();
    return properties;
  } catch (error) {
    const message = handleError(error);

    return rejectWithValue(message);
  }
});

export const fetchPropertyByIdThunk = createAsyncThunk<
  Property | null,
  string,
  { rejectValue: string }
>("property/fetchPropertyById", async (id, { rejectWithValue }) => {
  try {
    const property = await fetchPropertyById(id);
    if (!property) {
      return rejectWithValue("Property not found");
    }
    return property;
  } catch (error) {
    const message = handleError(error);
    return rejectWithValue(message);
  }
});

export const removePropertyThunk = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("property/removeProperty", async (id, { rejectWithValue }) => {
  try {
    await removeProperty(id);
    return id;
  } catch (error) {
    const message = handleError(error);
    return rejectWithValue(message);
  }
});

export const editPropertyThunk = createAsyncThunk<
  Property,
  Property,
  { rejectValue: string }
>("property/editProperty", async (property, { rejectWithValue }) => {
  try {
    const updatedProperty = await editProperty(property);

    return updatedProperty;
  } catch (error) {
    const message = handleError(error);

    return rejectWithValue(message);
  }
});
