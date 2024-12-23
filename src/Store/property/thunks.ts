import { createAsyncThunk } from "@reduxjs/toolkit";
import { Policy, Property } from "../../Types/types";
import {
  editPolicyService,
  fetchPropertyById,
  getProperties,
  loadInitialData,
  loadPropertiesFromSessionStorage,
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

export const editPolicyThunk = createAsyncThunk<
  Policy,
  Policy,
  { rejectValue: string }
>("property/editPolicy", async (policy, { rejectWithValue }) => {
  try {
    return await editPolicyService(policy);
  } catch (error) {
    const message = handleError(error);
    return rejectWithValue(message);
  }
});

export const initializeDataThunk = createAsyncThunk(
  "property/initializeData",
  async (_, { rejectWithValue }) => {
    try {
      const sessionData = loadPropertiesFromSessionStorage();
      if (sessionData) {
        return sessionData;
      }
      const initialData = loadInitialData();
      return initialData;
    } catch (error) {
      return rejectWithValue("Failed to initialize data");
    }
  }
);
