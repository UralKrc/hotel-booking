import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../Types/types";

const getPropertyState = (state: RootState) => state.property;

export const getPropertiesSelector = createSelector(
  [getPropertyState],
  (propertyState) => propertyState.properties
);

export const getPropertyByIdSelector = createSelector(
  [getPropertyState],
  (propertyState) => propertyState.property
);

export const getPropertyLoadingSelector = createSelector(
  [getPropertyState],
  (propertyState) => propertyState.loading
);

export const getPropertyErrorSelector = createSelector(
  [getPropertyState],
  (propertyState) => propertyState.error
);
