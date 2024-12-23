import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Selector to get the entire property state
const getPropertyState = (state: RootState) => state.property;

// Selector to get all properties
export const getPropertiesSelector = (state: RootState) =>
  state.property.properties;

// Selector to get a property by its ID
export const getPropertyByIdSelector = (id: string) =>
  createSelector([getPropertiesSelector], (properties) =>
    properties.find((property) => property.property.id === id)
  );

// Selector to get the loading state
export const getPropertyLoadingSelector = createSelector(
  [getPropertyState],
  (propertyState) => propertyState.loading
);

// Selector to get the error state
export const getPropertyErrorSelector = createSelector(
  [getPropertyState],
  (propertyState) => propertyState.error
);

export const getPoliciesByPropertyIdSelector =
  (propertyId: string) => (state: RootState) => {
    const property = state.property.properties.find(
      (p) => p.property.id === propertyId
    );

    return property ? property.policies : [];
  };
