import { createAction } from "@reduxjs/toolkit";
import { Property } from "../types";

export const getProperties = createAction("[PROPERTIES] GET_PROPERTIES");
export const getPropertiesResponse = createAction<Property[]>(
  "[PROPERTIES] GET_PROPERTIES_RESPONSE"
);
export const fetchPropertyById = createAction<string>(
  "[PROPERTY] FETCH_PROPERTY_BY_ID"
);
export const fetchPropertyByIdResponse = createAction<Property | null>(
  "[PROPERTY] FETCH_PROPERTY_BY_ID_RESPONSE"
);
export const removeProperty = createAction<string>(
  "[PROPERTY] REMOVE_PROPERTY"
);
export const removePropertyResponse = createAction<string>(
  "[PROPERTY] REMOVE_PROPERTY_RESPONSE"
);
export const editProperty = createAction<Property>("[PROPERTY] EDIT_PROPERTY");
export const editPropertyResponse = createAction<Property>(
  "[PROPERTY] EDIT_PROPERTY_RESPONSE"
);
