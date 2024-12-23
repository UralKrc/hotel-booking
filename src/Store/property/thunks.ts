import { createAsyncThunk } from "@reduxjs/toolkit";
import { Policy, Property } from "../../Types/types";
import {
  editPoliciesService,
  editPolicyService,
  fetchPropertyById,
  getProperties,
  loadInitialData,
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

export const editPoliciesThunk = createAsyncThunk(
  "property/editPolicies",
  async ({ id, policies }: { id: string; policies: Policy[] }) => {
    return await editPoliciesService(id, policies);
  }
);

export const editPolicyThunk = createAsyncThunk(
  "property/editPolicy",
  async (policy: Policy) => {
    return await editPolicyService(policy);
  }
);

export const initializeDataThunk = createAsyncThunk(
  "property/initializeData",
  async (_, { rejectWithValue }) => {
    try {
      const initialData = loadInitialData();
      return initialData;
    } catch (error) {
      return rejectWithValue("Failed to initialize data");
    }
  }
);
