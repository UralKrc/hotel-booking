import { createAction } from "@reduxjs/toolkit";

export const getProperties = createAction(`[PROPERTIES] GET_PROPERTIES`);
export const getPropertiesResponse = createAction(
  `[PROPERTIES] GET_PROPERTIES_RESPONSE`
);

export const fetchPropertyById = createAction(
  `[PROPERTY] FETCH_PROPERTY_BY_ID`
);
export const fetchPropertyByIdResponse = createAction(
  `[PROPERTY] FETCH_PROPERTY_BY_ID_RESPONSE`
);
