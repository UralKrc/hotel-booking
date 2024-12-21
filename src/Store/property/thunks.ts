import { createAsyncThunk } from "@reduxjs/toolkit";
import { Property } from "../../Types/types";
import {
  editProperty,
  fetchPropertyById,
  getProperties,
  removeProperty,
} from "./service";

export const fetchProperties = createAsyncThunk<
  Property[],
  void,
  { rejectValue: string }
>("property/fetchProperties", async (_, { rejectWithValue }) => {
  try {
    const properties = await getProperties();
    return properties;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An error occurred");
  }
});

export const fetchPropertyByIdThunk = createAsyncThunk<
  Property | null,
  string,
  { rejectValue: string }
>("property/fetchPropertyById", async (id, { rejectWithValue }) => {
  try {
    const property = await fetchPropertyById(id);
    return property;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An error occurred");
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An error occurred");
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An error occurred");
  }
});
