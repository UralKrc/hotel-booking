import { createAction } from "@reduxjs/toolkit";
import { Property } from "../types";

export const getPropertiesRequest = createAction("GET_PROPERTIES_REQUEST");
export const getPropertiesResponse = createAction<Property[]>(
  "GET_PROPERTIES_RESPONSE"
);
export const getPropertiesFailure = createAction<string>(
  "GET_PROPERTIES_FAILURE"
);

export const fetchPropertyByIdRequest = createAction<{ id: string }>(
  "FETCH_PROPERTY_BY_ID_REQUEST"
);
export const fetchPropertyByIdResponse = createAction<Property | null>(
  "FETCH_PROPERTY_BY_ID_RESPONSE"
);
export const fetchPropertyByIdFailure = createAction<string>(
  "FETCH_PROPERTY_BY_ID_FAILURE"
);

export const removePropertyRequest = createAction<string>(
  "REMOVE_PROPERTY_REQUEST"
);
export const removePropertyResponse = createAction<string>(
  "REMOVE_PROPERTY_RESPONSE"
);
export const removePropertyFailure = createAction<string>(
  "REMOVE_PROPERTY_FAILURE"
);

export const editPropertyRequest = createAction<Property>(
  "EDIT_PROPERTY_REQUEST"
);
export const editPropertyResponse = createAction<Property>(
  "EDIT_PROPERTY_RESPONSE"
);
export const editPropertyFailure = createAction<string>(
  "EDIT_PROPERTY_FAILURE"
);
